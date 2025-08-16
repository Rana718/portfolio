import { useState, createContext, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ProjectsPage from './pages/ProjectsPage'
import SEO from './utils/SEO'
import HomePage from './pages/Homepage'

export const ThemeContext = createContext()

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true)
  const [showNavbar, setShowNavbar] = useState(false)
  const headerRef = useRef(null)
  const chatButtonRef = useRef(null)

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return
      const headerBottom = headerRef.current.getBoundingClientRect().bottom
      setShowNavbar(headerBottom < 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme, chatButtonRef }}>
      <SEO/>
      <Router>
        <div className={`min-h-screen ${isDarkTheme ? 'dark bg-dark text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
          <Navbar visible={showNavbar} />
          <div className="lg:mx-56 md:mx-8 mx-2 px-4 py-8">
            <Routes>
              <Route 
                path="/" 
                element={<HomePage headerRef={headerRef} chatButtonRef={chatButtonRef}/>} 
              />
              <Route 
                path="/projects" 
                element={<ProjectsPage />} 
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ThemeContext.Provider>
  )
}

export default App
