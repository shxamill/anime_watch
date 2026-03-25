import React from 'react';
import { motion } from 'framer-motion';

export default function Gift() {
  return (
    <section className="min-h-[100vh] flex items-center justify-center bg-black relative overflow-hidden text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 0.4, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/herosection/ezgif-frame-210.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-0 pointer-events-none" />
      
      <motion.h2 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.6 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-5xl md:text-8xl lg:text-[7rem] font-light tracking-tighter text-white drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] leading-tight px-4"
      >
        A gift that<br/>lasts forever.
      </motion.h2>
    </section>
  );
}
