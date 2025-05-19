import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from '../constants';

function Projects() {

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    return (
        <div className="mt-16 sm:mt-20 px-1 ">
            <h2 className="text-3xl font-bold mb-8 text-center text-theme-primary">Projects</h2>

            <motion.div
                className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl bg-card flex flex-col transition-all duration-300 border border-zinc-100/10"
                        variants={cardVariants}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                        <div className="h-[180px] sm:h-[200px] w-full relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                            <motion.img
                                src={project.image}
                                alt={`${project.title} screenshot`}
                                className="w-full h-full object-cover object-center"
                                style={{ objectPosition: 'center top' }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                        <div className="p-4 sm:p-6 flex flex-col flex-grow">
                            <h3 className="text-lg sm:text-xl font-bold mb-2 text-theme-primary">{project.title}</h3>

                            
                            <p className="text-theme-secondary mb-4 sm:mb-5 text-xs sm:text-sm min-h-[40px] sm:min-h-[60px]">
                                {project.description}
                            </p>

                            {/* <div className="mb-4 sm:mb-5">
                                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                    {project.tech.map(tech => (
                                        <motion.span
                                            key={tech}
                                            className="text-xs px-2 sm:px-3 py-1 bg-element text-theme-primary rounded-full font-medium cursor-default"
                                            whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </div> */}

                            <div className="flex gap-3 sm:gap-4 mt-auto">
                                <motion.a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-element hover:bg-blue-600 text-theme-primary transition-colors duration-300"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <Github size={16} />
                                    <span className="font-medium text-sm">Code</span>
                                </motion.a>
                                <motion.a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-zinc-200/20 hover:bg-element text-theme-primary transition-colors duration-300"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <ExternalLink size={16} />
                                    <span className="font-medium text-sm">Demo</span>
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export default Projects;
