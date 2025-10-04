import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Search } from 'lucide-react';
import { projects, getCategories, getProjectsByCategory } from '../constants';
import ProjectCard from '@/components/home/ProjectCard';
import SEO from '../utils/SEO';

function ProjectsPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProjects, setFilteredProjects] = useState(projects);
    const [showFilters, setShowFilters] = useState(false);

    const categories = getCategories();

    const getCategoryFilterColor = (category, isSelected) => {
        if (!isSelected) {
            return 'bg-element text-theme-secondary border-gray-100/20 hover:bg-blue-600/10 hover:text-blue-400';
        }

        const colors = {
            'AI/ML': 'bg-purple-600/20 text-purple-400 border-purple-500/30',
            'Web App': 'bg-blue-600/20 text-blue-400 border-blue-500/30',
            'Mobile App': 'bg-green-600/20 text-green-400 border-green-500/30',
            'Game': 'bg-red-600/20 text-red-400 border-red-500/30',
            'Creative Tool': 'bg-orange-600/20 text-orange-400 border-orange-500/30',
            'all': 'bg-blue-600/20 text-blue-400 border-blue-500/30'
        };
        return colors[category] || colors['all'];
    };

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

    return (
        <div className="min-h-screen py-8 lg:mx-56 md:mx-8 mx-2 px-4 ">
            <SEO 
                title="Projects - Rana Dolui | Full Stack Developer Portfolio"
                description="Explore my complete collection of projects including AI-powered applications, web apps, mobile apps, games, and creative tools. Built with React, Next.js, Go, Python, and modern technologies."
                keywords="Rana Dolui Projects, Full Stack Developer Portfolio, React Projects, Next.js Projects, AI Applications, Web Development Projects, Mobile Apps, Python Projects, Go Projects, JavaScript Portfolio, TypeScript Projects"
                url="https://ranadolui.me/projects"
            />
            
            {/* Header */}
            <div className="mb-8">
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
                        className="w-full pl-10 pr-4 py-3 rounded-lg bg-card border border-gray-100/20 text-theme-primary placeholder-theme-secondary focus:outline-none focus:border-blue-500/50 transition-colors"
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
                                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 border ${getCategoryFilterColor(category, selectedCategory === category)}`}
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
                        <ProjectCard
                            key={project.id}
                            project={project}
                            variants={cardVariants}
                        />
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
