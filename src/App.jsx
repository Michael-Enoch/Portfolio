
import { Toaster } from 'react-hot-toast'
import './App.css'
import AboutMe from './components/About'
import Contact from './components/Contacts'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {

  return (
    <>
    <Toaster position="top-right" reverseOrder={false} />
    <Navbar/>
     <Hero/>
     <AboutMe/>
     <Projects/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
