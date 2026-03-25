import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function DeepDetail() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  
  const t1 = useTransform(scrollYProgress, [0.2, 0.3, 0.4], [0, 1, 0]);
  const t2 = useTransform(scrollYProgress, [0.45, 0.55, 0.65], [0, 1, 0]);
  const t3 = useTransform(scrollYProgress, [0.7, 0.8, 0.9], [0, 1, 0]);

  return (
    <section ref={targetRef} className="h-[350vh] bg-black relative">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        <motion.div 
          style={{ 
            backgroundImage: "url('/images/herosection/ezgif-frame-050.png')",
            y: bgY
          }}
          className="absolute inset-0 w-full h-[150%] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[4px]" />
        
        <div className="relative z-10 w-full max-w-5xl px-8 flex justify-center text-center">
          <motion.h2 style={{ opacity: t1 }} className="absolute -translate-y-1/2 text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tight leading-tight">
            Every detail matters.
          </motion.h2>
          <motion.h2 style={{ opacity: t2 }} className="absolute -translate-y-1/2 text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-widest uppercase leading-tight">
            Built for precision.
          </motion.h2>
          <motion.h2 style={{ opacity: t3 }} className="absolute -translate-y-1/2 text-5xl md:text-7xl lg:text-8xl font-bold text-sky-400 tracking-tighter leading-tight">
            Designed to impress.
          </motion.h2>
        </div>
      </div>
    </section>
  );
}
