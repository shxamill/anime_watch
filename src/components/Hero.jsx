import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const currentFrameRef = useRef(0);
  
  // A taller section (600vh) to safely accommodate 240 frames of high-precision scrolling
  const { scrollYProgress } = useScroll({ 
    target: containerRef, 
    offset: ["start start", "end end"] 
  });
  
  const [images, setImages] = useState([]);
  
  // Helper function to precisely draw the current frame while maintaining object-cover aspect ratio bounds
  const drawImageFit = (img, canvas) => {
    if (!canvas || !img) return;
    const ctx = canvas.getContext('2d');
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio  = Math.max(hRatio, vRatio);
    const cx = (canvas.width - img.width * ratio) / 2;
    const cy = (canvas.height - img.height * ratio) / 2;  
    
    // Using hardware accelerated canvas clears and fills
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, img.width, img.height, cx, cy, img.width * ratio, img.height * ratio);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    const loadedImages = [];
    let loadedCount = 0;
    
    // Preload the entire 240 sequence extracted by the user
    for (let i = 1; i <= 240; i++) {
        const img = new Image();
        img.src = `/images/herosection/ezgif-frame-${i.toString().padStart(3, '0')}.png`;
        loadedImages.push(img);
        
        img.onload = () => {
            loadedCount++;
            // Draw the very first frame conditionally as soon as it arrives
            if (i === 1 && canvas) drawImageFit(img, canvas);
        };
    }
    setImages(loadedImages);
    
    // Window dynamic resizing listener to recalculate canvas mapping
    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        if (loadedImages[currentFrameRef.current]) {
          drawImageFit(loadedImages[currentFrameRef.current], canvas);
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Hook directly into framer's native tick boundary rather than causing massive React state triggers
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (images.length === 0) return;
    
    // Map [0, 1] to [0, 239]
    const frameIndex = Math.min(239, Math.max(0, Math.floor(latest * 240)));
    currentFrameRef.current = frameIndex;
    
    const img = images[frameIndex];
    if (img && img.complete) {
      drawImageFit(img, canvasRef.current);
    }
  });

  // -----------------------------------------
  // TEXT SEQUENCES (Crossfading flawlessly)
  // -----------------------------------------
  const text1Op = useTransform(scrollYProgress, [0, 0.05, 0.20, 0.25], [0, 1, 1, 0]);
  const text2Op = useTransform(scrollYProgress, [0.25, 0.3, 0.45, 0.5], [0, 1, 1, 0]);
  const text3Op = useTransform(scrollYProgress, [0.50, 0.55, 0.70, 0.75], [0, 1, 1, 0]);
  const text4Op = useTransform(scrollYProgress, [0.75, 0.8, 0.95, 1], [0, 1, 1, 0]);

  const text1Y = useTransform(scrollYProgress, [0, 0.25], [40, -40]);
  const text2Y = useTransform(scrollYProgress, [0.25, 0.5], [40, -40]);
  const text3Y = useTransform(scrollYProgress, [0.5, 0.75], [40, -40]);
  const text4Y = useTransform(scrollYProgress, [0.75, 1], [40, -40]);

  // Micro-feature vectors
  const callout1 = useTransform(scrollYProgress, [0.85, 0.88], [0, 1]);
  const callout2 = useTransform(scrollYProgress, [0.88, 0.92], [0, 1]);
  const callout3 = useTransform(scrollYProgress, [0.92, 0.95], [0, 1]);

  return (
    <section ref={containerRef} className="relative w-full h-[600vh] bg-black">
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-black text-white">
        
        {/* CANVAS RENDER ENGINE */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-90" 
        />

        {/* BOTTOM VIGINETTE */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none" />

        {/* TEXT OVERLAYS */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 px-6">
          <motion.h1 style={{ opacity: text1Op, y: text1Y }} className="absolute text-5xl md:text-[6rem] font-semibold tracking-tighter text-center max-w-4xl drop-shadow-[0_10px_20px_rgba(0,0,0,1)] text-white will-change-transform">
            Time, engineered.
          </motion.h1>
          
          <motion.h1 style={{ opacity: text2Op, y: text2Y }} className="absolute text-5xl md:text-[6rem] font-semibold tracking-tighter text-center max-w-4xl drop-shadow-[0_10px_20px_rgba(0,0,0,1)] text-silver will-change-transform">
            Powered by motion.
          </motion.h1>
          
          <motion.h1 style={{ opacity: text3Op, y: text3Y }} className="absolute text-6xl md:text-[7rem] lg:text-[8rem] font-bold tracking-tighter text-center max-w-5xl drop-shadow-[0_10px_40px_rgba(0,0,0,1)] text-white will-change-transform leading-none">
            No battery.<br/>No limits.
          </motion.h1>
          
          <motion.h1 style={{ opacity: text4Op, y: text4Y }} className="absolute text-4xl md:text-[5rem] lg:text-[6rem] font-light tracking-tighter text-center max-w-5xl drop-shadow-[0_10px_30px_rgba(0,0,0,1)] text-sky-400 will-change-transform leading-tight">
            Precision in<br/>every detail.
          </motion.h1>
        </div>

        {/* MICRO-FEATURE HIGHLIGHTS */}
        <div className="absolute inset-0 z-20 pointer-events-none hidden md:block">
          <motion.div 
            style={{ opacity: callout1 }}
            className="absolute top-[25%] left-[10%] xl:left-[20%] flex items-center space-x-4 will-change-opacity"
          >
            <div className="flex flex-col text-right">
              <span className="text-white font-medium tracking-widest text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">AUTOMATIC SELF-WINDING</span>
              <span className="text-sky-400 font-light text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">Kinetic energy driven</span>
            </div>
            <div className="w-24 h-[1px] bg-white/70 relative drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white drop-shadow-[0_0_10px_rgba(255,255,255,1)]" />
            </div>
          </motion.div>

          {/* Callout 2 */}
          <motion.div 
            style={{ opacity: callout2 }}
            className="absolute bottom-[25%] right-[10%] xl:right-[20%] flex items-center space-x-4 will-change-opacity"
          >
            <div className="w-24 h-[1px] bg-white/70 relative drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white drop-shadow-[0_0_10px_rgba(255,255,255,1)]" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-white font-medium tracking-widest text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">SKELETON DIAL DESIGN</span>
              <span className="text-sky-400 font-light text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">Visible architectural movement</span>
            </div>
          </motion.div>

          {/* Callout 3 */}
          <motion.div 
            style={{ opacity: callout3 }}
            className="absolute top-[20%] right-[15%] xl:right-[25%] flex items-center space-x-4 will-change-opacity"
          >
            <div className="w-16 h-[1px] bg-white/70 relative drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white drop-shadow-[0_0_10px_rgba(255,255,255,1)]" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-white font-medium tracking-widest text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">GENUINE LEATHER STRAP</span>
              <span className="text-sky-400 font-light text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">Unmatched comfort</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
