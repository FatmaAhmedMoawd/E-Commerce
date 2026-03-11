import React from 'react';
import { Mail, Lock, Eye, EyeOff, Chrome, Facebook, ShieldCheck, Users, Star, ArrowLeft, Truck, Headphones } from 'lucide-react';

interface SignInProps {
  onBack: () => void;
  onSignUp: () => void;
  onSignInSuccess: () => void;
}

export const SignIn = ({ onBack, onSignUp, onSignInSuccess }: SignInProps) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <section className="bg-[#f8fafc] py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:gap-20">
          
          {/* Left Side: Illustration & Info */}
          <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
            <div className="mb-10 w-full max-w-lg overflow-hidden rounded-[32px] bg-white shadow-sm">
              <img
                src="https://img.freepik.com/free-vector/shopping-cart-with-fresh-vegetables-fruits_1284-45604.jpg?w=800"
                alt="Fresh Groceries"
                className="h-auto w-full"
                referrerPolicy="no-referrer"
              />
            </div>

            <h2 className="mb-4 font-display text-5xl font-bold leading-tight text-[#2b3445]">
              FreshCart - Your One-Stop Shop for Fresh Products
            </h2>
            <p className="mb-10 text-xl text-[#7d879c]">
              Join thousands of happy customers who trust FreshCart for their daily grocery needs
            </p>

            <div className="flex flex-wrap justify-center gap-8 text-base font-bold text-[#10a352] lg:justify-start">
              <div className="flex items-center gap-2">
                <Truck size={20} />
                Free Delivery
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={20} />
                Secure Payment
              </div>
              <div className="flex items-center gap-2">
                <Headphones size={20} />
                24/7 Support
              </div>
            </div>
          </div>

          {/* Right Side: Login Card */}
          <div className="w-full max-w-[540px]">
            <div className="rounded-[32px] bg-white p-8 shadow-xl md:p-12">
              <div className="mb-8 text-center">
                <div className="mb-6 inline-flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#10a352] text-white">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                      <path d="M3 6h18" />
                      <path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                  </div>
                  <span className="font-display text-3xl font-bold text-[#10a352]">FreshCart</span>
                </div>
                <h1 className="mb-2 text-3xl font-bold text-[#2b3445]">Welcome Back!</h1>
                <p className="text-base text-[#7d879c]">Sign in to continue your fresh shopping experience</p>
              </div>

              <div className="space-y-4">
                <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white py-4 text-base font-bold text-[#2b3445] transition-all hover:bg-gray-50">
                  <Chrome size={20} className="text-red-500" /> Continue with Google
                </button>
                <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white py-4 text-base font-bold text-[#2b3445] transition-all hover:bg-gray-50">
                  <Facebook size={20} className="text-blue-600" /> Continue with Facebook
                </button>
              </div>

              <div className="my-10 flex items-center gap-4">
                <div className="h-px flex-1 bg-gray-100" />
                <span className="text-xs font-bold tracking-widest text-[#7d879c]">OR CONTINUE WITH EMAIL</span>
                <div className="h-px flex-1 bg-gray-100" />
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="mb-2 block text-sm font-bold text-[#2b3445]">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7d879c]" size={20} />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full rounded-xl border border-gray-200 bg-white py-4 pl-12 pr-4 text-base text-[#2b3445] outline-none focus:border-[#10a352] focus:ring-1 focus:ring-[#10a352]"
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-bold text-[#2b3445]">Password</label>
                    <a href="#" className="text-sm font-bold text-[#10a352] hover:underline">Forgot Password?</a>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7d879c]" size={20} />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      className="w-full rounded-xl border border-gray-200 bg-white py-4 pl-12 pr-12 text-base text-[#2b3445] outline-none focus:border-[#10a352] focus:ring-1 focus:ring-[#10a352]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7d879c] hover:text-[#2b3445]"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <label className="flex cursor-pointer items-center gap-2">
                  <input type="checkbox" className="h-5 w-5 rounded border-gray-300 text-[#10a352] focus:ring-[#10a352]" />
                  <span className="text-sm font-medium text-[#7d879c]">Keep me signed in</span>
                </label>

                <button 
                  onClick={onSignInSuccess}
                  className="w-full rounded-xl bg-[#10a352] py-5 font-display text-lg font-bold text-white transition-all hover:bg-[#0d8a45]"
                >
                  Sign In
                </button>
              </form>

              <div className="mt-10 text-center">
                <p className="text-base text-[#7d879c]">
                  New to FreshCart?{' '}
                  <button onClick={onSignUp} className="font-bold text-[#10a352] hover:underline">
                    Create an account
                  </button>
                </p>
              </div>

              <div className="mt-10 flex items-center justify-center gap-8 border-t border-gray-100 pt-8 text-[#7d879c]">
                <div className="flex items-center gap-2 text-xs font-bold">
                  <ShieldCheck size={14} /> SSL Secured
                </div>
                <div className="flex items-center gap-2 text-xs font-bold">
                  <Users size={14} /> 50K+ Users
                </div>
                <div className="flex items-center gap-2 text-xs font-bold">
                  <Star size={14} className="text-yellow-400" fill="currentColor" /> 4.9 Rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
