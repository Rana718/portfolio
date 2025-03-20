import React from 'react'
import { Github, Linkedin, Twitter, Mail, MapPin } from 'lucide-react'

function Connect() {
    const socialLinks = [
        { icon: <Github size={20} />, name: 'GitHub', url: 'https://github.com/yourusername' },
        { icon: <Linkedin size={20} />, name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername' },
        { icon: <Twitter size={20} />, name: 'X (Twitter)', url: 'https://twitter.com/yourusername' },
        { icon: <Mail size={20} />, name: 'hello@example.com', url: 'mailto:hello@example.com' },
        { icon: <MapPin size={20} />, name: 'Bengal, India', url: '#' }
    ]

    return (
        <div className="p-6 rounded-lg shadow-md bg-card transition-colors duration-300">
            <h2 className="text-2xl font-bold mb-6 border-b pb-2 border-gray-200 dark:border-gray-700 text-theme-primary">Let's Connect</h2>
            
            <div className="space-y-4">
                {socialLinks.map((link) => (
                    <a 
                        key={link.name}
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-md hover:bg-element transition-colors duration-300 text-theme-primary"
                    >
                        <div className="text-blue-600 dark:text-blue-400">
                            {link.icon}
                        </div>
                        <span>{link.name}</span>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Connect
