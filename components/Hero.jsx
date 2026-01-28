'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image'; // Next.js Image component import karein
import logo from '@/public/asstes/logo.png'; // Path correct karein

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ITSolutionPage() {
  const canvasRef = useRef(null);
  const heroTextRef = useRef(null);
  const statCardsRef = useRef(null);
  const solutionTextRef = useRef(null);
  const servicesRef = useRef(null);
  const servicesCarouselRef = useRef(null);

  // Counter refs
  const count1Ref = useRef(null);
  const count2Ref = useRef(null);

  useEffect(() => {
    // ... (Three.js code remains exactly same)
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    camera.position.z = 5;

    const geometry1 = new THREE.TorusGeometry(2, 0.5, 16, 100);
    const material = new THREE.MeshPhongMaterial({
      color: 0x7ef5c8,
      emissive: 0x062318,
      shininess: 100,
      specular: 0x7ef5c8,
      transparent: true,
      opacity: 0.15,
    });
    const torus = new THREE.Mesh(geometry1, material);
    scene.add(torus);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const animate = () => {
      torus.rotation.x += 0.01;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // GSAP Animations
    const ctx = gsap.context(() => {
      // Hero text animation
      gsap.from(heroTextRef.current.children, {
        opacity: 0,
        y: 100,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.5,
      });

      // --- ADDED COUNTER ANIMATION ---
      const stats = [
        { ref: count1Ref, endValue: 99 },
        { ref: count2Ref, endValue: 152 },
      ];

      stats.forEach((stat) => {
        gsap.fromTo(
          stat.ref.current,
          { innerText: 0 },
          {
            innerText: stat.endValue,
            duration: 2.5,
            delay: 1.5,
            ease: 'power2.out',
            snap: { innerText: 1 },
            onUpdate: function () {
              stat.ref.current.innerHTML = Math.ceil(
                this.targets()[0].innerText,
              );
            },
          },
        );
      });

      // Stats cards container animation
      gsap.from(statCardsRef.current.children, {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        stagger: 0.3,
        ease: 'back.out(1.7)',
        delay: 1.5,
      });

      // Solution text animation
      gsap.from(solutionTextRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: solutionTextRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      // Infinite carousel animation
      if (servicesCarouselRef.current) {
        const carousel = servicesCarouselRef.current;
        const firstSet = carousel.children[0];
        const carouselWidth = firstSet.scrollWidth;
        const carouselAnimation = gsap.to(carousel, {
          x: -carouselWidth,
          duration: 30,
          ease: 'none',
          repeat: -1,
        });
        carousel.addEventListener('mouseenter', () =>
          carouselAnimation.pause(),
        );
        carousel.addEventListener('mouseleave', () =>
          carouselAnimation.resume(),
        );
      }
    });

    return () => {
      ctx.revert();
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  const services = [
    'Consulting',
    'Network Design',
    'Database Design',
    'IT Support',
    'IT Audit',
    'Data Solutions',
    'IT Roadmaps',
    'App Solutions',
    'IT Infrastructure',
    'Software Development',
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#e8f9f3] via-[#f0fcf7] to-[#dff8ee] overflow-x-hidden">
      {/* FIX: Added overflow-x-hidden to prevent horizontal scroll */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />

      <header className="max-w-[1400px] mx-auto relative z-10 flex items-center justify-between px-4 sm:px-8 lg:px-16 py-6">
        {/* FIX: Added responsive padding */}
        <div className="flex items-center gap-2">
          {/* Logo image ke liye */}
          <img
            src="/asstes/logo.png"
            alt="LERIC Logo"
            className="h-15 w-auto sm:h-10" // Height adjust kar sakte hain aap
          />

        </div>
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-800">
          <a href="#" className="hover:text-gray-600 transition-colors">
            HOME +
          </a>
          <a href="#" className="hover:text-gray-600 transition-colors">
            PAGES +
          </a>
          <a href="#" className="hover:text-gray-600 transition-colors">
            BLOG +
          </a>
          <a href="#" className="hover:text-gray-600 transition-colors">
            CONTACT +
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="bg-gray-900 text-white px-4 sm:px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors whitespace-nowrap">
            {/* FIX: Added responsive padding and whitespace-nowrap */}
            Sign Up
          </button>
        </div>
      </header>

      {/* FIX: Main section ko screen height ke andar rakhe */}
      <main className="max-w-[1400px] mx-auto relative z-10 px-4 sm:px-8 lg:px-16 pt-8 lg:pt-16">
        {/* FIX: Reduced padding-top */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* FIX: Reduced gap */}
          <div ref={heroTextRef} className="space-y-4">
            {/* FIX: Reduced space-y */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
              Complete IT,
              <br />
              Digital & Branding
              <br />
              <span className="italic font-serif text-gray-800">
                It Solutions
              </span>
            </h1>
          </div>

          <div ref={statCardsRef} className="space-y-2 pt-4">
            {/* FIX: Reduced padding-top */}
            <div className="pt-4">
              {/* FIX: Reduced padding-top */}
              <div className="flex flex-col lg:flex-row gap-6">
                {/* FIX: Added gap for mobile spacing */}
                {/* First Stat */}
                <div className="flex-1 group">
                  {/* FIX: Removed pl-60 that was causing overflow */}
                  <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-black text-gray-900 mb-2 leading-none tracking-tighter">
                    <span ref={count1Ref}>0</span>
                    <span className="font-normal">+</span>
                  </div>
                  <p className="text-gray-700 font-medium text-base sm:text-lg leading-snug tracking-wide">
                    Clients Satisfied <br />
                    <span className="font-semibold">And Returning.</span>
                  </p>
                </div>

                <div className="hidden lg:flex w-[1px] h-16 bg-gradient-to-b from-gray-300/50 to-gray-200/30 opacity-60"></div>
                {/* FIX: Reduced height */}

                {/* Second Stat */}
                <div className="flex-1 group">
                  <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-black text-gray-900 mb-2 leading-none tracking-tighter">
                    <span ref={count2Ref}>0</span>
                    <span className="font-normal">+</span>
                  </div>
                  <p className="text-gray-700 font-medium text-base sm:text-lg leading-snug tracking-wide">
                    Projects Delivered <br />
                    <span className="font-semibold">In 25+ Countries.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={solutionTextRef} className="mt-8 lg:mt-12 mb-8 lg:mb-12">
          {/* FIX: Reduced margins */}
          <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[8rem] font-light text-gray-900 leading-none tracking-tight opacity-90">
            {/* FIX: Made text responsive */}
            IT SOLUTION.
          </h2>
        </div>
      </main>

      {/* Services Carousel - Fixed positioning to be within viewport */}
      <div ref={servicesRef} className="relative z-20 pb-8 overflow-hidden">
        {/* FIX: Reduced padding-bottom */}
        <div className="py-4">
          {/* FIX: Reduced padding */}
          <div ref={servicesCarouselRef} className="flex items-center gap-3">
            {/* FIX: Reduced gap */}
            <div className="flex items-center gap-3 flex-shrink-0">
              {/* FIX: Reduced gap */}
              {services.map((service, index) => (
                <button
                  key={`s1-${index}`}
                  className="px-4 sm:px-6 py-2 bg-transparent backdrop-blur-sm border border-gray-300 rounded-full text-gray-800 font-medium text-xs sm:text-sm hover:bg-gray-900 hover:text-white transition-all whitespace-nowrap"
                  // FIX: Made button responsive
                >
                  {service}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              {services.map((service, index) => (
                <button
                  key={`s2-${index}`}
                  className="px-4 sm:px-6 py-2 bg-transparent backdrop-blur-sm border border-gray-300 rounded-full text-gray-800 font-medium text-xs sm:text-sm hover:bg-gray-900 hover:text-white transition-all whitespace-nowrap"
                >
                  {service}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Social Links - Left Side */}
      <div className="fixed left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-6 items-center">
        <span className="text-xs font-medium text-gray-700 rotate-90 mb-4">
          FOLLOW
        </span>
        <div className="w-px h-12 bg-gray-400"></div>
        <a
          href="#"
          className="text-gray-800 hover:text-gray-600 transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3 8h-1.35c-.538 0-.65.221-.65.778V10h2l-.209 2H13v7h-3v-7H8v-2h2V7.692C10 5.923 10.931 5 13.029 5H15v3z" />
          </svg>
        </a>
        <a
          href="#"
          className="text-gray-800 hover:text-gray-600 transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
        <a
          href="#"
          className="text-gray-800 hover:text-gray-600 transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
          </svg>
        </a>
        <a
          href="#"
          className="text-gray-800 hover:text-gray-600 transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
        <a
          href="#"
          className="text-gray-800 hover:text-gray-600 transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.46 6c-.85.38-1.78.64-2.75.76a4.83 4.83 0 002.11-2.65c-.93.55-1.95.95-3.05 1.17a4.8 4.8 0 00-8.18 4.37A13.65 13.65 0 013.39 4.62a4.82 4.82 0 001.49 6.41 4.77 4.77 0 01-2.18-.6v.06a4.8 4.8 0 003.85 4.7 4.8 4.8 0 01-2.16.08 4.81 4.81 0 004.48 3.33A9.63 9.63 0 012 19.54a13.57 13.57 0 007.36 2.15c8.83 0 13.65-7.31 13.65-13.65 0-.21 0-.41-.02-.62A9.75 9.75 0 0024 4.59a9.57 9.57 0 01-2.54.7z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
