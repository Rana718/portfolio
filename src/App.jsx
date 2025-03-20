import React, { useState, createContext, useContext } from 'react'
import Header from './components/Header'
import Skills from './components/Skills'
import Connect from './components/Connect'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'
import ChatButton from './components/ChatButton'

// Create theme context
export const ThemeContext = createContext()

function App() {
  // Set default theme to dark
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev)
  }

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      <div className={`min-h-screen ${isDarkTheme ? 'dark bg-dark text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
        <div className="container mx-auto px-4 py-8">
          <Header />
          
          <div className="mt-20">
            <div className="md:grid md:grid-cols-2 md:gap-8 space-y-10 md:space-y-0">
              <Skills />
              <Connect />
            </div>
          </div>
          
          <Experience />
          <Projects />
          <Footer />
          <ChatButton />
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App