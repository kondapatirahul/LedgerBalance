export default function TermsNotice({ checked, onChange, error }) {
  return (
    <div>
      <label className="flex items-start gap-3 text-xs leading-5 text-slate-400">
        <input
          type="checkbox"
          checked={checked}
          onChange={(event) => onChange(event.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-700 bg-slate-950 accent-emerald-400"
        />
        <span>I agree to the terms of service and acknowledge the privacy notice.</span>
      </label>
      {error && <p role="alert" className="mt-2 text-xs text-rose-400">{error}</p>}
    </div>
  )
}
