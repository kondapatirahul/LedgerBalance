import { ArrowDownLeft, ArrowUpRight, ArrowLeftRight } from 'lucide-react'
import Card from '../../../shared/components/Card.jsx'
import Badge from '../../../shared/components/Badge.jsx'
import { formatMoney } from '../../../shared/utils/formatMoney.js'
import { recentActivity } from '../data/dashboardData.js'

const icons = {
  Deposit: ArrowDownLeft,
  Withdrawal: ArrowUpRight,
  Transfer: ArrowLeftRight,
}

export default function RecentActivity() {
  return (
    <Card title="Recent activity" description="Sample rows for layout preview only">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead className="text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="pb-3 font-medium">Activity</th>
              <th className="pb-3 font-medium">Date</th>
              <th className="pb-3 text-right font-medium">Amount</th>
              <th className="pb-3 text-right font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {recentActivity.map((item) => {
              const Icon = icons[item.category] ?? ArrowLeftRight
              return (
                <tr key={item.id}>
                  <td className="py-3 pr-3">
                    <div className="flex items-center gap-3">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-slate-800 text-slate-300"><Icon size={16} /></span>
                      <span><span className="block font-medium text-slate-200">{item.title}</span><span className="text-xs text-slate-500">{item.category}</span></span>
                    </div>
                  </td>
                  <td className="py-3 text-slate-400">{item.date}</td>
                  <td className={`py-3 text-right font-medium tabular-nums ${item.direction === 'in' ? 'text-emerald-300' : 'text-slate-200'}`}>
                    {item.direction === 'in' ? '+' : '−'}{formatMoney(item.amount)}
                  </td>
                  <td className="py-3 text-right"><Badge tone="neutral">{item.status}</Badge></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
