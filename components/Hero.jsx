'use client';
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

// --- Animated Background Mesh (Three.js) ---
const AbstractBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 bg-[#fffcf8]">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Sphere args={[1, 100, 200]} scale={2.5}>
          <MeshDistortMaterial
            color="#ffa10a"
            attach="material"
            distort={0.4}
            speed={1.5}
            roughness={0}
            opacity={0.15}
            transparent
          />
        </Sphere>
      </Canvas>
    </div>
  );
};

const HeroPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline Animation
      gsap.from('.headline span', {
        y: 120,
        skewY: 7,
        stagger: 0.1,
        duration: 1.5,
        ease: 'power4.out',
      });

      // IT SOLUTION Background Text Animation
      gsap.to('.bg-text', {
        xPercent: -20,
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: 1,
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const services = [
    'IT Audit',
    'Data Solutions',
    'IT Roadmaps',
    'App Solutions',
    'IT Infrastructure',
    'Software Development',
    'Consulting',
    'Network Design',
  ];

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-hidden selection:bg-[#ff6600] selection:text-white"
    >
      <AbstractBackground />

      {/* --- Navbar --- */}
      <nav className="flex justify-between items-center px-12 py-8 z-50 relative">
        <div className="flex items-center gap-2 font-black text-2xl tracking-tighter">
          <span className="bg-[#ff6600] text-white w-8 h-8 flex items-center justify-center rounded-sm">
            A
          </span>
          ALERIC
        </div>
        <div className="hidden md:flex gap-12 font-bold text-[13px] tracking-widest text-gray-500">
          {['HOME', 'PAGES', 'BLOG', 'CONTACT'].map((m) => (
            <a
              key={m}
              className="hover:text-[#ff6600] transition-colors"
              href="#"
            >
              {m}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <button className="bg-[#1a2e2a] text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-[#ff6600] transition-all duration-500">
            Sign Up
          </button>
          <div className="space-y-1.5 cursor-pointer">
            <div className="w-8 h-[2px] bg-black"></div>
            <div className="w-8 h-[2px] bg-black"></div>
          </div>
        </div>
      </nav>

      {/* --- Main Content --- */}
      <main className="px-12 pt-16 relative z-10">
        <div className="grid grid-cols-12">
          <div className="col-span-8">
            <h1 className="headline text-[120px] leading-[0.85] font-bold text-[#1a2e2a] tracking-tight">
              <div className="overflow-hidden h-[120px]">
                <span>Developing</span>
              </div>
              <div className="overflow-hidden h-[120px]">
                <span>Future-Ready</span>
              </div>
              <div className="overflow-hidden h-[120px] italic font-serif font-light text-[#ff6600]">
                <span>It Solutions</span>
              </div>
            </h1>
          </div>

          <div className="col-span-4 flex flex-col justify-start pt-10">
            <div className="border-l-2 border-gray-100 pl-8">
              <h2 className="text-7xl font-bold text-[#1a2e2a]">99%</h2>
              <p className="text-gray-400 font-medium mt-2 leading-relaxed tracking-wider text-sm uppercase">
                Clients Satisfied And <br /> Repeating.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-[-50px]">
          <div className="text-right">
            <h2 className="text-[150px] font-bold text-[#1a2e2a] leading-none">
              152+
            </h2>
            <p className="text-gray-400 font-medium tracking-widest text-sm uppercase mr-4">
              Project Completed In <br /> 25 Countries.
            </p>
          </div>
        </div>
      </main>

      {/* --- Animated Giant Text (IT SOLUTION Effect) --- */}
      <div className="absolute bottom-16 left-0 w-full whitespace-nowrap z-0 pointer-events-none">
        <h2 className="bg-text text-[25vw] font-black leading-none opacity-[0.04] text-black">
          IT SOLUTION.
        </h2>
      </div>

      {/* --- Infinite Scrolling Services Bar --- */}
      <div className="absolute bottom-0 w-full bg-white/30 backdrop-blur-md border-t border-gray-100 py-6">
        <div className="flex overflow-hidden group">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
            className="flex gap-12 whitespace-nowrap px-6"
          >
            {[...services, ...services].map((s, i) => (
              <span
                key={i}
                className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-[#1a2e2a]"
              >
                <div className="w-2 h-2 bg-[#ff6600] rounded-full" />
                {s}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
