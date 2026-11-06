import { ArrowDownRight, ArrowUpRight, Wallet } from 'lucide-react'
import Card from '../../../shared/components/Card.jsx'
import Badge from '../../../shared/components/Badge.jsx'
import { formatMoney } from '../../../shared/utils/formatMoney.js'

const tones = {
  emerald: 'bg-emerald-400/10 text-emerald-300',
  sky: 'bg-sky-400/10 text-sky-300',
  violet: 'bg-violet-400/10 text-violet-300',
}

export default function MetricCard({ metric }) {
  const isPositive = metric.change.startsWith('+')
  const TrendIcon = isPositive ? ArrowUpRight : ArrowDownRight

  return (
    <Card className="h-full" contentClassName="p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm text-slate-400">{metric.label}</p>
          <p className="mt-3 text-2xl font-bold tracking-tight text-white">{formatMoney(metric.value)}</p>
        </div>
        <div className={`grid h-10 w-10 place-items-center rounded-xl ${tones[metric.tone] ?? tones.emerald}`}>
          <Wallet size={19} aria-hidden="true" />
        </div>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <Badge tone={isPositive ? 'success' : 'warning'}>
          <span className="inline-flex items-center gap-1"><TrendIcon size={12} />{metric.change}</span>
        </Badge>
        <span className="text-xs text-slate-500">{metric.detail}</span>
      </div>
    </Card>
  )
}
