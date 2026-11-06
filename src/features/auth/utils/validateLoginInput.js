export function validateLoginInput({ email, password }) {
  const errors = {}

  const normalizedEmail = String(email ?? '').trim()
  const normalizedPassword = String(password ?? '')

  if (!normalizedEmail) {
    errors.email = 'Enter your email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
    errors.email = 'Enter a valid email address.'
  }

  if (!normalizedPassword) {
    errors.password = 'Enter your password.'
  } else if (normalizedPassword.length < 8) {
    errors.password = 'Password must contain at least 8 characters.'
  }

  return errors
}
