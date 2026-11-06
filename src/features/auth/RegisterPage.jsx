import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail, UserRound } from 'lucide-react'
import AuthShell from './components/AuthShell.jsx'
import PasswordStrength from './components/PasswordStrength.jsx'
import RegistrationFormField from './components/RegistrationFormField.jsx'
import TermsNotice from './components/TermsNotice.jsx'
import { validateRegistrationInput } from './utils/validateRegistrationInput.js'
import Button from '../../shared/components/Button.jsx'

const inputClass = 'min-h-12 w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-600'

export default function RegisterPage() {
  const [form, setForm] = useState({ fullName: '', email: '', password: '', confirmPassword: '' })
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [errors, setErrors] = useState({})
  const [notice, setNotice] = useState('')

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: '' }))
    setNotice('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    setNotice('')
    const nextErrors = validateRegistrationInput({ ...form, acceptedTerms })
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      setNotice('Your details pass the form checks. Account creation is not connected yet; no account was created.')
    }
  }

  return (
    <AuthShell eyebrow="CREATE YOUR PROFILE">
      <div className="mt-5 text-center">
        <h1 className="text-2xl font-bold tracking-tight text-white">Create your account</h1>
        <p className="mt-2 text-sm text-slate-400">Set up your LedgerBalance profile.</p>
      </div>

      <form className="mt-7 space-y-5" onSubmit={handleSubmit} noValidate>
        <RegistrationFormField id="register-name" label="Full name" error={errors.fullName}>
          <div className={`flex items-center gap-3 rounded-xl border bg-slate-950 px-3 focus-within:border-emerald-400 ${errors.fullName ? 'border-rose-500' : 'border-slate-700'}`}>
            <UserRound size={17} className="shrink-0 text-slate-500" />
            <input id="register-name" autoComplete="name" value={form.fullName} onChange={(event) => updateField('fullName', event.target.value)} placeholder="Your full name" className={inputClass} />
          </div>
        </RegistrationFormField>

        <RegistrationFormField id="register-email" label="Email address" error={errors.email}>
          <div className={`flex items-center gap-3 rounded-xl border bg-slate-950 px-3 focus-within:border-emerald-400 ${errors.email ? 'border-rose-500' : 'border-slate-700'}`}>
            <Mail size={17} className="shrink-0 text-slate-500" />
            <input id="register-email" type="email" autoComplete="email" value={form.email} onChange={(event) => updateField('email', event.target.value)} placeholder="you@example.com" className={inputClass} />
          </div>
        </RegistrationFormField>

        <RegistrationFormField id="register-password" label="Password" error={errors.password}>
          <div className={`flex items-center gap-3 rounded-xl border bg-slate-950 px-3 focus-within:border-emerald-400 ${errors.password ? 'border-rose-500' : 'border-slate-700'}`}>
            <LockKeyhole size={17} className="shrink-0 text-slate-500" />
            <input id="register-password" type={showPassword ? 'text' : 'password'} autoComplete="new-password" value={form.password} onChange={(event) => updateField('password', event.target.value)} placeholder="Create a strong password" className={inputClass} />
            <button type="button" onClick={() => setShowPassword((value) => !value)} aria-label={showPassword ? 'Hide password' : 'Show password'} className="rounded-lg p-1 text-slate-500 hover:text-slate-200">
              {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
            </button>
          </div>
          <PasswordStrength password={form.password} />
        </RegistrationFormField>

        <RegistrationFormField id="register-confirm" label="Confirm password" error={errors.confirmPassword}>
          <div className={`flex items-center gap-3 rounded-xl border bg-slate-950 px-3 focus-within:border-emerald-400 ${errors.confirmPassword ? 'border-rose-500' : 'border-slate-700'}`}>
            <LockKeyhole size={17} className="shrink-0 text-slate-500" />
            <input id="register-confirm" type={showConfirmation ? 'text' : 'password'} autoComplete="new-password" value={form.confirmPassword} onChange={(event) => updateField('confirmPassword', event.target.value)} placeholder="Enter password again" className={inputClass} />
            <button type="button" onClick={() => setShowConfirmation((value) => !value)} aria-label={showConfirmation ? 'Hide confirmation' : 'Show confirmation'} className="rounded-lg p-1 text-slate-500 hover:text-slate-200">
              {showConfirmation ? <EyeOff size={17} /> : <Eye size={17} />}
            </button>
          </div>
        </RegistrationFormField>

        <TermsNotice checked={acceptedTerms} onChange={(value) => { setAcceptedTerms(value); setErrors((current) => ({ ...current, acceptedTerms: '' })); setNotice('') }} error={errors.acceptedTerms} />

        <Button type="submit" className="w-full">
          Create account <ArrowRight size={16} />
        </Button>
        {notice && <p role="status" className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-3 py-3 text-xs leading-5 text-amber-200">{notice}</p>}
      </form>

      <div className="mt-7 border-t border-slate-800 pt-5 text-center text-xs text-slate-500">
        Already registered? <Link to="/login" className="font-semibold text-emerald-300 hover:text-emerald-200">Sign in</Link>
      </div>
    </AuthShell>
  )
}
