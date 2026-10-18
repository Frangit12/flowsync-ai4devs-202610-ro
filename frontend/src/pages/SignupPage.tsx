import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link, useNavigate } from 'react-router'
import { AuthLayout } from '@/components/AuthLayout'
import { FormAlert } from '@/components/FormAlert'
import { FormField } from '@/components/FormField'
import { Button } from '@/components/ui/button'
import type { SignupInput } from '@/lib/api'
import { useAuth } from '@/lib/auth'
import { toFormErrors } from '@/lib/errors'
import type { FormErrors } from '@/lib/errors'

/**
 * Mirrors backend/app/validators/user.ts so obvious mistakes are caught
 * before the request; the backend stays the source of truth (e.g. unique email).
 */
function validate(input: SignupInput) {
  const fields: Record<string, string> = {}

  if (!input.email) fields.email = 'El email es obligatorio'
  else if (!/^\S+@\S+\.\S+$/.test(input.email)) fields.email = 'Introduce un email válido'

  if (input.password.length < 8) fields.password = 'La contraseña debe tener al menos 8 caracteres'
  else if (input.password.length > 32) fields.password = 'La contraseña no puede superar los 32 caracteres'

  if (input.passwordConfirmation !== input.password) {
    fields.passwordConfirmation = 'Las contraseñas no coinciden'
  }

  return fields
}

export function SignupPage() {
  const { signup } = useAuth()
  const navigate = useNavigate()
  const [errors, setErrors] = useState<FormErrors>({ fields: {} })
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const input: SignupInput = {
      fullName: String(form.get('fullName')).trim() || null,
      email: String(form.get('email')).trim(),
      password: String(form.get('password')),
      passwordConfirmation: String(form.get('passwordConfirmation')),
    }

    const fields = validate(input)
    if (Object.keys(fields).length > 0) {
      setErrors({ fields })
      return
    }

    setSubmitting(true)
    setErrors({ fields: {} })
    try {
      await signup(input)
      navigate('/profile', { replace: true })
    } catch (error) {
      setErrors(toFormErrors(error))
      setSubmitting(false)
    }
  }

  return (
    <AuthLayout
      title="Crea tu cuenta"
      description="Regístrate en FlowSync con tu email"
      footer={
        <p>
          ¿Ya tienes cuenta?{' '}
          <Link to="/login" className="font-medium text-foreground underline underline-offset-4">
            Inicia sesión
          </Link>
        </p>
      }
    >
      <form onSubmit={handleSubmit} className="grid gap-4" noValidate>
        <FormAlert message={errors.form} />
        <FormField
          id="fullName"
          label="Nombre (opcional)"
          autoComplete="name"
          error={errors.fields.fullName}
        />
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
          autoComplete="new-password"
          required
          minLength={8}
          maxLength={32}
          error={errors.fields.password}
        />
        <FormField
          id="passwordConfirmation"
          label="Confirmar contraseña"
          type="password"
          autoComplete="new-password"
          required
          error={errors.fields.passwordConfirmation}
        />
        <Button type="submit" disabled={submitting}>
          {submitting ? 'Creando cuenta…' : 'Crear cuenta'}
        </Button>
      </form>
    </AuthLayout>
  )
}
