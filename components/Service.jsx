"use client";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Float,
  Torus,
  MeshDistortMaterial,
} from "@react-three/drei";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  X,
  Globe,
  Database,
  Smartphone,
  Megaphone,
  Palette,
  CheckCircle2,
} from "lucide-react";

// --- 3D CYBER RINGS BACKGROUND ---
function CyberRings() {
  const ref = useRef();
  useFrame((state) => {
    ref.current.rotation.z += 0.002;
    ref.current.rotation.x += 0.001;
  });

  return (
    <group ref={ref}>
      {[...Array(5)].map((_, i) => (
        <Torus
          key={i}
          args={[i * 0.8, 0.02, 16, 100]}
          rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
        >
          <meshStandardMaterial
            color="#ff6600"
            emissive="#ff6600"
            emissiveIntensity={2}
            transparent
            opacity={0.2}
          />
        </Torus>
      ))}
    </group>
  );
}

// --- PUZZLE CARD COMPONENT ---
const PuzzleCard = ({ service, index, onOpen }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end center"],
  });

  // Puzzle logic: Cards different directions se aayenge
  const xMovement = index % 2 === 0 ? -300 : 300; // Left or Right
  const yMovement = index % 3 === 0 ? 200 : -200; // Up or Down

  const x = useTransform(scrollYProgress, [0, 1], [xMovement, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [yMovement, 0]);
  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [index % 2 === 0 ? -20 : 20, 0],
  );
  const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ x, y, rotate, opacity, scale }}
      onClick={onOpen}
      className="relative cursor-pointer group w-full"
    >
      <div className="relative p-10 rounded-[2.5rem] bg-zinc-900/60 border border-white/10 backdrop-blur-3xl hover:border-[#ff6600] transition-all duration-700 shadow-2xl overflow-hidden">
        {/* Animated Glow Overlay */}
        <div className="absolute -inset-1 bg-gradient-to-br from-[#ff6600] to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

        <div className="flex flex-col h-full justify-between gap-12">
          <div>
            <div className="w-16 h-16 rounded-2xl bg-[#ff6600] flex items-center justify-center text-white mb-8 shadow-[0_0_30px_rgba(255,102,0,0.4)] group-hover:scale-110 transition-transform duration-500">
              <service.icon size={32} />
            </div>
            <h3 className="text-3xl font-black text-white leading-tight mb-4 tracking-tighter uppercase">
              {service.title}
            </h3>
            <p className="text-zinc-400 text-sm font-medium leading-relaxed">
              {service.desc}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[10px] font-black tracking-[0.4em] text-[#ff6600]">
              VIEW DETAILS
            </span>
            <div className="h-[1px] flex-1 bg-zinc-800 group-hover:bg-[#ff6600] transition-colors" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- MODAL & MAIN SECTION ---
export default function PuzzleServicePage() {
  const [active, setActive] = useState(null);
  const container = useRef(null);

  const services = [
    {
      title: "Website & Web Dev",
      desc: "Next-gen React & Next.js platforms.",
      icon: Globe,
      sub: [
        "UI/UX Design",
        "Custom Dev",
        "E-commerce",
        "Landing Pages",
        "React.js",
      ],
    },
    {
      title: "IT Solutions",
      desc: "Enterprise CRM & ERP Systems.",
      icon: Database,
      sub: ["B2B CRM", "Inventory Management", "Cloud SaaS"],
    },
    {
      title: "Mobile Apps",
      desc: "Native iOS & Android Experiences.",
      icon: Smartphone,
      sub: ["React Native", "Flutter", "App Store SEO"],
    },
    {
      title: "Digital Marketing",
      desc: "Data-driven ROI and Lead Gen.",
      icon: Megaphone,
      sub: ["SEO Audit", "Google Ads", "Social Media Ads"],
    },
    {
      title: "Creative Graphics",
      desc: "Premium Brand Identity & UI.",
      icon: Palette,
      sub: ["Logo Design", "UI/UX Design", "Social Graphics"],
    },
  ];

  return (
    <div className="bg-[#020202] min-h-screen text-white selection:bg-[#ff6600] overflow-x-hidden">
      {/* Three.js Background Layer */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} color="#ff6600" />
          <CyberRings />
        </Canvas>
      </div>

      {/* Content */}
      <main className="relative z-10 pt-32 pb-40 px-6 max-w-7xl mx-auto">
        <header className="mb-40 text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-7xl md:text-[12rem] font-black tracking-tighter leading-none uppercase"
          >
            A2V<span className="text-[#ff6600]">.</span>
          </motion.h1>
          <p className="text-zinc-500 tracking-[1em] text-xs uppercase mt-4">
            Scroll to Assemble Services
          </p>
        </header>

        {/* Puzzle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-24">
          {services.map((s, i) => (
            <PuzzleCard
              key={i}
              service={s}
              index={i}
              onOpen={() => setActive(s)}
            />
          ))}
        </div>
      </main>

      {/* Detailed Modal */}
      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 100 }}
              className="relative w-full max-w-3xl bg-zinc-950 border border-white/10 p-12 rounded-[3rem] shadow-2xl"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-8 right-8 text-zinc-500 hover:text-white"
              >
                <X size={32} />
              </button>
              <div className="flex items-center gap-6 mb-10">
                <div className="p-5 bg-[#ff6600] rounded-2xl text-white">
                  <active.icon size={40} />
                </div>
                <h2 className="text-5xl font-black uppercase tracking-tighter">
                  {active.title}
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {active.sub.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5"
                  >
                    <CheckCircle2 size={20} className="text-[#ff6600]" />
                    <span className="font-bold text-zinc-300 uppercase text-xs tracking-widest">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    
    </div>
  );
}
