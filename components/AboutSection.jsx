"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

export default function AlericITPage() {
  const canvasRef = useRef(null);
  const mainRef = useRef(null);
  const isInView = useInView(mainRef, { once: false, amount: 0.2 });

  // Scroll Progress for Text Animation
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start end", "end center"],
  });

  // Text color transition from grey to black
  const textColor = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["#9ca3af", "#0a251c"],
  );

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const particlesGeometry = new THREE.BufferGeometry();
    const count = 400;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++)
      positions[i] = (Math.random() - 0.5) * 10;
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3),
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.015,
      color: 0x7ef5c8,
      transparent: true,
      opacity: 0.3,
    });
    const points = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(points);
    camera.position.z = 3;

    const animate = () => {
      points.rotation.y += 0.0005;
      points.rotation.x += 0.0002;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      renderer.dispose();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#fcfdfc] text-[#0a251c] font-sans overflow-hidden">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
      />

      <main
        ref={mainRef}
        className="relative z-10 max-w-7xl mx-auto px-6 py-32"
      >
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Side: 15+ Graphic with Floating Tags */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "circOut" }}
            className="relative flex justify-center items-center"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] absolute -top-16 left-0 opacity-50 font-semibold">
              Crafting Excellence
            </span>

            <div className="relative">
              <h1 className="text-[16rem] md:text-[22rem] font-bold leading-none tracking-tighter text-[#0a251c] select-none">
                15<span className="font-extralight text-green-200">+</span>
              </h1>

              {/* Floating Tags with Independent Animations */}
              <FloatingTag
                text="Optimization"
                className="top-1/4 -left-12 bg-[#0a251c] text-white"
                delay={0}
                yDelta={-15}
              />
              <FloatingTag
                text="Evaluation"
                className="top-10 right-0 bg-white border border-gray-100 shadow-xl text-green-800"
                delay={0.5}
                yDelta={12}
              />
              <FloatingTag
                text="Consultation"
                className="bottom-20 right-10 bg-[#bef264] text-[#3f6212] shadow-lg shadow-lime-100"
                delay={1}
                yDelta={-10}
              />
            </div>
          </motion.div>

          {/* Right Side: Luxury Content */}
          <div className="space-y-8">
            <motion.h2
              style={{ color: textColor }}
              className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight transition-colors duration-300"
            >
              We’re Aleric IT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0a251c] to-green-800">
                Solutions Agency
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex items-center gap-8"
            >
              <div className="text-center">
                <span className="text-5xl font-light">4.9</span>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-2">
                  Rating
                </p>
              </div>
              <div className="h-12 w-[1px] bg-gray-200"></div>
              <div>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-[#0a251c] fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs font-semibold tracking-tighter text-gray-400">
                  Trusted by 2k+ Companies
                </p>
              </div>
            </motion.div>

            <motion.blockquote
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-xl md:text-2xl text-gray-500 leading-relaxed max-w-lg font-light border-l-2 border-green-100 pl-8"
            >
              “Aleric delivered exactly what we needed — efficient, reliable,
              and results-driven solutions.”
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              <p className="font-bold text-2xl tracking-tight">John Doe</p>
              <p className="text-sm tracking-[0.2em] uppercase text-green-700 font-medium">
                CEO, InnovateTech
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom Stats: Reveal on Scroll */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-gray-100 pt-16">
          <StatItem value="34 K" label="Project Completed" index={0} />
          <StatItem value="16 K" label="Country Office" index={1} />
          <StatItem value="12 K" label="Years Experience" index={2} />
          <StatItem value="98 %" label="Happy Customers" index={3} />
        </div>
      </main>
    </div>
  );
}

// Floating Tag Component
function FloatingTag({ text, className, delay, yDelta }) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, yDelta, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
      className={`absolute px-6 py-2.5 rounded-full font-semibold text-xs tracking-wide shadow-2xl backdrop-blur-md ${className}`}
    >
      {text}
    </motion.div>
  );
}

// Animated Stat Item
function StatItem({ value, label, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.8, ease: "backOut" }}
      className="space-y-2 group cursor-default"
    >
      <h3 className="text-6xl font-bold tracking-tighter group-hover:text-green-700 transition-colors duration-500">
        {value}
      </h3>
      <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400 font-bold">
        {label}
      </p>
    </motion.div>
  );
}
