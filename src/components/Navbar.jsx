import React from 'react';
import { Download, Home, FolderOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import downloadResume from '../utils/Download';

function Navbar({ visible }) {
    const location = useLocation();

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 bg-card/50 backdrop-blur-sm border-b border-gray-200/60 dark:border-gray-800/50 z-50 shadow-md"
            initial={{ y: -80 }}
            animate={{ y: visible ? 0 : -80 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
        >
            <div className="lg:mx-56 md:mx-8 mx-2 px-4 py-2">
                <div className="flex items-center justify-between">
                    <Link to="/">
                        <div className="flex items-center gap-4 cursor-pointer group transition-all duration-300 hover:scale-105">
                            <div>
                                <h2 className="text-theme-primary font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Rana Dolui</h2>
                                <p className="text-[10px] text-gray-500 dark:text-gray-400 -mt-[2px] group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">Full Stack Developer</p>
                            </div>
                        </div>
                    </Link>

                    <div className="flex items-center gap-4">
                        {/* Navigation Links */}
                        <nav className="hidden md:flex items-center gap-2">
                            <Link to="/">
                                <motion.button
                                    className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 ${
                                        location.pathname === '/' 
                                            ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30' 
                                            : 'text-theme-secondary hover:text-theme-primary hover:bg-element'
                                    }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Home size={16} />
                                    Home
                                </motion.button>
                            </Link>
                            <Link to="/projects">
                                <motion.button
                                    className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 ${
                                        location.pathname === '/projects' 
                                            ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30' 
                                            : 'text-theme-secondary hover:text-theme-primary hover:bg-element'
                                    }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FolderOpen size={16} />
                                    Projects
                                </motion.button>
                            </Link>
                        </nav>

                        {/* Mobile Navigation */}
                        <div className="md:hidden flex items-center gap-2">
                            <Link to="/">
                                <motion.button
                                    className={`p-2 rounded-md transition-all duration-300 ${
                                        location.pathname === '/' 
                                            ? 'bg-blue-600 text-white' 
                                            : 'text-theme-secondary hover:text-theme-primary hover:bg-element'
                                    }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Home size={16} />
                                </motion.button>
                            </Link>
                            <Link to="/projects">
                                <motion.button
                                    className={`p-2 rounded-md transition-all duration-300 ${
                                        location.pathname === '/projects' 
                                            ? 'bg-blue-600 text-white' 
                                            : 'text-theme-secondary hover:text-theme-primary hover:bg-element'
                                    }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FolderOpen size={16} />
                                </motion.button>
                            </Link>
                        </div>

                        <motion.button 
                            onClick={downloadResume} 
                            className="px-4 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 hover:shadow-md hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 text-sm"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Download size={16} /> Resume
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Navbar;
