import { Navigate, Outlet } from 'react-router'
import { useAuth } from '@/lib/auth'

/** Only reachable with a session; otherwise sends the user to /login. */
export function RequireAuth() {
  const { token } = useAuth()
  return token ? <Outlet /> : <Navigate to="/login" replace />
}

/** Login/signup screens: a logged-in user goes straight to the profile. */
export function RequireGuest() {
  const { token } = useAuth()
  return token ? <Navigate to="/profile" replace /> : <Outlet />
}
