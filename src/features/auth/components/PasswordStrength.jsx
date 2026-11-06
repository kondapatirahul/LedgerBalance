import { passwordRules } from '../validation/passwordRules.js'

export default function PasswordStrength({ password }) {
  const passed = passwordRules.filter((rule) => rule.test(password)).length
  const labels = ['Not set', 'Weak', 'Fair', 'Good', 'Strong']
  const tone = passed <= 1 ? 'bg-rose-400' : passed === 2 ? 'bg-amber-400' : passed === 3 ? 'bg-sky-400' : 'bg-emerald-400'

  return (
    <div className="mt-3">
      <div className="mb-2 flex items-center justify-between text-xs">
        <span className="text-slate-500">Password strength</span>
        <span className="font-medium text-slate-300">{password ? labels[passed] : labels[0]}</span>
      </div>
      <div className="grid grid-cols-4 gap-1.5" aria-label={`Password strength: ${labels[passed]}`}>
        {passwordRules.map((rule, index) => (
          <span key={rule.id} className={`h-1.5 rounded-full ${index < passed ? tone : 'bg-slate-700'}`} />
        ))}
      </div>
      <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1.5">
        {passwordRules.map((rule) => {
          const complete = rule.test(password)
          return (
            <li key={rule.id} className={`text-[11px] ${complete ? 'text-emerald-300' : 'text-slate-500'}`}>
              <span aria-hidden="true">{complete ? '✓' : '○'}</span> {rule.label}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
