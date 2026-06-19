import { motion } from 'framer-motion'
import { FiCode, FiGlobe, FiGrid, FiRefreshCw, FiShoppingCart, FiTarget } from 'react-icons/fi'
import { services } from '../data/portfolioData'
import { SHELL } from '../styles'
import SectionIntro, { SectionRail } from './SectionIntro'

const icons = {
  globe: FiGlobe,
  refresh: FiRefreshCw,
  cart: FiShoppingCart,
  target: FiTarget,
  app: FiGrid,
  code: FiCode,
}

const AnimatedArticle = motion.article

export default function Services() {
  return (
    <section className="relative border-b border-line bg-paper-bright py-20 text-ink sm:py-24 lg:py-28" id="services">
      <SectionRail />
      <div className={`${SHELL} grid grid-cols-1 gap-10 lg:grid-cols-[minmax(16.25rem,.8fr)_minmax(0,2.2fr)] lg:gap-14 xl:gap-16`}>
        <SectionIntro
          number="02"
          title="What I can build for you"
          description="End-to-end digital solutions shaped around your audience, offer, and growth goals."
        />
        <div className="ml-5 grid grid-cols-1 border-l border-t border-line sm:ml-8 sm:grid-cols-2 lg:ml-0 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon]
            return (
              <AnimatedArticle
                className="grid min-h-0 grid-cols-[2.125rem_1fr] gap-4 border-b border-r border-line px-5 py-6 transition-colors hover:bg-white/45 sm:min-h-[10rem] sm:px-6"
                key={service.title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <Icon className="size-7 stroke-[1.5]" aria-hidden="true" />
                <div>
                  <h3 className="mt-0.5 text-sm font-extrabold tracking-tight">{service.title}</h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-muted">{service.description}</p>
                </div>
              </AnimatedArticle>
            )
          })}
        </div>
      </div>
    </section>
  )
}
