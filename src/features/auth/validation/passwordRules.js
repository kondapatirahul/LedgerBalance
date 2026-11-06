export const passwordRules = [
  { id: 'length', label: 'At least 8 characters', test: (value) => value.length >= 8 },
  { id: 'uppercase', label: 'One uppercase letter', test: (value) => /[A-Z]/.test(value) },
  { id: 'lowercase', label: 'One lowercase letter', test: (value) => /[a-z]/.test(value) },
  { id: 'number', label: 'One number', test: (value) => /\d/.test(value) },
]
