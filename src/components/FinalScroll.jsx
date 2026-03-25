import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function FinalScroll() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start end", "end end"] });
  const opacity = useTransform(scrollYProgress, [0.3, 0.8, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.3, 0.8], [0.95, 1]);

  return (
    <section ref={targetRef} className="h-[200vh] bg-black relative">
      <motion.div 
        className="sticky top-0 h-screen flex items-center justify-center px-4 text-center"
        style={{ opacity, scale }}
      >
        <h2 className="text-5xl md:text-[9rem] font-semibold tracking-tighter text-neutral-600">
          Time, <span className="text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.2)]">redefined.</span>
        </h2>
      </motion.div>
    </section>
  );
}
