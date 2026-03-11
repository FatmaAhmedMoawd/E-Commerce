import React from 'react';
import { Mail, Leaf, Truck, Tag, Smartphone, Apple, Star, ArrowRight } from 'lucide-react';

export const Newsletter = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="relative overflow-hidden rounded-[40px] bg-[#f0f9f4] p-8 md:p-16 lg:p-20">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:justify-between">
          
          {/* Left Side: Newsletter */}
          <div className="flex-1">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#10a352] text-white shadow-lg shadow-emerald-200">
                <Mail size={28} />
              </div>
              <div>
                <p className="text-sm font-bold tracking-wider text-[#10a352]">NEWSLETTER</p>
                <p className="text-sm text-[#7d879c]">50,000+ subscribers</p>
              </div>
            </div>

            <h2 className="mb-4 font-display text-4xl font-bold leading-tight text-[#2b3445] md:text-5xl">
              Get the Freshest Updates <br />
              <span className="text-[#10a352]">Delivered Free</span>
            </h2>
            
            <p className="mb-10 text-lg text-[#7d879c]">
              Weekly recipes, seasonal offers & exclusive member perks.
            </p>

            {/* Feature Pills */}
            <div className="mb-12 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-full border border-white bg-white px-5 py-2.5 shadow-sm">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f0f9f4] text-[#10a352]">
                  <Leaf size={14} />
                </div>
                <span className="text-sm font-medium text-[#2b3445]">Fresh Picks Weekly</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white bg-white px-5 py-2.5 shadow-sm">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f0f9f4] text-[#10a352]">
                  <Truck size={14} />
                </div>
                <span className="text-sm font-medium text-[#2b3445]">Free Delivery Codes</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white bg-white px-5 py-2.5 shadow-sm">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f0f9f4] text-[#10a352]">
                  <Tag size={14} />
                </div>
                <span className="text-sm font-medium text-[#2b3445]">Members-Only Deals</span>
              </div>
            </div>

            {/* Form */}
            <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-white bg-white px-8 py-5 text-[#2b3445] shadow-sm outline-none focus:ring-2 focus:ring-[#10a352]/20"
                />
              </div>
              <button className="flex items-center justify-center gap-2 rounded-2xl bg-[#10a352] px-10 py-5 font-display text-lg font-bold text-white shadow-lg shadow-emerald-200 transition-all hover:scale-105 hover:bg-[#0d8a45] active:scale-95">
                Subscribe <ArrowRight size={20} />
              </button>
            </div>
            <p className="flex items-center gap-2 text-sm text-[#7d879c]">
              <span className="text-lg">✨</span> Unsubscribe anytime. No spam, ever.
            </p>
          </div>

          {/* Right Side: Mobile App Card */}
          <div className="w-full lg:w-[420px]">
            <div className="relative overflow-hidden rounded-[40px] bg-[#15202b] p-10 text-white shadow-2xl">
              {/* Decorative Background */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
              
              <div className="relative z-10">
                <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-xs font-bold tracking-wider text-emerald-400 outline outline-1 outline-emerald-500/20">
                  <Smartphone size={14} /> MOBILE APP
                </div>

                <h3 className="mb-4 font-display text-3xl font-bold leading-tight">
                  Shop Faster on Our App
                </h3>
                
                <p className="mb-10 text-[#8e9299]">
                  Get app-exclusive deals & 15% off your first order.
                </p>

                <div className="flex flex-col gap-4">
                  <button className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 transition-all hover:bg-white/20">
                    <Apple size={32} />
                    <div className="text-left">
                      <p className="text-[10px] uppercase tracking-wider opacity-60">Download on</p>
                      <p className="text-lg font-bold">App Store</p>
                    </div>
                  </button>
                  <button className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 transition-all hover:bg-white/20">
                    <div className="flex h-8 w-8 items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L18.66,14.05C20.44,13.03 20.44,10.97 18.66,9.95L16.81,8.88L14.4,11.29L16.81,15.12M4.56,2.68L15.38,8.92L12.97,11.33L4.56,2.68M4.56,21.32L12.97,12.67L15.38,15.08L4.56,21.32Z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] uppercase tracking-wider opacity-60">Get it on</p>
                      <p className="text-lg font-bold">Google Play</p>
                    </div>
                  </button>
                </div>

                <div className="mt-10 flex items-center gap-3">
                  <div className="flex gap-0.5 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-[#8e9299]">
                    4.9 • 100K+ downloads
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
