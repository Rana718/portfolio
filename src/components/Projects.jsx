import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getFeaturedProjects } from '../constants';
import ProjectCard from './ProjectCard';

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
                    <ProjectCard 
                        key={project.id}
                        project={project}
                        variants={cardVariants}
                    />
                ))}
            </motion.div>
        </div>
    );
}

export default Projects;

