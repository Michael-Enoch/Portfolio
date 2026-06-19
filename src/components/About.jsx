import { FiArrowUpRight } from 'react-icons/fi'
import { skillGroups } from '../data/portfolioData'
import { DARK_OUTLINE_BUTTON } from '../styles'
import SectionIntro, { SectionRail } from './SectionIntro'

export default function About() {
  return (
    <section className="grid grid-cols-1 bg-ink text-paper lg:grid-cols-[minmax(23.75rem,.9fr)_minmax(0,1.6fr)]" id="about">
      <div className="relative min-w-0 border-paper/20 px-7 py-20 pl-9 sm:px-12 sm:py-24 lg:border-r">
        <SectionRail dark />
        <div>
          <SectionIntro className="pl-0" number="03" title="A developer who thinks beyond the code" inverse />
          <p className="mt-6 max-w-[27.5rem] text-sm leading-relaxed text-paper/70 sm:text-[0.94rem]">
            I&apos;m a full-stack developer who brings design thinking, clean engineering, and business goals into every build.
          </p>
          <p className="mt-5 max-w-[27.5rem] text-sm leading-relaxed text-paper/70 sm:text-[0.94rem]">
            I care about the details visitors notice—clarity, speed, responsive behavior, and the feeling that your brand can be trusted.
          </p>
          <a className={`${DARK_OUTLINE_BUTTON} mt-7`} href="#contact">
            Work with me <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="min-w-0 bg-paper px-4 py-16 text-ink sm:px-12 sm:py-20 lg:py-24">
        <h3 className="mb-9 text-2xl font-black tracking-[-0.04em] sm:mb-10">My tech stack</h3>
        <div className="grid grid-cols-1 border-l border-t border-line min-[25rem]:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group) => (
            <div className="border-b border-r border-line px-4 py-5 transition-colors hover:bg-white/45 sm:px-5 sm:py-6" key={group.title}>
              <h4 className="mb-4 text-[0.7rem] font-extrabold uppercase tracking-wider text-brand">{group.title}</h4>
              <ul className="m-0 p-0">
                {group.skills.map((skill) => (
                  <li className="relative list-none py-0.5 pl-3 text-xs leading-relaxed before:absolute before:left-0 before:top-[0.72em] before:size-1 before:bg-brand" key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
