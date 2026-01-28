"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  Monitor,
  ExternalLink,
  CheckCircle2,
  Zap,
  ArrowUpRight,
  ShieldCheck,
  MousePointer2,
} from "lucide-react";

const PROJECTS_DATABASE = [
  {
    id: 1,
    title: "Rawat Band Official",
    url: "https://rawatband.com/",
    tags: ["Branding", "Events"],
    description:
      "Premium event management platform with high-end interactive UI and seamless user journey.",
  },
  {
    id: 2,
    title: "Lotus Multi-Specialty Hospital",
    url: "mahesh-hospital-web.netlify.app",
    tags: ["Healthcare", "Portal"],
    description:
      "Multi-specialty hospital portal focused on patient care and simplified appointment booking.",
  },
  {
    id: 3,
    title: "Localmate Logistics",
    url: "https://localmate.up.railway.app/",
    tags: ["SaaS", "Logistics"],
    description:
      "Supply chain tracking system built for high-scale delivery and real-time operations.",
  },
  {
    id: 4,
    title: "A2V Digital Hub",
    url: "http://192.168.0.103:3000/",
    tags: ["Agency", "Portfolio"],
    description:
      "A digital transformation showcase featuring high-end marketing dashboards.",
  },
  {
    id: 5,
    title: "Mahesh Beauty Web",
    url: "https://mahesh-beauty-web.netlify.app/",
    tags: ["Beauty & Wellness", "E-Commerce"],
    description:
      "A premium beauty and grooming showcase featuring advanced skincare solutions and salon services.",
  },
];

