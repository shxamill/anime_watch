import React from 'react';
import { motion } from 'framer-motion';

export default function Specifications() {
  const specs = [
    { label: "Case", value: "45mm" },
    { label: "Weight", value: "98g" },
    { label: "Movement", value: "Automatic" },
    { label: "Strap", value: "Leather" },
    { label: "Water Resistance", value: "30m" }
  ];

  return (
    <section className="bg-neutral-950 py-[20vh] border-t border-neutral-900/50">
      <div className="max-w-4xl mx-auto px-8">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-24"
        >
          Technical Anatomy.
        </motion.h2>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ staggerChildren: 0.15 }}
          className="space-y-10"
        >
          {specs.map((spec, i) => (
            <motion.div 
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="flex justify-between items-end border-b border-neutral-800 pb-6 group hover:border-neutral-500 transition-colors"
            >
              <span className="text-xl md:text-4xl text-neutral-500 font-light group-hover:text-neutral-300 transition-colors">{spec.label}</span>
              <span className="text-2xl md:text-4xl font-semibold text-white tracking-tight">{spec.value}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
