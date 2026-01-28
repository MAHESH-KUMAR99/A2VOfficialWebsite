// components/Header.jsx
'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function Navbar({ isScrolled }) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header link hover animations
      gsap.utils.toArray('nav a').forEach((link) => {
        link.addEventListener('mouseenter', () => {
          gsap.to(link, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out',
          });
        });
        link.addEventListener('mouseleave', () => {
          gsap.to(link, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out',
          });
        });
      });
    });

    return () => {
      // Cleanup
    };
  }, []);

  return (
    <header
      className={`max-w-[1400px] mx-auto relative z-50 flex items-center justify-between px-8 lg:px-16 py-6 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          λ → LERIC
        </div>
        <div className="text-xs text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded-full">
          Since . 2018
        </div>
      </div>

      {/* Navigation */}
      <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-gray-800">
        {['HOME +', 'PAGES +', 'BLOG +', 'CONTACT +'].map((item, index) => (
          <a
            key={item}
            href="#"
            className="relative hover:text-gray-900 transition-all duration-300 group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-900 to-transparent rounded-full group-hover:w-full transition-all duration-300"></span>
          </a>
        ))}
      </nav>

      {/* CTA Button */}
      <div className="flex items-center gap-4">
        <button className="bg-gray-900 text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 hover:shadow-lg hover:scale-105 transform transition-all duration-300 backdrop-blur-sm border border-gray-900/20">
          Sign Up
        </button>
      </div>
    </header>
  );
}
