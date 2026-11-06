import BrandMark from '../../shared/components/BrandMark.jsx'
import { appConfig } from '../../shared/constants/appConfig.js'

export default function HomePage() {
  return (
    <main className="grid min-h-screen place-items-center bg-slate-950 p-6 text-slate-100">
      <section className="w-full max-w-2xl rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl">
        <div className="mb-6 flex items-center gap-3">
          <BrandMark />
          <div>
            <p className="font-semibold tracking-tight">{appConfig.name}</p>
            <p className="text-xs text-slate-400">{appConfig.tagline}</p>
          </div>
        </div>

        <p className="mb-3 text-sm font-semibold text-emerald-400">Setup 02/25</p>
        <h1 className="text-4xl font-bold tracking-tight">Money movement you can prove.</h1>
        <p className="mt-4 leading-7 text-slate-300">
          The project now has a feature-based source structure and centralized
          application routes. The next deliveries will add the dashboard and
          its reusable interface modules.
        </p>
        <p className="mt-6 rounded-lg bg-slate-800 p-4 text-sm text-slate-300">
          No authentication or money-moving operations are enabled yet. This
          page is the local application foundation only.
        </p>
      </section>
    </main>
  )
}
