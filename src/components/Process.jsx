import { motion } from 'framer-motion'
import { processSteps } from '../data/portfolioData'
import { SHELL } from '../styles'
import SectionIntro, { SectionRail } from './SectionIntro'

const AnimatedListItem = motion.li

export default function Process() {
  return (
    <section className="relative border-b border-paper/20 bg-ink py-20 text-paper sm:py-24 lg:py-32" id="process">
      <SectionRail dark />
      <div className={`${SHELL} grid grid-cols-1 gap-12 lg:grid-cols-[minmax(17.5rem,.8fr)_minmax(0,2.2fr)] lg:gap-14 xl:gap-16`}>
        <SectionIntro number="05" title="A clear process, from idea to launch" inverse />
        <ol className="m-0 grid list-none grid-cols-1 gap-7 pl-5 sm:grid-cols-2 sm:gap-9 sm:pl-8 lg:pl-0 xl:grid-cols-5 xl:gap-5">
          {processSteps.map((step, index) => (
            <AnimatedListItem key={step.title} whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
              <div className="flex items-center gap-2.5">
                <span className="grid size-8 shrink-0 place-items-center border border-brand text-xs font-extrabold text-white">{index + 1}</span>
                <i className="h-[0.0625rem] w-full max-w-24 bg-paper/35 xl:max-w-none" aria-hidden="true" />
              </div>
              <h3 className="mt-3.5 text-sm font-extrabold xl:mt-5">{step.title}</h3>
              <p className="mt-2.5 text-xs leading-relaxed text-paper/60">{step.description}</p>
            </AnimatedListItem>
          ))}
        </ol>
      </div>
    </section>
  )
}
