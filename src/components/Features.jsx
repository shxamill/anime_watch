import React from 'react';
import { motion } from 'framer-motion';

const features = [
  { title: "Automatic Self-Winding Movement", desc: "Kinetic energy powers the heart of the timepiece.", img: "/images/herosection/ezgif-frame-100.png" },
  { title: "Skeleton Dial Engineering", desc: "A transparent view into architectural precision.", img: "/images/herosection/ezgif-frame-140.png" },
  { title: "Genuine Leather Comfort", desc: "Breathable, premium textured strap.", img: "/images/herosection/ezgif-frame-220.png" },
  { title: "30M Water Resistance", desc: "Engineered for peace of mind against the elements.", img: "/images/herosection/ezgif-frame-060.png" }
];

export default function Features() {
  return (
    <section className="bg-neutral-950 py-[20vh] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 space-y-40">
        {features.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: isEven ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col md:flex-row items-center gap-12 ${isEven ? '' : 'md:flex-row-reverse'}`}
            >
              <div className="w-full md:w-1/2 group">
                <div className="w-full aspect-square bg-neutral-900 rounded-[2rem] border border-neutral-800 transition-all duration-1000 ease-out group-hover:border-sky-500/50 group-hover:shadow-[0_0_100px_rgba(14,165,233,0.15)] flex items-center justify-center relative overflow-hidden">
                  <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen scale-100 group-hover:scale-110 group-hover:opacity-100 transition-all duration-1000 ease-out" />
                  <span className="text-sky-500 font-black text-[12rem] md:text-9xl lg:text-[12rem] absolute -left-10 -bottom-14 opacity-10 transition-opacity duration-1000 group-hover:opacity-30 mix-blend-screen z-10">0{index + 1}</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-0" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-sky-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none z-20" />
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col px-6">
                <h3 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-6 uppercase">{item.title}</h3>
                <p className="text-xl md:text-2xl text-neutral-400 font-light max-w-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
