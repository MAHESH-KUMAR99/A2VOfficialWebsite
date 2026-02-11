"use client";
import React, { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Globe,
  Database,
  Smartphone,
  Megaphone,
  Palette,
  Check,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

const SERVICES_DATA = [
  {
    id: 1,
    title: "Website & Web Development",
    desc: "Architecting high-performance digital platforms.",
    icon: Globe,
    categories: [
      {
        name: "Web Core",
        items: ["Website Design", "Website Development", "Landing Pages"],
      },
      {
        name: "Enterprise Web",
        items: [
          "Web Application Development",
          "E-Commerce Websites",
          "WordPress Development",
        ],
      },
      {
        name: "Modern Stack",
        items: ["React.js Development", "Next.js Development"],
      },
    ],
  },
  {
    id: 2,
    title: "IT Solutions (CRM, ERP & SaaS)",
    desc: "Streamlining business operations with automation.",
    icon: Database,
    categories: [
      {
        name: "CRM Solutions",
        items: ["B2B CRM", "B2C CRM", "Industry-wise CRM"],
      },
      {
        name: "ERP Systems",
        items: [
          "Inventory Management",
          "Billing & Invoicing",
          "HR & Payroll Systems",
        ],
      },
      {
        name: "Cloud SaaS",
        items: ["SaaS Application Development", "Cloud Software Integration"],
      },
    ],
  },
  {
    id: 3,
    title: "Software & Mobile App Development",
    desc: "Building seamless cross-platform mobile experiences.",
    icon: Smartphone,
    categories: [
      {
        name: "Software Engineering",
        items: [
          "Custom Software Development",
          "Business Process Automation",
          "Web-Based Software",
        ],
      },
      {
        name: "Mobile Ecosystem",
        items: [
          "Android App Development",
          "iOS App Development",
          "Hybrid App Solutions",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Digital Marketing & Lead Gen",
    desc: "Driving growth through data-backed marketing.",
    icon: Megaphone,
    categories: [
      {
        name: "Search Excellence",
        items: ["Organic SEO", "Local & Technical SEO", "SEO Audits"],
      },
      {
        name: "Paid Performance",
        items: [
          "Google Ads Management",
          "Meta Ads (FB/IG)",
          "PPC & CPC Campaigns",
        ],
      },
      {
        name: "Social & Growth",
        items: ["Social Media Marketing", "Strategic Lead Generation"],
      },
    ],
  },
  {
    id: 5,
    title: "Graphics, Design & Printing",
    desc: "Captivating visual identities and brand design.",
    icon: Palette,
    categories: [
      {
        name: "Identity Design",
        items: [
          "Logo & Brand Identity",
          "Graphic Design Services",
          "Social Media Creatives",
        ],
      },
      {
        name: "Product UI/UX",
        items: ["Website UI Design", "Mobile App UI/UX Design"],
      },
      {
        name: "Print & Packaging",
        items: [
          "Banner & Ad Design",
          "Print Media Design",
          "Packaging & Merchandise",
        ],
      },
    ],
  },
];

export default function A2VAgency() {
  const [selected, setSelected] = useState(null);

  // --- WHATSAPP REDIRECT LOGIC ---
  const handleStartProject = () => {
    if (!selected) return;

    const phoneNumber = "7011029259";

    // Constructing the detailed message
    let message = `*Hello A2V Groups!*%0A%0AI am interested in starting a project for:* ${selected.title}*%0A%0A*Categories & Services:*%0A`;

    selected.categories.forEach((cat) => {
      message += `%0A*${cat.name}:*%0A`;
      cat.items.forEach((item) => {
        message += `- ${item}%0A`;
      });
    });

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#ff6600]">
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} color="#ff6600" intensity={2} />
        </Canvas>
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <header className="mb-32">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#ff6600] font-bold tracking-[0.3em] uppercase text-xs mb-4"
          >
            A2V Groups • 2026 Edition
          </motion.p>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-8xl font-black leading-none tracking-tighter"
          >
            TRANSFORMING IDEAS INTO <br />
            <span className="text-zinc-700 italic">DIGITAL </span>
            <span className="text-white underline decoration-[#ff6600]">
              DOMINANCE.
            </span>
          </motion.h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelected(service)}
              className="group relative cursor-pointer p-10 rounded-[3rem] bg-zinc-900/40 border border-white/5 backdrop-blur-3xl hover:border-[#ff6600]/40 transition-all duration-500 overflow-hidden h-[400px] flex flex-col justify-between"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#ff6600] rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity" />

              <div className="relative z-10">
                <div className="p-4 w-fit bg-zinc-800 rounded-2xl text-[#ff6600] group-hover:bg-[#ff6600] group-hover:text-white transition-all duration-500">
                  <service.icon size={32} />
                </div>
                <h3 className="text-3xl font-black mt-8 leading-tight tracking-tight uppercase group-hover:text-[#ff6600] transition-colors">
                  {service.title}
                </h3>
                <p className="text-zinc-500 mt-4 group-hover:text-zinc-300 transition-colors">
                  {service.desc}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-zinc-500 group-hover:text-white">
                VIEW ECOSYSTEM{" "}
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-[100] flex items-center justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="relative h-screen w-full max-w-2xl bg-zinc-950 border-l border-white/10 p-8 md:p-16 overflow-y-auto no-scrollbar"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-10 right-10 p-2 hover:bg-white/5 rounded-full"
              >
                <X size={32} />
              </button>

              <div className="mt-12">
                <div className="flex items-center gap-4 mb-4 text-[#ff6600]">
                  <selected.icon size={40} />
                  <span className="h-[2px] w-12 bg-[#ff6600]" />
                </div>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12 italic">
                  {selected.title}
                </h2>

                <div className="space-y-12">
                  {selected.categories.map((cat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <h4 className="flex items-center gap-3 text-[#ff6600] text-sm font-black tracking-[0.2em] uppercase mb-6">
                        <ChevronRight size={18} /> {cat.name}
                      </h4>

                      <div className="grid grid-cols-1 gap-3">
                        {cat.items.map((item, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-4 p-5 bg-white/5 rounded-2xl border border-white/5 hover:border-[#ff6600]/30 transition-all group"
                          >
                            <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-[#ff6600] group-hover:bg-[#ff6600] group-hover:text-white">
                              <Check size={12} />
                            </div>
                            <span className="font-bold text-zinc-300 text-sm tracking-tight">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-20 pt-10 border-t border-white/10">
                <button
                  onClick={handleStartProject}
                  className="w-full py-5 bg-[#ff6600] text-white font-black tracking-[0.2em] uppercase rounded-2xl hover:bg-orange-600 transition-all shadow-[0_20px_50px_rgba(255,102,0,0.2)]"
                >
                  Start Your Project
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx global>{`
  
        body {
       
          background: #050505;
        }
        ::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
