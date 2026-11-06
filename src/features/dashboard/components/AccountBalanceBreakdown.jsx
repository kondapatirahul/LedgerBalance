import Card from '../../../shared/components/Card.jsx'
import { formatMoney } from '../../../shared/utils/formatMoney.js'
import { accountBalanceBreakdown } from '../data/summaryData.js'

export default function AccountBalanceBreakdown() {
  return (
    <Card title="Balance by account" description="Illustrative allocation across demo accounts">
      <div className="space-y-5">
        {accountBalanceBreakdown.map((account) => (
          <div key={account.id}>
            <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
              <div className="min-w-0">
                <p className="font-medium text-slate-200">{account.name}</p>
                <p className="mt-0.5 text-xs text-slate-500">{account.reference}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold tabular-nums text-white">{formatMoney(account.balance)}</p>
                <p className="text-xs text-slate-500">{account.share}% of sample balance</p>
              </div>
            </div>
            <div
              className="h-2 overflow-hidden rounded-full bg-slate-800"
              role="progressbar"
              aria-label={`${account.name} share of sample balance`}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={account.share}
            >
              <div className={`h-full rounded-full ${account.tone}`} style={{ width: `${account.share}%` }} />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-5 border-t border-slate-800 pt-4 text-xs leading-5 text-slate-500">
        Demo account names, masked references and balances are fictional sample data.
      </p>
    </Card>
  )
}
