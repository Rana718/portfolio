import React from 'react';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';
import downloadResume from '../utils/Download';

function Navbar({ visible }) {
    return (
        <motion.div
            className="fixed top-0 left-0 right-0 bg-card border-b border-gray-200 dark:border-gray-800 z-50 shadow-md"
            initial={{ y: -80 }}
            animate={{ y: visible ? 0 : -80 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
        >
            <div className="container mx-auto px-4 py-2">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 cursor-pointer group transition-all duration-300 hover:scale-105">
                        {/* <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm group-hover:shadow-lg group-hover:shadow-blue-500/40 transition-all duration-300">
                            RD
                        </div> */}
                        <div>
                            <h2 className="text-theme-primary font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Rana Dolui</h2>
                            <p className="text-[10px] text-gray-500 dark:text-gray-400 -mt-[2px] group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">Full Stack Developer</p>
                        </div>
                    </div>

                    <button onClick={downloadResume} className="px-4 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 hover:shadow-md hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 text-sm">
                        <Download size={16} /> Resume
                    </button>
                </div>
            </div>
        </motion.div>
    );
}

export default Navbar;
