import { ExternalLink, Github, Smartphone, Monitor, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

function ProjectCard({ project, variants }) {
    const getCategoryIcon = (category) => {
        switch (category) {
            case 'Mobile App':
                return <Smartphone size={14} />;
            case 'Web App':
                return <Monitor size={14} />;
            default:
                return null;
        }
    };

    const getCategoryColor = (category) => {
        const colors = {
            'AI/ML': 'bg-purple-600/90 text-white',
            'Web App': 'bg-blue-600/90 text-white',
            'Mobile App': 'bg-green-600/90 text-white',
            'Game': 'bg-red-600/90 text-white',
            'Creative Tool': 'bg-orange-600/90 text-white',
        };
        return colors[category] || 'bg-gray-600/90 text-white';
    };

    const isIncomplete = (status) => {
        return status !== 'completed';
    };

    return (
        <motion.div
            className={`group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl bg-card flex flex-col transition-all duration-300 border ${
                isIncomplete(project.status) 
                    ? 'border-yellow-500/30 hover:border-yellow-400/50 bg-gradient-to-br from-card to-yellow-900/5' 
                    : 'border-zinc-100/10 hover:border-blue-500/20'
            }`}
            variants={variants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            layout
        >
            <div className="h-[200px] w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                <motion.img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className={`w-full h-full object-center group-hover:scale-110 transition-transform duration-500 ${
                        project.category === 'Mobile App' 
                            ? 'object-contain bg-gray-900' 
                            : 'object-cover'
                    }`}
                    style={{ objectPosition: 'center top' }}
                />
                
                <div className="absolute top-3 left-3 z-20">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full backdrop-blur-sm flex items-center gap-1 ${getCategoryColor(project.category)}`}>
                        {getCategoryIcon(project.category)}
                        {project.category}
                    </span>
                </div>
                
                {isIncomplete(project.status) && (
                    <div className="absolute top-3 right-3 z-20">
                        <span className="px-2 py-1 text-xs font-medium rounded-full backdrop-blur-sm flex items-center gap-1 bg-yellow-600/90 text-white">
                            <Clock size={12} />
                            In Progress
                        </span>
                    </div>
                )}

            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className={`text-xl font-bold mb-3 transition-colors ${
                    isIncomplete(project.status) 
                        ? 'text-yellow-400 group-hover:text-yellow-300' 
                        : 'text-theme-primary group-hover:text-blue-400'
                }`}>
                    {project.title}
                    {isIncomplete(project.status) && (
                        <span className="ml-2 text-xs bg-yellow-600/20 text-yellow-400 px-2 py-1 rounded-full">
                            WIP
                        </span>
                    )}
                </h3>

                <p className="text-theme-secondary mb-4 text-sm leading-relaxed flex-grow">
                    {project.description}
                </p>

                <div className="flex gap-3 mt-auto">
                    <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 border flex-1 justify-center ${
                            isIncomplete(project.status)
                                ? 'bg-yellow-600/10 hover:bg-yellow-600 text-yellow-400 hover:text-white border-yellow-500/30'
                                : 'bg-element hover:bg-blue-600 text-theme-primary hover:text-white border-zinc-200/10'
                        }`}
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
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 border flex-1 justify-center ${
                                isIncomplete(project.status)
                                    ? 'border-yellow-500/30 hover:bg-yellow-600 text-yellow-400 hover:text-white'
                                    : 'border-blue-500/30 hover:bg-blue-600 text-blue-400 hover:text-white'
                            }`}
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
    );
}

export default ProjectCard;
