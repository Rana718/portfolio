import { useState, createContext, useEffect, useRef, useCallback } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Footer from '@/components/Footer'
import Navbar from './components/Navbar'
import ErrorBoundary from './components/ErrorBoundary'
import ProjectsPage from './pages/ProjectsPage'
import NotFound from './pages/NotFound'
import SEO from './utils/SEO'
import HomePage from './pages/Homepage'
import BottomDock from './components/BottomDock'

export const ThemeContext = createContext()

function AppContent() {
  const [isDarkTheme, setIsDarkTheme] = useState(true)
  const [showNavbar, setShowNavbar] = useState(false)
  const headerRef = useRef(null)
  const chatButtonRef = useRef(null)
  const location = useLocation()

  const toggleTheme = () => {
    setIsDarkTheme((prev) => {
      const newTheme = !prev;
      if (newTheme) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return newTheme;
    });
  }

  const handleScroll = useCallback(() => {
    const currentPath = location.pathname

    if (currentPath === '/') {
      if (headerRef.current) {
        const headerBottom = headerRef.current.getBoundingClientRect().bottom
        setShowNavbar(headerBottom < -10)
      }
    } else if (currentPath === '/projects') {
      setShowNavbar(true)
    } else {
      setShowNavbar(false)
    }
  }, [location.pathname])

  const optimizedScrollHandler = useCallback(() => {
    const currentPath = location.pathname
    if (currentPath === '/' || currentPath === '/projects') {
      requestAnimationFrame(handleScroll)
    }
  }, [handleScroll, location.pathname])

  useEffect(() => {
    const currentPath = location.pathname

    if (currentPath === '/') {
      setTimeout(handleScroll, 100)
    } else if (currentPath === '/projects') {
      setShowNavbar(true)
    } else {
      setShowNavbar(false)
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname, handleScroll])

  useEffect(() => {
    window.addEventListener('scroll', optimizedScrollHandler, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', optimizedScrollHandler)
      window.removeEventListener('resize', handleScroll)
    }
  }, [optimizedScrollHandler, handleScroll])

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'

    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme, chatButtonRef }}>
      <div className={`min-h-screen ${isDarkTheme ? 'dark bg-dark text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
        <Navbar visible={showNavbar} />
        <div className="lg:mx-56 md:mx-8 mx-2 px-4 py-8">
          <Routes>
            <Route
              path="/"
              element={<HomePage headerRef={headerRef} chatButtonRef={chatButtonRef} />}
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
        <BottomDock />
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}

function App() {
  return (
    <ErrorBoundary>
      <SEO />
      <Router>
        <AppContent />
      </Router>
    </ErrorBoundary>
  )
}

export default App