import React from 'react'
import { Calendar, Briefcase } from 'lucide-react'

function Experience() {
    const experiences = [
        {
            title: 'Full Stack Developer Intern',
            company: 'Tech Innovations',
            duration: 'June 2023 - Present',
            description: 'Working on developing scalable web applications using React, Node.js, and MongoDB. Implementing RESTful APIs and integrating third-party services.'
        },
        {
            title: 'Web Development Freelancer',
            company: 'Self-Employed',
            duration: 'Jan 2022 - May 2023',
            description: 'Designed and developed responsive websites for small businesses and startups. Implemented SEO best practices and performance optimizations.'
        }
    ]

    return (
        <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8 text-center text-theme-primary">Work Experience</h2>
            
            <div className="space-y-8">
                {experiences.map((exp, index) => (
                    <div key={index} className="p-6 rounded-lg shadow-md bg-card transition-colors duration-300">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-theme-primary">{exp.title}</h3>
                                <div className="flex items-center gap-2 text-theme-secondary">
                                    <Briefcase size={16} />
                                    <span>{exp.company}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium">
                                <Calendar size={16} />
                                <span>{exp.duration}</span>
                            </div>
                        </div>
                        <p className="text-theme-primary">{exp.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience
