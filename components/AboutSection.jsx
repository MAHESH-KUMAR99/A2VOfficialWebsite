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
  const isInView = useInView(mainRef, { once: false, amount: 0.2 });

  // Luxury Scroll: Wording grey se black hogi
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

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x7ef5c8,
      transparent: true,
      opacity: 0.5,
    });
    const points = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(points);
    camera.position.z = 3;

    const animateScene = () => {
      points.rotation.y += 0.001;
      renderer.render(scene, camera);
      requestAnimationFrame(animateScene);
    };
    animateScene();

    return () => renderer.dispose();
  }, []);

  return (
    <div className="relative min-h-screen max-w-[] bg-[#f8fffb] text-[#0a251c] font-sans overflow-hidden">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
      />

      <main
        ref={mainRef}
        className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-12"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: 15+ Graphic */}
          <div className="relative flex justify-center items-center">
            <span className="text-xs uppercase tracking-widest absolute -top-12 left-0 bg-white/50 px-4 py-1.5 rounded-full border border-gray-100">
              What I Do
            </span>

            <div className="relative">
              {/* Counter Animation for 15+ */}
              <h1 className="text-[12rem] font-bold leading-none tracking-tighter text-[#0a251c] flex items-baseline">
                <Counter from={0} to={15} />
                <span className="font-light">+ years</span>
              </h1>

              {/* Floating Tags (Fixed with your original colors & smooth floating) */}
              <FloatingTag
                text="Optimization"
                className="top-1/2 -left-8 bg-[#dcfce7] text-[#166534]"
                yDelta={-15}
                delay={0}
              />
              <FloatingTag
                text="Evaluation"
                className="top-[35%] right-0 bg-[#dcfce7] text-[#166534]"
                yDelta={12}
                delay={0.5}
              />
              <FloatingTag
                text="Consultation"
                className="bottom-[2%] right-4 bg-[#bef264] text-[#3f6212]"
                yDelta={-10}
                delay={1}
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="space-y-8">
            <motion.h2
              style={{ color: textColor }} // Grey to Black scroll animation
              className="text-7xl font-bold leading-[1.1]"
            >
              We’re A2V <br /> IT Solutions Agency
            </motion.h2>

            <div className="flex items-center gap-6">
              <div>
                <span className="text-4xl font-bold">4.9</span>
                <p className="text-xs text-gray-500 mt-1">( 24 review )</p>
              </div>
              <div className="h-10 w-px bg-gray-300"></div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider mb-1">
                  Average Rating
                </p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="bg-[#0a251c] p-1 rounded-sm">
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

            <blockquote className="text-gray-600 text-lg leading-relaxed max-w-lg italic">
              “Aleric delivered exactly what we needed — efficient, reliable,
              and results-driven solutions. We’ve seen measurable improvements
              since partnering with them.”
            </blockquote>

            <div>
              <p className="font-bold text-xl">John Doe</p>
              <p className="text-sm text-gray-500">CEO, InnovateTech</p>
            </div>
          </div>
        </div>

        {/* Bottom Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-100 pt-12">
          <StatItem
            icon="📋"
            target={34}
            suffix=" K"
            label="Project Completed"
            index={0}
          />
          <StatItem
            icon="🌐"
            target={16}
            suffix=" K"
            label="Country Office"
            index={1}
          />
          <StatItem
            icon="☀️"
            target={12}
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

// Sub-components for Animations
function Counter({ from, to }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (inView) {
      const node = ref.current;
      const controls = animate(from, to, {
        duration: 2,
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
      initial={{ y: 0 }}
      animate={{ y: [0, yDelta, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
      className={`absolute px-6 py-2 rounded-full font-medium text-sm shadow-lg z-20 ${className}`}
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
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="flex items-center gap-4 group cursor-default"
    >
      <div className="text-3xl grayscale group-hover:grayscale-0 transition-all">
        {icon}
      </div>
      <div>
        <h3 className="text-5xl font-bold tracking-tighter">
          <Counter from={0} to={target} />
          {suffix}
        </h3>
        <p className="text-sm text-gray-500 font-medium">{label}</p>
      </div>
    </motion.div>
  );
}
