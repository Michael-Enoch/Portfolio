import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import { projects } from '../data/portfolioData'
import { LIGHT_SECTION, SHELL } from '../styles'
import SectionIntro, { SectionRail } from './SectionIntro'

const categories = ['All', ...new Set(projects.map((project) => project.category))]
const featuredProjects = projects.filter((project) => project.featured)
const AnimatedDiv = motion.div
const AnimatedArticle = motion.article

const projectTitleClass = 'm-0 text-xl font-black leading-tight tracking-[-0.045em] sm:text-2xl'
const mutedCopyClass = 'text-sm leading-relaxed text-muted'

function BrowserImage({ project, eager = false }) {
  return (
    <div className="border border-ink bg-paper-bright transition duration-200 group-hover:-translate-y-1 group-hover:shadow-[0_1.125rem_2.1875rem_rgba(11,13,16,0.12)]">
      <div className="flex h-5 items-center gap-1.5 bg-ink px-2.5 sm:h-6" aria-hidden="true">
        <span className="size-1.5 rounded-full bg-coral" />
        <span className="size-1.5 rounded-full bg-[#f4c64e]" />
        <span className="size-1.5 rounded-full bg-[#65bf78]" />
      </div>
      <img
        className="aspect-video h-auto w-full object-cover"
        src={project.image}
        alt={`${project.title} website interface`}
        loading={eager ? 'eager' : 'lazy'}
      />
    </div>
  )
}

function StackList({ project }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-2 p-0" aria-label={`${project.title} technology stack`}>
      {project.stack.map((item) => (
        <li className="list-none border border-line px-2 py-1.5 text-[0.66rem] font-bold" key={item}>{item}</li>
      ))}
    </ul>
  )
}

function ProjectLinks({ project, compact = false }) {
  return (
    <div className={`flex flex-wrap items-center gap-5 ${compact ? 'mt-4' : 'mt-6'}`}>
      {project.liveUrl ? (
        <a className="inline-flex items-center gap-2 text-xs font-extrabold text-brand-dark transition hover:text-ink" href={project.liveUrl} target="_blank" rel="noreferrer">
          Live site <FiArrowUpRight aria-hidden="true" />
        </a>
      ) : (
        <span className="text-xs font-bold text-muted" aria-label="Live site link pending">Live link coming soon</span>
      )}
      {project.codeUrl ? (
        <a className="inline-flex items-center gap-2 text-xs font-extrabold text-brand-dark transition hover:text-ink" href={project.codeUrl} target="_blank" rel="noreferrer">
          <FiGithub aria-hidden="true" /> Code
        </a>
      ) : null}
    </div>
  )
}

