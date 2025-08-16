import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowLeft, Filter, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects, getCategories, getProjectsByCategory } from '../constants';

function ProjectsPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProjects, setFilteredProjects] = useState(projects);
    const [showFilters, setShowFilters] = useState(false);

    const categories = getCategories();

    useEffect(() => {
        let filtered = getProjectsByCategory(selectedCategory);

        if (searchTerm) {
            filtered = filtered.filter(project =>
                project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
            );
        }

        setFilteredProjects(filtered);
    }, [selectedCategory, searchTerm]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
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
        },
        exit: {
            y: -50,
            opacity: 0,
            transition: {
                duration: 0.3
            }
        }
    };

    const getCategoryColor = (category) => {
        const colors = {
            'AI/ML': 'bg-purple-600/20 text-purple-400 border-purple-500/30',
            'Web App': 'bg-blue-600/20 text-blue-400 border-blue-500/30',
            'Game': 'bg-green-600/20 text-green-400 border-green-500/30',
            'Creative Tool': 'bg-orange-600/20 text-orange-400 border-orange-500/30',
            'all': 'bg-gray-600/20 text-gray-400 border-gray-500/30'
        };
        return colors[category] || colors['all'];
    };

    return (
        <div className="min-h-screen py-8">
            {/* Header */}
            <div className="mb-8">
                <Link to="/">
                    <motion.button
                        className="flex items-center gap-2 mb-6 px-4 py-2 rounded-lg bg-element hover:bg-blue-600 text-theme-primary transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <ArrowLeft size={16} />
                        Back to Home
                    </motion.button>
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-theme-primary mb-4">
                        All Projects
                    </h1>
                    <p className="text-theme-secondary text-lg max-w-2xl mx-auto">
                        Explore my complete collection of projects, from AI-powered applications to creative tools and games.
                    </p>
                </motion.div>
            </div>

            {/* Search and Filter Controls */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-8 space-y-4"
            >
                {/* Search Bar */}
                <div className="relative max-w-md mx-auto">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-theme-secondary" size={20} />
                    <input
                        type="text"
                        placeholder="Search projects..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-lg bg-card border border-zinc-200/10 text-theme-primary placeholder-theme-secondary focus:outline-none focus:border-blue-500/50 transition-colors"
                    />
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        className="md:hidden flex items-center gap-2 px-4 py-2 rounded-lg bg-element text-theme-primary"
                    >
                        <Filter size={16} />
                        Filters
                    </button>

                    <div className={`${showFilters ? 'flex' : 'hidden'} md:flex flex-wrap justify-center gap-2 md:gap-3 w-full md:w-auto`}>
                        {categories.map((category) => (
                            <motion.button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 border ${selectedCategory === category
                                        ? getCategoryColor(category)
                                        : 'bg-element text-theme-secondary border-zinc-200/10 hover:bg-blue-600/10 hover:text-blue-400'
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {category === 'all' ? 'All Projects' : category}
                                <span className="ml-2 text-xs opacity-70">
                                    ({getProjectsByCategory(category).length})
                                </span>
                            </motion.button>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Projects Grid */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={selectedCategory + searchTerm}
                    className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl bg-card flex flex-col transition-all duration-300 border border-zinc-100/10 hover:border-blue-500/20"
                            variants={cardVariants}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            layout
                        >
                            <div className="h-[200px] w-full relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                                <motion.img
                                    src={project.image}
                                    alt={`${project.title} screenshot`}
                                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                                    style={{ objectPosition: 'center top' }}
                                />
                                <div className="absolute top-3 right-3 z-20">
                                    <span className={`px-2 py-1 text-xs font-medium rounded-full backdrop-blur-sm border ${getCategoryColor(project.category)}`}>
                                        {project.category}
                                    </span>
                                </div>
                                {project.featured && (
                                    <div className="absolute top-3 left-3 z-20">
                                        <span className="px-2 py-1 text-xs font-medium bg-yellow-600/90 text-white rounded-full backdrop-blur-sm">
                                            Featured
                                        </span>
                                    </div>
                                )}
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-3 text-theme-primary group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-theme-secondary mb-4 text-sm leading-relaxed flex-grow">
                                    {project.description}
                                </p>

                                {/* <div className="mb-5">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map(tech => (
                                            <motion.span
                                                key={tech}
                                                className="text-xs px-3 py-1 bg-element text-theme-primary rounded-full font-medium cursor-default border border-zinc-200/10"
                                                whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div> */}

                                <div className="flex gap-3 mt-auto">
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-element hover:bg-blue-600 text-theme-primary hover:text-white transition-all duration-300 border border-zinc-200/10 flex-1 justify-center"
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
                                            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-500/30 hover:bg-blue-600 text-blue-400 hover:text-white transition-all duration-300 flex-1 justify-center"
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
            </AnimatePresence>

            {/* No Results */}
            {filteredProjects.length === 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-16"
                >
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-xl font-semibold text-theme-primary mb-2">No projects found</h3>
                    <p className="text-theme-secondary">
                        Try adjusting your search terms or category filter.
                    </p>
                </motion.div>
            )}
        </div>
    );
}

export default ProjectsPage;
