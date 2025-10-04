import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DottedMap } from '../ui/dotted-map';
import { AuroraText } from '../ui/aurora-text';
import { Particles } from '../ui/particles';
import { Mail, Send, User, MessageSquare } from 'lucide-react';

function GlobalPresence() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Create mailto link
        const mailtoLink = `mailto:ranadolui718@gmail.com?subject=Message from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.name}%0AEmail: ${formData.email}`;
        window.location.href = mailtoLink;
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Markers for different locations/clients
    const locations = [
        { lat: 22.5726, lng: 88.3639, name: 'Kolkata, India' },
        { lat: 40.7128, lng: -74.0060, name: 'New York, USA' },
        { lat: 51.5074, lng: -0.1278, name: 'London, UK' },
        { lat: 35.6762, lng: 139.6503, name: 'Tokyo, Japan' },
        { lat: -33.8688, lng: 151.2093, name: 'Sydney, Australia' }
    ];

    // Convert lat/lng to map coordinates
    const latLngToMapCoords = (lat, lng) => {
        const x = ((lng + 180) * 150) / 360;
        const y = ((90 - lat) * 75) / 180;
        return { x, y };
    };

    const markers = locations.map(loc => ({
        ...latLngToMapCoords(loc.lat, loc.lng),
        size: 0.5,
        name: loc.name
    }));

    return (
        <div className="relative py-20 overflow-hidden">
            {/* Particles background */}
            <div className="absolute inset-0 pointer-events-none">
                <Particles 
                    className="absolute inset-0" 
                    quantity={50}
                    color="#3b82f6"
                    size={0.6}
                />
            </div>

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
                        colors={["#3b82f6", "#8b5cf6", "#ec4899", "#06b6d4"]}
                    >
                        Contact Me
                    </AuroraText>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Let's connect and discuss how we can work together on your next project
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                    {/* Map Section */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="relative p-8 bg-white dark:bg-gray-900/50 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                Global Reach
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                Working with clients across multiple continents and time zones
                            </p>
                            <div className="relative h-80">
                                <DottedMap
                                    width={150}
                                    height={75}
                                    mapSamples={8000}
                                    markers={markers}
                                    markerColor="#3b82f6"
                                    dotRadius={0.25}
                                />
                            </div>
                            
                            {/* Contact Info */}
                            <div className="mt-6 space-y-3">
                                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                    <Mail className="text-blue-500" size={20} />
                                    <span className="text-sm">ranadolui718@gmail.com</span>
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    Available for remote opportunities worldwide
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="p-8 bg-white dark:bg-gray-900/50 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                Send a Message
                            </h3>
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name Input */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Your Name
                                    </label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                </div>

                                {/* Email Input */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Your Email
                                    </label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                {/* Message Textarea */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Your Message
                                    </label>
                                    <div className="relative">
                                        <MessageSquare className="absolute left-3 top-3 text-gray-400" size={18} />
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                                            placeholder="Tell me about your project..."
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Send size={18} />
                                    Send Message
                                </motion.button>
                            </form>

                            <p className="mt-4 text-xs text-center text-gray-500 dark:text-gray-400">
                                This will open your default email client
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default GlobalPresence;