export function FeaturedProjects() {
  const [leadProject, ...secondaryProjects] = featuredProjects

  return (
    <section className={LIGHT_SECTION} id="work">
      <SectionRail />
      <div className={SHELL}>
        <div className="mb-10 flex flex-col items-start justify-between gap-8 sm:mb-16 lg:flex-row lg:items-end">
          <SectionIntro
            number="01"
            title="Selected work"
            description="A closer look at digital products built around clear problems, useful interactions, and polished execution."
          />
          <a className="ml-5 inline-flex items-center gap-2 border-b border-current pb-1 text-xs font-extrabold text-brand-dark transition hover:text-ink sm:ml-8 lg:ml-0" href="#more-projects">
            View all projects <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-10 pl-5 sm:pl-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(18.75rem,.8fr)] lg:gap-8 xl:gap-14">
          <article className="group min-w-0">
            <BrowserImage project={leadProject} />
            <div className="grid grid-cols-[2.125rem_minmax(0,1fr)] gap-2.5 pt-7 sm:grid-cols-[3.125rem_minmax(0,1fr)] sm:gap-4">
              <span className="text-xs font-extrabold uppercase tracking-wider text-brand">01</span>
              <div>
                <p className="mb-2 text-xs font-extrabold uppercase tracking-wider text-brand">{leadProject.category}</p>
                <h3 className={projectTitleClass}>{leadProject.title}</h3>
                <p className={`mt-3 max-w-[38rem] ${mutedCopyClass}`}>{leadProject.description}</p>
                <div className="mt-6 grid grid-cols-1 gap-5 border-t border-line pt-5 sm:grid-cols-2 sm:gap-6">
                  <p className="m-0 text-xs leading-relaxed text-muted">
                    <strong className="mb-1.5 block text-[0.67rem] font-extrabold uppercase tracking-wider text-ink">The problem</strong>
                    {leadProject.problem}
                  </p>
                  <p className="m-0 text-xs leading-relaxed text-muted">
                    <strong className="mb-1.5 block text-[0.67rem] font-extrabold uppercase tracking-wider text-ink">The value</strong>
                    {leadProject.value}
                  </p>
                </div>
                <StackList project={leadProject} />
                <ProjectLinks project={leadProject} />
              </div>
            </div>
          </article>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-1">
            {secondaryProjects.map((project, index) => (
              <article className="group grid min-w-0 grid-cols-1 items-start gap-5 border-b border-line pb-9 xl:grid-cols-[minmax(0,1.2fr)_minmax(9.375rem,.8fr)]" key={project.id}>
                <BrowserImage project={project} />
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-brand">0{index + 2}</span>
                  <p className="mb-2 mt-1 text-xs font-extrabold uppercase tracking-wider text-brand">{project.category}</p>
                  <h3 className="m-0 text-xl font-black leading-tight tracking-[-0.045em]">{project.title}</h3>
                  <p className={`mt-2.5 ${mutedCopyClass}`}>{project.description}</p>
                  <ProjectLinks project={project} compact />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function ProjectExplorer() {
  const [activeCategory, setActiveCategory] = useState('All')
  const filteredProjects = useMemo(
    () => activeCategory === 'All' ? projects : projects.filter((project) => project.category === activeCategory),
    [activeCategory],
  )

  return (
    <section className={`${LIGHT_SECTION} bg-paper-bright`} id="more-projects">
      <SectionRail />
      <div className={SHELL}>
        <div className="mb-10 flex flex-col items-start justify-between gap-8 sm:mb-16 lg:flex-row lg:items-end">
          <SectionIntro
            number="04"
            title="More projects"
            description="Explore the rest of the work by project type. All project content is managed from one data file."
          />
          <div className="flex flex-wrap justify-start gap-2 pl-5 sm:pl-8 lg:justify-end lg:pl-0" role="group" aria-label="Filter projects by category">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                aria-pressed={activeCategory === category}
                className={`min-h-10 border px-3 text-[0.7rem] font-bold transition ${activeCategory === category ? 'border-brand bg-brand text-white' : 'border-line bg-transparent text-ink hover:border-brand hover:bg-brand hover:text-white'}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <AnimatedDiv className="grid grid-cols-1 gap-7 pl-5 sm:grid-cols-2 sm:pl-8 lg:grid-cols-3" layout>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <AnimatedArticle
                layout
                className="group flex min-w-0 flex-col border-b border-ink"
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.28 }}
              >
                <BrowserImage project={project} />
                <div className="flex flex-1 flex-col px-0.5 pb-6 pt-5">
                  <p className="mb-2 text-xs font-extrabold uppercase tracking-wider text-brand">{project.category}</p>
                  <h3 className="m-0 text-xl font-black leading-tight tracking-[-0.045em]">{project.title}</h3>
                  <p className={`mt-2.5 ${mutedCopyClass}`}>{project.description}</p>
                  <StackList project={project} />
                  <div className="mt-auto pt-1"><ProjectLinks project={project} compact /></div>
                </div>
              </AnimatedArticle>
            ))}
          </AnimatePresence>
        </AnimatedDiv>
      </div>
    </section>
  )
}
