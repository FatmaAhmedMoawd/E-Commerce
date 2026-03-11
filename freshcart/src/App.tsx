/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Categories } from './components/Categories';
import { Promotions } from './components/Promotions';
import { FeaturedProducts } from './components/FeaturedProducts';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { SignIn } from './components/SignIn';

export default function App() {
  const [view, setView] = useState<'home' | 'signin' | 'empty'>('signin');

  const handleSignInClick = () => {
    setView('signin');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHomeClick = () => {
    setView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSignInSuccess = () => {
    setView('empty');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <Header onSignInClick={handleSignInClick} onLogoClick={handleHomeClick} />
      <main>
        {view === 'home' && (
          <>
            <Hero />
            <Categories />
            <Promotions />
            <FeaturedProducts />
            <Newsletter />
          </>
        )}
        {view === 'signin' && (
          <SignIn 
            onBack={handleHomeClick} 
            onSignUp={() => {}} 
            onSignInSuccess={handleSignInSuccess}
          />
        )}
        {view === 'empty' && (
          <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center bg-[#f8fafc]">
            <div className="mb-8 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-lg">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#10a352] text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </div>
              <span className="font-display text-2xl font-bold tracking-tight text-[#2b3445]">FreshCart</span>
            </div>
            <h2 className="text-3xl font-bold text-[#2b3445] mb-4">Welcome to FreshCart!</h2>
            <p className="text-[#7d879c] mb-8 max-w-md">You have successfully signed in. Your personalized shopping experience is ready.</p>
            <button 
              onClick={handleHomeClick}
              className="rounded-full bg-[#10a352] px-10 py-4 font-display text-lg font-bold text-white shadow-lg transition-all hover:scale-[1.05] hover:bg-[#0d8a45]"
            >
              Start Shopping
            </button>
          </div>
        )}
        <Features />
      </main>
      <Footer onSignInClick={handleSignInClick} />
    </div>
  );
}

