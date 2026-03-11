import React from 'react';
import { Truck, Shield, RotateCcw, Headphones } from 'lucide-react';

const FEATURE_ITEMS = [
  {
    icon: Truck,
    title: 'Free Shipping',
    desc: 'On orders over 500 EGP',
  },
  {
    icon: RotateCcw,
    title: 'Easy Returns',
    desc: '14-day return policy',
  },
  {
    icon: Shield,
    title: 'Secure Payment',
    desc: '100% secure checkout',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    desc: 'Contact us anytime',
  },
];

export const Features = () => {
  return (
    <section className="w-full bg-[#f0f9f4] py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURE_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-5"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#dcfce7] text-[#10a352]">
                <item.icon size={28} />
              </div>
              <div className="leading-tight">
                <h3 className="text-base font-bold text-[#2b3445]">{item.title}</h3>
                <p className="mt-1 text-[13px] text-[#7d879c]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
