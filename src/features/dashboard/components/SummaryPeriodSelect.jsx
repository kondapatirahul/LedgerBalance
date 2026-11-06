export default function SummaryPeriodSelect({ value, onChange }) {
  return (
    <label className="flex items-center gap-3 text-sm text-slate-400">
      <span>Period</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm font-medium text-slate-200 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
        aria-label="Financial summary period"
      >
        <option value="month">This month</option>
        <option value="quarter">This quarter</option>
        <option value="year">This year</option>
      </select>
    </label>
  )
}
