import React from 'react';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { experiences } from '@/constants';

function Experience() {
    return (
        <div className="py-12 sm:py-16 md:py-20">
            <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center text-theme-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Work Experience
            </motion.h2>

            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <div className="relative">
                    {/* Desktop Timeline line - centered */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />
                    
                    {/* Mobile Timeline line - positioned to align with dot center */}
                    <div className="md:hidden absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />
                    
                    <div className="space-y-6 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                className="relative"
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {/* Desktop Layout */}
                                <div className="hidden md:flex items-center relative">
                                    {/* Left side content (for even index) */}
                                    {index % 2 === 0 ? (
                                        <>
                                            <div className="flex-1 flex justify-end pr-8">
                                                <div className="max-w-md w-full">
                                                    <div className="p-6 rounded-xl bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300">
                                                        <div className="flex items-center gap-3 mb-3">
                                                            <img 
                                                                src={exp.image} 
                                                                className='w-10 h-10 rounded-full' 
                                                                alt={exp.company} 
                                                            />
                                                            <div>
                                                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.company}</h3>
                                                                <p className="text-sm text-gray-600 dark:text-gray-400">{exp.title}</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-medium mb-3">
                                                            <Calendar size={14} />
                                                            <span>{exp.duration}</span>
                                                        </div>
                                                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                                            {exp.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {/* Center dot - positioned absolutely to center on line */}
                                            <div className="absolute left-1/2 transform -translate-x-1/2 w-7 h-7 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center z-10 shadow-lg">
                                                <div className="w-2 h-2 rounded-full bg-white" />
                                            </div>
                                            
                                            <div className="flex-1" />
                                        </>
                                    ) : (
                                        <>
                                            <div className="flex-1" />
                                            
                                            {/* Center dot - positioned absolutely to center on line */}
                                            <div className="absolute left-1/2 transform -translate-x-1/2 w-7 h-7 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center z-10 shadow-lg">
                                                <div className="w-2 h-2 rounded-full bg-white" />
                                            </div>
                                            
                                            <div className="flex-1 flex justify-start pl-8">
                                                <div className="max-w-md w-full">
                                                    <div className="p-6 rounded-xl bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300">
                                                        <div className="flex items-center gap-3 mb-3">
                                                            <img 
                                                                src={exp.image} 
                                                                className='w-10 h-10 rounded-full' 
                                                                alt={exp.company} 
                                                            />
                                                            <div>
                                                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.company}</h3>
                                                                <p className="text-sm text-gray-600 dark:text-gray-400">{exp.title}</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-medium mb-3">
                                                            <Calendar size={14} />
                                                            <span>{exp.duration}</span>
                                                        </div>
                                                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                                            {exp.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* Mobile Layout */}
                                <div className="md:hidden flex gap-3">
                                    {/* Timeline dot - aligned with line */}
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg relative">
                                            <div className="w-2 h-2 rounded-full bg-white" />
                                        </div>
                                    </div>
                                    
                                    {/* Content - reduced padding */}
                                    <div className="flex-1 pb-4">
                                        <div className="p-4 rounded-xl bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 shadow-lg">
                                            <div className="flex items-start gap-3 mb-3">
                                                <img 
                                                    src={exp.image} 
                                                    className='w-10 h-10 rounded-full flex-shrink-0' 
                                                    alt={exp.company} 
                                                />
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">{exp.company}</h3>
                                                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{exp.title}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-medium mb-2">
                                                <Calendar size={14} />
                                                <span>{exp.duration}</span>
                                            </div>
                                            <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                                {exp.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;