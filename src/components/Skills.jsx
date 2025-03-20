import React from 'react'

function Skills() {
    const skills = [
        'Next.js',
        'React',
        'TypeScript',
        'JavaScript',
        'Tailwind CSS',
        'Node.js',
        'MongoDB',
        'Express',
        'Git',
        'REST API'
    ]

    return (
        <div className="p-6 rounded-lg shadow-md bg-card transition-colors duration-300">
            <h2 className="text-2xl font-bold mb-6 border-b pb-2 border-gray-200 dark:border-gray-700 text-theme-primary">Technical Skills</h2>
            
            <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                    <div 
                        key={skill}
                        className="bg-element text-theme-primary px-4 py-2 rounded-2xl text-sm font-medium transition-colors duration-300"
                    >
                        {skill}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills