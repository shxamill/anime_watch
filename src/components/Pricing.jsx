import React from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

export default function Pricing() {
  const count = useSpring(5999, { stiffness: 30, damping: 15 });
  const displayCount = useTransform(count, latest => Math.round(latest).toLocaleString());

  return (
    <section className="bg-black py-[20vh] relative flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient from-sky-900/10 to-black opacity-40 pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        onViewportEnter={() => count.set(4290)}
        onViewportLeave={() => count.set(5999)}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center text-center w-full max-w-4xl px-4"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-sky-600/20 blur-[100px] rounded-full" />
        
        <span className="relative z-10 bg-white shadow-[0_0_20px_rgba(255,255,255,0.4)] text-black text-xs md:text-sm font-bold uppercase tracking-widest px-6 py-2 rounded-full mb-12">28% OFF</span>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
          <span className="text-neutral-500 line-through text-4xl md:text-5xl font-light">₹5,999</span>
          <div className="flex items-baseline text-white drop-shadow-[0_0_30px_rgba(56,189,248,0.4)]">
            <span className="text-4xl md:text-6xl font-light">₹</span>
            <motion.h2 className="text-7xl md:text-[10rem] font-bold tracking-tighter leading-none">
              {displayCount}
            </motion.h2>
          </div>
        </div>
        
        <p className="relative z-10 mt-6 text-xl md:text-3xl font-light text-neutral-400">
          Luxury doesn't have to be expensive.
        </p>
      </motion.div>
    </section>
  );
}
