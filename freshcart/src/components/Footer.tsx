import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, CreditCard } from 'lucide-react';

interface FooterProps {
  onSignInClick: () => void;
}

export const Footer = ({ onSignInClick }: FooterProps) => {
  return (
    <footer className="bg-[#0f172a] pt-20 text-[#94a3b8]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 pb-16 lg:grid-cols-5">
          {/* Brand & Contact */}
          <div className="lg:col-span-2 space-y-8">
            <div className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-lg">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#10a352] text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </div>
              <span className="font-display text-2xl font-bold tracking-tight text-[#2b3445]">FreshCart</span>
            </div>
            
            <p className="max-w-sm leading-relaxed text-[#8e9299]">
              FreshCart is your one-stop destination for quality products. From fashion to electronics, we bring you the best brands at competitive prices with a seamless shopping experience.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-3 transition-colors hover:text-white">
                <Phone size={18} className="text-[#10a352]" />
                <span className="text-sm font-medium">+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 transition-colors hover:text-white">
                <Mail size={18} className="text-[#10a352]" />
                <span className="text-sm font-medium">support@freshcart.com</span>
              </li>
              <li className="flex items-start gap-3 transition-colors hover:text-white">
                <MapPin size={18} className="mt-0.5 text-[#10a352]" />
                <span className="text-sm font-medium">123 Commerce Street, New York, NY 10001</span>
              </li>
            </ul>

            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <button key={i} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-[#94a3b8] transition-all hover:bg-[#10a352] hover:text-white">
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-3">
            <div>
              <h3 className="mb-6 text-lg font-bold text-white">Shop</h3>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="transition-colors hover:text-white">All Products</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Categories</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Brands</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Electronics</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Men's Fashion</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Women's Fashion</a></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-lg font-bold text-white">Account</h3>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="transition-colors hover:text-white">My Account</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Order History</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Wishlist</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Shopping Cart</a></li>
                <li><button onClick={onSignInClick} className="transition-colors hover:text-white">Sign In</button></li>
                <li><a href="#" className="transition-colors hover:text-white">Create Account</a></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-lg font-bold text-white">Support</h3>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="transition-colors hover:text-white">Contact Us</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Help Center</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Shipping Info</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Returns & Refunds</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Track Order</a></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-lg font-bold text-white">Legal</h3>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="transition-colors hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between border-t border-white/5 py-10 md:flex-row">
          <p className="text-sm font-medium">
            © 2026 FreshCart. All rights reserved.
          </p>
          <div className="mt-6 flex items-center gap-6 md:mt-0">
            <div className="flex items-center gap-2 text-xs font-medium">
              <CreditCard size={16} /> <span>Visa</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium">
              <CreditCard size={16} /> <span>Mastercard</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium">
              <CreditCard size={16} /> <span>PayPal</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
