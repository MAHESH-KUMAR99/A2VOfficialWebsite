'use client';

import React from 'react';
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  ChevronRight,
} from 'lucide-react';

export default function AgencyFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f5eee6] pt-24 pb-12 px-6 font-sans relative overflow-hidden">
      {/* Decorative Background Element - Matching your agency's circular theme */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FF6900]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* TOP SECTION: BIG CTA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20 gap-8 border-b border-black/10 pb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1e293b] leading-none tracking-tighter">
              READY TO <span className="text-[#FF6900]">GROW?</span>
            </h2>
            <p className="text-gray-500 mt-4 font-medium">
              Let's build something extraordinary together.
            </p>
          </div>
          <button className="group relative px-8 py-4 bg-[#1e293b] text-white rounded-full overflow-hidden transition-all hover:pr-12">
            <span className="relative z-10 font-bold uppercase tracking-wider text-sm">
              Get A Free Quote
            </span>
            <div className="absolute inset-0 bg-[#FF6900] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <ArrowUpRight
              className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all"
              size={20}
            />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* COLUMN 1: BRAND LOGO & SOCIAL */}
          <div className="space-y-8">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="bg-[#FF6900] p-2 rounded-xl transition-transform group-hover:rotate-12">
                <span className="text-white font-black text-2xl italic">A</span>
              </div>
              <span className="text-2xl font-black text-[#1e293b] tracking-tighter uppercase">
                A2V Groups
              </span>
            </div>
            <p className="text-gray-600 leading-relaxed text-[15px] font-medium opacity-80">
              Innovative IT solutions, digital marketing, and branding
              strategies designed for the next generation of business.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-11 h-11 rounded-xl bg-white flex items-center justify-center text-[#1e293b] hover:bg-[#FF6900] hover:text-white transition-all duration-300 shadow-sm border border-black/5 hover:-translate-y-1"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS WITH PRO UNDERLINE */}
          <div>
            <h4 className="text-[13px] uppercase tracking-[0.2em] font-black text-gray-400 mb-8">
              Navigation
            </h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Contact'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="relative text-[#1e293b] font-bold text-base group inline-block"
                    >
                      {item}
                      {/* Animated Underline */}
                      <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-[#FF6900] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* COLUMN 3: SERVICES WITH ICON HOVER */}
          <div>
            <h4 className="text-[13px] uppercase tracking-[0.2em] font-black text-gray-400 mb-8">
              Specialization
            </h4>
            <ul className="space-y-4">
              {[
                'Web Development',
                'SEO Optimization',
                'Digital Marketing',
                'App Development',
                'UI/UX Design',
              ].map((service) => (
                <li
                  key={service}
                  className="group flex items-center gap-2 text-gray-600 hover:text-[#FF6900] font-bold cursor-pointer transition-colors"
                >
                  <ChevronRight
                    size={14}
                    className="text-[#FF6900] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                  />
                  <span className="group-hover:translate-x-1 transition-transform">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: CONTACT CARDS */}
          <div>
            <h4 className="text-[13px] uppercase tracking-[0.2em] font-black text-gray-400 mb-8">
              Connect
            </h4>
            <div className="space-y-4">
              <ContactCard
                icon={<Mail size={18} />}
                label="Email Support"
                value="hello@a2vgroups.com"
              />
              <ContactCard
                icon={<Phone size={18} />}
                label="Call Anytime"
                value="+91 98765 43210"
              />
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="pt-10 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-500 text-sm font-bold tracking-tight">
            © {currentYear} <span className="text-[#1e293b]">A2V GROUPS</span>.
            ALL RIGHTS RESERVED.
          </div>

          <div className="flex gap-8">
            {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map(
              (policy) => (
                <a
                  key={policy}
                  href="#"
                  className="text-[12px] uppercase font-black text-gray-400 hover:text-[#FF6900] transition-colors tracking-widest"
                >
                  {policy}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

// --- REFINED SUB-COMPONENTS ---

const ContactCard = ({ icon, label, value }) => (
  <div className="group p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-black/5 hover:border-[#FF6900]/30 transition-all hover:shadow-md cursor-pointer">
    <div className="flex items-center gap-4">
      <div className="p-2.5 bg-[#FF6900]/10 text-[#FF6900] rounded-xl group-hover:bg-[#FF6900] group-hover:text-white transition-colors">
        {icon}
      </div>
      <div>
        <p className="text-[11px] font-black text-gray-400 uppercase tracking-tighter leading-none mb-1">
          {label}
        </p>
        <p className="text-sm font-bold text-[#1e293b]">{value}</p>
      </div>
    </div>
  </div>
);
