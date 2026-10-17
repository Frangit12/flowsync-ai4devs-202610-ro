const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3333/api/v1'

/**
 * Shape of the user returned by the backend's UserTransformer.
 */
export type User = {
  id: number
  fullName: string | null
  email: string
  createdAt: string
  updatedAt: string | null
  initials: string
}

export type AuthResponse = {
  user: User
  token: string
}

export type SignupInput = {
  fullName: string | null
  email: string
  password: string
  passwordConfirmation: string
}

export type LoginInput = {
  email: string
  password: string
}

export type ApiErrorItem = {
  message: string
  rule?: string
  field?: string
}

/**
 * Error thrown for any non-2xx response. `errors` mirrors the backend's
 * `{ errors: [...] }` body (422 validation, 400 invalid credentials, 401).
 */
export class ApiError extends Error {
  status: number
  errors: ApiErrorItem[]

  constructor(status: number, errors: ApiErrorItem[]) {
    super(errors[0]?.message ?? `Request failed with status ${status}`)
    this.name = 'ApiError'
    this.status = status
    this.errors = errors
  }
}

type RequestOptions = {
  method?: 'GET' | 'POST'
  body?: unknown
  token?: string | null
}

async function request<T>(path: string, { method = 'GET', body, token }: RequestOptions = {}) {
  const headers: Record<string, string> = { Accept: 'application/json' }
  if (body !== undefined) headers['Content-Type'] = 'application/json'
  if (token) headers.Authorization = `Bearer ${token}`

  const response = await fetch(`${API_URL}${path}`, {
    method,
    headers,
    body: body === undefined ? undefined : JSON.stringify(body),
  })

  const json = await response.json().catch(() => null)

  if (!response.ok) {
    throw new ApiError(response.status, Array.isArray(json?.errors) ? json.errors : [])
  }

  return (json?.data ?? json) as T
}

export function signup(input: SignupInput) {
  return request<AuthResponse>('/auth/signup', { method: 'POST', body: input })
}

export function login(input: LoginInput) {
  return request<AuthResponse>('/auth/login', { method: 'POST', body: input })
}

export function getProfile(token: string) {
  return request<User>('/account/profile', { token })
}

export function logout(token: string) {
  return request<{ message: string }>('/account/logout', { method: 'POST', token })
}
