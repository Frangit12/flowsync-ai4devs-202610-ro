import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link, useNavigate } from 'react-router'
import { AuthLayout } from '@/components/AuthLayout'
import { FormAlert } from '@/components/FormAlert'
import { FormField } from '@/components/FormField'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/lib/auth'
import { toFormErrors } from '@/lib/errors'
import type { FormErrors } from '@/lib/errors'

export function LoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [errors, setErrors] = useState<FormErrors>({ fields: {} })
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)

    setSubmitting(true)
    setErrors({ fields: {} })
    try {
      await login({
        email: String(form.get('email')).trim(),
        password: String(form.get('password')),
      })
      navigate('/profile', { replace: true })
    } catch (error) {
      setErrors(toFormErrors(error))
      setSubmitting(false)
    }
  }

  return (
    <AuthLayout
      title="Inicia sesión"
      description="Accede a tu cuenta de FlowSync"
      footer={
        <p>
          ¿No tienes cuenta?{' '}
          <Link to="/signup" className="font-medium text-foreground underline underline-offset-4">
            Regístrate
          </Link>
        </p>
      }
    >
      <form onSubmit={handleSubmit} className="grid gap-4" noValidate>
        <FormAlert message={errors.form} />
        <FormField
          id="email"
          label="Email"
          type="email"
          autoComplete="email"
          required
          error={errors.fields.email}
        />
        <FormField
          id="password"
          label="Contraseña"
          type="password"
          autoComplete="current-password"
          required
          error={errors.fields.password}
        />
        <Button type="submit" disabled={submitting}>
          {submitting ? 'Entrando…' : 'Entrar'}
        </Button>
      </form>
    </AuthLayout>
  )
}
