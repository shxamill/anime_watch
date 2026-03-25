import React from 'react';
import { motion } from 'framer-motion';

export default function Story() {
  const lineVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="relative min-h-[150vh] bg-black flex flex-col items-center justify-center py-40 border-t border-neutral-900 border-opacity-50 overflow-hidden">
      <div className="absolute inset-0 w-full h-full lg:sticky lg:top-0 h-screen overflow-hidden opacity-30 pointer-events-none flex justify-center items-center">
         <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.5 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="/images/herosection/ezgif-frame-150.png" 
            className="w-full h-full object-cover mix-blend-screen" 
            alt="Backdrop" 
         />
         <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>
      <div className="relative z-10 max-w-4xl px-8 w-full">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ staggerChildren: 0.4 }}
          className="space-y-40"
        >
          <motion.h2 variants={lineVariants} className="text-5xl md:text-8xl font-medium tracking-tighter text-neutral-500">
            No battery.
          </motion.h2>
          <motion.h2 variants={lineVariants} className="text-5xl md:text-8xl font-medium tracking-tighter text-neutral-300 text-center">
            No limits.
          </motion.h2>
          <motion.h2 variants={lineVariants} className="text-5xl md:text-8xl font-semibold tracking-tighter text-white text-right">
            Just precision.
          </motion.h2>
        </motion.div>
      </div>
    </section>
  );
}
