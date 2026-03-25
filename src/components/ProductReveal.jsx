import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ProductReveal() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start end", "end start"] });
  
  const scale = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.5, 1, 1.3]);
  const rotate = useTransform(scrollYProgress, [0.1, 0.8], [10, -5]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]);

  return (
    <section ref={targetRef} className="h-[250vh] bg-black relative border-y border-neutral-900 border-opacity-30">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        <motion.img
          style={{ scale, rotate }}
          src="/images/herosection/ezgif-frame-130.png"
          alt="Watch Full Reveal"
          className="absolute max-w-none w-[120vw] md:w-[60vw] object-cover opacity-80 mix-blend-screen"
        />
        <motion.div style={{ opacity }} className="relative z-10 w-full px-8 text-center bg-black/20 backdrop-blur-sm py-12">
          <h2 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] leading-tight">
            See Time.<br/>Inside Out.
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
