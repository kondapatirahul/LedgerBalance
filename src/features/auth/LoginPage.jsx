import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail } from 'lucide-react'
import AuthShell from './components/AuthShell.jsx'
import { validateLoginInput } from './utils/validateLoginInput.js'
import Button from '../../shared/components/Button.jsx'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const [notice, setNotice] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setNotice('')
    const nextErrors = validateLoginInput({ email, password })
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length === 0) {
      setNotice('Form looks valid. Sign-in is not connected yet; no account was authenticated.')
    }
  }

  return (
    <AuthShell>
      <div className="mt-5 text-center">
        <h1 className="text-2xl font-bold tracking-tight text-white">Welcome back</h1>
        <p className="mt-2 text-sm text-slate-400">Sign in to continue to your workspace.</p>
      </div>

      <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="login-email" className="mb-2 block text-sm font-medium text-slate-300">Email address</label>
          <div className={`flex items-center gap-3 rounded-xl border bg-slate-950 px-3 focus-within:border-emerald-400 ${errors.email ? 'border-rose-500' : 'border-slate-700'}`}>
            <Mail size={17} className="shrink-0 text-slate-500" />
            <input
              id="login-email"
              name="email"
              type="email"
              autoComplete="username"
              value={email}
              onChange={(event) => { setEmail(event.target.value); setErrors((current) => ({ ...current, email: '' })); setNotice('') }}
              placeholder="you@example.com"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'login-email-error' : undefined}
              className="min-h-12 w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-600"
            />
          </div>
          {errors.email && <p id="login-email-error" className="mt-2 text-xs text-rose-400">{errors.email}</p>}
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between gap-3">
            <label htmlFor="login-password" className="text-sm font-medium text-slate-300">Password</label>
            <span className="text-xs text-slate-600">Forgot password? Coming soon</span>
          </div>
          <div className={`flex items-center gap-3 rounded-xl border bg-slate-950 px-3 focus-within:border-emerald-400 ${errors.password ? 'border-rose-500' : 'border-slate-700'}`}>
            <LockKeyhole size={17} className="shrink-0 text-slate-500" />
            <input
              id="login-password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              value={password}
              onChange={(event) => { setPassword(event.target.value); setErrors((current) => ({ ...current, password: '' })); setNotice('') }}
              placeholder="Enter your password"
              aria-invalid={Boolean(errors.password)}
              aria-describedby={errors.password ? 'login-password-error' : undefined}
              className="min-h-12 w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-600"
            />
            <button type="button" onClick={() => setShowPassword((visible) => !visible)} aria-label={showPassword ? 'Hide password' : 'Show password'} className="rounded-lg p-1 text-slate-500 hover:text-slate-200">
              {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
            </button>
          </div>
          {errors.password && <p id="login-password-error" className="mt-2 text-xs text-rose-400">{errors.password}</p>}
        </div>

        <label className="flex items-center gap-2 text-xs text-slate-400">
          <input type="checkbox" className="h-4 w-4 rounded border-slate-700 bg-slate-950 accent-emerald-400" />
          Keep me signed in on this device
        </label>

        <Button type="submit" className="w-full">
          Continue <ArrowRight size={16} />
        </Button>
        {notice && <p role="status" className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-3 py-3 text-xs leading-5 text-amber-200">{notice}</p>}
      </form>

      <div className="mt-7 border-t border-slate-800 pt-5 text-center text-xs text-slate-500">
        New to LedgerBalance? <Link to="/register" className="font-semibold text-emerald-300 hover:text-emerald-200">Create an account</Link>
      </div>
      <Link to="/" className="mt-5 block text-center text-xs text-slate-600 hover:text-slate-300">Back to dashboard preview</Link>
    </AuthShell>
  )
}
