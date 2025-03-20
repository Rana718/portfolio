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

    const socialLinks = [
        { icon: <Github size={18} />, name: "GitHub", url: "https://github.com/Rana718" },
        { icon: <Linkedin size={18} />, name: "LinkedIn", url: "https://www.linkedin.com/in/rana-dolui-89357728a/" },
        { icon: <Twitter size={18} />, name: "X (Twitter)", url: "https://x.com/Ranad187" },
        { icon: <Mail size={18} />, name: "ranadolui718@gmail.com", url: "mailto:ranadolui718@gmail.com" },
        { icon: <MapPin size={18} />, name: "Kolkata, India", url: "#" },
    ];

    return (
        <motion.div className="p-6 rounded-md shadow-md bg-card border border-gray-200 dark:border-gray-800" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <motion.h2
                className="text-2xl font-bold mb-6 border-b pb-2 border-gray-200 dark:border-gray-700 text-theme-primary bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-400 dark:to-gray-200 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                Let's Connect
            </motion.h2>
            <div>
                {socialLinks.map((link, index) => (
                    <motion.a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 rounded-md hover:bg-element transition-all text-theme-primary" whileHover={!isMobile ? { scale: 1.02 } : {}}>
                        <motion.div className="text-blue-600 dark:text-blue-400 p-1 rounded-full group-hover:text-white transition-all">
                            {link.icon}
                        </motion.div>
                        <span className="text-sm font-medium">{link.name}</span>
                    </motion.a>
                ))}
            </div>
        </motion.div>
    );
}

export default Connect;
