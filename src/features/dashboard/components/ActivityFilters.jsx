import { Search, X } from 'lucide-react'

const fieldClass = 'h-10 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 text-sm text-slate-200 outline-none transition placeholder:text-slate-500 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/10'

export default function ActivityFilters({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  direction,
  onDirectionChange,
  status,
  onStatusChange,
  onClear,
  hasFilters,
}) {
  return (
    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-[minmax(220px,1.5fr)_repeat(3,minmax(130px,1fr))_auto]">
      <label className="relative block">
        <span className="sr-only">Search activity</span>
        <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
        <input
          className={`${fieldClass} pl-9`}
          type="search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search name or reference"
        />
      </label>

      <label>
        <span className="sr-only">Filter by category</span>
        <select className={fieldClass} value={category} onChange={(event) => onCategoryChange(event.target.value)}>
          <option value="all">All categories</option>
          <option value="Deposit">Deposits</option>
          <option value="Withdrawal">Withdrawals</option>
          <option value="Transfer">Transfers</option>
        </select>
      </label>

      <label>
        <span className="sr-only">Filter by money direction</span>
        <select className={fieldClass} value={direction} onChange={(event) => onDirectionChange(event.target.value)}>
          <option value="all">All movement</option>
          <option value="in">Money in</option>
          <option value="out">Money out</option>
        </select>
      </label>

      <label>
        <span className="sr-only">Filter by sample status</span>
        <select className={fieldClass} value={status} onChange={(event) => onStatusChange(event.target.value)}>
          <option value="all">All sample statuses</option>
          <option value="Demo">Demo</option>
          <option value="Sample pending">Sample pending</option>
          <option value="Sample declined">Sample declined</option>
        </select>
      </label>

      <button
        type="button"
        onClick={onClear}
        disabled={!hasFilters}
        className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-slate-700 px-3 text-sm font-medium text-slate-300 transition hover:border-slate-500 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <X size={15} /> Clear
      </button>
    </div>
  )
}
