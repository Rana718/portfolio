import React, { useContext } from 'react'
import { ThemeContext } from '../App'
import { Sun, Moon, Download, MessageSquare } from 'lucide-react'

function Header() {
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext)

    return (
        <header className="relative">
            <div className="flex justify-end mb-4">
                <button 
                    onClick={toggleTheme} 
                    className="p-2 rounded-full hover:bg-element transition-colors duration-300 text-theme-primary"
                    aria-label="Toggle theme"
                >
                    {isDarkTheme ? <Sun size={24} /> : <Moon size={24} />}
                </button>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-40 h-40 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-3xl">
                    RD
                </div>
                
                <div className="flex-1">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2 text-theme-primary">Rana Dolui</h1>
                    <h2 className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 mb-4">Full-Stack Developer</h2>
                    
                    <p className="text-theme-secondary mb-6">
                        I'm Rana Dolui, a 2nd-year B.Tech student at Bengal Institute of Technology and a passionate full-stack
                        developer. I love building scalable web and mobile applications, exploring Web3, and working with AI/ML. 
                        I enjoy solving real-world problems through technology and constantly learning new frameworks and tools.
                        Apart from coding, I'm a huge cricket fan and love playing and watching the game.
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                        <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition flex items-center gap-2">
                            <Download size={18} /> Download Resume
                        </button>
                        <button className="px-6 py-2 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-md hover:bg-blue-50 dark:hover:bg-dark-element transition flex items-center gap-2">
                            <MessageSquare size={18} /> Chat with me
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header