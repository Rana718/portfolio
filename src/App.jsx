import { useState, createContext, useEffect, useRef, useCallback } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ErrorBoundary from './components/ErrorBoundary'
import ProjectsPage from './pages/ProjectsPage'
import NotFound from './pages/NotFound'
import SEO from './utils/SEO'
import HomePage from './pages/Homepage'

export const ThemeContext = createContext()

function AppContent() {
  const [isDarkTheme, setIsDarkTheme] = useState(true)
  const [showNavbar, setShowNavbar] = useState(false)
  const headerRef = useRef(null)
  const chatButtonRef = useRef(null)
  const location = useLocation()
  const isScrollingRef = useRef(false)

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev)
  }

  // Handle navbar visibility based on scroll and route
  const handleScroll = useCallback(() => {
    // Prevent scroll handling during programmatic scrolling
    if (isScrollingRef.current) return

    const currentPath = location.pathname
    
    if (currentPath === '/') {
      // Home page - show navbar when header is out of view
      if (headerRef.current) {
        const headerBottom = headerRef.current.getBoundingClientRect().bottom
        setShowNavbar(headerBottom < -10) // Add small buffer
      }
    } else {
      // Other pages - always show navbar
      setShowNavbar(true)
    }
  }, [location.pathname])

  // Optimized scroll handler with better performance
  const optimizedScrollHandler = useCallback(() => {
    if (!isScrollingRef.current) {
      requestAnimationFrame(() => {
        handleScroll()
      })
    }
  }, [handleScroll])

  useEffect(() => {
    // Handle route changes
    const currentPath = location.pathname
    
    // Set scrolling flag to prevent interference
    isScrollingRef.current = true
    
    if (currentPath === '/') {
      // Home page - navbar visibility depends on scroll
      setTimeout(() => {
        handleScroll()
        isScrollingRef.current = false
      }, 100)
    } else {
      // Other pages - always show navbar
      setShowNavbar(true)
      isScrollingRef.current = false
    }

    // Smooth scroll to top on route change
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    })

    // Reset scroll flag after scroll completes
    setTimeout(() => {
      isScrollingRef.current = false
    }, 500)
  }, [location.pathname, handleScroll])

  useEffect(() => {
    // Add scroll event listener with passive option for better performance
    const scrollOptions = { passive: true, capture: false }
    window.addEventListener('scroll', optimizedScrollHandler, scrollOptions)
    
    // Also listen for resize events
    window.addEventListener('resize', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', optimizedScrollHandler)
      window.removeEventListener('resize', handleScroll)
    }
  }, [optimizedScrollHandler, handleScroll])

  // Optimize scroll behavior
  useEffect(() => {
    // Ensure smooth scrolling is enabled
    document.documentElement.style.scrollBehavior = 'smooth'
    document.documentElement.style.scrollSnapType = 'none'
    
    // Add optimized scroll classes
    document.body.classList.add('scroll-container', 'no-scroll-snap')
    
    // Disable scroll restoration to prevent jumping
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
    
    return () => {
      document.body.classList.remove('scroll-container', 'no-scroll-snap')
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme, chatButtonRef }}>
      <div className={`min-h-screen no-scroll-snap ${isDarkTheme ? 'dark bg-dark text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
        <Navbar visible={showNavbar} />
        <div className="lg:mx-56 md:mx-8 mx-2 px-4 py-8 no-scroll-snap">
          <Routes>
            <Route 
              path="/" 
              element={<HomePage headerRef={headerRef} chatButtonRef={chatButtonRef}/>} 
            />
            <Route 
              path="/projects" 
              element={<ProjectsPage />} 
            />
            <Route 
              path="*" 
              element={<NotFound />} 
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}

function App() {
  return (
    <ErrorBoundary>
      <SEO/>
      <Router>
        <AppContent />
      </Router>
    </ErrorBoundary>
  )
}

export default App
