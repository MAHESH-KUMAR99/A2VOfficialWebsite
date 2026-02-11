'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ITSolutionPage() {
  const [isMounted, setIsMounted] = useState(false);

  const canvasRef = useRef(null);
  const heroTextRef = useRef(null);
  const statCardsRef = useRef(null);
  const solutionTextRef = useRef(null);
  const servicesRef = useRef(null);
  const servicesCarouselRef = useRef(null);
  const count1Ref = useRef(null);
  const count2Ref = useRef(null);

  // ✅ MOUNT CHECK
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const initThreeJS = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

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
      color: 0xff6600,
      emissive: 0xff6600,
      shininess: 100,
      specular: 0xff6600,
      transparent: true,
      opacity: 0.15,
    });
    const torus = new THREE.Mesh(geometry1, material);
    scene.add(torus);

    const ambientLight = new THREE.AmbientLight(0xff6600, 0.5);
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

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  // ✅ SAFE GSAP ANIMATIONS
  useEffect(() => {
    if (!isMounted) return;

    const ctx = gsap.context(() => {
      // Hero text animation
      if (heroTextRef.current?.children) {
        gsap.from(heroTextRef.current.children, {
          opacity: 0,
          y: 100,
          duration: 1.2,
          stagger: 0.2,
          ease: 'power3.out',
          delay: 0.5,
        });
      }

      // Counter animations - ✅ FIXED NULL ERROR
      const stats = [
        { ref: count1Ref, endValue: 99 },
        { ref: count2Ref, endValue: 152 },
      ];

      stats.forEach((stat) => {
        if (stat.ref.current) {
          gsap.fromTo(
            stat.ref.current,
            { innerHTML: 0 },
            {
              innerHTML: stat.endValue,
              duration: 2.5,
              delay: 1.5,
              ease: 'power2.out',
              snap: { innerHTML: 1 },
              onUpdate: function () {
                if (stat.ref.current) {
                  stat.ref.current.innerHTML = Math.ceil(
                    this.targets()[0].innerHTML,
                  );
                }
              },
            },
          );
        }
      });

      // Stat cards
      if (statCardsRef.current?.children) {
        gsap.from(statCardsRef.current.children, {
          opacity: 0,
          scale: 0.8,
          duration: 1,
          stagger: 0.3,
          ease: 'back.out(1.7)',
          delay: 1.5,
        });
      }

      // Solution text
      if (solutionTextRef.current) {
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
      }

      // Services carousel
      if (servicesCarouselRef.current) {
        const carousel = servicesCarouselRef.current;
        const firstSet = carousel.children[0];
        if (firstSet) {
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
      }
    });

    return () => ctx.revert();
  }, [isMounted]);

  // Three.js separate effect
  useEffect(() => {
    if (!isMounted) return;
    const cleanup = initThreeJS();
    return cleanup;
  }, [isMounted, initThreeJS]);

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#efe9dd] via-[#e2d2be] to-[#dfcfbb]" />
    );
  }

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
    <div className="relative min-h-screen bg-gradient-to-br from-[#efe9dd] via-[#e2d2be] to-[#dfcfbb] overflow-x-hidden">
      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto relative z-10 px-4 sm:px-8 lg:px-16 pt-8 lg:pt-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div ref={heroTextRef} className="space-y-4">
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
            <div className="pt-4">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1 group">
                  <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-black text-gray-900 mb-2 leading-none tracking-tighter">
                    <span ref={count1Ref}>0</span>
                    <span className="font-normal">+</span>
                  </div>
                  <p className="text-gray-700 font-medium text-base sm:text-lg leading-snug tracking-wide">
                    Clients Satisfied <br />
                    <span className="font-semibold">And Returning.</span>
                  </p>
                </div>

                <div className="hidden lg:flex w-[1px] h-16 bg-gradient-to-b from-gray-300/50 to-gray-200/30 opacity-60" />

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
          <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[8rem] font-light text-gray-900 leading-none tracking-tight opacity-90">
            IT SOLUTION.
          </h2>
        </div>
      </main>

      {/* Services Carousel */}
      <div ref={servicesRef} className="relative z-20 pb-8 overflow-hidden">
        <div className="py-4">
          <div
            ref={servicesCarouselRef}
            className="flex items-center gap-3 max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16"
          >
            <div className="flex items-center gap-3 flex-shrink-0">
              {services.map((service, index) => (
                <button
                  key={`s1-${index}`}
                  className="px-4 sm:px-6 py-2 bg-transparent backdrop-blur-sm border border-[#f28842] rounded-full text-gray-800 font-medium text-xs sm:text-sm hover:bg-[#f28842] hover:text-white transition-all whitespace-nowrap"
                >
                  {service}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              {services.map((service, index) => (
                <button
                  key={`s2-${index}`}
                  className="px-4 sm:px-6 py-2 bg-transparent backdrop-blur-sm border border-[#f28842] rounded-full text-gray-800 font-medium text-xs sm:text-sm hover:bg-[#f28842] hover:text-white transition-all whitespace-nowrap"
                >
                  {service}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
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
      </div>
    </div>
  );
}
