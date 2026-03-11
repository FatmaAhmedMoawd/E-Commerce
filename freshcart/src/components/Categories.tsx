import React from 'react';
import { CATEGORIES } from '../constants';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const Categories = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1.5 rounded-full bg-emerald-600" />
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Shop By <span className="text-emerald-600">Category</span>
          </h2>
        </div>
        <button className="flex items-center gap-2 font-semibold text-emerald-600 hover:underline">
          View All Categories <ArrowRight size={18} />
        </button>
      </div>
      
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {CATEGORIES.map((category) => (
          <motion.button
            key={category.id}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center gap-4 rounded-xl border border-gray-100 bg-white p-6 transition-all hover:border-emerald-100 hover:shadow-lg"
          >
            <div className="relative h-24 w-24 overflow-hidden rounded-full bg-gray-50">
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-center font-bold text-gray-700">{category.name}</span>
          </motion.button>
        ))}
      </div>
    </section>
  );
};
