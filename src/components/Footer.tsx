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
                    <div
                        className="relative flex items-center gap-4 bg-tertiary/80 backdrop-blur-sm 
                        px-6 py-3 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.2)]
                        sm:gap-6 md:gap-8 lg:gap-10 overflow-hidden"
                    >


                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative z-10 text-secondary hover:text-[#915EFF] transition-all duration-300 text-lg sm:text-xl md:text-2xl"
                                whileHover={{
                                    scale: 1.5,
                                }}
                                transition={{
                                    duration: 0.4,
                                    ease: "easeInOut",
                                }}
                            >
                                <div
                                    className="w-8 h-8 flex items-center justify-center bg-transparent hover:bg-[#915EFF]/30 rounded-full transition-all duration-300"
                                >
                                    {social.icon}
                                </div>
                            </motion.a>
                        ))}
                    </div>
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