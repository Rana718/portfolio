import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { AuroraText } from '../ui/aurora-text';
import { OrbitingCircles } from '../ui/orbiting-circles';
import { Code } from 'lucide-react';
import { ThemeContext } from '../../App';
import { 
    SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss,
    SiNodedotjs, SiExpress, SiGo, SiPython, SiFastapi, SiFlask,
    SiPostgresql, SiMongodb, SiRedis, SiMysql, SiPrisma,
    SiDocker, SiKubernetes, SiNginx, SiGithubactions, SiAmazonwebservices,
    SiRabbitmq, SiApachekafka, SiVite
} from 'react-icons/si';
import { TbBrandReactNative, TbBrandRedux } from 'react-icons/tb';

function TechStack() {
    const { isDarkTheme } = useContext(ThemeContext);
    const [activeCategory, setActiveCategory] = useState('all');
    const [orbitRadii, setOrbitRadii] = useState({
        inner: 80,
        middle: 120,
        outer: 160
    });

    // Responsive orbit radii - INCREASED
    useEffect(() => {
        const updateRadii = () => {
            if (window.innerWidth < 640) {
                setOrbitRadii({ inner: 70, middle: 110, outer: 150 });
            } else if (window.innerWidth < 768) {
                setOrbitRadii({ inner: 90, middle: 140, outer: 190 });
            } else {
                setOrbitRadii({ inner: 120, middle: 180, outer: 240 });
            }
        };
        updateRadii();
        window.addEventListener('resize', updateRadii);
        return () => window.removeEventListener('resize', updateRadii);
    }, []);

    const categories = [
        { id: 'all', name: 'All' },
        { id: 'frontend', name: 'Frontend' },
        { id: 'backend', name: 'Backend' },
        { id: 'devops', name: 'DevOps' }
    ];

    const allTechnologies = [
        // Frontend
        { name: 'React', category: 'frontend', icon: SiReact, lightColor: '#61DAFB', darkColor: '#61DAFB' },
        { name: 'Next.js', category: 'frontend', icon: SiNextdotjs, lightColor: '#000000', darkColor: '#FFFFFF' },
        { name: 'TypeScript', category: 'frontend', icon: SiTypescript, lightColor: '#3178C6', darkColor: '#3178C6' },
        { name: 'JavaScript', category: 'frontend', icon: SiJavascript, lightColor: '#F7DF1E', darkColor: '#F7DF1E' },
        { name: 'TailwindCSS', category: 'frontend', icon: SiTailwindcss, lightColor: '#06B6D4', darkColor: '#06B6D4' },
        { name: 'React Native', category: 'frontend', icon: TbBrandReactNative, lightColor: '#61DAFB', darkColor: '#61DAFB' },
        { name: 'Vite', category: 'frontend', icon: SiVite, lightColor: '#646CFF', darkColor: '#646CFF' },
        { name: 'Zustand', category: 'frontend', icon: TbBrandRedux, lightColor: '#443C68', darkColor: '#9D8BD6' },
        
        // Backend
        { name: 'Node.js', category: 'backend', icon: SiNodedotjs, lightColor: '#339933', darkColor: '#339933' },
        { name: 'Express.js', category: 'backend', icon: SiExpress, lightColor: '#000000', darkColor: '#FFFFFF' },
        { name: 'Golang', category: 'backend', icon: SiGo, lightColor: '#00ADD8', darkColor: '#00ADD8' },
        { name: 'Python', category: 'backend', icon: SiPython, lightColor: '#3776AB', darkColor: '#3776AB' },
        { name: 'FastAPI', category: 'backend', icon: SiFastapi, lightColor: '#009688', darkColor: '#009688' },
        { name: 'Flask', category: 'backend', icon: SiFlask, lightColor: '#000000', darkColor: '#FFFFFF' },
        { name: 'PostgreSQL', category: 'backend', icon: SiPostgresql, lightColor: '#4169E1', darkColor: '#4169E1' },
        { name: 'MongoDB', category: 'backend', icon: SiMongodb, lightColor: '#47A248', darkColor: '#47A248' },
        { name: 'Redis', category: 'backend', icon: SiRedis, lightColor: '#DC382D', darkColor: '#DC382D' },
        { name: 'MySQL', category: 'backend', icon: SiMysql, lightColor: '#4479A1', darkColor: '#4479A1' },
        { name: 'Prisma', category: 'backend', icon: SiPrisma, lightColor: '#2D3748', darkColor: '#CBD5E0' },
        
        // DevOps
        { name: 'Docker', category: 'devops', icon: SiDocker, lightColor: '#2496ED', darkColor: '#2496ED' },
        { name: 'Kubernetes', category: 'devops', icon: SiKubernetes, lightColor: '#326CE5', darkColor: '#326CE5' },
        { name: 'Nginx', category: 'devops', icon: SiNginx, lightColor: '#009639', darkColor: '#009639' },
        { name: 'GitHub Actions', category: 'devops', icon: SiGithubactions, lightColor: '#2088FF', darkColor: '#2088FF' },
        { name: 'AWS', category: 'devops', icon: SiAmazonwebservices, lightColor: '#FF9900', darkColor: '#FF9900' },
        { name: 'RabbitMQ', category: 'devops', icon: SiRabbitmq, lightColor: '#FF6600', darkColor: '#FF6600' },
        { name: 'Kafka', category: 'devops', icon: SiApachekafka, lightColor: '#231F20', darkColor: '#FFFFFF' }
    ];

    const getFilteredTechs = () => {
        if (activeCategory === 'all') return allTechnologies;
        return allTechnologies.filter(tech => tech.category === activeCategory);
    };

    const filteredTechs = getFilteredTechs();
    const innerRing = filteredTechs.slice(0, 6);
    const middleRing = filteredTechs.slice(6, 15);
    const outerRing = filteredTechs.slice(15, 27);

    const TechIcon = ({ tech, index, ring }) => {
        const Icon = tech.icon;
        const color = isDarkTheme ? tech.darkColor : tech.lightColor;
        return (
            <motion.div 
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 aspect-square flex-shrink-0 bg-white dark:bg-gray-900 rounded-full border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden p-1.5 sm:p-2"
                whileHover={{ 
                    scale: 1.3, 
                    y: -4,
                    rotate: 15,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                    transition: { duration: 0.2 }
                }}
                initial={{ scale: 0, rotate: ring === 'inner' ? -180 : ring === 'middle' ? 180 : -270, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ 
                    duration: 0.6, 
                    delay: 0.2 + index * 0.1, 
                    type: "spring",
                    bounce: 0.5
                }}
                style={{ zIndex: ring === 'inner' ? 40 : ring === 'middle' ? 30 : 20 }}
            >
                <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full flex items-center justify-center"
                    title={tech.name}
                >
                    <Icon 
                        className="w-full h-full" 
                        style={{ color: color }}
                    />
                </motion.div>
            </motion.div>
        );
    };

    return (
        <div className="relative py-2 md:py-6 overflow-hidden">
            <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
                <motion.div 
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <AuroraText 
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4"
                        colors={["#3b82f6", "#8b5cf6", "#ec4899", "#06b6d4"]}
                    >
                        Technology Stack
                    </AuroraText>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
                        Modern technologies and frameworks I work with
                    </p>
                </motion.div>

                {/* Category Tabs */}
                <motion.div 
                    className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                activeCategory === category.id
                                    ? 'bg-blue-500 text-white shadow-lg scale-105'
                                    : 'bg-white dark:bg-gray-900/50 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:shadow-md'
                            }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </motion.div>

                {/* Orbiting Circles */}
                <motion.div 
                    className="flex justify-center mb-8 sm:mb-12"
                    initial={{ opacity: 0, scale: 0.3, rotateY: 180 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 1.2, delay: 0.4, type: "spring", bounce: 0.4 }}
                >
                    <div className="relative flex items-center justify-center w-80 h-80 sm:w-[450px] sm:h-[450px] md:w-[550px] md:h-[550px]">
                        {/* Center icon */}
                        <motion.div 
                            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center z-50 shadow-lg"
                            initial={{ scale: 0, rotate: -360, opacity: 0 }}
                            animate={{ scale: 1, rotate: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.6, type: "spring", bounce: 0.6 }}
                            whileHover={{ 
                                scale: 1.2, 
                                rotate: 360,
                                boxShadow: "0 0 30px rgba(37, 99, 235, 0.5)",
                                transition: { duration: 0.3 }
                            }}
                        >
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            >
                                <Code className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                            </motion.div>
                        </motion.div>
                        
                        {/* Inner ring */}
                        {innerRing.length > 0 && (
                            <OrbitingCircles
                                className="border-none"
                                duration={20}
                                radius={orbitRadii.inner}
                                reverse={false}
                            >
                                {innerRing.map((tech, index) => (
                                    <TechIcon key={`inner-${tech.name}`} tech={tech} index={index} ring="inner" />
                                ))}
                            </OrbitingCircles>
                        )}

                        {/* Middle ring */}
                        {middleRing.length > 0 && (
                            <OrbitingCircles
                                className="border-none"
                                duration={25}
                                radius={orbitRadii.middle}
                                reverse={true}
                            >
                                {middleRing.map((tech, index) => (
                                    <TechIcon key={`middle-${tech.name}`} tech={tech} index={index} ring="middle" />
                                ))}
                            </OrbitingCircles>
                        )}

                        {/* Outer ring */}
                        {outerRing.length > 0 && (
                            <OrbitingCircles
                                className="border-none"
                                duration={30}
                                radius={orbitRadii.outer}
                                reverse={false}
                            >
                                {outerRing.map((tech, index) => (
                                    <TechIcon key={`outer-${tech.name}`} tech={tech} index={index} ring="outer" />
                                ))}
                            </OrbitingCircles>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default TechStack;
