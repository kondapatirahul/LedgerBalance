import { passwordRules } from '../validation/passwordRules.js'

export function validateRegistrationInput({ fullName, email, password, confirmPassword, acceptedTerms }) {
  const errors = {}
  const name = String(fullName ?? '').trim()
  const normalizedEmail = String(email ?? '').trim()
  const currentPassword = String(password ?? '')
  const confirmation = String(confirmPassword ?? '')

  if (!name) errors.fullName = 'Enter your full name.'
  else if (name.length < 2) errors.fullName = 'Name must contain at least 2 characters.'

  if (!normalizedEmail) errors.email = 'Enter your email address.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) errors.email = 'Enter a valid email address.'

  const failedRules = passwordRules.filter((rule) => !rule.test(currentPassword))
  if (failedRules.length) errors.password = 'Meet all password requirements.'

  if (!confirmation) errors.confirmPassword = 'Confirm your password.'
  else if (confirmation !== currentPassword) errors.confirmPassword = 'Passwords do not match.'

  if (!acceptedTerms) errors.acceptedTerms = 'Accept the terms to continue.'

  return errors
}
