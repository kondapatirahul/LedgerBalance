import { chartRanges, chartSeries } from '../data/chartConfig.js'

export default function ChartControls({ range, onRangeChange, visibleSeries, onSeriesChange }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap items-center gap-2" aria-label="Chart series visibility">
        {Object.entries(chartSeries).map(([key, series]) => {
          const active = visibleSeries[key]
          return (
            <button
              key={key}
              type="button"
              aria-pressed={active}
              onClick={() => onSeriesChange(key)}
              className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 ${active ? 'border-slate-700 bg-slate-800 text-slate-200' : 'border-slate-800 bg-slate-950/40 text-slate-500'}`}
            >
              <span className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: series.color, opacity: active ? 1 : 0.35 }} />
              {series.label}
            </button>
          )
        })}
      </div>

      <label className="flex items-center gap-2 text-xs text-slate-400">
        <span>Period</span>
        <select
          value={range}
          onChange={(event) => onRangeChange(event.target.value)}
          className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-200 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
        >
          {chartRanges.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
    </div>
  )
}
