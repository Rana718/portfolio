import { ExternalLink, Github, Smartphone, Monitor, Clock, Gamepad2, Palette, Brain } from 'lucide-react';
import { motion } from 'framer-motion';
import { getSkillIcon } from '@/utils/SkillIcon';
import { getRandomBackground } from '@/constants/cardcolor';

function ProjectCard({ project, variants }) {
    const getCategoryIcon = (category) => {
        switch (category) {
            case 'Mobile App':
                return <Smartphone size={16} />;
            case 'Web App':
                return <Monitor size={16} />;
            case 'Game':
                return <Gamepad2 size={16} />;
            case 'Creative Tool':
                return <Palette size={16} />;
            case 'AI/ML':
                return <Brain size={16} />;
            default:
                return <Monitor size={16} />;
        }
    };

    const getCategoryColor = (category) => {
        const colors = {
            'AI/ML': 'bg-purple-600/90 text-white border-purple-500/50',
            'Web App': 'bg-blue-600/90 text-white border-blue-500/50',
            'Mobile App': 'bg-green-600/90 text-white border-green-500/50',
            'Game': 'bg-red-600/90 text-white border-red-500/50',
            'Creative Tool': 'bg-orange-600/90 text-white border-orange-500/50',
        };
        return colors[category] || 'bg-gray-600/90 text-white border-gray-500/50';
    };

    const isIncomplete = (status) => {
        return status !== 'completed';
    };

    
    const getAvailableSkillIcons = (skills) => {
        const availableIcons = [];
        const unavailableCount = skills.filter(skill => {
            const iconPath = getSkillIcon(skill);
            if (iconPath) {
                availableIcons.push({ skill, iconPath });
                return false;
            }
            return true;
        }).length;

        return { availableIcons, unavailableCount };
    };

    const renderSkillIcons = () => {
        if (!project.tech || project.tech.length === 0) return null;

        const { availableIcons, unavailableCount } = getAvailableSkillIcons(project.tech);
        const maxVisible = 5;
        const visibleIcons = availableIcons.slice(0, maxVisible);
        const remainingCount = (availableIcons.length - maxVisible) + unavailableCount;

        return (
            <div className="flex items-center mb-4">
                <div className="flex items-center">
                    {visibleIcons.map((item, index) => (
                        <div
                            key={item.skill}
                            className="relative"
                            style={{ 
                                marginLeft: index > 0 ? '-6px' : '0',
                                zIndex: visibleIcons.length - index 
                            }}
                        >
                            <div className="w-8 h-8 bg-element border-2 border-gray-300 dark:border-gray-600 rounded-full flex items-center justify-center p-1 hover:scale-110 transition-transform duration-200">
                                <img
                                    src={`/icons/${item.iconPath}`}
                                    alt={item.skill}
                                    className="w-4 h-4 object-contain"
                                    title={item.skill}
                                />
                            </div>
                        </div>
                    ))}
                    
                    {remainingCount > 0 && (
                        <div
                            className="relative w-8 h-8 bg-element border-2 border-gray-300 dark:border-gray-600 rounded-full flex items-center justify-center text-xs font-semibold text-theme-primary hover:scale-110 transition-transform duration-200"
                            style={{ 
                                marginLeft: visibleIcons.length > 0 ? '-6px' : '0',
                                zIndex: 0
                            }}
                            title={`+${remainingCount} more technologies`}
                        >
                            +{remainingCount}
                        </div>
                    )}
                </div>
            </div>
        );
    };

    return (
        <motion.div
            className={`group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl bg-card flex flex-col transition-all duration-300 border ${
                isIncomplete(project.status) 
                    ? 'border-yellow-500/30 hover:border-yellow-400/50 bg-gradient-to-br from-card to-yellow-900/5' 
                    : 'border-gray-100/10 hover:border-blue-500/20'
            }`}
            variants={variants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            layout
        >
            <div className="h-[200px] w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                
                <div className={`w-full h-full ${getRandomBackground(project.id)} flex items-center justify-center p-4 relative`}>
                    <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-white/5 via-transparent to-black/10"></div>
                    
                    <motion.img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className={`group-hover:scale-105 transition-transform duration-500 rounded-lg shadow-2xl relative z-10 ${
                            project.category === 'Mobile App' 
                                ? 'max-w-[70%] max-h-[100%] object-contain' 
                                : 'w-full h-full object-cover rounded-lg'
                        }`}
                        style={{ 
                            filter: 'drop-shadow(0 15px 35px rgba(0,0,0,0.6))',
                            ...(project.category === 'Mobile App' 
                                ? {} 
                                : { objectPosition: 'center top' }
                            )
                        }}
                        onError={(e) => {
                            e.target.style.display = 'none';
                        }}
                        onLoad={(e) => {
                            const img = e.target;
                            const aspectRatio = img.naturalWidth / img.naturalHeight;
                            
                            if (project.category !== 'Mobile App') {
                                if (aspectRatio > 1.5) {
                                    img.style.width = '100%';
                                    img.style.height = 'auto';
                                    img.style.objectFit = 'cover';
                                } else if (aspectRatio < 0.8) {
                                    img.style.width = 'auto';
                                    img.style.height = '100%';
                                    img.style.objectFit = 'cover';
                                    img.style.objectPosition = 'center';
                                }
                            }
                        }}
                    />
                </div>
                
                {/* Category icon only (no text) */}
                <div className="absolute top-3 left-3 z-20">
                    <motion.div 
                        className={`p-2 rounded-full backdrop-blur-sm border ${getCategoryColor(project.category)} shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        title={project.category}
                    >
                        {getCategoryIcon(project.category)}
                    </motion.div>
                </div>
                
                {/* In Progress badge */}
                {isIncomplete(project.status) && (
                    <div className="absolute top-3 right-3 z-20">
                        <span className="px-2 py-1 text-xs font-medium rounded-full backdrop-blur-sm flex items-center gap-1 bg-yellow-600/90 text-white border border-yellow-500/50 shadow-lg">
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

                <p className="text-theme-secondary mb-4 text-sm leading-relaxed">
                    {project.description}
                </p>

                {/* Skill Icons */}
                {renderSkillIcons()}

                <div className="flex gap-3 mt-auto">
                    <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 border flex-1 justify-center ${
                            isIncomplete(project.status)
                                ? 'bg-yellow-600/10 hover:bg-yellow-600 text-yellow-400 hover:text-white border-yellow-500/30'
                                : 'bg-element hover:bg-blue-600 text-theme-primary hover:text-white border-gray-100/10'
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
