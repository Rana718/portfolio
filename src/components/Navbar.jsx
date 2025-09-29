import { useEffect, useState, useMemo } from 'react';
import { Download, Home, FolderOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import downloadResume from '../utils/Download';

function Navbar({ visible }) {
    const location = useLocation();
    const [isVisible, setIsVisible] = useState(visible);
    const validRoutes = useMemo(() => ['/', '/projects'], []);
    const isNotFoundPage = useMemo(() => !validRoutes.includes(location.pathname), [location.pathname, validRoutes]);

    useEffect(() => {
        setIsVisible(visible);
    }, [visible]);

    useEffect(() => {
        if (location.pathname !== '/') setIsVisible(true);
    }, [location.pathname]);

    if (isNotFoundPage) return null;

    if (!isNotFoundPage) {
        return (
            <AnimatePresence mode="wait">
                <motion.div
                    key={`navbar-${location.pathname}`}
                    className="fixed top-0 left-0 right-0 bg-card/80 backdrop-blur-md border-b border-gray-100/60 dark:border-gray-800/50 z-50 shadow-lg"
                    initial={{ y: -100, opacity: 0 }}
                    animate={{
                        y: isVisible ? 0 : -100,
                        opacity: isVisible ? 1 : 0
                    }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                        opacity: { duration: 0.2 }
                    }}
                    style={{
                        willChange: 'transform, opacity',
                        transform: 'translateZ(0)',
                    }}
                >
                    <div className="lg:mx-56 md:mx-8 mx-2 px-4 py-3">
                        <div className="flex items-center justify-between">
                            <Link to="/">
                                <motion.div
                                    className="flex items-center gap-4 cursor-pointer group transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <div>
                                        <h2 className="text-theme-primary font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                            Rana Dolui
                                        </h2>
                                        <p className="text-[10px] text-gray-500 dark:text-gray-400 -mt-[2px] group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                                            Full Stack Developer
                                        </p>
                                    </div>
                                </motion.div>
                            </Link>

                            <div className="flex items-center gap-4">
                                {/* Desktop Navigation Links */}
                                <nav className="hidden md:flex items-center gap-2">
                                    <Link to="/">
                                        <motion.button
                                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${location.pathname === '/'
                                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
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
                                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${location.pathname === '/projects'
                                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
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
                                            className={`p-2.5 rounded-lg transition-all duration-300 ${location.pathname === '/'
                                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                                                    : 'text-theme-secondary hover:text-theme-primary hover:bg-element'
                                                }`}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            title="Home"
                                        >
                                            <Home size={16} />
                                        </motion.button>
                                    </Link>
                                    <Link to="/projects">
                                        <motion.button
                                            className={`p-2.5 rounded-lg transition-all duration-300 ${location.pathname === '/projects'
                                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                                                    : 'text-theme-secondary hover:text-theme-primary hover:bg-element'
                                                }`}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            title="Projects"
                                        >
                                            <FolderOpen size={16} />
                                        </motion.button>
                                    </Link>
                                </div>

                                {/* Resume Download Button */}
                                <motion.button
                                    onClick={downloadResume}
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center gap-2 text-sm font-medium"
                                    whileHover={{ scale: 1.05, y: -1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Download size={16} />
                                    <span className="hidden sm:inline">Resume</span>
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        );
    }
}

export default Navbar;
