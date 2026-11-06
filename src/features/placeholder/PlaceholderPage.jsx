import { Construction } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Badge from '../../shared/components/Badge.jsx'
import Button from '../../shared/components/Button.jsx'
import Card from '../../shared/components/Card.jsx'
import PageHeader from '../../shared/components/PageHeader.jsx'

export default function PlaceholderPage({ title, description }) {
  const navigate = useNavigate()

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <PageHeader eyebrow="Workspace module" title={title} description={description} />
      <Card>
        <div className="grid h-12 w-12 place-items-center rounded-xl bg-slate-800 text-emerald-300"><Construction size={22} /></div>
        <div className="mt-5"><Badge tone="warning">Module planned</Badge></div>
        <p className="mt-4 leading-7 text-slate-400">This route is a navigation placeholder. No financial data or actions are available here yet.</p>
        <div className="mt-7">
          <Button variant="secondary" onClick={() => navigate('/')}>Back to overview</Button>
        </div>
      </Card>
    </div>
  )
}
