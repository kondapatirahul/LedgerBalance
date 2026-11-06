export const dashboardMetrics = [
  {
    label: 'Total balance',
    value: 248650.75,
    change: '+4.8%',
    detail: 'Illustrative demo value',
    tone: 'emerald',
  },
  {
    label: 'Money in',
    value: 68400,
    change: '+2.1%',
    detail: 'Illustrative demo value',
    tone: 'sky',
  },
  {
    label: 'Money out',
    value: 32750,
    change: '-1.3%',
    detail: 'Illustrative demo value',
    tone: 'violet',
  },
]

export const movementByMonth = [
  { month: 'Jun', incoming: 38, outgoing: 22 },
  { month: 'Jul', incoming: 48, outgoing: 31 },
  { month: 'Aug', incoming: 42, outgoing: 27 },
  { month: 'Sep', incoming: 61, outgoing: 36 },
  { month: 'Oct', incoming: 53, outgoing: 29 },
  { month: 'Nov', incoming: 72, outgoing: 34 },
]

// Fictional rows for interface development. These are not ledger postings.
export const recentActivity = [
  { id: 'demo-001', reference: 'LB-DEMO-001', title: 'Client payment', account: 'Operating account', category: 'Deposit', date: '06 Nov 2026', amount: 18500, direction: 'in', status: 'Demo' },
  { id: 'demo-002', reference: 'LB-DEMO-002', title: 'Office supplies', account: 'Business account', category: 'Withdrawal', date: '05 Nov 2026', amount: 4250, direction: 'out', status: 'Demo' },
  { id: 'demo-003', reference: 'LB-DEMO-003', title: 'Operations reserve', account: 'Operating account', category: 'Transfer', date: '04 Nov 2026', amount: 12000, direction: 'out', status: 'Demo' },
  { id: 'demo-004', reference: 'LB-DEMO-004', title: 'Service invoice', account: 'Savings account', category: 'Deposit', date: '03 Nov 2026', amount: 9200, direction: 'in', status: 'Demo' },
  { id: 'demo-005', reference: 'LB-DEMO-005', title: 'Travel reimbursement', account: 'Business account', category: 'Withdrawal', date: '02 Nov 2026', amount: 6800, direction: 'out', status: 'Sample pending' },
  { id: 'demo-006', reference: 'LB-DEMO-006', title: 'Reserve allocation', account: 'Operating account', category: 'Transfer', date: '01 Nov 2026', amount: 15000, direction: 'in', status: 'Demo' },
  { id: 'demo-007', reference: 'LB-DEMO-007', title: 'Consulting payment', account: 'Savings account', category: 'Deposit', date: '30 Oct 2026', amount: 24500, direction: 'in', status: 'Demo' },
  { id: 'demo-008', reference: 'LB-DEMO-008', title: 'Utility bill', account: 'Business account', category: 'Withdrawal', date: '29 Oct 2026', amount: 3150, direction: 'out', status: 'Sample declined' },
  { id: 'demo-009', reference: 'LB-DEMO-009', title: 'Project funds', account: 'Operating account', category: 'Transfer', date: '28 Oct 2026', amount: 7800, direction: 'out', status: 'Demo' },
  { id: 'demo-010', reference: 'LB-DEMO-010', title: 'Customer settlement', account: 'Operating account', category: 'Deposit', date: '27 Oct 2026', amount: 13200, direction: 'in', status: 'Demo' },
]
