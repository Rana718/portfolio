import React from 'react'
import { ExternalLink, Github } from 'lucide-react'

function Projects() {
    const projects = [
        {
            title: 'E-commerce Platform',
            description: 'A full-stack e-commerce platform built with Next.js, TypeScript, and MongoDB. Features include user authentication, product filtering, cart functionality, and payment integration.',
            tech: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS'],
            github: 'https://github.com/yourusername/ecommerce',
            demo: 'https://ecommerce-demo.example.com'
        },
        {
            title: 'AI Chat Assistant',
            description: 'An AI-powered chat assistant that uses machine learning to provide helpful responses. Built with React, Node.js, and integrated with OpenAI API.',
            tech: ['React', 'Node.js', 'OpenAI', 'Express'],
            github: 'https://github.com/yourusername/ai-assistant',
            demo: 'https://assistant-demo.example.com'
        },
        {
            title: 'Portfolio Website',
            description: 'Personal portfolio website built with React and Tailwind CSS. Features responsive design, dark/light mode, and interactive elements.',
            tech: ['React', 'Tailwind CSS', 'Vite'],
            github: 'https://github.com/yourusername/portfolio',
            demo: '#'
        }
    ]

    return (
        <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8 text-center text-theme-primary">Projects</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="p-6 rounded-lg shadow-md bg-card flex flex-col transition-colors duration-300">
                        <h3 className="text-xl font-bold mb-2 text-theme-primary">{project.title}</h3>
                        <p className="text-theme-secondary mb-4 flex-grow">{project.description}</p>
                        
                        <div className="mb-4">
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map(tech => (
                                    <span 
                                        key={tech} 
                                        className="text-xs px-2 py-1 bg-element text-theme-primary rounded-2xl transition-colors duration-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        
                        <div className="flex gap-4 mt-auto">
                            <a 
                                href={project.github} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-theme-secondary hover:text-blue-600 dark:hover:text-blue-400"
                            >
                                <Github size={16} />
                                <span>Code</span>
                            </a>
                            <a 
                                href={project.demo} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-theme-secondary hover:text-blue-600 dark:hover:text-blue-400"
                            >
                                <ExternalLink size={16} />
                                <span>Demo</span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects