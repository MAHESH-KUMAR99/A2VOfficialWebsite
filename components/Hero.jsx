"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const serviceList = [
  { title: "Web Architecture", icon: "🌐", slug: "web-dev" },
  { title: "Bespoke E-commerce", icon: "💎", slug: "ecommerce" },
  { title: "Mobile Ecosystems", icon: "📱", slug: "apps" },
  { title: "Digital Strategy", icon: "📈", slug: "strategy" },
  { title: "SaaS Innovation", icon: "☁️", slug: "saas", highlight: true },
  { title: "Performance Ads", icon: "🎯", slug: "ads" },
];

export default function UltimateAgencyHero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-[#f8f8f8] flex items-center justify-center overflow-hidden py-24 selection:bg-[#FF8A00] selection:text-white font-sans">
      {/* --- AMBIENT LUXURY BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-[#FF8A00]/10 to-transparent blur-[160px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-orange-50/40 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 items-center">
        {/* --- LEFT: LUXURY TYPOGRAPHY --- */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-10">
              <span className="h-[1px] w-16 bg-[#FF8A00]"></span>
              <p className="text-[#FF8A00] font-black tracking-[0.5em] uppercase text-[9px]">
                A2V Groups • India's #1 Since 2009
              </p>
            </div>

            <h1 className="text-7xl md:text-[95px] font-black text-[#111] leading-[0.85] tracking-tighter mb-12">
              CREATING <br />
              <span className="italic font-light text-gray-400">New</span>{" "}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A00] to-[#FFB800]">
                STANDARDS.
              </span>
            </h1>

            <div className="max-w-md space-y-8">
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                We bridge the gap between{" "}
                <span className="text-gray-900 font-medium italic">
                  Pure Art
                </span>{" "}
                and{" "}
                <span className="text-gray-900 font-medium italic">
                  High Technology
                </span>
                . 15 years of surgical precision in digital craft.
              </p>

              <div className="flex items-center gap-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => router.push("/contact")}
                  className="bg-[#111] text-white px-12 py-6 rounded-full font-black text-[10px] uppercase tracking-[0.3em] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)] transition-all"
                >
                  Start Consultation
                </motion.button>
                <div className="h-12 w-[1px] bg-gray-200"></div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-gray-900">7k+</span>
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                    Global Assets
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- RIGHT: INTERACTIVE GLASS HUB --- */}
        <div className="lg:col-span-5 relative">
          <div className="grid grid-cols-2 gap-5">
            {/* Main Premium Metric */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
              className="col-span-2 bg-white p-10 rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)] border border-gray-50 flex flex-col justify-between h-64 relative overflow-hidden group"
            >
              <div className="flex justify-between items-start">
                <div className="bg-orange-50 text-[#FF8A00] w-12 h-12 rounded-2xl flex items-center justify-center text-xl transition-transform group-hover:rotate-12">
                  🏆
                </div>
                <div className="bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />{" "}
                  Active Studio
                </div>
              </div>
              <div>
                <h3 className="text-6xl font-black text-gray-900 tracking-tighter">
                  4.9<span className="text-orange-200">/5</span>
                </h3>
                <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] mt-2">
                  Client Trust Benchmark
                </p>
              </div>
            </motion.div>

            {/* Performance Tiles */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-[#FF8A00] to-[#FFB800] p-8 rounded-[2.5rem] text-white shadow-2xl flex flex-col justify-center items-center overflow-hidden relative"
            >
              <p className="text-4xl font-black relative z-10">1.2s</p>
              <p className="text-white/70 text-[9px] font-black uppercase tracking-widest mt-1 relative z-10">
                Peak Speed
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-50 flex flex-col justify-center items-center"
            >
              <p className="text-4xl font-black text-gray-900">15+</p>
              <p className="text-gray-400 text-[9px] font-black uppercase tracking-widest mt-1">
                Years XP
              </p>
            </motion.div>

            {/* SERVICE HUB */}
            <div className="col-span-2 mt-4 space-y-4">
              <p className="text-[9px] font-black text-gray-300 uppercase tracking-[0.3em] text-center">
                Our Expertise
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {serviceList.map((service, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{
                      scale: 1.05,
                      borderColor: "#FF8A00",
                      color: "#FF8A00",
                    }}
                    onClick={() => router.push(`/services/${service.slug}`)}
                    className={`px-5 py-3 rounded-2xl text-[9px] font-black uppercase tracking-[0.15em] border transition-all 
                    ${
                      service.highlight
                        ? "bg-[#FF8A00] border-[#FF8A00] text-white shadow-lg shadow-orange-100"
                        : "bg-white border-gray-100 text-gray-400 shadow-sm"
                    }`}
                  >
                    {service.title}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Floating Detail */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-10 -right-10 bg-white p-5 rounded-3xl shadow-2xl border border-orange-50 hidden xl:flex items-center gap-4 z-50"
          >
            <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500">
              ⚡
            </div>
            <div>
              <p className="text-lg font-black text-gray-900 leading-none">
                Global
              </p>
              <p className="text-[9px] font-bold text-gray-400 uppercase mt-1">
                Presence
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
}
