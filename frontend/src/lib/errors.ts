import { ApiError } from '@/lib/api'

export type FormErrors = {
  form?: string
  fields: Record<string, string>
}

const FIELD_MESSAGES: Record<string, string> = {
  'email.database.unique': 'Este email ya está registrado',
  'email.email': 'Introduce un email válido',
  'email.required': 'El email es obligatorio',
  'password.required': 'La contraseña es obligatoria',
  'password.minLength': 'La contraseña debe tener al menos 8 caracteres',
  'password.maxLength': 'La contraseña no puede superar los 32 caracteres',
  'passwordConfirmation.sameAs': 'Las contraseñas no coinciden',
  'passwordConfirmation.required': 'Confirma la contraseña',
}

/**
 * Turns any thrown error into messages the user can read: field errors for
 * 422 validation responses and a single form-level message otherwise.
 */
export function toFormErrors(error: unknown): FormErrors {
  if (!(error instanceof ApiError)) {
    return { form: 'No se pudo conectar con el servidor. Inténtalo de nuevo.', fields: {} }
  }

  if (error.status === 422) {
    const fields: Record<string, string> = {}
    for (const item of error.errors) {
      if (!item.field || fields[item.field]) continue
      fields[item.field] = FIELD_MESSAGES[`${item.field}.${item.rule}`] ?? item.message
    }
    return { fields }
  }

  if (error.status === 400 || error.status === 401) {
    return { form: 'Email o contraseña incorrectos', fields: {} }
  }

  return { form: 'Ha ocurrido un error inesperado. Inténtalo de nuevo.', fields: {} }
}
