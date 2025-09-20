import { Calendar, } from 'lucide-react'
import { experiences } from '@/constants'

function Experience() {
    // const experiences = [
    //     {
    //         title: 'Full Stack Developer',
    //         company: 'Saciva',
    //         duration: 'DEC 2024 - Present',
    //         description: " At Saciva, I develop scalable web applications, design and optimize APIs, and manage databases efficiently I implement real-time web notifications and enhance performance using Redis and BullMQ. On the frontend, I build responsive interfaces with Next.js and TailwindCSS, and I streamline deployment processes using GitHub Actions and Render."
    //     }
    // ]

    return (
        <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8 text-center text-theme-primary">Work Experience</h2>

            <div className="space-y-8">
                {experiences.map((exp, index) => (
                    <div key={index} className="p-6 rounded-lg shadow-md bg-card transition-colors duration-300">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                            <div>
                                <div className="flex items-center gap-3">
                                    <div className='w-12 h-12 rounded-full flex items-center justify-center'>
                                        <img src={exp.image} className='w-9 h-9' alt={exp.company} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl text-theme-primary">{exp.company}</h3>
                                        <p className="text-gray-500">{exp.title}</p>
                                    </div>

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
