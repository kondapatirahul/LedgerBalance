import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'
import { getNavigationItem } from '../../app/navigation/navigationItems.js'

export default function Breadcrumbs() {
  const { pathname } = useLocation()
  const current = getNavigationItem(pathname)
  const label = current?.label ?? 'Page not found'

  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500">
      <Link to="/" className="inline-flex items-center gap-1.5 rounded hover:text-emerald-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400">
        <Home size={13} aria-hidden="true" />
        <span>Home</span>
      </Link>
      {pathname !== '/' && (
        <>
          <ChevronRight size={13} aria-hidden="true" />
          <span aria-current="page" className="font-medium text-slate-300">{label}</span>
        </>
      )}
    </nav>
  )
}
