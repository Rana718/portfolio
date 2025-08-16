import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getFeaturedProjects } from '../constants';

function Projects() {
    const featuredProjects = getFeaturedProjects();

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
        <div className="mt-16 sm:mt-20 px-1">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-theme-primary">Featured Projects</h2>
                <Link to="/projects">
                    <motion.button
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-element hover:bg-blue-600 text-theme-primary transition-colors duration-300 text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View All Projects
                        <ArrowRight size={16} />
                    </motion.button>
                </Link>
            </div>

            <motion.div
                className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {featuredProjects.map((project) => (
                    <motion.div
                        key={project.id}
                        className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl bg-card flex flex-col transition-all duration-300 border border-zinc-100/10 hover:border-blue-500/20"
                        variants={cardVariants}
                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    >
                        <div className="h-[180px] sm:h-[200px] w-full relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                            <motion.img
                                src={project.image}
                                alt={`${project.title} screenshot`}
                                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                                style={{ objectPosition: 'center top' }}
                            />
                            <div className="absolute top-3 right-3 z-20">
                                <span className="px-2 py-1 text-xs font-medium bg-blue-600/90 text-white rounded-full backdrop-blur-sm">
                                    {project.category}
                                </span>
                            </div>
                        </div>
                        
                        <div className="p-4 sm:p-6 flex flex-col flex-grow">
                            <h3 className="text-lg sm:text-xl font-bold mb-2 text-theme-primary group-hover:text-blue-400 transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-theme-secondary mb-4 sm:mb-5 text-xs sm:text-sm min-h-[40px] sm:min-h-[60px] leading-relaxed">
                                {project.description}
                            </p>

                            {/* <div className="mb-4 sm:mb-5">
                                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                    {project.tech.slice(0, 3).map(tech => (
                                        <motion.span
                                            key={tech}
                                            className="text-xs px-2 sm:px-3 py-1 bg-element text-theme-primary rounded-full font-medium cursor-default border border-zinc-200/10"
                                            whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                    {project.tech.length > 3 && (
                                        <span className="text-xs px-2 sm:px-3 py-1 bg-element text-theme-secondary rounded-full font-medium">
                                            +{project.tech.length - 3}
                                        </span>
                                    )}
                                </div>
                            </div> */}

                            <div className="flex gap-3 sm:gap-4 mt-auto">
                                <motion.a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-element hover:bg-blue-600 text-theme-primary hover:text-white transition-all duration-300 border border-zinc-200/10"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <Github size={16} />
                                    <span className="font-medium text-sm">Code</span>
                                </motion.a>
                                {project.demo && (
                                    <motion.a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-blue-500/30 hover:bg-blue-600 text-blue-400 hover:text-white transition-all duration-300"
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                    >
                                        <ExternalLink size={16} />
                                        <span className="font-medium text-sm">Demo</span>
                                    </motion.a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export default Projects;
