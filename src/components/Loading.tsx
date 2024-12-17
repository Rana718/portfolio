import { motion } from 'framer-motion';
import React from 'react';

const Loading = React.memo(() => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]"
    >
      <div className="flex flex-col items-center gap-2">
        {/* Animated circles */}
        <div className="flex gap-3 mb-4">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2
              }}
              className="w-4 h-4 rounded-full bg-gradient-to-r from-[#915EFF] to-[#34d399]"
            />
          ))}
        </div>

        {/* Progress bar */}
        <motion.div 
          className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden"
        >
          <motion.div
            animate={{
              x: ["-100%", "100%"]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
            className="w-full h-full bg-gradient-to-r from-[#915EFF] via-[#34d399] to-[#915EFF]"
          />
        </motion.div>

        <motion.p
          animate={{
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="text-gray-400 font-bold custom-font text-xl tracking-wider"
        >
          LOADING...
        </motion.p>
      </div>
    </motion.div>
  );
});

export default Loading;