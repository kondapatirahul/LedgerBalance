export default function StatCard({ label, value, detail, icon: Icon, tone = 'emerald' }) {
  const tones = {
    emerald: 'bg-emerald-400/10 text-emerald-300',
    sky: 'bg-sky-400/10 text-sky-300',
    violet: 'bg-violet-400/10 text-violet-300',
    amber: 'bg-amber-400/10 text-amber-300',
  }
  const iconTone = tones[tone] ?? tones.emerald

  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm text-slate-500">{label}</p>
          <p className="mt-3 text-2xl font-bold tracking-tight text-slate-100">{value}</p>
        </div>
        {Icon && <div className={`grid h-10 w-10 place-items-center rounded-xl ${iconTone}`}><Icon size={19} /></div>}
      </div>
      {detail && <p className="mt-3 text-xs leading-5 text-slate-500">{detail}</p>}
    </article>
  )
}
