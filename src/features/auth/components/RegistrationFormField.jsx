export default function RegistrationFormField({ id, label, error, children, hint }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-300">{label}</label>
      {children}
      {error ? (
        <p className="mt-2 text-xs text-rose-400" role="alert">{error}</p>
      ) : hint ? (
        <p className="mt-2 text-xs text-slate-600">{hint}</p>
      ) : null}
    </div>
  )
}
