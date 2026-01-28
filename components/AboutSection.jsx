"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  animate,
} from "framer-motion";

export default function AlericITPage() {
  const canvasRef = useRef(null);
  const mainRef = useRef(null);
  const isInView = useInView(mainRef, { once: false, amount: 0.1 });

  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start end", "end center"],
  });

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
    const count = 500;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++)
      positions[i] = (Math.random() - 0.5) * 10;
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3),
    );

    const points = new THREE.Points(
      particlesGeometry,
      new THREE.PointsMaterial({
        size: 0.02,
        color: 0x7ef5c8,
        transparent: true,
        opacity: 0.5,
      }),
    );
    scene.add(points);
    camera.position.z = 3;

    const animateScene = () => {
      points.rotation.y += 0.001;
      renderer.render(scene, camera);
      requestAnimationFrame(animateScene);
    };
    animateScene();

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
    <div className="relative min-h-screen bg-[#f8fffb] text-[#0a251c] font-sans overflow-x-hidden">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
      />

      <main
        ref={mainRef}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-12 py-16 md:py-24"
      >
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* Left Side: 15+ Massive Counter */}
          <div className="relative flex flex-col justify-center items-center w-full min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] absolute top-0 lg:left-0 bg-white/60 backdrop-blur-md px-5 py-2 rounded-full border border-gray-100 shadow-sm z-30 font-bold">
              A2V EXPERIENCE
            </span>

            <div className="relative">
              {/* Massive Fluid Typography for 15+ */}
              <h1 className="text-[9rem] sm:text-[12rem] md:text-[15rem] lg:text-[18rem] font-bold leading-[0.8] tracking-[-0.05em] text-[#0a251c] flex flex-col sm:flex-row items-center sm:items-baseline select-none">
                <Counter from={0} to={15} />
                <span className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tighter opacity-30 sm:ml-4">
                  +YEARS
                </span>
              </h1>

              {/* Luxury Floating Tags with Adjusted Positioning for Massive Text */}
              <FloatingTag
                text="Optimization"
                className="top-[-10%] -left-4 sm:-left-12 bg-orange-500 text-white"
                yDelta={-20}
                delay={0}
              />
              <FloatingTag
                text="Evaluation"
                className="top-[40%] -right-4 sm:-right-8 bg-[#dcfce7] text-[#166534]"
                yDelta={15}
                delay={0.5}
              />
              <FloatingTag
                text="Consultation"
                className="bottom-[-5%] left-10 bg-[#bef264] text-[#3f6212]"
                yDelta={-12}
                delay={1}
              />
            </div>
          </div>

          {/* Right Side: Luxury Content */}
          <div className="space-y-8 text-center lg:text-left">
            <motion.h2
              style={{ color: textColor }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1] tracking-tight"
            >
              We’re A2V <br className="hidden sm:block" /> IT Solutions Agency
            </motion.h2>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-5xl font-light tracking-tighter">
                  4.9
                </span>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">
                  Global Reviews
                </p>
              </div>
              <div className="hidden sm:block h-12 w-px bg-gray-200"></div>
              <div className="flex flex-col items-center lg:items-start gap-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                  Trusted Industry Leader
                </p>
                <div className="flex gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="bg-[#0a251c] p-1.5 rounded-sm shadow-sm"
                    >
                      <svg
                        className="w-3 h-3 text-white fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <blockquote className="text-gray-500 text-xl sm:text-2xl leading-relaxed max-w-lg italic font-light">
              “A2V delivered exactly what we needed — efficient, reliable, and
              results-driven solutions.”
            </blockquote>

            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center font-bold text-[#0a251c]">
                R
              </div>
              <div className="text-left">
                <p className="font-bold text-lg">Ravinder Kumar</p>
                <p className="text-xs uppercase tracking-widest text-gray-400">
                  CEO,Founder
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Section */}
        <div className="mt-15 sm:mt-15 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-gray-100 pt-10">
          <StatItem
            icon="📋"
            target={34}
            suffix=" K"
            label="Digital Assets Delivered"
            index={0}
          />
          <StatItem
            icon="🌐"
            target={16}
            suffix=" K"
            label="Global Operations Hub"
            index={1}
          />
          <StatItem
            icon="☀️"
            target={15}
            suffix=" K"
            label="Year of Experience"
            index={2}
          />
          <StatItem
            icon="👥"
            target={98}
            suffix=" %"
            label="Happy Customer"
            index={3}
          />
        </div>
      </main>
    </div>
  );
}

// Optimized Components
function Counter({ from, to }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (inView) {
      const node = ref.current;
      const controls = animate(from, to, {
        duration: 2.5,
        ease: [0.16, 1, 0.3, 1],
        onUpdate(value) {
          node.textContent = Math.round(value);
        },
      });
      return () => controls.stop();
    }
  }, [from, to, inView]);
  return <span ref={ref} />;
}

function FloatingTag({ text, className, yDelta, delay }) {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: [0, yDelta, 0], opacity: 1 }}
      transition={{
        y: { duration: 4, repeat: Infinity, delay, ease: "easeInOut" },
        opacity: { duration: 0.5, delay },
      }}
      className={`absolute px-4 sm:px-6 py-2 rounded-full font-bold text-[10px] sm:text-xs tracking-widest shadow-2xl z-20 whitespace-nowrap uppercase ${className}`}
    >
      {text}
    </motion.div>
  );
}

function StatItem({ icon, target, suffix, label, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className="flex flex-col items-center lg:items-start gap-2"
    >
      <div className="text-3xl mb-2 text-[#ff6600] opacity-50">{icon}</div>
      <h3 className="text-5xl sm:text-6xl font-bold tracking-tighter">
        <Counter from={0} to={target} />
        {suffix}
      </h3>
      <p className="text-[10px] sm:text-xs text-gray-400 font-bold uppercase tracking-widest">
        {label}
      </p>
    </motion.div>
  );
}
