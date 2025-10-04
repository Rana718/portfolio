import React, { useContext, useRef } from 'react'
import { ThemeContext } from '../App'
import { Sun, Moon, Download, MessageSquare } from 'lucide-react'
import { motion } from 'framer-motion'
import downloadResume from '../utils/Download'
import { Particles } from './ui/particles'

function Header() {
    const { isDarkTheme, toggleTheme, chatButtonRef } = useContext(ThemeContext)

    const handleChatClick = () => {
        if (chatButtonRef && chatButtonRef.current) {
            chatButtonRef.current()
        }
    }

    return (
        <header className="relative overflow-hidden py-8 sm:py-12">
            <Particles 
                className="absolute inset-0 w-full h-full pointer-events-none" 
                quantity={100}
                color={isDarkTheme ? "#ffffff" : "#3b82f6"}
                size={0.4}
                refresh={false}
            />

            <motion.div
                className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="text-center md:text-left">
                    <motion.h1 
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 text-theme-primary"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Rana Dolui
                    </motion.h1>
                    <motion.h2 
                        className="text-lg sm:text-xl md:text-2xl text-blue-600 dark:text-blue-400 mb-4 sm:mb-6"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Full-Stack Developer
                    </motion.h2>

                    <motion.p 
                        className="text-sm sm:text-base text-theme-secondary mb-6 sm:mb-8 leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        Hi! I'm a passionate full-stack developer who loves building scalable web and mobile applications. I enjoy working with AI/ML and thrive on solving real-world problems through clean, efficient code. I'm always curious and love exploring new frameworks, tools, and technologies. Outside of coding, I love playing and watching cricket.
                    </motion.p>

                    <motion.div 
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <motion.button
                            className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => downloadResume()}
                        >
                            <Download size={18} /> Download Resume
                        </motion.button>
                        <motion.button
                            className="w-full sm:w-auto px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg transition flex items-center justify-center gap-2 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleChatClick}
                        >
                            <MessageSquare size={18} /> Chat with me
                        </motion.button>
                    </motion.div>
                </div>
            </motion.div>
        </header>
    )
}

export default Header