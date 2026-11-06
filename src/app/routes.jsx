import AppLayout from './layout/AppLayout.jsx'
import HomePage from '../features/home/HomePage.jsx'
import PlaceholderPage from '../features/placeholder/PlaceholderPage.jsx'
import LoginPage from '../features/auth/LoginPage.jsx'
import NotFoundPage from '../features/home/NotFoundPage.jsx'

export const appRoutes = [
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <PlaceholderPage title="Create an account" description="Registration will be added in the next authentication delivery." /> },
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/accounts', element: <PlaceholderPage title="Accounts" description="Account management will be added in a later delivery." /> },
      { path: '/transactions', element: <PlaceholderPage title="Transactions" description="Deposits, withdrawals and transfers will be added in a later delivery." /> },
      { path: '/statements', element: <PlaceholderPage title="Statements" description="Account statements and running balances will be added in a later delivery." /> },
      { path: '/audit', element: <PlaceholderPage title="Audit activity" description="Read-only audit views will be added in a later delivery." /> },
    ],
  },
  { path: '*', element: <NotFoundPage /> },
]
