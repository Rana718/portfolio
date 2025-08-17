import { useEffect, useRef } from 'react'
import { Heart, Github, Linkedin, Twitter, Mail, Code, Coffee, Zap } from 'lucide-react'
import { motion, useInView, useAnimation } from 'framer-motion'

function Footer() {
    const footerRef = useRef(null)
    const isInView = useInView(footerRef, { once: true, amount: 0.3 })
    const controls = useAnimation()

    useEffect(() => {
        if (isInView) {
            controls.start('visible')
        }
    }, [isInView, controls])

    const socialLinks = [
        { icon: Github, url: "https://github.com/Rana718", color: "hover:text-gray-400" },
        { icon: Linkedin, url: "https://www.linkedin.com/in/rana-dolui-89357728a/", color: "hover:text-blue-400" },
        { icon: Twitter, url: "https://x.com/Ranad187", color: "hover:text-sky-400" },
        { icon: Mail, url: "mailto:ranadolui718@gmail.com", color: "hover:text-red-400" }
    ]

    const floatingIcons = [
        { icon: Code, delay: 0, x: -20, y: -15 },
        { icon: Coffee, delay: 0.5, x: 20, y: -25 },
        { icon: Zap, delay: 1, x: -15, y: -20 },
    ]

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    }

    const floatingVariants = {
        animate: {
            y: [-10, 10, -10],
            rotate: [-5, 5, -5],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    }

    return (
        <motion.footer 
            ref={footerRef}
            className="relative mt-20 py-12 overflow-hidden border-t border-gray-200 dark:border-gray-700"
            initial="hidden"
            animate={controls}
            variants={containerVariants}
        >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 via-purple-500/3 to-blue-500/3 dark:from-blue-500/5 dark:via-purple-500/5 dark:to-blue-500/5" />
            
            {/* Floating Icons */}
            <div className="absolute inset-0 pointer-events-none">
                {floatingIcons.map((item, index) => (
                    <motion.div
                        key={index}
                        className="absolute opacity-10 dark:opacity-20"
                        style={{
                            left: `${20 + index * 25}%`,
                            top: `${30 + index * 15}%`,
                        }}
                        variants={floatingVariants}
                        animate="animate"
                        transition={{ delay: item.delay }}
                    >
                        <item.icon size={24} className="text-blue-600 dark:text-blue-400" />
                    </motion.div>
                ))}
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div className="text-center mb-8" variants={itemVariants}>
                    <motion.h3 
                        className="text-2xl font-bold text-theme-primary mb-4"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    >
                        <span className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
                            Let's Build Something Amazing Together
                        </span>
                    </motion.h3>
                    <motion.p className="text-theme-secondary max-w-md mx-auto" variants={itemVariants}>
                        Always excited to work on innovative projects and connect with fellow developers
                    </motion.p>
                </motion.div>

                {/* Social Links - Completely simplified */}
                <motion.div className="flex justify-center space-x-6 mb-8" variants={itemVariants}>
                    {socialLinks.map((social, index) => {
                        const IconComponent = social.icon;
                        return (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block p-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                                style={{ 
                                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                                    minWidth: "48px",
                                    minHeight: "48px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                            >
                                <IconComponent 
                                    size={20} 
                                    className={`text-gray-700 dark:text-gray-300 transition-colors duration-300 ${social.color}`} 
                                />
                            </a>
                        );
                    })}
                </motion.div>

                {/* Divider */}
                <motion.div 
                    className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent mb-8"
                    variants={itemVariants}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                />

                {/* Footer Content */}
                <motion.div className="flex flex-col md:flex-row justify-center items-center gap-4" variants={itemVariants}>
                    <motion.div className="flex items-center gap-2 text-theme-secondary" whileHover={{ scale: 1.05 }}>
                        <span>&copy; {new Date().getFullYear()} Rana Dolui. Made with</span>
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <Heart size={16} className="text-red-500 fill-current" />
                        </motion.div>
                        <span>and lots of coffee</span>
                    </motion.div>
                </motion.div>
            </div>

            {/* Animated Wave Effect */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 2, delay: 1 }}
            />
        </motion.footer>
    )
}

export default Footer