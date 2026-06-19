import { motion } from 'framer-motion'
import { FiEdit3, FiGrid, FiMessageSquare, FiMonitor, FiTarget, FiZap } from 'react-icons/fi'
import { expectations } from '../data/portfolioData'
import { SHELL } from '../styles'
import SectionIntro, { SectionRail } from './SectionIntro'

const icons = {
  pen: FiEdit3,
  devices: FiMonitor,
  bolt: FiZap,
  message: FiMessageSquare,
  target: FiTarget,
  grid: FiGrid,
}

const AnimatedArticle = motion.article

export default function Expectations() {
  return (
    <section className="relative border-b border-line bg-paper py-20 text-ink sm:py-24 lg:py-28">
      <SectionRail />
      <div className={`${SHELL} grid grid-cols-1 gap-12 lg:grid-cols-[minmax(15.625rem,.75fr)_minmax(0,2.25fr)] lg:gap-14 xl:gap-16`}>
        <SectionIntro number="06" title="What you can expect" />
        <div className="ml-5 grid grid-cols-1 border-l border-t border-line min-[25rem]:grid-cols-2 sm:ml-8 lg:ml-0 lg:grid-cols-3 xl:grid-cols-6">
          {expectations.map((item) => {
            const Icon = icons[item.icon]
            return (
              <AnimatedArticle
                className="min-w-0 border-b border-r border-line px-4 py-5 transition-colors hover:bg-white/45 sm:py-6"
                key={item.title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <Icon className="mb-5 size-7 stroke-[1.4]" aria-hidden="true" />
                <h3 className="text-xs font-extrabold leading-tight tracking-tight sm:text-[0.78rem]">{item.title}</h3>
                <p className="mt-2.5 text-[0.68rem] leading-relaxed text-muted">{item.description}</p>
              </AnimatedArticle>
            )
          })}
        </div>
      </div>
    </section>
  )
}
