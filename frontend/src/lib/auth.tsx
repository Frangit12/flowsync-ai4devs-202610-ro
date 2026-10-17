import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import * as api from '@/lib/api'
import type { LoginInput, SignupInput } from '@/lib/api'

const TOKEN_KEY = 'flowsync.token'

type AuthContextValue = {
  token: string | null
  login: (input: LoginInput) => Promise<void>
  signup: (input: SignupInput) => Promise<void>
  logout: () => Promise<void>
  /** Drops the session locally, e.g. when the backend answers 401. */
  clearSession: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

function readToken() {
  try {
    return localStorage.getItem(TOKEN_KEY)
  } catch {
    return null
  }
}

function writeToken(token: string | null) {
  try {
    if (token) localStorage.setItem(TOKEN_KEY, token)
    else localStorage.removeItem(TOKEN_KEY)
  } catch {
    // Storage unavailable (private mode): the session lasts until reload.
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(readToken)

  const saveToken = useCallback((next: string | null) => {
    writeToken(next)
    setToken(next)
  }, [])

  const value = useMemo<AuthContextValue>(
    () => ({
      token,
      login: async (input) => saveToken((await api.login(input)).token),
      signup: async (input) => saveToken((await api.signup(input)).token),
      logout: async () => {
        if (token) await api.logout(token).catch(() => undefined)
        saveToken(null)
      },
      clearSession: () => saveToken(null),
    }),
    [token, saveToken],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// oxlint-disable-next-line react/only-export-components
export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used inside <AuthProvider>')
  return context
}
