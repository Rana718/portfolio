import React, { useState, createContext, useEffect, useRef } from 'react'
import Header from './components/Header'
import Skills from './components/Skills'
import Connect from './components/Connect'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'
import ChatButton from './components/ChatButton'
import Navbar from './components/Navbar'


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
      <div className={`min-h-screen ${isDarkTheme ? 'dark bg-dark text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
        <Navbar visible={showNavbar} />
        <div className="lg:mx-56 md:mx-8 mx-2 px-4 py-8">
          <div ref={headerRef}>
            <Header />
          </div>
          
          <div className="mt-20">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 space-y-10 lg:space-y-0">
              <Skills />
              <Connect />
            </div>
          </div>
          
          <Experience />
          <Projects />
          <Footer />
          <ChatButton openFromHeaderRef={chatButtonRef} />
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App