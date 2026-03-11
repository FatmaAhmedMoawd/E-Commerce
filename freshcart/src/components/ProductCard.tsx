import React from 'react';
import { Star, Plus, Heart, Eye, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';

export const ProductCard: React.FC<{ product: any }> = ({ product }) => {
  const title = product.title || product.name;
  const image = product.imageCover || product.image;
  const category = product.category?.name || product.category || "Women's Fashion";
  const rating = product.ratingsAverage || product.rating || 0;
  const reviews = product.ratingsQuantity || product.reviews || 0;
  const price = product.price;

  return (
    <motion.div
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 transition-all hover:shadow-xl"
    >
      {/* Action Icons - Top Right */}
      <div className="absolute right-4 top-4 z-20 flex flex-col gap-3">
        <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-100 bg-white text-[#2f3137] shadow-sm transition-all hover:bg-emerald-600 hover:text-white">
          <Heart size={20} />
        </button>
        <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-100 bg-white text-[#2f3137] shadow-sm transition-all hover:bg-emerald-600 hover:text-white">
          <RefreshCw size={20} />
        </button>
        <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-100 bg-white text-[#2f3137] shadow-sm transition-all hover:bg-emerald-600 hover:text-white">
          <Eye size={20} />
        </button>
      </div>

      {/* Image Container */}
      <div className="relative mb-6 flex aspect-[4/5] items-center justify-center overflow-hidden rounded-xl bg-white">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col">
        <p className="mb-1.5 font-sans text-[13px] font-medium text-[#7d879c]">{category}</p>
        <h3 className="mb-2 line-clamp-1 font-display text-[19px] font-semibold leading-tight text-[#2b3445]">
          {title}
        </h3>
        
        {/* Rating */}
        <div className="mb-5 flex items-center gap-1.5">
          <div className="flex gap-0.5 text-[#ffb400]">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                fill={i < Math.floor(rating) ? "currentColor" : "none"}
                className={i < Math.floor(rating) ? "text-[#ffb400]" : "text-gray-300"}
              />
            ))}
          </div>
          <span className="font-sans text-[13px] font-medium text-[#7d879c]">{rating} ({reviews})</span>
        </div>

        {/* Price and Add Button */}
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-baseline gap-1">
            <span className="font-display text-[22px] font-bold text-[#2b3445]">{price} EGP</span>
          </div>
          <button className="flex h-11 w-11 items-center justify-center rounded-full bg-[#10a352] text-white shadow-lg shadow-emerald-100 transition-all hover:scale-110 hover:bg-[#0d8a45] active:scale-95">
            <Plus size={22} strokeWidth={3} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
