import { useMemo, useState } from 'react'
import { ArrowDownLeft, ArrowLeftRight, ArrowUpRight, FileSearch } from 'lucide-react'
import Card from '../../../shared/components/Card.jsx'
import Badge from '../../../shared/components/Badge.jsx'
import { formatMoney } from '../../../shared/utils/formatMoney.js'
import { recentActivity } from '../data/dashboardData.js'
import ActivityFilters from './ActivityFilters.jsx'

const icons = {
  Deposit: ArrowDownLeft,
  Withdrawal: ArrowUpRight,
  Transfer: ArrowLeftRight,
}

const statusTone = {
  Demo: 'neutral',
  'Sample pending': 'warning',
  'Sample declined': 'danger',
}

export default function RecentActivity() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')
  const [direction, setDirection] = useState('all')
  const [status, setStatus] = useState('all')

  const hasFilters = Boolean(search || category !== 'all' || direction !== 'all' || status !== 'all')

  const filteredActivity = useMemo(() => {
    const query = search.trim().toLowerCase()

    return recentActivity.filter((item) => {
      const matchesSearch = !query || [item.title, item.reference, item.account, item.category]
        .some((value) => value.toLowerCase().includes(query))
      const matchesCategory = category === 'all' || item.category === category
      const matchesDirection = direction === 'all' || item.direction === direction
      const matchesStatus = status === 'all' || item.status === status

      return matchesSearch && matchesCategory && matchesDirection && matchesStatus
    })
  }, [search, category, direction, status])

  function clearFilters() {
    setSearch('')
    setCategory('all')
    setDirection('all')
    setStatus('all')
  }

  return (
    <Card
      title="Recent activity"
      description="Search and filter illustrative transaction rows"
      action={<Badge tone="warning">Demo records</Badge>}
      contentClassName="space-y-4"
    >
      <ActivityFilters
        search={search}
        onSearchChange={setSearch}
        category={category}
        onCategoryChange={setCategory}
        direction={direction}
        onDirectionChange={setDirection}
        status={status}
        onStatusChange={setStatus}
        onClear={clearFilters}
        hasFilters={hasFilters}
      />

      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500" aria-live="polite">
        <span>Showing {filteredActivity.length} of {recentActivity.length} sample records</span>
        <span>These rows are not ledger postings</span>
      </div>

      {filteredActivity.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="pb-3 font-medium">Activity</th>
                <th className="pb-3 font-medium">Reference</th>
                <th className="pb-3 font-medium">Date</th>
                <th className="pb-3 text-right font-medium">Amount</th>
                <th className="pb-3 text-right font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {filteredActivity.map((item) => {
                const Icon = icons[item.category] ?? ArrowLeftRight
                return (
                  <tr key={item.id} className="transition hover:bg-slate-800/30">
                    <td className="py-3 pr-3">
                      <div className="flex items-center gap-3">
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-slate-800 text-slate-300"><Icon size={16} /></span>
                        <span>
                          <span className="block font-medium text-slate-200">{item.title}</span>
                          <span className="text-xs text-slate-500">{item.category} · {item.account}</span>
                        </span>
                      </div>
                    </td>
                    <td className="py-3 font-mono text-xs text-slate-500">{item.reference}</td>
                    <td className="py-3 text-slate-400">{item.date}</td>
                    <td className={`py-3 text-right font-medium tabular-nums ${item.direction === 'in' ? 'text-emerald-300' : 'text-slate-200'}`}>
                      {item.direction === 'in' ? '+' : '−'}{formatMoney(item.amount)}
                    </td>
                    <td className="py-3 text-right"><Badge tone={statusTone[item.status] ?? 'neutral'}>{item.status}</Badge></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-700 px-5 py-10 text-center">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-slate-800 text-slate-400"><FileSearch size={20} /></span>
          <h3 className="mt-3 font-medium text-slate-200">No matching activity</h3>
          <p className="mt-1 max-w-sm text-sm text-slate-500">Try another search term or clear the filters to see all sample records.</p>
          <button type="button" onClick={clearFilters} className="mt-4 text-sm font-semibold text-emerald-300 hover:text-emerald-200">Clear filters</button>
        </div>
      )}
    </Card>
  )
}
