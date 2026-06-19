import { FiCode, FiLayers, FiMonitor, FiTarget } from 'react-icons/fi'
import { SHELL } from '../styles'

const proofItems = [
  { icon: FiLayers, title: 'Clean design', detail: 'Built to communicate clearly' },
  { icon: FiMonitor, title: 'Responsive by default', detail: 'Made for every screen' },
  { icon: FiCode, title: 'Full-stack delivery', detail: 'Interface through deployment' },
  { icon: FiTarget, title: 'Business goals first', detail: 'Decisions with a purpose' },
]

export default function ProofBar() {
  return (
    <section className="relative border-b border-line bg-paper-bright text-ink" aria-label="Working principles">
      <div className={`${SHELL} grid grid-cols-1 pl-5 sm:grid-cols-2 sm:pl-6 lg:min-h-[6.875rem] lg:grid-cols-4 lg:pl-8`}>
        {proofItems.map((item) => {
          const ProofIcon = item.icon
          return (
            <div className="flex min-h-21 items-center gap-3.5 border-x border-b border-line px-4 py-3.5 sm:border-l-0 sm:px-6 lg:min-h-0 lg:border-b-0 lg:first:border-l" key={item.title}>
              <ProofIcon className="size-6 shrink-0 stroke-[1.5]" aria-hidden="true" />
              <div>
                <strong className="block text-sm font-extrabold">{item.title}</strong>
                <span className="mt-1 block text-xs leading-snug text-muted">{item.detail}</span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
