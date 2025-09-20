import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { skills } from "@/constants";

function Skills() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);


    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            className="p-4 rounded-lg shadow-lg bg-card transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:shadow-xl"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            whileHover={!isMobile ? { scale: 1.01 } : {}}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <motion.h2
                className="text-xl font-bold mb-4 text-theme-primary bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-400 dark:to-gray-200 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                Skills
            </motion.h2>

            <motion.div
                className="flex flex-wrap gap-2"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {skills.map((skill) => (
                    <motion.div
                        key={skill}
                        className="bg-element text-theme-primary px-3 py-1 rounded-2xl text-sm transition-all duration-300 hover:shadow-md relative overflow-hidden group select-none cursor-pointer"
                        variants={itemVariants}
                        whileHover={!isMobile ? { scale: 1.03, boxShadow: "0 4px 10px rgba(0,0,0,0.15)" } : {}}
                        whileTap={!isMobile ? { scale: 0.98 } : {}}
                    >
                        <span className="relative z-10 group-hover:translate-y-[-1px] transition-transform duration-300 pointer-events-none">
                            {skill}
                        </span>
                        {!isMobile && (
                            <>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-600 dark:to-gray-400 opacity-0 group-hover:opacity-90 transition-opacity duration-300"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 0.9 }}
                                    style={{ mixBlendMode: "overlay" }}
                                />
                                <motion.div
                                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-gray-700 to-gray-500 dark:from-gray-400 dark:to-gray-200"
                                    initial={{ width: 0 }}
                                    whileHover={{ width: "100%" }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                />
                            </>
                        )}
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
}

export default Skills;