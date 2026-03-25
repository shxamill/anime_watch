import React from 'react';
import { motion } from 'framer-motion';
import { Package, ShieldCheck, Truck, RotateCcw } from 'lucide-react';

export default function Trust() {
  const benefits = [
    { icon: <ShieldCheck size={48} strokeWidth={1} />, text: "1-Year Warranty" },
    { icon: <RotateCcw size={48} strokeWidth={1} />, text: "10-Day Returns" },
    { icon: <Truck size={48} strokeWidth={1} />, text: "Free Delivery" },
    { icon: <Package size={48} strokeWidth={1} />, text: "Cash on Delivery" }
  ];

  return (
    <section className="bg-neutral-950 py-[15vh] border-y border-neutral-900/50">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-16 text-center"
        >
          {benefits.map((b, i) => (
            <motion.div 
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 30 },
                visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
              }}
              className="flex flex-col items-center space-y-6 text-neutral-500 hover:text-white transition-colors duration-500"
            >
              <div className="hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                {b.icon}
              </div>
              <span className="text-xl font-light tracking-wide">{b.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
