import React, { useContext, useRef } from 'react'
import { ThemeContext } from '../App'
import { Sun, Moon, Download, MessageSquare } from 'lucide-react'
import { motion } from 'framer-motion'
import downloadResume from '../utils/Download'

function Header() {
    const { isDarkTheme, toggleTheme, chatButtonRef } = useContext(ThemeContext)

    const handleChatClick = () => {
        if (chatButtonRef && chatButtonRef.current) {
            chatButtonRef.current()
        }
    }

    return (
        <header className="relative">

            <motion.div
                className="flex flex-col md:flex-row gap-8 items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* <motion.div
                    className="w-40 h-40 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-3xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    RD
                </motion.div> */}

                <div className="flex-1">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2 text-theme-primary">Rana Dolui</h1>
                    <h2 className="text-xl md:text-xl text-blue-600 dark:text-blue-400 mb-4">Full-Stack Developer</h2>

                    <p className="text-theme-secondary mb-6">
                        Hi! I'm a passionate full-stack developer who loves building scalable web and mobile applications. I enjoy working with AI/ML and thrive on solving real-world problems through clean, efficient code. I'm always curious and love exploring new frameworks, tools, and technologies. Outside of coding, I love playing and watching cricket.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <motion.button
                            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => downloadResume()}
                        >
                            <Download size={18} /> Download Resume
                        </motion.button>
                        <motion.button
                            className="px-6 py-2 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-md transition flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleChatClick}
                        >
                            <MessageSquare size={18} /> Chat with me
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </header>
    )
}

export default Header