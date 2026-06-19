import { MotionConfig } from 'framer-motion'
import { Toaster } from 'react-hot-toast'
import About from './components/About'
import Contact from './components/Contacts'
import Expectations from './components/Expectations'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Process from './components/Process'
import ProofBar from './components/ProofBar'
import { FeaturedProjects, ProjectExplorer } from './components/Projects'
import Services from './components/Services'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-ink selection:bg-brand selection:text-white [&_a:focus-visible]:outline-[0.1875rem] [&_a:focus-visible]:outline-offset-4 [&_a:focus-visible]:outline-citron [&_button:focus-visible]:outline-[0.1875rem] [&_button:focus-visible]:outline-offset-4 [&_button:focus-visible]:outline-citron [&_input:focus-visible]:outline-[0.1875rem] [&_input:focus-visible]:outline-offset-4 [&_input:focus-visible]:outline-citron [&_select:focus-visible]:outline-[0.1875rem] [&_select:focus-visible]:outline-offset-4 [&_select:focus-visible]:outline-citron [&_textarea:focus-visible]:outline-[0.1875rem] [&_textarea:focus-visible]:outline-offset-4 [&_textarea:focus-visible]:outline-citron">
        <a className="fixed left-3 top-3 z-[999] -translate-y-[160%] bg-brand px-4 py-3 font-bold text-white transition-transform focus:translate-y-0" href="#main-content">
          Skip to content
        </a>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4500,
            className: '!rounded-none !border !border-paper/20 !bg-ink !text-paper',
          }}
        />
        <Navbar />
        <main id="main-content">
          <Hero />
          <ProofBar />
          <FeaturedProjects />
          <Services />
          <About />
          <ProjectExplorer />
          <Process />
          <Expectations />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}
