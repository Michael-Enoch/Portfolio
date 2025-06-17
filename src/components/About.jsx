// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import { Theme } from '../context/Theme'
import BlurBackground from './BlurBackground'
import {FaGitAlt, FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { SiJavascript, SiTailwindcss } from 'react-icons/si'

const skills = [
  { icon: <FaHtml5 />, label: 'HTML5' },
  { icon: <FaCss3Alt />, label: 'Css3' },
  { icon: <SiTailwindcss />, label: 'TailwindCss' },
   { icon: <SiJavascript />, label: 'JavaScript' },
  { icon: <FaReact />, label: 'React' },
  { icon: <FaGitAlt />, label: 'Git & Version Control' },
]

export default function AboutMe() {
  return (
    <section className={`${Theme.backgroundColors.background} relative py-24 px-6 sm:px-10`} id="about">
      <BlurBackground />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className={`${Theme.styles.heading} text-4xl mb-4`}>
          About <span className={Theme.styles.spanAccent}>Me</span>
        </h2>
        <p className={`${Theme.styles.paragraph} max-w-3xl mx-auto mb-10`}>
          I'm a Frontend Developer focused on building elegant, performant UIs with attention to detail and scalable code. I enjoy working with tools like React, JavaScript, and TailwindCSS to create user-centered web apps.
        </p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10"
          initial="hidden"
          whileInView="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          viewport={{ once: true }}
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            >
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} className="w-full">
                <div className={`${Theme.styles.card} flex flex-col items-center py-6 hover:scale-[1.03] transition-transform`}>
                  <div className="text-3xl mb-3 text-indigo-300">{skill.icon}</div>
                  <p className="text-slate-100 font-medium">{skill.label}</p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
