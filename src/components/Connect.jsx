import { useEffect, useState } from "react";
import { Github, Linkedin, Twitter, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const DiscordIcon = ({ size = 20 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill="currentColor"
        viewBox="0 0 16 16"
    >
        <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
    </svg>
)

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
        { icon: <DiscordIcon size={20} />, url: "https://discord.com/users/1282694093696274505" },
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