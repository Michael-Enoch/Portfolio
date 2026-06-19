import { FiArrowUp, FiGithub } from 'react-icons/fi'
import { SHELL } from '../styles'

export default function Footer() {
  return (
    <footer className="border-t border-paper/20 bg-ink text-paper">
      <div className={`${SHELL} grid grid-cols-1 gap-9 pb-10 pt-12 sm:pb-12 sm:pt-16 lg:grid-cols-[1.25fr_1fr_.75fr] lg:gap-12`}>
        <div>
          <a className="inline-flex items-baseline text-[1.35rem] font-black tracking-[-0.07em] sm:text-2xl" href="#home" aria-label="Back to home">
            ME<span className="text-brand">.</span>
          </a>
          <p className="mt-4 max-w-xs text-xs leading-relaxed text-paper/60">Clean, modern digital experiences built with business goals in mind.</p>
        </div>
        <nav className="grid grid-cols-2 content-start gap-x-8 gap-y-3.5 text-xs font-bold" aria-label="Footer navigation">
          <a className="transition hover:text-citron" href="#work">Work</a>
          <a className="transition hover:text-citron" href="#services">Services</a>
          <a className="transition hover:text-citron" href="#about">About</a>
          <a className="transition hover:text-citron" href="#process">Process</a>
          <a className="transition hover:text-citron" href="#contact">Contact</a>
        </nav>
        <div className="flex items-start justify-between gap-6 lg:justify-end">
          <a className="inline-flex items-center gap-2 text-xs font-bold transition hover:text-citron" href="https://github.com/Michael-Enoch" target="_blank" rel="noreferrer">
            <FiGithub aria-hidden="true" /> GitHub
          </a>
          <a className="grid size-11 place-items-center border border-paper/20 transition hover:border-citron hover:text-citron" href="#home" aria-label="Back to top">
            <FiArrowUp aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className={`${SHELL} flex flex-col items-start justify-between gap-1.5 border-t border-paper/20 py-5 text-[0.68rem] text-paper/45 sm:flex-row`}>
        <span>© {new Date().getFullYear()} Michael Enoch.</span>
        <span>Designed and built with care.</span>
      </div>
    </footer>
  )
}
