import React, { useState } from 'react';
import { Search, ShoppingCart, Heart, User, Menu, Phone, ChevronDown, Mail, Truck, Gift, UserPlus, Headphones } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onSignInClick: () => void;
  onLogoClick: () => void;
}

export const Header = ({ onSignInClick, onLogoClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const categories = [
    "All Categories",
    "Electronics",
    "Women's Fashion",
    "Men's Fashion",
    "Beauty & Health"
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Top Bar */}
      <div className="hidden border-b border-gray-100 bg-white py-2 md:block">
        <div className="container mx-auto flex items-center justify-between px-4 text-[13px] text-[#2b3445]">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Truck size={16} className="text-[#10a352]" /> Free Shipping on Orders 500 EGP
            </span>
            <span className="flex items-center gap-2">
              <Gift size={16} className="text-[#10a352]" /> New Arrivals Daily
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone size={14} /> +1 (800) 123-4567
            </span>
            <span className="flex items-center gap-2">
              <Mail size={14} /> support@freshcart.com
            </span>
            <div className="h-4 w-[1px] bg-gray-200"></div>
            <button 
              onClick={onSignInClick}
              className="flex items-center gap-1.5 hover:text-[#10a352]"
            >
              <User size={14} /> Sign In
            </button>
            <button className="flex items-center gap-1.5 hover:text-[#10a352]">
              <UserPlus size={14} /> Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={24} />
            </button>
            <div 
              onClick={onLogoClick}
              className="flex cursor-pointer items-center gap-2 text-[32px] font-bold text-[#2b3445]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 10H14L16.5 25H30L32.5 15H16" stroke="#10a352" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="18" cy="32" r="2.5" fill="#10a352"/>
                  <circle cx="28" cy="32" r="2.5" fill="#10a352"/>
                  <path d="M10 10L8 6H4" stroke="#10a352" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-display tracking-tight">FreshCart</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden flex-1 max-w-[500px] md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products, brands and more."
                className="w-full rounded-full border border-gray-200 bg-white px-6 py-3 text-sm focus:border-[#10a352] focus:outline-none"
              />
              <button className="absolute right-1.5 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-[#10a352] text-white hover:bg-[#0d8a45]">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Navigation & Actions */}
          <div className="flex items-center gap-8">
            <nav className="hidden items-center gap-8 font-sans text-[15px] font-medium text-[#2b3445] lg:flex">
              <a href="#" className="hover:text-[#10a352]">Home</a>
              <a href="#" className="hover:text-[#10a352]">Shop</a>
              
              {/* Categories Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsCategoriesOpen(true)}
                onMouseLeave={() => setIsCategoriesOpen(false)}
              >
                <button className="flex items-center gap-1 hover:text-[#10a352]">
                  Categories <ChevronDown size={14} className={`transition-transform ${isCategoriesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isCategoriesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 top-full z-50 mt-2 w-56 rounded-xl border border-gray-100 bg-white py-3 shadow-xl"
                    >
                      {categories.map((cat, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block px-6 py-2.5 text-[15px] text-[#2b3445] transition-colors hover:bg-[#f0f9f4] hover:text-[#10a352]"
                        >
                          {cat}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a href="#" className="hover:text-[#10a352]">Brands</a>
            </nav>

            <div className="flex items-center gap-6">
              {/* Support */}
              <div className="hidden items-center gap-3 lg:flex">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f0f9f4] text-[#10a352]">
                  <Headphones size={20} />
                </div>
                <div className="leading-tight">
                  <p className="text-[11px] text-[#7d879c]">Support</p>
                  <p className="text-[13px] font-bold text-[#2b3445]">24/7 Help</p>
                </div>
              </div>

              <div className="h-8 w-[1px] bg-gray-200 hidden lg:block"></div>

              {/* Icons */}
              <div className="flex items-center gap-5">
                <button className="text-[#2b3445] hover:text-[#10a352]">
                  <Heart size={26} />
                </button>
                <button className="relative text-[#2b3445] hover:text-[#10a352]">
                  <ShoppingCart size={26} />
                  <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#10a352] text-[11px] font-bold text-white">
                    2
                  </span>
                </button>
                <button 
                  onClick={onSignInClick}
                  className="hidden items-center gap-2 rounded-full bg-[#10a352] px-6 py-2.5 font-display text-base font-bold text-white transition-all hover:bg-[#0d8a45] md:flex"
                >
                  <User size={20} />
                  <span>Sign In</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 md:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 z-50 w-64 bg-white p-6 md:hidden"
            >
              <div className="mb-8 flex items-center gap-2 text-2xl font-bold text-[#10a352]">
                <ShoppingCart className="h-8 w-8" />
                <span>FreshCart</span>
              </div>
              <div className="flex flex-col gap-6 text-lg font-medium text-[#2b3445]">
                <a href="#" className="hover:text-[#10a352]">Home</a>
                <a href="#" className="hover:text-[#10a352]">Shop</a>
                <a href="#" className="hover:text-[#10a352]">Categories</a>
                <a href="#" className="hover:text-[#10a352]">Brands</a>
                <hr className="border-gray-100" />
                <button 
                  onClick={() => {
                    onSignInClick();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-2 text-[#10a352]"
                >
                  <User size={20} /> Sign In
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
