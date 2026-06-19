import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi'
import { SHELL } from '../styles'

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

const AnimatedDiv = motion.div

const navLinkClass = 'relative py-3 text-xs font-bold tracking-wide after:absolute after:inset-x-0 after:bottom-1.5 after:h-px after:origin-right after:scale-x-0 after:bg-brand after:transition-transform hover:after:origin-left hover:after:scale-x-100'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.25 })

  useEffect(() => {
    if (!isOpen) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-[100] border-b border-paper/10 bg-ink/90 text-paper backdrop-blur-xl">
      <nav className={`${SHELL} relative flex min-h-17 items-center justify-between sm:min-h-19`} aria-label="Primary navigation">
        <a className="inline-flex items-baseline text-[1.35rem] font-black tracking-[-0.07em] sm:text-2xl" href="#home" aria-label="Michael Enoch, home">
          ME<span className="text-brand">.</span>
        </a>

        <div className="hidden items-center gap-6 lg:flex lg:gap-10 xl:gap-12">
          {navItems.map((item) => (
            <a className={navLinkClass} key={item.href} href={item.href}>{item.label}</a>
          ))}
        </div>

        <a className="hidden min-h-11 items-center gap-3 bg-brand px-5 text-xs font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-brand-dark lg:inline-flex" href="#contact">
          Let&apos;s talk <FiArrowUpRight aria-hidden="true" />
        </a>

        <button
          className="flex size-11 items-center justify-center border border-paper/45 bg-transparent text-paper lg:hidden"
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <FiX className="size-5" aria-hidden="true" /> : <FiMenu className="size-5" aria-hidden="true" />}
        </button>

        <AnimatePresence>
          {isOpen ? (
            <AnimatedDiv
              id="mobile-navigation"
              className="fixed inset-x-0 top-17 flex flex-col border-b border-paper/20 bg-ink px-4 pb-6 pt-3 sm:top-19 sm:px-6 lg:hidden"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              {navItems.map((item) => (
                <a
                  className="flex min-h-13 items-center justify-between border-b border-paper/20 text-base font-bold"
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label} <FiArrowUpRight aria-hidden="true" />
                </a>
              ))}
            </AnimatedDiv>
          ) : null}
        </AnimatePresence>
      </nav>
      <AnimatedDiv className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-brand" style={{ scaleX: progress }} aria-hidden="true" />
    </header>
  )
}
