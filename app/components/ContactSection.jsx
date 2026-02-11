'use client';

import React from 'react';
import {
  Send,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="bg-[#fcf9f6] py-24 px-6 relative overflow-hidden">
      {/* Background Decorative Circle - Matching your Branding */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF6900]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT SIDE: CONTENT & INFO */}
          <div className="space-y-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#FF6900]/10 text-[#FF6900] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                <MessageSquare size={14} /> Let's Talk Business
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-[#1e293b] leading-[1.1] tracking-tighter">
                HAVE A PROJECT <br />
                <span className="text-[#FF6900]">IN MIND?</span>
              </h2>
              <p className="text-gray-500 mt-6 text-lg font-medium max-w-md">
                We help brands grow with high-end IT solutions. Reach out and
                let's start your digital transformation journey.
              </p>
            </div>

            <div className="space-y-6">
              <ContactInfoCard
                icon={<Mail color="#FF6900" />}
                title="Email Us"
                detail="hello@a2vgroups.com"
              />
              <ContactInfoCard
                icon={<Phone color="#FF6900" />}
                title="Call Experts"
                detail="+91 98765 43210"
              />
              <ContactInfoCard
                icon={<MapPin color="#FF6900" />}
                title="Visit Studio"
                detail="New Delhi, India"
              />
            </div>
          </div>

          {/* RIGHT SIDE: INTERACTIVE FORM */}
          <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-black/5 relative">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FloatingInput
                  label="Full Name"
                  placeholder="John Doe"
                  type="text"
                />
                <FloatingInput
                  label="Email Address"
                  placeholder="john@example.com"
                  type="email"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <FloatingInput
                  label="Phone Number"
                  placeholder="+91 00000 00000"
                  type="tel"
                />
                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase text-gray-400 ml-4 tracking-widest">
                    Service Type
                  </label>
                  <select className="w-full bg-[#f8fafc] border border-transparent focus:border-[#FF6900]/30 focus:bg-white outline-none px-6 py-4 rounded-2xl text-sm font-bold text-[#1e293b] transition-all appearance-none cursor-pointer">
                    <option>Web Development</option>
                    <option>Digital Marketing</option>
                    <option>SEO Services</option>
                    <option>Branding & Design</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-black uppercase text-gray-400 ml-4 tracking-widest">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your project..."
                  className="w-full bg-[#f8fafc] border border-transparent focus:border-[#FF6900]/30 focus:bg-white outline-none px-6 py-4 rounded-2xl text-sm font-bold text-[#1e293b] transition-all resize-none"
                />
              </div>

              <button className="w-full group relative bg-[#1e293b] text-white py-5 rounded-2xl overflow-hidden shadow-xl transition-all hover:scale-[1.02] active:scale-95">
                <div className="absolute inset-0 bg-[#FF6900] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <div className="relative z-10 flex items-center justify-center gap-3 font-black uppercase tracking-widest text-sm">
                  Send Message{' '}
                  <Send
                    size={18}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- HELPER COMPONENTS ---

const FloatingInput = ({ label, placeholder, type }) => (
  <div className="space-y-2">
    <label className="text-[11px] font-black uppercase text-gray-400 ml-4 tracking-widest">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full bg-[#f8fafc] border border-transparent focus:border-[#FF6900]/30 focus:bg-white outline-none px-6 py-4 rounded-2xl text-sm font-bold text-[#1e293b] transition-all placeholder:text-gray-300 shadow-sm shadow-black/5"
    />
  </div>
);

const ContactInfoCard = ({ icon, title, detail }) => (
  <div className="flex items-center gap-5 group cursor-pointer">
    <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-black/5 flex items-center justify-center group-hover:bg-[#FF6900] transition-all duration-300">
      <div className="group-hover:scale-110 group-hover:filter group-hover:invert transition-all">
        {icon}
      </div>
    </div>
    <div>
      <p className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em] leading-none mb-1.5">
        {title}
      </p>
      <p className="text-lg font-bold text-[#1e293b] group-hover:text-[#FF6900] transition-colors">
        {detail}
      </p>
    </div>
  </div>
);
