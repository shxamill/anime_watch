import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Details() {
  const targetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Example mappings
  // Fade in first text block, then fade out, while second fades in
  const y1 = useTransform(scrollYProgress, [0, 0.4, 0.6], [50, 0, -50]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.4, 0.5], [0, 1, 1, 0]);

  const y2 = useTransform(scrollYProgress, [0.4, 0.7, 0.9], [50, 0, -50]);
  const opacity2 = useTransform(scrollYProgress, [0.4, 0.5, 0.7, 0.8], [0, 1, 1, 0]);

  return (
    <section ref={targetRef} className="h-[300vh] bg-offblack text-white relative border-t border-neutral-900">
      <div className="sticky top-0 h-screen py-[20vh] flex flex-col md:flex-row items-center justify-center px-8 md:px-24 max-w-7xl mx-auto space-y-20 md:space-y-0">
        
        {/* Left locked title */}
        <div className="md:w-1/2 flex items-center justify-center md:justify-start">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter w-full max-w-lg mb-12 md:mb-0 text-white drop-shadow-2xl leading-tight">
            A Journey<br/>Through Gears.
          </h2>
        </div>
        
        {/* Right scroll narrative */}
        <div className="md:w-1/2 relative h-1/2 md:h-full flex items-center justify-center md:justify-end">
          
          <motion.div style={{ opacity: opacity1, y: y1 }} className="absolute text-xl md:text-4xl font-light text-neutral-400 w-full max-w-lg leading-relaxed">
            The beating heart of this mechanical marvel is powered entirely by your life. 
            <span className="block mt-6 text-white font-medium">No batteries. Just pure motion.</span>
          </motion.div>
          
          <motion.div style={{ opacity: opacity2, y: y2 }} className="absolute text-xl md:text-4xl font-light text-neutral-400 w-full max-w-lg leading-relaxed">
            Sleek silver alloys seamlessly pair with premium, textured leather. 
            <span className="block mt-6 text-silver font-medium">Redefining accessible luxury.</span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
