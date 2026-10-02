import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Education from './pages/Education.jsx'
import Skills from './pages/Skills.jsx'
import Experience from './pages/Experience.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'

// One long page: every section is visible. Each route just scrolls to its section.
function Landing() {
  const { pathname } = useLocation()
  useEffect(() => {
    const id = pathname === '/' ? 'home' : pathname.slice(1)
    const el = document.getElementById(id)
    const behavior = window.matchMedia('(max-width: 767px)').matches ? 'auto' : 'smooth'
    if (el) el.scrollIntoView({ behavior, block: 'start' })
  }, [pathname])
  return <><Home /><About /><Education /><Skills /><Experience /><Projects /><Contact /></>
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          {['/', '/about', '/education', '/skills', '/experience', '/projects', '/contact', '*'].map(p => <Route key={p} path={p} element={<Landing />} />)}
        </Routes>
      </main>
      <Footer />
    </>
  )
}
