// Sample-only figures for the dashboard UI. Replace with authorized server data
// when the accounts and ledger modules are implemented.
export const summaryPeriods = {
  month: {
    label: 'This month',
    metrics: [
      { label: 'Total balance', value: 248650.75, change: '+4.8%', detail: 'Sample workspace balance', tone: 'emerald' },
      { label: 'Money in', value: 68400, change: '+2.1%', detail: 'Sample monthly inflows', tone: 'sky' },
      { label: 'Money out', value: 32750, change: '-1.3%', detail: 'Sample monthly outflows', tone: 'violet' },
    ],
  },
  quarter: {
    label: 'This quarter',
    metrics: [
      { label: 'Total balance', value: 248650.75, change: '+6.2%', detail: 'Sample workspace balance', tone: 'emerald' },
      { label: 'Money in', value: 192300, change: '+8.4%', detail: 'Sample quarterly inflows', tone: 'sky' },
      { label: 'Money out', value: 108950, change: '+3.6%', detail: 'Sample quarterly outflows', tone: 'violet' },
    ],
  },
  year: {
    label: 'This year',
    metrics: [
      { label: 'Total balance', value: 248650.75, change: '+11.7%', detail: 'Sample workspace balance', tone: 'emerald' },
      { label: 'Money in', value: 684500, change: '+12.9%', detail: 'Sample yearly inflows', tone: 'sky' },
      { label: 'Money out', value: 435850, change: '+7.2%', detail: 'Sample yearly outflows', tone: 'violet' },
    ],
  },
}

export const accountBalanceBreakdown = [
  { id: 'demo-account-01', name: 'Operating account', reference: '•••• 2048', balance: 148650.75, share: 59.8, tone: 'bg-emerald-400' },
  { id: 'demo-account-02', name: 'Reserve account', reference: '•••• 7312', balance: 75000, share: 30.2, tone: 'bg-sky-400' },
  { id: 'demo-account-03', name: 'Expenses account', reference: '•••• 9156', balance: 25000, share: 10, tone: 'bg-violet-400' },
]
