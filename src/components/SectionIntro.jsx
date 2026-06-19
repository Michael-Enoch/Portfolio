import { motion } from 'framer-motion'

const AnimatedSpan = motion.span

export function SectionRail({ dark = false, markerClassName = 'top-20 sm:top-24 lg:top-28' }) {
  return (
    <div
      className="pointer-events-none absolute inset-y-0 left-4 z-[2] w-[0.0625rem] bg-brand sm:left-6 min-[90rem]:left-[calc((100vw-85rem)/2)]"
      aria-hidden="true"
    >
      <AnimatedSpan
        className={`absolute -left-[0.3125rem] size-[0.6875rem] ${markerClassName} ${dark ? 'bg-citron' : 'bg-brand'}`}
        animate={{ scale: [1, 1.25, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}

export default function SectionIntro({ number, title, description, inverse = false, className = '' }) {
  return (
    <header className={`max-w-[23.125rem] pl-5 sm:pl-8 ${className}`}>
      {number ? <span className="mb-3.5 block text-xs font-extrabold text-brand" aria-hidden="true">{number}</span> : null}
      <h2 className={`m-0 text-[clamp(2.35rem,5.5vw,3.6rem)] font-black leading-none tracking-[-0.065em] lg:text-[clamp(2.5rem,3.1vw,3.6rem)] ${inverse ? 'text-paper' : 'text-ink'}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 max-w-[21.25rem] text-[0.95rem] leading-relaxed ${inverse ? 'text-paper/65' : 'text-muted'}`}>
          {description}
        </p>
      ) : null}
    </header>
  )
}
