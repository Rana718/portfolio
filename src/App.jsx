import { useState, createContext, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ErrorBoundary from './components/ErrorBoundary'
import ProjectsPage from './pages/ProjectsPage'
import NotFound from './pages/NotFound'
import SEO from './utils/SEO'
import HomePage from './pages/Homepage'

export const ThemeContext = createContext()

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true)
  const [showNavbar, setShowNavbar] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
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

  // Handle initial loading state to prevent scroll issues
  useEffect(() => {
    const handleLoad = () => {
      // Small delay to ensure all components are rendered
      setTimeout(() => {
        setIsLoading(false)
        // Remove any scroll locks
        document.body.classList.remove('loading-scroll-fix')
      }, 100)
    }

    // Add scroll lock during initial load
    document.body.classList.add('loading-scroll-fix')

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    }
  }, [])

  // Optimize scroll behavior
  useEffect(() => {
    // Ensure smooth scrolling is enabled
    document.documentElement.style.scrollBehavior = 'smooth'
    
    // Add scroll container class to body
    document.body.classList.add('scroll-container')
    
    return () => {
      document.body.classList.remove('scroll-container')
    }
  }, [])

  return (
    <ErrorBoundary>
      <ThemeContext.Provider value={{ isDarkTheme, toggleTheme, chatButtonRef }}>
        <SEO/>
        <Router>
          <div className={`min-h-screen ${isDarkTheme ? 'dark bg-dark text-white' : 'bg-white text-gray-900'} transition-colors duration-300 ${isLoading ? 'loading-scroll-fix' : ''}`}>
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
                {/* Catch-all route for 404 pages */}
                <Route 
                  path="*" 
                  element={<NotFound />} 
                />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </ThemeContext.Provider>
    </ErrorBoundary>
  )
}

export default App
