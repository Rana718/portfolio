import React from "react";
import { Html, useProgress } from "@react-three/drei";
import { motion } from "framer-motion";

const CanvasLoader: React.FC = () =>{
    const { progress } = useProgress();
    
    return(
        <Html as="div" center style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "20px",
        }}>
            <motion.div className="canvas-loader"
                initial={{ scale: 0}}
                animate={{ scale: [0, 1.5, 1]}}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "#915EFF",
                    boxShadow: "0 0 15px rgab(145, 94, 255, 0.5)",
                }}
            />
            <motion.p 
                style={{
                    fontSize: "14px",
                    color: "#F1F1F1",
                    fontWeight: "800",
                    marginTop: "40",
                }}
                animate={{
                    opacity: [0, 1, 0]
                }}    
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                }}
            >
            {progress.toFixed(2)}%
            </motion.p>

        </Html>
    )
};

export default CanvasLoader;