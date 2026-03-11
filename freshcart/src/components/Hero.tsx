import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    title: "Premium Quality Guaranteed",
    subtitle: "Fresh from farm to your table",
    btn1: "Shop Now",
    btn1Color: "text-blue-600",
    btn2: "Learn More",
  },
  {
    id: 2,
    title: "Fast & Free Delivery",
    subtitle: "Same day delivery available",
    btn1: "Order Now",
    btn1Color: "text-purple-600",
    btn2: "Delivery Info",
  },
  {
    id: 3,
    title: "Fresh Products Delivered to your Door",
    subtitle: "Get 20% off your first order",
    btn1: "Shop Now",
    btn1Color: "text-emerald-600",
    btn2: "View Deals",
  },
  {
    id: 4,
    title: "100% Organic & Natural",
    subtitle: "Healthy choices for your family",
    btn1: "Shop Organic",
    btn1Color: "text-orange-600",
    btn2: "Our Story",
  }
];

const BACKGROUND_IMAGE = "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1600";

const slideVariants = {
  enter: (direction: number) => ({
    rotateX: direction > 0 ? 90 : -90,
    y: direction > 0 ? '30%' : '-30%',
    opacity: 0,
    scale: 0.95,
    z: -300
  }),
  center: {
    rotateX: 0,
    y: 0,
    opacity: 1,
    scale: 1,
    z: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // Smoother, more "comfortable" ease-out
    }
  },
  exit: (direction: number) => ({
    rotateX: direction > 0 ? -90 : 90,
    y: direction > 0 ? '-30%' : '30%',
    opacity: 0,
    scale: 0.95,
    z: -300,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    }
  })
};

export const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-white py-8">
      <div className="container mx-auto px-4">
        {/* The Slider Section - Banner Shape with 3D Perspective */}
        <div 
          className="relative h-[350px] w-full overflow-hidden rounded-[2rem] shadow-2xl md:h-[400px] lg:h-[450px]" 
          style={{ perspective: "2000px" }}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              style={{ transformStyle: "preserve-3d" }}
              className="absolute inset-0"
            >
              {/* Background with subtle zoom */}
              <div className="absolute inset-0 overflow-hidden">
                <div 
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${BACKGROUND_IMAGE})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 via-emerald-800/70 to-transparent backdrop-blur-[1px]" />
                </div>
              </div>

              {/* Content */}
              <div className="relative flex h-full items-center px-8 md:px-20">
                <div className="max-w-3xl text-white">
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="mb-2 text-4xl font-black tracking-tight md:text-6xl lg:text-7xl">
                      {SLIDES[current].title}
                    </h2>
                  </motion.div>
                  
                  <motion.div
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <p className="mb-10 text-xl font-medium text-emerald-50 md:text-2xl lg:text-3xl">
                      {SLIDES[current].subtitle}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-wrap gap-4"
                  >
                    <button className={`group relative flex items-center gap-2 overflow-hidden rounded-2xl bg-white px-10 py-4 font-black ${SLIDES[current].btn1Color} transition-all hover:scale-105 active:scale-95`}>
                      <span className="relative z-10">{SLIDES[current].btn1}</span>
                      <div className="absolute inset-0 -translate-x-full bg-gray-100 transition-transform group-hover:translate-x-0" />
                    </button>
                    
                    <button className="group relative flex items-center gap-2 overflow-hidden rounded-2xl border-2 border-white/30 bg-white/10 px-10 py-4 font-black text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-105 active:scale-95">
                      <span className="relative z-10">{SLIDES[current].btn2}</span>
                    </button>
                  </motion.div>
                </div>
              </div>

              {/* Glossy Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-30" />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows - Styled to match user image */}
          <div className="absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-4 md:px-8">
            <button
              onClick={prev}
              className="group flex h-14 w-14 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm border border-white/10 transition-all hover:bg-black/50 hover:scale-110 active:scale-90"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={next}
              className="group flex h-14 w-14 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm border border-white/10 transition-all hover:bg-black/50 hover:scale-110 active:scale-90"
            >
              <ChevronRight size={32} />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className={`group relative h-2.5 transition-all duration-700 ${
                  current === i ? "w-10" : "w-2.5"
                }`}
              >
                <div className={`h-full w-full rounded-full transition-all duration-700 ${
                  current === i ? "bg-white" : "bg-white/30 group-hover:bg-white/60"
                }`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
