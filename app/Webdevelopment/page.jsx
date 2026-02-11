'use client';

import React from 'react';
import {
  Zap,
  Shield,
  Search,
  Globe,
  Lock,
  Smartphone,
  Phone,
  FileText,
  Code2,
  CheckCircle2,
  Award,
  Users,
  Headphones,
  Scale,
  X,
  Check,
} from 'lucide-react';
import WhyWebsiteMatters from '../components/WhyWebsiteMatters';
import WhyChooseUs from '../components/WhyChooseUs';
import WebsiteDeve from '../components/WebsiteDeve';
import WebsiteIncludes from '../components/WebsiteIncludes';
import IndustriesWeServe from '../components/IndustriesWeServe';
import Navbar from '../components/Navbar';
import AgencyFooter from '../components/Footer';

export default function WebsiteHero() {
  return (
    <>
      <Navbar />
      {' '}
      <div className="min-h-screen bg-[#f0f7ff] font-sans selection:bg-blue-100 relative overflow-hidden flex flex-col">
        {/* Global Animation Styles */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
        @keyframes float-up-down {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float-slow { animation: float-up-down 4s ease-in-out infinite; }
        .animate-float-medium { animation: float-up-down 3.2s ease-in-out infinite; }
        .animate-float-fast { animation: float-up-down 2.5s ease-in-out infinite; }
      `,
          }}
        />

        {/* --- HERO SECTION --- */}
        <div className="flex-grow p-4 md:p-12 lg:p-5 relative">
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(#4e73df 1px, transparent 1px), linear-gradient(90deg, #4e73df 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          ></div>

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
            {/* LEFT SIDE CONTENT */}
            <div className="space-y-8">
              <div
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full 
 bg-[#FFB303]
  text-black text-sm font-semibold
  shadow-lg shadow-blue-300/40
"
              >
                <span className="bg-white p-1.5 rounded-full">
                  <Code2 size={14} style={{ color: 'black' }} />
                </span>
                Website Design & Development
                {/* Green Pulse Dot */}
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6900] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF6900]"></span>
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-6xl md:text-[3.5rem] font-extrabold tracking-tight text-[#FF6900] leading-[1.1]">
                  Website Development <br />
                  <span className="text-[#1e293b] border-b-4 border-[#FF6900]">
                    Services
                  </span>
                </h1>
                <div className="inline-block bg-gradient-to-r from-[#FF6600] to-[#FF8533] text-white px-6 py-2 mt-6 rounded-full font-bold text-lg shadow-md">
                  100% Custom-Built Websites • Pay After Approval
                </div>
                <p className="text-xl">
                  <span className="text-gray-400 line-through">
                    Starting from ₹25,000
                  </span>
                  <span className="ml-3 text-[#FF6900] font-bold text-2xl">
                    ₹9,999
                  </span>
                </p>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed max-w-xl">
                <span className="font-bold">Website development services.</span>{' '}
                100% custom website designing from
                <span className="text-[#FF6900] font-bold mx-1">₹9,999</span>.
                <span className="font-bold ml-1">₹0 advance</span>, pay after
                satisfaction.
                <span className="font-bold mx-1">7000+ sites</span> delivered.
                <span className="font-bold">
                  15+ years experience. 1.2s load speed.
                </span>
              </p>

              {/* Feature Boxes */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  {
                    icon: <Code2 className="text-white" />,
                    label: '100% Custom',
                    sub: 'No Templates',
                    color: 'bg-[#FF6900]',
                  },
                  {
                    icon: <CheckCircle2 className="text-white" />,
                    label: '₹0 Advance',
                    sub: 'Pay After',
                    color: 'bg-[#FF6900]',
                  },
                  {
                    icon: <Zap className="text-white" />,
                    label: 'Lightning Fast',
                    sub: 'Website Speed',
                    color: 'bg-[#FF6900]',
                  },
                  {
                    icon: <Award className="text-white" />,
                    label: '15+',
                    sub: 'Years Exp.',
                    color: 'bg-[#FF6900]',
                  },
                ].map((box, i) => (
                  <div
                    key={i}
                    className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:scale-105 transition-transform"
                  >
                    <div
                      className={`w-12 h-12 ${box.color} rounded-xl flex items-center justify-center mb-3 shadow-lg`}
                    >
                      {box.icon}
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm leading-tight">
                      {box.label}
                    </h3>
                    <p className="text-[10px] text-gray-400 font-medium uppercase mt-1">
                      {box.sub}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="bg-[#FF6900] text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 shadow-xl hover:bg-[#FFB303] transition-all">
                  <Phone size={20} /> Contact Us
                </button>
                <button className="bg-white border-2 border-[#FF6900] text-[#FF6900] px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-[#FFB303]  hover:text-white transition-all">
                  <FileText size={20} /> Get Free Quote
                </button>
              </div>
            </div>

            {/* RIGHT SIDE - FLOATING DASHBOARD - 10% BIGGER */}
            <div className="relative scale-[0.825] lg:scale-[0.935] xl:scale-[0.99] 2xl:scale-100 origin-center">
              <div className="bg-white rounded-[28px] shadow-2xl p-5 pt-3 border border-white/50 relative max-w-[420px] mx-auto">
                {/* Browser Bar */}
                <div className="bg-white border border-gray-100 rounded-xl px-4 py-2 mb-5 shadow-sm flex items-center gap-2 max-w-[240px] mx-auto text-sm">
                  <Lock size={12} className="text-green-500" />
                  <span className="text-[12px] text-gray-400 font-medium tracking-tight">
                    yourwebsite.com
                  </span>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    {
                      icon: (
                        <Zap
                          size={22}
                          className="text-[#FF6600] fill-[#FF6600]"
                        />
                      ),
                      val: '1.2s',
                      label: 'Load Speed',
                      bg: 'bg-[#FF6600]/10',
                    },
                    {
                      icon: (
                        <Smartphone
                          size={22}
                          className="text-[#FF6600] fill-[#FF6600]"
                        />
                      ),
                      val: '100%',
                      label: 'Mobile Ready',
                      bg: 'bg-[#FF6600]/10',
                    },
                    {
                      icon: <Search size={22} className="text-[#FF6600]" />,
                      val: '95+',
                      label: 'SEO Score',
                      bg: 'bg-[#FF6600]/10',
                    },
                    {
                      icon: (
                        <Shield
                          size={22}
                          className="text-[#FF6600] fill-[#FF6600]"
                        />
                      ),
                      val: 'SSL',
                      label: 'Secured',
                      bg: 'bg-[#FF6600]/10',
                    },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center p-5 bg-white rounded-3xl border border-gray-50 shadow-lg hover:shadow-xl transition-all duration-200"
                    >
                      <div
                        className={`w-12 h-12 ${stat.bg} rounded-3xl flex items-center justify-center mb-3`}
                      >
                        {stat.icon}
                      </div>
                      <span className="text-[28px] font-black text-black leading-tight">
                        {stat.val}
                      </span>
                      <span className="text-[10px] text-gray-600 uppercase tracking-widest font-bold mt-1.5">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Worldwide Banner */}
                <div className="bg-[#FF6600]/5 border border-[#FF6600]/20 rounded-2xl p-3 flex flex-col items-center text-sm">
                  <div className="flex items-center gap-2 text-[#FF6600] font-bold">
                    <Globe size={14} /> Serving Worldwide
                  </div>
                  <p className="text-[9px] text-[#FF6600]/70 font-bold uppercase tracking-wider mt-1">
                    Local office anytime
                  </p>
                </div>

                {/* Floating Cards */}
                <div className="absolute -top-8 -left-8 bg-white p-3 rounded-2xl shadow-xl flex items-center gap-3 min-w-[140px] border border-gray-50 animate-float-slow z-20">
                  <div className="bg-[#FF6600]/10 p-2 rounded-xl text-[#FF6600]">
                    <Zap fill="currentColor" size={18} />
                  </div>
                  <div>
                    <p className="text-[12px] font-black text-black leading-tight">
                      1.2s Load
                    </p>
                    <p className="text-[9px] text-gray-500 font-semibold mt-0.5">
                      Super fast
                    </p>
                  </div>
                </div>

                <div className="absolute top-[22%] -right-8 bg-white p-3 rounded-2xl shadow-xl flex items-center gap-3 min-w-[140px] border border-gray-50 animate-float-medium z-20">
                  <div className="bg-[#FF6600]/10 p-2 rounded-xl text-[#FF6600]">
                    <Search size={18} />
                  </div>
                  <div>
                    <p className="text-[12px] font-black text-black leading-tight">
                      SEO Optimized
                    </p>
                    <p className="text-[9px] text-gray-500 font-semibold mt-0.5">
                      Rank higher
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-8 -left-8 bg-white p-3 rounded-2xl shadow-xl flex items-center gap-3 min-w-[140px] border border-gray-50 animate-float-fast z-20">
                  <div className="bg-[#FF6600]/10 p-2 rounded-xl text-[#FF6600]">
                    <Smartphone fill="currentColor" size={18} />
                  </div>
                  <div>
                    <p className="text-[12px] font-black text-black leading-tight">
                      Mobile Ready
                    </p>
                    <p className="text-[9px] text-gray-500 font-semibold mt-0.5">
                      Responsive
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- BOTTOM STRIP SECTION --- */}
        <div className="bg-[#FFB303] border-t border-white/10 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(circle, #fff 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          ></div>
          <div className="max-w-7xl mx-auto flex flex-wrap relative z-10">
            {[
              {
                icon: <Award size={32} />,
                val: '15+ Years',
                label: 'Experience',
              },
              {
                icon: <Users size={32} />,
                val: 'Expert Team',
                label: 'Dedicated Support',
              },
              {
                icon: <Zap size={32} />,
                val: '1.2s Load Speed',
                label: 'Fast Websites',
              },
              {
                icon: <CheckCircle2 size={32} />,
                val: '₹0 Advance',
                label: 'Pay After Delivery',
              },
              {
                icon: <Headphones size={32} />,
                val: 'Local Support',
                label: 'Always Available',
              },
            ].map((item, index) => (
              <React.Fragment key={index}>
                <div className="flex-1 min-w-[200px] flex flex-col items-center text-center text-white py-12 px-6 cursor-pointer transition-all duration-300 hover:bg-black/10 group relative">
                  <div className="mb-4 p-3 rounded-full border border-white/20 bg-white/5 group-hover:bg-white/20 group-hover:scale-110 transition-all">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold">{item.val}</h4>
                  <p className="text-xs uppercase tracking-[0.15em] opacity-70 mt-2 font-medium">
                    {item.label}
                  </p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-white/0 group-hover:bg-white/30 transition-all"></div>
                </div>
                {index < 4 && (
                  <div className="hidden lg:block w-[1px] self-stretch bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* --- COMPARISON SECTION (Why Choose Lentlo Web?) --- */}
        <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 text-[#FF6600] font-bold mb-3">
                <Scale size={20} /> <span>Compare</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
                Why Choose{' '}
                <span className="text-[#FF6900]">
                  A2V GROUPS <span className="text-black">?</span>
                </span>
              </h2>
              <p className="text-gray-500 text-lg">
                See how we compare to other web development companies.
              </p>
            </div>

            <div className="overflow-hidden rounded-[32px] border border-gray-200 shadow-2xl bg-white">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="p-6 text-gray-400 font-bold uppercase text-xs tracking-widest">
                      Feature
                    </th>
                    <th className="p-6 bg-red-50 text-red-500 font-bold text-center uppercase text-xs tracking-widest">
                      Other Agencies
                    </th>
                    <th className="p-6 bg-gradient-to-r from-[#FF6600] to-[#FF8533] text-white font-bold text-center uppercase text-xs tracking-widest">
                      A2V Web
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[#FF6600]">
                  {[
                    {
                      f: 'Design Approach',
                      other: 'Templates/Themes',
                      our: '100% Custom',
                      bad: true,
                    },
                    {
                      f: 'Starting Price',
                      other: '₹25,000+',
                      our: '₹9,999',
                      bad: true,
                    },
                    {
                      f: 'Advance Payment',
                      other: '50% Upfront',
                      our: '₹0 Advance',
                      bad: true,
                    },
                    {
                      f: 'Delivery Time',
                      other: '2-4 weeks',
                      our: '24-72 hours',
                      bad: true,
                    },
                    {
                      f: 'Website Speed',
                      other: '3-5 seconds',
                      our: 'Under 1.2s',
                      bad: true,
                    },
                    {
                      f: 'Code Quality',
                      other: 'Varies',
                      our: 'Clean & Optimized',
                      bad: false,
                    },
                    {
                      f: 'SEO Setup',
                      other: 'Extra ₹5,000+',
                      our: 'Included',
                      bad: true,
                    },
                    {
                      f: 'Support',
                      other: '30 days',
                      our: 'Lifetime',
                      bad: true,
                    },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className={`${i % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'} border-b border-gray-100 transition-colors hover:bg-blue-50/30`}
                    >
                      <td className="p-6 font-bold text-[#FF6600]">{row.f}</td>
                      <td className="p-6 text-center text-red-400 font-medium">
                        {row.bad && <X size={16} className="inline mr-2" />}{' '}
                        {row.other}
                      </td>
                      <td className="p-6 text-center text-bg-[#FF6600] font-bold bg-blue-50/50">
                        <Check
                          size={18}
                          className="inline mr-2 text-bg-[#FF6600]"
                        />{' '}
                        {row.our}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <WhyWebsiteMatters />
        <WhyChooseUs />
        <WebsiteDeve />
        <WebsiteIncludes />
        <IndustriesWeServe />
      </div>
      <AgencyFooter />
    </>
  );
}
