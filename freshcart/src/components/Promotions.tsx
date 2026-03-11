import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const Promotions = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Banner 1 - Deal of the Day */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="relative overflow-hidden rounded-3xl bg-[#008a55] p-8 md:p-12 text-white"
        >
          {/* Decorative Circles */}
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />
          <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-white/10" />
          
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-bold backdrop-blur-sm">
              <span>🔥</span> Deal of the Day
            </div>
            
            <h3 className="mb-2 text-4xl font-extrabold">Fresh Organic Fruits</h3>
            <p className="mb-8 text-lg opacity-90">Get up to 40% off on selected organic fruits</p>
            
            <div className="mb-8 flex items-center gap-4">
              <span className="text-5xl font-black">40% OFF</span>
              <span className="text-sm font-medium opacity-80">Use code: <span className="font-bold">ORGANIC40</span></span>
            </div>
            
            <button className="flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-[#008a55] transition-all hover:bg-gray-100">
              Shop Now <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>

        {/* Banner 2 - New Arrivals */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#ff9a23] to-[#ff3d47] p-8 md:p-12 text-white"
        >
          {/* Decorative Circles */}
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />
          <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-white/10" />
          
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-bold backdrop-blur-sm">
              <span>✨</span> New Arrivals
            </div>
            
            <h3 className="mb-2 text-4xl font-extrabold">Exotic Vegetables</h3>
            <p className="mb-8 text-lg opacity-90">Discover our latest collection of premium vegetables</p>
            
            <div className="mb-8 flex items-center gap-4">
              <span className="text-5xl font-black">25% OFF</span>
              <span className="text-sm font-medium opacity-80">Use code: <span className="font-bold">FRESH25</span></span>
            </div>
            
            <button className="flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-[#ff6b35] transition-all hover:bg-gray-100">
              Explore Now <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
