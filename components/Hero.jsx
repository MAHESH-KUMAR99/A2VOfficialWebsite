'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
            snap: { innerText: 1 }, // Taaki points me na dikhe, seedha round number ho
            onUpdate: function () {
              // innerText string hoti hai, isliye update ke waqt value ensure karte hain
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
    <div className="relative min-h-screen bg-gradient-to-br from-[#e8f9f3] via-[#f0fcf7] to-[#dff8ee] overflow-hidden">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />

      <header className="max-w-[1600px] mx-auto relative z-10 flex items-center justify-between px-8 lg:px-16 py-6">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold text-gray-900">λ → LERIC</div>
          <div className="text-xs text-gray-600 mt-2">Since . 2018</div>
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
          <button className="bg-gray-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
            Sign Up
          </button>
        </div>
      </header>

      <main className="max-w-[1650px] mx-auto relative z-10 px-8 lg:px-16 pt-16 lg:pt-30">
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-32">
          <div ref={heroTextRef} className="space-y-6">
            <h1 className="text-6xl lg:text-7xl xl:text-7xl font-bold text-gray-900 leading-[0.95] tracking-tight">
              Complete IT,
              <br />
              Digital & Branding
              <br />
              <span className="italic font-serif text-gray-800">
                It Solutions
              </span>
            </h1>
          </div>

          <div ref={statCardsRef} className="space-y-2 pt-8">
            <div className="pt-8">
              <div className="flex flex-col lg:flex-row ">
                {/* First Stat */}
                <div className="flex-1 group pl-80">
                  <div className="text-[4.5rem] lg:text-7xl xl:text-[4rem] font-black text-gray-900 mb-3 leading-none tracking-tighter">
                    <span ref={count1Ref}>0</span>
                    <span className="font-normal">+</span>
                  </div>
                  <p className="text-gray-700 font-medium text-lg lg:text-lg leading-snug tracking-wide max-w-[220px]">
                    Clients Satisfied <br className="hidden lg:block" />
                    <span className="block lg:inline font-semibold">
                      And Returning.
                    </span>
                  </p>
                </div>

                <div className="hidden lg:flex w-[1px] h-24 bg-gradient-to-b from-gray-300/50 to-gray-200/30 opacity-60"></div>

                {/* Second Stat */}
                <div className="flex-1 group">
                  <div className="text-[4.5rem] lg:text-7xl xl:text-[4rem] font-black text-gray-900 mb-3 leading-none tracking-tighter">
                    <span ref={count2Ref}>0</span>
                    <span className="font-normal">+</span>
                  </div>
                  <p className="text-gray-700 font-medium text-lg lg:text-lg leading-snug tracking-wide max-w-[240px]">
                    Projects Delivered <br className="hidden lg:block" />
                    <span className="block lg:inline font-semibold">
                      In 25+ Countries.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={solutionTextRef} className="mb-24">
          <h2 className="text-[8rem] lg:text-[12rem] xl:text-[15rem] font-light text-gray-900 leading-none tracking-tight opacity-90">
            IT SOLUTION.
          </h2>
        </div>
      </main>

      {/* Services Carousel */}
      <div ref={servicesRef} className="pb-16 overflow-hidden">
        <div className="py-8">
          <div ref={servicesCarouselRef} className="flex items-center gap-4">
            <div className="flex items-center gap-4 flex-shrink-0">
              {services.map((service, index) => (
                <button
                  key={`s1-${index}`}
                  className="px-8 py-3 bg-transparent backdrop-blur-sm border border-gray-300 rounded-full text-gray-800 font-medium text-sm hover:bg-gray-900 hover:text-white transition-all whitespace-nowrap"
                >
                  {service}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4 flex-shrink-0">
              {services.map((service, index) => (
                <button
                  key={`s2-${index}`}
                  className="px-8 py-3 bg-transparent backdrop-blur-sm border border-gray-300 rounded-full text-gray-800 font-medium text-sm hover:bg-gray-900 hover:text-white transition-all whitespace-nowrap"
                >
                  {service}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
