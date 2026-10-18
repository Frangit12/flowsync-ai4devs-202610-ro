import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { FormAlert } from '@/components/FormAlert'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ApiError, getProfile } from '@/lib/api'
import type { User } from '@/lib/api'
import { useAuth } from '@/lib/auth'

export function ProfilePage() {
  const { token, logout, clearSession } = useAuth()
  const navigate = useNavigate()
  const [user, setUser] = useState<User | null>(null)
  const [error, setError] = useState<string>()

  useEffect(() => {
    if (!token) return
    let active = true

    getProfile(token).then(
      (profile) => active && setUser(profile),
      (err) => {
        if (!active) return
        // Revoked or expired token: back to login.
        if (err instanceof ApiError && err.status === 401) clearSession()
        else setError('No se pudo cargar tu perfil. Inténtalo de nuevo más tarde.')
      },
    )

    return () => {
      active = false
    }
  }, [token, clearSession])

  async function handleLogout() {
    await logout()
    navigate('/login', { replace: true })
  }

  return (
    <main className="flex min-h-svh items-center justify-center bg-muted/40 px-4 py-10">
      <Card className="w-full max-w-sm">
        <CardHeader className="flex flex-row items-center gap-4">
          <div
            aria-hidden
            className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-semibold text-primary-foreground"
          >
            {user?.initials ?? '…'}
          </div>
          <div className="grid gap-1">
            <CardTitle className="text-xl">{user ? (user.fullName ?? 'Tu perfil') : 'Cargando…'}</CardTitle>
            <CardDescription>{user?.email}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="grid gap-4">
          <FormAlert message={error} />
          {user && (
            <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm">
              <dt className="text-muted-foreground">Email</dt>
              <dd className="break-all">{user.email}</dd>
              <dt className="text-muted-foreground">Miembro desde</dt>
              <dd>{new Date(user.createdAt).toLocaleDateString('es-ES', { dateStyle: 'long' })}</dd>
            </dl>
          )}
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full" onClick={handleLogout}>
            Cerrar sesión
          </Button>
        </CardFooter>
      </Card>
    </main>
  )
}
