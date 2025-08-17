import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, Code, Zap } from 'lucide-react';

function NotFound() {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 }
        }
    };

    const floatingVariants = {
        animate: {
            y: [-10, 10, -10],
            rotate: [0, 5, -5, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-8">
            <motion.div
                className="text-center max-w-2xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Animated 404 */}
                <motion.div
                    className="relative mb-8"
                    variants={itemVariants}
                >
                    <motion.h1
                        className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
                        variants={floatingVariants}
                        animate="animate"
                    >
                        404
                    </motion.h1>
                    
                    {/* Floating icons */}
                    <motion.div
                        className="absolute -top-4 -left-4 text-blue-400"
                        animate={{
                            y: [-5, 5, -5],
                            x: [-2, 2, -2],
                            rotate: [0, 10, -10, 0]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <Code size={32} />
                    </motion.div>
                    
                    <motion.div
                        className="absolute -top-2 -right-8 text-purple-400"
                        animate={{
                            y: [5, -5, 5],
                            x: [2, -2, 2],
                            rotate: [0, -15, 15, 0]
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5
                        }}
                    >
                        <Zap size={28} />
                    </motion.div>
                </motion.div>

                {/* Error message */}
                <motion.div variants={itemVariants} className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-theme-primary mb-4">
                        Oops! Page Not Found
                    </h2>
                    <p className="text-lg text-theme-secondary leading-relaxed">
                        The page you're looking for seems to have wandered off into the digital void. 
                        Don't worry, even the best developers get lost sometimes!
                    </p>
                </motion.div>

                {/* Suggestions */}
                <motion.div variants={itemVariants} className="mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center justify-center gap-2 p-4 rounded-lg bg-element border border-zinc-200/10">
                            <Search size={16} className="text-blue-400" />
                            <span className="text-theme-secondary">Check the URL</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 p-4 rounded-lg bg-element border border-zinc-200/10">
                            <Code size={16} className="text-purple-400" />
                            <span className="text-theme-secondary">Browse Projects</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 p-4 rounded-lg bg-element border border-zinc-200/10">
                            <Home size={16} className="text-green-400" />
                            <span className="text-theme-secondary">Go Home</span>
                        </div>
                    </div>
                </motion.div>

                {/* Action buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Link to="/">
                        <motion.button
                            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Home size={18} />
                            Back to Home
                        </motion.button>
                    </Link>

                    <Link to="/projects">
                        <motion.button
                            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-element hover:bg-purple-600 text-theme-primary hover:text-white border border-zinc-200/10 hover:border-purple-500/50 font-medium transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Code size={18} />
                            View Projects
                        </motion.button>
                    </Link>

                    <motion.button
                        onClick={() => window.history.back()}
                        className="flex items-center gap-2 px-6 py-3 rounded-lg bg-element hover:bg-gray-600 text-theme-secondary hover:text-white border border-zinc-200/10 hover:border-gray-500/50 font-medium transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <ArrowLeft size={18} />
                        Go Back
                    </motion.button>
                </motion.div>

                {/* Fun fact */}
                <motion.div
                    variants={itemVariants}
                    className="mt-12 p-4 rounded-lg bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20"
                >
                    <p className="text-sm text-theme-secondary">
                        <span className="text-blue-400 font-semibold">Fun fact:</span> The first 404 error was 
                        discovered at CERN in 1992. You're now part of web history! 🚀
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default NotFound;
