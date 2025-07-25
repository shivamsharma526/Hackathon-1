import { motion } from "framer-motion";
import { useState } from "react";

const AnimationText = ({ text }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex justify-center  bg-white text-7xl font-light space-x-1 cursor-default capitalize">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
          animate={
            hoveredIndex === index
            
            
              ? {
                  fontWeight: 100
                }
              : {
                  fontWeight: 400
                }
          }
          transition={{ duration: 0.4 }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimationText
