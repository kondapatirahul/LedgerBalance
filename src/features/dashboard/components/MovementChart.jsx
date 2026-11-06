import Card from '../../../shared/components/Card.jsx'
import { movementByMonth } from '../data/dashboardData.js'

export default function MovementChart() {
  const maxValue = Math.max(...movementByMonth.flatMap((item) => [item.incoming, item.outgoing]))

  return (
    <Card title="Money movement" description="Illustrative monthly activity · values are not connected to a live ledger">
      <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
        <span className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-sm bg-emerald-400" />Money in</span>
        <span className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-sm bg-sky-400" />Money out</span>
      </div>
      <div className="mt-6 grid grid-cols-6 items-end gap-3" role="img" aria-label="Illustrative monthly money in and money out bar chart">
        {movementByMonth.map((item) => (
          <div key={item.month} className="flex min-w-0 flex-col items-center gap-2">
            <div className="flex h-36 w-full items-end justify-center gap-1 rounded-lg bg-slate-950/60 px-1 pt-2">
              <div title={`Money in: ${item.incoming}`} className="w-2/5 rounded-t-md bg-emerald-400" style={{ height: `${(item.incoming / maxValue) * 100}%` }} />
              <div title={`Money out: ${item.outgoing}`} className="w-2/5 rounded-t-md bg-sky-400" style={{ height: `${(item.outgoing / maxValue) * 100}%` }} />
            </div>
            <span className="text-xs text-slate-500">{item.month}</span>
          </div>
        ))}
      </div>
    </Card>
  )
}
