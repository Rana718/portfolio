import React from 'react';
import { motion } from 'framer-motion';
import { Marquee } from '../ui/marquee';
import { AuroraText } from '../ui/aurora-text';
import { Meteors } from '../ui/meteors';
import { feedbacks } from '@/constants/feedback';
import { Star } from 'lucide-react';

const FeedbackCard = ({ feedback }) => {
    return (
        <div className="relative w-80 sm:w-96 h-72 mx-1 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 p-6 sm:p-8 shadow-sm transition-all duration-300">
            <Meteors number={3} />
            <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                    <img 
                        src={feedback.image} 
                        alt={feedback.name}
                        className="w-12 h-12 rounded-full border-2 border-blue-500"
                    />
                    <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                            {feedback.name}
                        </h3>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                            {feedback.role} at {feedback.company}
                        </p>
                    </div>
                </div>
                
                <div className="flex gap-1 mb-3">
                    {[...Array(feedback.rating)].map((_, i) => (
                        <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                    ))}
                </div>
                
                <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-4">
                    "{feedback.feedback}"
                </p>
            </div>
        </div>
    );
};

function Feedback() {
    const firstRow = feedbacks.slice(0, 5);
    const secondRow = feedbacks.slice(5, 10);

    return (
        <div className="relative py-20 overflow-hidden w-full">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/20 to-transparent dark:via-blue-950/10" />
            
            <div className="relative z-10 w-full">
                <motion.div 
                    className="text-center mb-12 px-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <AuroraText 
                        className="text-4xl md:text-5xl font-bold mb-4"
                        colors={["#3b82f6", "#8b5cf6", "#ec4899", "#06b6d4"]}
                    >
                        Client Testimonials
                    </AuroraText>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Don't just take my word for it - hear what clients and collaborators have to say about working together
                    </p>
                </motion.div>

                <div className="relative w-full">
                    <div className="absolute left-0 top-0 bottom-0 w-48 sm:w-64 bg-gradient-to-r from-white dark:from-[#151518] to-transparent z-10 pointer-events-none" />
                    
                    <div className="absolute right-0 top-0 bottom-0 w-48 sm:w-64 bg-gradient-to-l from-white dark:from-[#151518] to-transparent z-10 pointer-events-none" />
                    
                    <Marquee pauseOnHover className="[--duration:40s] mb-4">
                        {firstRow.map((feedback) => (
                            <FeedbackCard key={feedback.id} feedback={feedback} />
                        ))}
                    </Marquee>
                    
                    <Marquee reverse pauseOnHover className="[--duration:40s]">
                        {secondRow.map((feedback) => (
                            <FeedbackCard key={feedback.id} feedback={feedback} />
                        ))}
                    </Marquee>
                </div>

                <motion.div 
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto px-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {[
                        { label: 'Projects Completed', value: '15+' },
                        { label: 'Happy Clients', value: '12+' },
                        { label: 'Average Rating', value: '4.9/5' },
                        { label: 'Years Experience', value: '2+' }
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                {stat.value}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export default Feedback;