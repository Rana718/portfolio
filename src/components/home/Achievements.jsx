import React from 'react';
import { motion } from 'framer-motion';
import { AuroraText } from '../ui/aurora-text';
import { BorderBeam } from '../ui/border-beam';
import { Vortex } from '../ui/vortex';
import { Trophy, GitBranch, Star, Code, Award, Target } from 'lucide-react';

function Achievements() {
    const achievements = [
        // {
        //     icon: <Trophy size={32} />,
        //     title: 'Open Source Contributor',
        //     description: 'Active contributor to various open-source projects with 500+ stars on GitHub',
        //     metric: '500+',
        //     metricLabel: 'GitHub Stars',
        //     color: 'from-yellow-500 to-orange-500'
        // },
        {
            icon: <GitBranch size={32} />,
            title: 'GitHub Contributions',
            description: 'Consistent contributions with 1000+ commits across multiple repositories',
            metric: '2800+',
            metricLabel: 'Commits',
            color: 'from-green-500 to-emerald-500'
        },
        {
            icon: <Code size={32} />,
            title: 'Production Projects',
            description: 'Successfully delivered 15+ production-ready applications',
            metric: '15+',
            metricLabel: 'Projects',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: <Star size={32} />,
            title: 'Client Satisfaction',
            description: 'Maintained excellent client relationships with 4.9/5 average rating',
            metric: '4.9/5',
            metricLabel: 'Rating',
            color: 'from-purple-500 to-pink-500'
        },
        {
            icon: <Award size={32} />,
            title: 'Technical Excellence',
            description: 'Expertise in 20+ technologies and modern development frameworks',
            metric: '20+',
            metricLabel: 'Technologies',
            color: 'from-red-500 to-rose-500'
        },
        {
            icon: <Target size={32} />,
            title: 'Zero Downtime',
            description: 'Implemented DevOps practices achieving 99.9% uptime',
            metric: '99.9%',
            metricLabel: 'Uptime',
            color: 'from-indigo-500 to-violet-500'
        }
    ];

    return (
        <div className="relative py-20 overflow-hidden">
            {/* Background effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/10 to-transparent dark:via-purple-950/10" />
            
            <div className="relative z-10 container mx-auto px-4">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <AuroraText 
                        className="text-4xl md:text-5xl font-bold mb-4"
                        colors={["#3b82f6", "#8b5cf6", "#ec4899", "#f59e0b"]}
                    >
                        Achievements & Recognition
                    </AuroraText>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Milestones reached and recognition earned through dedication and continuous learning
                    </p>
                </motion.div>

                {/* Achievement Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 max-w-7xl mx-auto">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            className="relative group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="relative h-full p-6 rounded-xl bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                                <BorderBeam size={250} duration={12} delay={index * 2} />
                                
                                <div className={`bg-gradient-to-r ${achievement.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                                    {achievement.icon}
                                </div>
                                
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    {achievement.title}
                                </h3>
                                
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                    {achievement.description}
                                </p>
                                
                                <div className="flex items-baseline gap-2">
                                    <span className={`text-3xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                                        {achievement.metric}
                                    </span>
                                    <span className="text-xs text-gray-500 dark:text-gray-500">
                                        {achievement.metricLabel}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to action */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        Continuously learning and growing • Always ready for new challenges
                    </p>
                </motion.div>
            </div>
        </div>
    );
}

export default Achievements;