const PortfolioSection = () => {
  const [activeUrl, setActiveUrl] = useState(PROJECTS_DATABASE[0].url);
  const [isLoading, setIsLoading] = useState(false);

  const triggerMobilePreview = (url) => {
    if (activeUrl === url) return;
    setIsLoading(true);
    setActiveUrl(url);
    setTimeout(() => setIsLoading(false), 800);
  };

  return (
    <section className="relative bg-white text-zinc-900 selection:bg-[#ff6600]/20 min-h-screen">
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row min-h-screen">
        {/* --- LEFT SIDE: FIXED IPHONE (NO MAIN SCROLL INTERFERENCE) --- */}
        <div className="lg:w-[45%] h-screen sticky top-0 bg-[#fafafa] flex flex-col items-center justify-center p-6 border-r border-zinc-100 hidden lg:flex overflow-hidden">
          {/* Subtle Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(#ff6600 1.5px, transparent 1.5px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Real-Sized Mobile Mockup */}
          <motion.div
            key={activeUrl}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 120 }}
            className="relative w-[320px] h-[650px] bg-zinc-950 rounded-[3.5rem] border-[10px] border-zinc-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden"
          >
            {/* iPhone Dynamic Island (Realistic) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-zinc-900 rounded-b-2xl z-30 flex items-center justify-center">
              <div className="w-10 h-1.5 bg-zinc-800 rounded-full" />
            </div>

            {/* Iframe Viewport - PERFECT SCALE FIX */}
            <div className="w-full h-full relative bg-white overflow-hidden rounded-[2.5rem]">
              <AnimatePresence mode="wait">
                {isLoading ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col items-center justify-center bg-white z-20"
                  >
                    <div className="w-10 h-10 border-4 border-[#ff6600] border-t-transparent rounded-full animate-spin mb-4" />
                    <span className="text-[10px] font-black tracking-widest text-[#ff6600] uppercase italic">
                      Syncing Experience
                    </span>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="w-full h-full"
                  >
                    <iframe
                      src={activeUrl}
                      title="Mobile Live View"
                      className="absolute top-0 left-0 w-[375px] h-[812px] border-none origin-top-left shadow-inner"
                      style={{
                        /* iPhone X/15 viewport scaling logic */
                        transform: "scale(0.8533)", // Scales 375px down to 320px perfectly
                        width: "375px",
                        height: "765px", // Adjusted to fit within the frame
                        pointerEvents: "auto",
                        userSelect: "none",
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Home Indicator Bar */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-zinc-200/20 rounded-full z-30" />
          </motion.div>

          {/* Status Label */}
          <div className="mt-8 flex items-center gap-3">
            <div className="px-5 py-2.5 rounded-full bg-white border border-zinc-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] flex items-center gap-2 group">
              <MousePointer2
                size={12}
                className="text-[#ff6600] animate-bounce group-hover:scale-125 transition-transform"
              />
              <span className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em]">
                Interact Inside Device
              </span>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: BLACK CARDS GRID --- */}
        <div className="lg:w-[55%] p-6 md:p-12 lg:p-20 relative bg-white overflow-y-auto">
          <header className="mb-20">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-[2px] w-8 bg-[#ff6600]" />
              <span className="text-[#ff6600] font-black text-[10px] tracking-[0.5em] uppercase text-zinc-500">
                A2V Showcase
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-6">
              DIGITAL <br /> <span className="text-[#ff6600]">LAB.</span>
            </h2>
          </header>

          <div className="space-y-8">
            {PROJECTS_DATABASE.map((project, i) => {
              const isActive = activeUrl === project.url;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`group relative p-8 rounded-[2.5rem] border transition-all duration-500 cursor-pointer overflow-hidden ${
                    isActive
                      ? "bg-gradient-to-br from-zinc-900 to-zinc-950 border-[#ff6600] shadow-[0_30px_60px_-15px_rgba(255,102,0,0.3)] scale-[1.02]"
                      : "bg-[#121212] border-zinc-800 hover:border-zinc-700 shadow-xl"
                  }`}
                  onClick={() => triggerMobilePreview(project.url)}
                >
                  {/* Selection Gradient Glow */}
                  {isActive && (
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#ff6600] rounded-full blur-[100px] opacity-20 pointer-events-none" />
                  )}

                  <div className="flex flex-col gap-6 relative z-10">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        {project.tags.map((t) => (
                          <span
                            key={t}
                            className="text-[8px] font-black uppercase tracking-widest px-2 py-1 bg-white/5 border border-white/10 rounded-md text-zinc-400 group-hover:text-zinc-200"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <ArrowUpRight
                        size={20}
                        className={
                          isActive
                            ? "text-[#ff6600]"
                            : "text-zinc-600 group-hover:text-zinc-400"
                        }
                      />
                    </div>

                    <h3
                      className={`text-3xl md:text-4xl font-black uppercase tracking-tighter italic ${isActive ? "text-white" : "text-zinc-100"}`}
                    >
                      {project.title}
                    </h3>

                    <p
                      className={`text-sm font-medium leading-relaxed max-w-lg ${isActive ? "text-zinc-400" : "text-zinc-500"}`}
                    >
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3 pt-2">
                      <button
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-black text-[9px] tracking-widest transition-all ${
                          isActive
                            ? "bg-[#ff6600] text-white"
                            : "bg-white text-black hover:bg-[#ff6600] hover:text-white"
                        }`}
                      >
                        <Smartphone size={14} /> MOBILE PREVIEW
                      </button>

                      <a
                        href={project.url}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 px-6 py-3 rounded-xl font-black text-[9px] tracking-widest border border-white/20 text-zinc-300 hover:bg-white hover:text-black transition-all"
                      >
                        <Monitor size={14} /> DESKTOP VIEW{" "}
                        <ExternalLink size={10} />
                      </a>
                    </div>

                    <div className="flex items-center gap-6 pt-4 border-t border-white/5">
                      <div className="flex items-center gap-2 text-[9px] font-black text-zinc-500 uppercase tracking-widest">
                        <CheckCircle2 size={14} className="text-[#ff6600]" />{" "}
                        High Fidelity
                      </div>
                      <div className="flex items-center gap-2 text-[9px] font-black text-zinc-500 uppercase tracking-widest">
                        <CheckCircle2 size={14} className="text-[#ff6600]" />{" "}
                        Next.js Build
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <footer className="mt-32 pt-8 border-t border-zinc-100 flex justify-between items-center opacity-40">
            <div className="flex items-center gap-2 text-zinc-400 font-black text-[10px] uppercase tracking-widest">
              <ShieldCheck size={16} /> A2V GROUPS DOMINANCE
            </div>
            <div className="text-[9px] font-bold italic uppercase tracking-widest">
              A2V Proprietary Assets
            </div>
          </footer>
        </div>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;700;900&display=swap");
        body {
          font-family: "Space Grotesk", sans-serif;
          background: white;
        }
        ::-webkit-scrollbar {
          width: 4px;
        }
        ::-webkit-scrollbar-thumb {
          background: #ff6600;
          border-radius: 10px;
        }
        iframe {
          background: #fff;
          border: none;
        }
      `}</style>
    </section>
  );
};

export default PortfolioSection;
