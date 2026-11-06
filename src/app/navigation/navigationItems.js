import { Activity, ArrowLeftRight, ClipboardList, LayoutDashboard, Wallet } from 'lucide-react'

export const navigationItems = [
  { label: 'Overview', to: '/', icon: LayoutDashboard, description: 'Workspace overview', end: true },
  { label: 'Accounts', to: '/accounts', icon: Wallet, description: 'Account management' },
  { label: 'Transactions', to: '/transactions', icon: ArrowLeftRight, description: 'Money movement' },
  { label: 'Statements', to: '/statements', icon: ClipboardList, description: 'Account statements' },
  { label: 'Audit activity', to: '/audit', icon: Activity, description: 'Read-only activity history' },
]

export function getNavigationItem(pathname) {
  return navigationItems.find((item) => item.end ? pathname === item.to : pathname === item.to || pathname.startsWith(`${item.to}/`))
}
