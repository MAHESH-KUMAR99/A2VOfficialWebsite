'use client';

import Image from 'next/image';
import Link from 'next/link'; // ← YE ADD KARO
import { useState, useRef, useEffect } from 'react';

export default function Navbar() {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowServicesDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="bg-transparent backdrop-blur-md border-b border-white/30 sticky top-0 z-[100]">
      <header className="max-w-[1400px] mx-auto relative flex items-center justify-between px-4 sm:px-8 lg:px-24 py-2">
        {/* Logo */}
        <div className="flex items-center gap-2 flex-col">
          <img
            src="/asstes/logo.png"
            alt="LERIC Logo"
            className="h-15 w-auto sm:h-10"
          />
          <h1 className="text-sm sm:text-2xl font-ethnocentric text-gray-800">
            A2V GROUPS
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-800 relative">
          <Link href="/" className="hover:text-gray-600 transition-colors">
            HOME +
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative group"
            ref={dropdownRef}
            onMouseEnter={() => setShowServicesDropdown(true)}
            onMouseLeave={() => setShowServicesDropdown(false)}
          >
            <span className="hover:text-gray-600 transition-colors flex items-center gap-1 cursor-pointer">
              SERVICES +
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${showServicesDropdown ? 'rotate-180' : 'rotate-0'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>

            {/* Dropdown Menu */}
            <div
              className={`absolute top-full left-0 w-48 bg-[#E9DFD0]/95 backdrop-blur-md border border-white/30 rounded-xl shadow-2xl py-2 transition-all duration-200 z-[1000] ${
                showServicesDropdown
                  ? 'opacity-100 transform translate-y-0 scale-100'
                  : 'opacity-0 transform translate-y-1 scale-95 pointer-events-none'
              }`}
            >
              <Link
                href="/Webdevelopment" // ← INSTANT ROUTE
                className="block px-6 py-3 text-sm font-medium text-gray-800 hover:bg-[#f28842]/20 hover:text-gray-900 transition-all rounded-lg mx-1"
              >
                Web Development
              </Link>
              <Link
                href="/Digitalmarketing"
                className="block px-6 py-3 text-sm font-medium text-gray-800 hover:bg-[#f28842]/20 hover:text-gray-900 transition-all rounded-lg mx-1"
              >
                Digital Marketing
              </Link>
              <Link
                href="/Ecommerce"
                className="block px-6 py-3 text-sm font-medium text-gray-800 hover:bg-[#f28842]/20 hover:text-gray-900 transition-all rounded-lg mx-1"
              >
                Ecommerce Websites
              </Link>
              <Link
                href="/ui-ux-design"
                className="block px-6 py-3 text-sm font-medium text-gray-800 hover:bg-[#f28842]/20 hover:text-gray-900 transition-all rounded-lg mx-1"
              >
                CRM Development
              </Link>
              <Link
                href="/ui-ux-design"
                className="block px-6 py-3 text-sm font-medium text-gray-800 hover:bg-[#f28842]/20 hover:text-gray-900 transition-all rounded-lg mx-1"
              >
                ERP Development
              </Link>
              <Link
                href="/SaaS"
                className="block px-6 py-3 text-sm font-medium text-gray-800 hover:bg-[#f28842]/20 hover:text-gray-900 transition-all rounded-lg mx-1"
              >
                SaaS Development
              </Link>
              <Link
                href="/ui-ux-design"
                className="block px-6 py-3 text-sm font-medium text-gray-800 hover:bg-[#f28842]/20 hover:text-gray-900 transition-all rounded-lg mx-1"
              >
                Graphics & Design
              </Link>
              <Link
                href="/WebsiteAsService"
                className="block px-6 py-3 text-sm font-medium text-gray-800 hover:bg-[#f28842]/20 hover:text-gray-900 transition-all rounded-lg mx-1"
              >
                Website as a Service
              </Link>
            </div>
          </div>

          <Link href="/blog" className="hover:text-gray-600 transition-colors">
            BLOG +
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-600 transition-colors"
          >
            CONTACT +
          </Link>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <button className="bg-gray-900 text-white px-4 sm:px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors whitespace-nowrap">
            Sign Up
          </button>
        </div>
      </header>
    </div>
  );
}
