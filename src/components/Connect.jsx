import React, { useEffect, useState } from "react";
import { Github, Linkedin, Twitter, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

function Connect() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkScreenSize = () => setIsMobile(window.innerWidth <= 768);
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    const socialIcons = [
        { icon: <Github size={20} />, url: "https://github.com/Rana718" },
        { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/rana-dolui-89357728a/" },
        { icon: <Twitter size={20} />, url: "https://x.com/Ranad187" },
    ];

    const contactInfo = [
        { icon: <Mail size={18} />, name: "ranadolui718@gmail.com", url: "mailto:ranadolui718@gmail.com" },
        { icon: <MapPin size={18} />, name: "Kolkata, India", url: "#" },
    ];

    return (
        <motion.div className="p-4 rounded-md shadow-md bg-card border border-gray-200 dark:border-gray-800" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <motion.h2
                className="text-xl font-bold mb-4 text-theme-primary bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-400 dark:to-gray-200 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                Let's Connect
            </motion.h2>

            {/* Social icons in a row */}
            <div className="flex justify-start gap-3 mb-4">
                {socialIcons.map((link, index) => (
                    <motion.a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-element transition-all text-theme-primary bg-black/10"
                        whileHover={!isMobile ? { scale: 1.1, backgroundColor: "rgba(0,0,0,0.05)" } : {}}
                    >
                        <motion.div className="text-blue-600 dark:text-blue-400 transition-all">
                            {link.icon}
                        </motion.div>
                    </motion.a>
                ))}
            </div>

            {/* Email and address on separate lines */}
            <div className="space-y-2">
                {contactInfo.map((info, index) => (
                    <motion.a
                        key={index}
                        href={info.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-2 rounded-md hover:bg-element transition-all text-theme-primary"
                        whileHover={!isMobile ? { scale: 1.02 } : {}}
                    >
                        <motion.div className="text-blue-600 dark:text-blue-400 transition-all">
                            {info.icon}
                        </motion.div>
                        <span className="text-sm">{info.name}</span>
                    </motion.a>
                ))}
            </div>
        </motion.div>
    );
}

export default Connect;