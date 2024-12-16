import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const socialLinks = [
    {
        icon: <FaGithub />,
        url: "https://github.com/rana718",
    },
    {
        icon: <FaLinkedin />,
        url: "https://www.linkedin.com/in/rana-dolui-89357728a/",
    },
    {
        icon: <FaTwitter />,
        url: "https://twitter.com/Ranad187",
    },
    {
        icon: <FaInstagram />,
        url: "https://www.instagram.com/r_a_n_a_718_",
    },
];

export default function Footer() {
    const [isBottom, setIsBottom] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const bottom = Math.ceil(window.innerHeight + 100 + window.scrollY) >= document.documentElement.scrollHeight;
            setIsBottom(bottom);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {!isBottom && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        duration: 0.8,
                    }}
                    className="fixed bottom-8 w-full flex justify-center"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="relative flex items-center gap-4 bg-gradient-to-r from-[#1e293b]/80 to-[#334155]/80 backdrop-blur-md 
                        px-6 py-3 rounded-full shadow-lg sm:gap-6 md:gap-8 lg:gap-10 overflow-hidden"
                    >
                        
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-[#915EFF]/30 via-[#34d399]/30 to-[#9333EA]/30"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.5 }}
                        />

                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative z-10 cursor-pointer text-gray-200 transition-all text-lg sm:text-xl md:text-2xl group"
                                whileHover={{ scale: 1.2 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 10,
                                }}
                            >
                                <motion.div
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#34d399] to-[#9333EA]/80 
                                    text-gray-100 shadow-md group-hover:from-[#9333EA] group-hover:to-[#34d399] transition-all duration-300 relative overflow-hidden"
                                    whileHover={{ scale: 1.3 }}
                                    transition={{ duration: 0.1 }}
                                >
                                    {social.icon}
                                </motion.div>
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

            )}

            {/* Normal Footer */}
            <footer className="bg-tertiary/90 backdrop-blur-sm py-8 border-t border-secondary/20">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-secondary hover:text-white transition-all duration-300 text-xl sm:text-2xl md:text-3xl hover:scale-110 focus:scale-110"
                                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                                transition={{ duration: 0.4 }}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>
                    <p className="text-secondary text-center mt-4 text-sm sm:text-base">
                        © 2024 Ghost. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    );
}