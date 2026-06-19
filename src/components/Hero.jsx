import { motion } from 'framer-motion'
import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi'
import portrait from '../assets/optimized/michael-enoch.jpg'
import { DARK_OUTLINE_BUTTON, PRIMARY_BUTTON, SHELL } from '../styles'
import { SectionRail } from './SectionIntro'

const AnimatedDiv = motion.div

export default function Hero() {
  return (
    <section className="relative w-full bg-ink text-paper" id="home">
      <SectionRail markerClassName="top-24" />
      <div className={`${SHELL} grid min-h-svh min-w-0 grid-cols-1 items-center gap-10 pb-16 pt-24 md:gap-14 md:pb-20 md:pt-28 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,.85fr)] lg:gap-16 xl:gap-24`}>
        <AnimatedDiv
          className="relative order-1 flex w-full min-w-0 justify-center self-center px-5 sm:px-8 lg:order-2 lg:px-0"
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            className="aspect-square w-3/4 max-w-sm rounded-[40%] border-8 border-paper/10 object-cover object-center shadow-2xl sm:w-3/5 sm:max-w-md lg:w-full lg:max-w-lg"
            src={portrait}
            alt="Michael Enoch, full-stack developer"
            fetchPriority="high"
          />
        </AnimatedDiv>

        <AnimatedDiv
          className="relative z-[3] order-2 w-full min-w-0 pl-5 sm:pl-8 lg:order-1"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="m-0 max-w-3xl break-words text-balance text-[clamp(2.34rem,10.3vw,2.8rem)] font-black leading-[1.01] tracking-[-0.072em] md:text-[clamp(2.9rem,7vw,4.2rem)] lg:text-[clamp(2.9rem,4.8vw,3.9rem)] xl:text-[clamp(3.2rem,4vw,4.4rem)]">
            I build modern websites that make businesses look credible—and convert.
          </h1>
          <p className="mt-5 max-w-2xl break-words text-base leading-relaxed text-paper/70 sm:mt-7 sm:text-lg lg:text-xl">
            Full-stack developer turning ideas into fast, polished digital experiences—from landing pages to production-ready web apps.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <a className={`${PRIMARY_BUTTON} w-full sm:w-auto`} href="#work">
              View my work <FiArrowDownRight aria-hidden="true" />
            </a>
            <a className={`${DARK_OUTLINE_BUTTON} w-full sm:w-auto`} href="#contact">
              Start a project <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <div className="mt-8 flex flex-col items-start gap-2 text-xs font-bold uppercase tracking-wider text-paper/60 sm:mt-12 sm:flex-row sm:flex-wrap sm:gap-4">
            <span>Michael Enoch</span>
            <span className="sm:border-l sm:border-paper/20 sm:pl-4">Full Stack Developer</span>
          </div>
        </AnimatedDiv>
      </div>
    </section>
  )
}
