import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar.jsx'
import Topbar from './Topbar.jsx'

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 lg:flex">
      <Sidebar />
      <div className="min-w-0 flex-1">
        <Topbar />
        <main id="main-content" tabIndex="-1" className="mx-auto w-full max-w-7xl p-4 focus:outline-none sm:p-6 lg:p-8">
          <Outlet />
        </main>
        <footer className="border-t border-slate-900 px-4 py-4 text-center text-[11px] text-slate-600 sm:px-6 lg:px-8">
          LedgerBalance · Development preview · Financial actions are not enabled
        </footer>
      </div>
    </div>
  )
}
