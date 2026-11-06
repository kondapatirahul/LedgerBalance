import { Info, ShieldAlert } from 'lucide-react'
import Card from '../../../shared/components/Card.jsx'
import Badge from '../../../shared/components/Badge.jsx'

const dataFacts = [
  'Dashboard balances and activity are fictional sample data.',
  'No live account, authentication, or ledger service is connected yet.',
  'Dashboard controls do not authorize or execute money movement.',
]

export default function DashboardDataNotice() {
  return (
    <Card
      title="Data and integrity notice"
      description="Read this before interpreting the dashboard figures"
      action={<Badge tone="warning">Demo environment</Badge>}
    >
      <div className="flex items-start gap-3 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4">
        <ShieldAlert className="mt-0.5 shrink-0 text-amber-300" size={19} aria-hidden="true" />
        <div>
          <p className="font-medium text-slate-200">No real money is being moved</p>
          <p className="mt-1 text-sm leading-6 text-slate-400">
            This dashboard is a frontend demonstration. Its figures must not be treated as
            account balances, transaction confirmations, or evidence of ledger integrity.
          </p>
        </div>
      </div>

      <ul className="mt-4 space-y-3">
        {dataFacts.map((fact) => (
          <li key={fact} className="flex items-start gap-2 text-sm leading-6 text-slate-400">
            <Info size={15} className="mt-1 shrink-0 text-slate-500" aria-hidden="true" />
            <span>{fact}</span>
          </li>
        ))}
      </ul>
    </Card>
  )
}
