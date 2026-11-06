import { Construction } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PlaceholderPage({ title, description }) {
  return (
    <section className="mx-auto max-w-3xl rounded-2xl border border-slate-800 bg-slate-900/60 p-8 sm:p-10">
      <div className="grid h-12 w-12 place-items-center rounded-xl bg-slate-800 text-emerald-300"><Construction size={22} /></div>
      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">Module planned</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight">{title}</h1>
      <p className="mt-3 leading-7 text-slate-400">{description}</p>
      <p className="mt-6 text-sm text-slate-500">This route is a navigation placeholder. No financial data or actions are available here yet.</p>
      <Link to="/" className="mt-7 inline-flex rounded-lg bg-emerald-400 px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-emerald-300">Back to overview</Link>
    </section>
  )
}
