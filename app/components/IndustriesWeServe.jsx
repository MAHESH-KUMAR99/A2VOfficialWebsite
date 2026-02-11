'use client';

import {
  HeartPulse,
  Home,
  GraduationCap,
  Utensils,
  ShoppingBag,
  Briefcase,
  Factory,
  Plane,
  CheckCircle2,
  Check,
  Clock,
  Zap,
  Trophy,
  Scale,
  TrendingUp,
  Smartphone,
  Globe,
  Star,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  MessageCircle,
  Phone,
  Layout,
  ShoppingCart,
  Award,
  Store,
  RefreshCw,
  ArrowRight,
} from 'lucide-react';
import React, { useState } from 'react';

export default function IndustriesWeServe() {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
      {
        q: 'Do you use templates or build custom websites?',
        a: 'We build 100% custom designed websites from scratch. No templates, no purchased themes, no copy-paste designs. Every website we create is unique and tailored specifically to your brand identity, business goals, and target audience. We design every element from the ground up.',
      },
      {
        q: 'How much does website development cost?',
        a: 'Our packages start from ₹9,999 for basic starters and go up depending on features like e-commerce, custom dashboards, or complex integrations. We provide a fixed quote after the discovery call.',
      },
      {
        q: 'Do I need to pay anything upfront?',
        a: 'No! We follow a ₹0 advance policy. You only pay after you are 100% satisfied with the final website design and functionality.',
      },
      {
        q: 'How fast will my website load?',
        a: 'We guarantee a load time of under 1.2 seconds. We use clean code, optimized images, and high-performance servers to ensure lightning-fast speed.',
      },
      {
        q: 'How long does website development take?',
        a: 'Most professional business websites are delivered within 24 to 72 hours, depending on the complexity and content availability.',
      },
      {
        q: 'Will my website work on mobile phones?',
        a: 'Yes, 100%. Every website we build is fully responsive, meaning it will look and work perfectly on smartphones, tablets, and desktops.',
      },
    ];
  return (
    <>
      <section className="relative py-24 bg-gradient-to-b from-[#0b1220] to-[#0f172a] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
            🏭 Industries We Serve
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Website Development for <br />
            <span className="text-[#FF6600]">Every Industry</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-6 max-w-3xl mx-auto text-slate-300 text-lg">
            We work with businesses across all industries — these are just some
            examples of the sectors we serve. Whatever your niche, we’ve got you
            covered.
          </p>

          {/* Cards */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            <IndustryCard
              icon={<HeartPulse />}
              title="Healthcare & Medical"
              text="Hospitals, clinics, pharmacies. Appointment booking, doctor profiles, patient portals."
              tags={['Clinics', 'Hospitals', 'Pharmacy']}
              color="bg-blue-500"
            />

            <IndustryCard
              icon={<Home />}
              title="Real Estate"
              text="Property listings, builder portfolios, search filters, EMI calculators, virtual tours."
              tags={['Builders', 'Agents', 'Architects']}
              color="bg-green-500"
            />

            <IndustryCard
              icon={<GraduationCap />}
              title="Education & Training"
              text="Schools, coaching centers, online courses, student registration, course catalogs."
              tags={['Schools', 'Coaching', 'E-Learning']}
              color="bg-orange-500"
            />

            <IndustryCard
              icon={<Utensils />}
              title="Restaurants & Food"
              text="Online menus, table reservations, food ordering, Swiggy & Zomato integration."
              tags={['Restaurants', 'Cloud Kitchen', 'Catering']}
              color="bg-purple-500"
            />

            <IndustryCard
              icon={<ShoppingBag />}
              title="Fashion & Retail"
              text="E-commerce stores, product catalogs, wishlists, size guides, Instagram shop."
              tags={['Boutiques', 'Jewelry', 'Stores']}
              color="bg-pink-500"
            />

            <IndustryCard
              icon={<Briefcase />}
              title="Professional Services"
              text="CA firms, law offices, consultants. Team profiles, case studies, testimonials."
              tags={['CA/Lawyers', 'Consultants', 'Agencies']}
              color="bg-cyan-500"
            />

            <IndustryCard
              icon={<Factory />}
              title="Manufacturing & B2B"
              text="Industrial websites, export catalogs, product specs, dealer locators."
              tags={['Manufacturers', 'Exporters', 'B2B']}
              color="bg-yellow-500"
            />

            <IndustryCard
              icon={<Plane />}
              title="Travel & Hospitality"
              text="Travel agencies, hotels, tour operators, booking engines, itineraries."
              tags={['Hotels', 'Tours', 'Homestays']}
              color="bg-slate-400"
            />
          </div>

          {/* Bottom Info */}
          <div className="mt-16 border border-white/10 rounded-xl p-6 text-slate-300 flex items-center justify-center gap-3 text-sm">
            <CheckCircle2 className="text-[#FF6600]" />
            Don’t see your industry listed? No problem — we work with businesses
            across all sectors worldwide with custom solutions.
          </div>
        </div>
      </section>
      <section className="bg-[#F9FAFB] py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Top Badge */}
          <div className="flex justify-center mb-4">
            <span className="flex items-center gap-2 text-sm font-medium text-[#FF6600] bg-orange-100 px-4 py-1 rounded-full">
              <span className="w-2 h-2 bg-[#FF6600] rounded-full"></span>
              Our Approach
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-center text-4xl font-bold text-gray-900">
            How We Approach <br />
            <span className="text-[#FF6600]">Website Development</span>
          </h2>

          {/* Subtitle */}
          <p className="text-center text-gray-600 max-w-3xl mx-auto mt-4">
            Our proven methodology ensures every project delivers exceptional
            results. We've refined our process over 15 years to balance speed
            with quality.
          </p>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
            {/* Left Side */}
            <div className="space-y-10">
              {/* Item */}
              <div className="flex gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-orange-100 text-[#FF6600] font-bold">
                  👤
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">
                    Client-First Philosophy
                  </h4>
                  <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                    Every website we build starts with understanding your
                    business goals, target audience, and competitive landscape.
                    We create digital solutions that solve real business
                    problems.
                  </p>
                </div>
              </div>

              {/* Item */}
              <div className="flex gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-orange-100 text-[#FF6600] font-bold">
                  ⚡
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">
                    Speed Without Compromise
                  </h4>
                  <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                    Our streamlined workflow allows us to deliver quality
                    websites in 24–72 hours without cutting corners.
                  </p>
                </div>
              </div>

              {/* Item */}
              <div className="flex gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-orange-100 text-[#FF6600] font-bold">
                  🛡️
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">
                    Quality Assurance
                  </h4>
                  <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                    Rigorous testing ensures responsiveness, performance, SEO
                    optimization, and security before delivery.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                What Makes Us Different
              </h3>

              <ul className="space-y-4 text-sm">
                {[
                  '₹0 Advance Policy',
                  '100% Custom Design',
                  'Under 1.2s Load Time',
                  '24–72 Hour Delivery',
                  'Lifetime Support',
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-orange-100 text-[#FF6600] font-bold">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Top Badge */}
          <div className="flex justify-center mb-4">
            <span className="flex items-center gap-2 text-sm font-medium text-[#FF6600] bg-orange-100 px-4 py-1 rounded-full">
              ⚙️ Technologies
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-center text-4xl font-bold text-gray-900">
            Built With <span className="text-[#FF6600]">Modern Web</span>
            <br /> Technologies
          </h2>

          {/* Description */}
          <p className="text-center text-gray-600 max-w-3xl mx-auto mt-4">
            We use industry-standard tools and frameworks to build fast, secure,
            and scalable websites. Our tech stack is chosen to ensure optimal
            performance and long-term growth.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {/* Frontend */}
            <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-100 text-[#FF6600] mb-4">
                💻
              </div>
              <h4 className="font-semibold text-lg text-gray-900 mb-2">
                Frontend
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                HTML5, CSS3, JavaScript, React.js for fast, responsive, and
                interactive user experiences.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 bg-orange-100 text-[#FF6600] rounded">
                  HTML5
                </span>
                <span className="px-2 py-1 bg-orange-100 text-[#FF6600] rounded">
                  CSS3
                </span>
                <span className="px-2 py-1 bg-orange-100 text-[#FF6600] rounded">
                  JavaScript
                </span>
                <span className="px-2 py-1 bg-orange-100 text-[#FF6600] rounded">
                  React
                </span>
              </div>
            </div>

            {/* Backend */}
            <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-100 text-[#FF6600] mb-4">
                🧠
              </div>
              <h4 className="font-semibold text-lg text-gray-900 mb-2">
                Backend
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                Secure, scalable backend solutions with APIs, authentication,
                and custom CMS development.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 bg-orange-100 text-[#FF6600] rounded">
                  PHP
                </span>
                <span className="px-2 py-1 bg-orange-100 text-[#FF6600] rounded">
                  Laravel
                </span>
                <span className="px-2 py-1 bg-orange-100 text-[#FF6600] rounded">
                  Node.js
                </span>
                <span className="px-2 py-1 bg-orange-100 text-[#FF6600] rounded">
                  WordPress
                </span>
              </div>
            </div>

            {/* Database */}
            <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-100 text-[#FF6600] mb-4">
                🗄️
              </div>
              <h4 className="font-semibold text-lg text-gray-900 mb-2">
                Database
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                Optimized databases for fast queries, indexing, caching, and
                reliable backups.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 bg-orange-100 text-[#FF6600] rounded">
                  MySQL
                </span>
                <span className="px-2 py-1 bg-orange-100 text-[#FF6600] rounded">
                  PostgreSQL
                </span>
                <span className="px-2 py-1 bg-orange-100 text-[#FF6600] rounded">
                  Redis
                </span>
              </div>
            </div>

            {/* Hosting */}
            <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-100 text-[#FF6600] mb-4">
                ☁️
              </div>
              <h4 className="font-semibold text-lg text-gray-900 mb-2">
                Hosting
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                High-performance cloud hosting with SSL, daily backups, CDN, and
                99.9% uptime.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 bg-orange-100 text-[#FF6600] rounded">
                  AWS
                </span>
                <span className="px-2 py-1 bg-orange-100 text-[#FF6600] rounded">
                  DigitalOcean
                </span>
                <span className="px-2 py-1 bg-orange-100 text-[#FF6600] rounded">
                  Cloudflare
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --- 4-STEP PROCESS SECTION (Based on image_015e58.png) --- */}
      <section className="py-24 px-6 bg-[#fcf9f6]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-[#FF6600]/10 text-[#FF6600] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-[#FF6600]/20">
              <Zap size={12} /> Our Process
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-[#1e293b] tracking-tighter mb-6">
              How We Build Your <br />
              <span className="text-[#FF6600]">
                Professional Business Website
              </span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
              Simple 4-step process from initial consultation to website launch.
              Most projects completed within 48-72 hours with no compromises on
              quality.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {/* Step 1 */}
              <div className="bg-white p-8 rounded-[40px] shadow-xl shadow-black/5 border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-all">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-black mb-6 shadow-lg shadow-blue-200 ring-8 ring-blue-50">
                  1
                </div>
                <h3 className="text-lg font-black text-[#1e293b] mb-4">
                  Discovery Call
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-6">
                  Connect with us via WhatsApp or call. Share your business
                  details, target audience, and specific features you need.
                </p>
                <div className="mt-auto inline-flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full text-[10px] font-bold text-gray-400">
                  <Clock size={12} className="text-blue-600" /> 30 mins
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-8 rounded-[40px] shadow-xl shadow-black/5 border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-all">
                <div className="w-16 h-16 bg-[#FF6600] text-white rounded-full flex items-center justify-center text-2xl font-black mb-6 shadow-lg shadow-orange-200 ring-8 ring-orange-50">
                  2
                </div>
                <h3 className="text-lg font-black text-[#1e293b] mb-4">
                  Design & Prototype
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-6">
                  Our designers create a custom mockup. You'll see exactly how
                  your website will look before we write a single line of code.
                </p>
                <div className="mt-auto inline-flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full text-[10px] font-bold text-gray-400">
                  <Clock size={12} className="text-[#FF6600]" /> 24 hours
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-8 rounded-[40px] shadow-xl shadow-black/5 border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-all">
                <div className="w-16 h-16 bg-blue-400 text-white rounded-full flex items-center justify-center text-2xl font-black mb-6 shadow-lg shadow-blue-100 ring-8 ring-blue-50">
                  3
                </div>
                <h3 className="text-lg font-black text-[#1e293b] mb-4">
                  Development
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-6">
                  Once design is approved, we build with clean, optimized code,
                  integrate forms, set up SEO, and ensure speed.
                </p>
                <div className="mt-auto inline-flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full text-[10px] font-bold text-gray-400">
                  <Clock size={12} className="text-blue-400" /> 24-48 hours
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white p-8 rounded-[40px] shadow-xl shadow-black/5 border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-all">
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-black mb-6 shadow-lg shadow-green-200 ring-8 ring-green-50">
                  4
                </div>
                <h3 className="text-lg font-black text-[#1e293b] mb-4">
                  Launch
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-6">
                  Final testing, domain setup, and SSL installation. We provide
                  a walkthrough and hand over all access credentials.
                </p>
                <div className="mt-auto inline-flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full text-[10px] font-bold text-gray-400">
                  <Check size={12} className="text-green-500" /> Same day
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRICING PACKAGES SECTION (Based on image_016615.png) --- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-[#FF6600]/10 text-[#FF6600] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-[#FF6600]/20">
              <TrendingUp size={12} /> Transparent Pricing
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-[#1e293b] tracking-tighter mb-6">
              Website Development <br />
              <span className="text-[#FF6600]">Packages</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
              Professional website development packages starting ₹9,999. No
              advance payment required.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Package 1: Starter */}
            <div className="bg-white rounded-[40px] p-8 border border-gray-100 shadow-xl shadow-black/5 flex flex-col group hover:border-[#FF6600]/30 transition-all">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <Zap size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-black text-[#1e293b] mb-1">
                Express Starter
              </h3>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">
                Quick launch for small business
              </p>
              <div className="bg-blue-50 rounded-3xl p-6 mb-8 text-center">
                <div className="text-4xl font-black text-[#1e293b]">
                  ₹ 9,999
                </div>
                <div className="inline-flex items-center gap-1 mt-2 px-3 py-1 bg-blue-600 text-white text-[8px] font-black uppercase rounded-full">
                  <Trophy size={8} /> Professional Quality
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {[
                  'Professional Website Design',
                  'Mobile & Tablet Responsive',
                  'Contact Form + WhatsApp',
                  'Basic SEO Setup',
                  'Speed Optimized',
                ].map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-xs font-bold text-gray-500"
                  >
                    <Check size={14} className="text-green-500" /> {feature}
                  </li>
                ))}
                <li className="flex items-center gap-3 text-xs font-black text-blue-600">
                  <Zap size={14} /> Fast Delivery
                </li>
              </ul>
              <button className="w-full py-4 rounded-2xl border-2 border-[#1e293b] text-[#1e293b] font-black uppercase text-xs tracking-widest hover:bg-[#1e293b] hover:text-white transition-all">
                Get Started
              </button>
            </div>

            {/* Package 2: Business (Highlighted) */}
            <div className="bg-white rounded-[40px] p-8 border-2 border-[#FF6600] shadow-2xl shadow-[#FF6600]/10 flex flex-col relative scale-105 z-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF6600] text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                Best for Small Biz
              </div>
              <div className="w-12 h-12 bg-[#FF6600] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-200">
                <Smartphone size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-black text-[#1e293b] mb-1 text-center lg:text-left">
                Express Business
              </h3>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6 text-center lg:text-left">
                Best for urgent launches
              </p>
              <div className="bg-[#FF6600]/5 rounded-3xl p-6 mb-8 text-center">
                <div className="text-4xl font-black text-[#FF6600]">
                  ₹ 24,999
                </div>
                <div className="inline-flex items-center gap-1 mt-2 px-3 py-1 bg-[#FF6600] text-white text-[8px] font-black uppercase rounded-full">
                  <Trophy size={8} /> Professional Quality
                </div>
              </div>
              <div className="mb-4 text-[10px] font-black text-[#FF6600] uppercase tracking-tighter bg-[#FF6600]/10 py-1 px-3 rounded-md inline-block">
                Everything in previous, plus:
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {[
                  'Premium Custom Design',
                  'Admin Panel (Easy Editing)',
                  'Blog Integration',
                  'Lead Capture Forms',
                  'Advanced SEO + Analytics',
                ].map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-xs font-bold text-gray-500"
                  >
                    <Check size={14} className="text-green-500" /> {feature}
                  </li>
                ))}
                <li className="flex items-center gap-3 text-xs font-black text-[#FF6600]">
                  <Zap size={14} /> Fast Delivery
                </li>
              </ul>
              <button className="w-full py-4 rounded-2xl bg-[#FF6600] text-white font-black uppercase text-xs tracking-widest shadow-lg shadow-orange-200 hover:scale-105 transition-all">
                Get Started
              </button>
            </div>

            {/* Package 3: Professional */}
            <div className="bg-white rounded-[40px] p-8 border border-gray-100 shadow-xl shadow-black/5 flex flex-col group hover:border-[#FF6600]/30 transition-all">
              <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center mb-6">
                <Globe size={24} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-black text-[#1e293b] mb-1">
                Express Professional
              </h3>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">
                For established businesses
              </p>
              <div className="bg-purple-50 rounded-3xl p-6 mb-8 text-center">
                <div className="text-4xl font-black text-[#1e293b]">
                  ₹ 74,999
                </div>
                <div className="inline-flex items-center gap-1 mt-2 px-3 py-1 bg-purple-600 text-white text-[8px] font-black uppercase rounded-full">
                  <Trophy size={8} /> Professional Quality
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {[
                  'Custom UI/UX Design',
                  'Advanced Admin Dashboard',
                  'Multi-language Support',
                  'Booking/Appointment System',
                  'Live Chat Integration',
                ].map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-xs font-bold text-gray-500"
                  >
                    <Check size={14} className="text-green-500" /> {feature}
                  </li>
                ))}
                <li className="flex items-center gap-3 text-xs font-black text-purple-600">
                  <Zap size={14} /> Fast Delivery
                </li>
              </ul>
              <button className="w-full py-4 rounded-2xl border-2 border-[#1e293b] text-[#1e293b] font-black uppercase text-xs tracking-widest hover:bg-[#1e293b] hover:text-white transition-all">
                Get Started
              </button>
            </div>

            {/* Package 4: Enterprise */}
            <div className="bg-white rounded-[40px] p-8 border border-gray-100 shadow-xl shadow-black/5 flex flex-col group hover:border-[#FF6600]/30 transition-all">
              <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6">
                <Scale size={24} className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-black text-[#1e293b] mb-1">
                Express Enterprise
              </h3>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">
                Large scale solutions
              </p>
              <div className="bg-indigo-50 rounded-3xl p-6 mb-8 text-center">
                <div className="text-4xl font-black text-[#1e293b]">
                  ₹ 1,99,999+
                </div>
                <div className="inline-flex items-center gap-1 mt-2 px-3 py-1 bg-indigo-600 text-white text-[8px] font-black uppercase rounded-full">
                  <Trophy size={8} /> Professional Quality
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {[
                  'Fully Custom Development',
                  'Complex Integrations',
                  'Enterprise Security',
                  'Custom API Development',
                  'Third-party Integrations',
                ].map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-xs font-bold text-gray-500"
                  >
                    <Check size={14} className="text-green-500" /> {feature}
                  </li>
                ))}
                <li className="flex items-center gap-3 text-xs font-black text-indigo-600">
                  <Zap size={14} /> Fast Delivery
                </li>
              </ul>
              <button className="w-full py-4 rounded-2xl border-2 border-[#1e293b] text-[#1e293b] font-black uppercase text-xs tracking-widest hover:bg-[#1e293b] hover:text-white transition-all">
                Get Started
              </button>
            </div>
          </div>

          {/* Footer Guarantee */}
          <div className="mt-20 max-w-xl mx-auto bg-green-50 border border-green-100 rounded-3xl p-6 flex items-center gap-6">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm text-green-500">
              <Check size={24} strokeWidth={3} />
            </div>
            <div>
              <h4 className="font-black text-[#1e293b] text-sm italic uppercase tracking-wider">
                ₹0 Advance Payment Guarantee
              </h4>
              <p className="text-gray-500 text-xs mt-1">
                Pay only after seeing your completed website. 100% Satisfaction
                or zero cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS SECTION (Based on image_01bf79.png) --- */}
      <section className="py-24 px-6 bg-[#fcf9f6]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-[#FF6600]/10 text-[#FF6600] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-[#FF6600]/20">
              <MessageSquare size={12} /> Client Success Stories
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-[#1e293b] tracking-tighter mb-6">
              What <span className="text-[#FF6600]">Happy Clients</span> Say
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
              Real results from businesses who trusted us with their digital
              presence.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-10 rounded-[40px] shadow-xl shadow-black/5 border border-gray-100 flex flex-col hover:-translate-y-2 transition-all">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-[#FF6600] text-[#FF6600]"
                  />
                ))}
              </div>
              <p className="text-gray-600 font-medium italic leading-relaxed mb-8 flex-grow">
                "My retail store needed a professional website. The team
                understood exactly what I needed and delivered a beautiful,
                fast-loading site that drives sales!"
              </p>
              <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                  <img
                    src="/api/placeholder/48/48"
                    alt="Client"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-black text-[#1e293b] text-sm">
                    Lakshmi Venkat
                  </h4>
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">
                    Retail Business Owner
                  </p>
                </div>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 bg-green-50 text-green-600 px-3 py-1 rounded-full text-[10px] font-black self-start">
                <TrendingUp size={12} /> 180% more enquiries
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-10 rounded-[40px] shadow-xl shadow-black/5 border border-gray-100 flex flex-col hover:-translate-y-2 transition-all">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-[#FF6600] text-[#FF6600]"
                  />
                ))}
              </div>
              <p className="text-gray-600 font-medium italic leading-relaxed mb-8 flex-grow">
                "Our tech startup needed a modern website fast. They delivered
                in 48 hours with incredible 1.2s load speed. The zero-advance
                model was perfect!"
              </p>
              <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                  <img
                    src="/api/placeholder/48/48"
                    alt="Client"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-black text-[#1e293b] text-sm">
                    Karthik Rajan
                  </h4>
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">
                    Tech Startup Founder
                  </p>
                </div>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 bg-[#FF6600]/10 text-[#FF6600] px-3 py-1 rounded-full text-[10px] font-black self-start">
                <Zap size={12} /> 5x lead generation
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-10 rounded-[40px] shadow-xl shadow-black/5 border border-gray-100 flex flex-col hover:-translate-y-2 transition-all">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-[#FF6600] text-[#FF6600]"
                  />
                ))}
              </div>
              <p className="text-gray-600 font-medium italic leading-relaxed mb-8 flex-grow">
                "My clinic now has online appointment booking. The website loads
                super fast and patients love the easy navigation. Highly
                recommended!"
              </p>
              <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                  <img
                    src="/api/placeholder/48/48"
                    alt="Client"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-black text-[#1e293b] text-sm">
                    Dr. Priya Sundaram
                  </h4>
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">
                    Healthcare Professional
                  </p>
                </div>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-[10px] font-black self-start">
                <Check size={12} /> 60+ bookings/week
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --- FAQ SECTION (Based on image_01c6b8.png) --- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-[#FF6600]/10 text-[#FF6600] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-[#FF6600]/20">
              <HelpCircle size={12} /> FAQ
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-[#1e293b] tracking-tighter mb-6">
              Frequently Asked <br />
              <span className="text-[#FF6600]">Questions</span>
            </h2>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`transition-all duration-300 border-2 rounded-[30px] overflow-hidden ${
                    isOpen
                      ? 'border-[#FF6600] bg-[#FF6600]/5 shadow-lg shadow-orange-100/50'
                      : 'border-gray-100 bg-white'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left group"
                  >
                    <span
                      className={`text-lg font-black transition-colors ${
                        isOpen
                          ? 'text-[#1e293b]'
                          : 'text-[#1e293b]/70 group-hover:text-[#1e293b]'
                      }`}
                    >
                      {faq.q}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? 'bg-[#FF6600] text-white rotate-180'
                          : 'bg-gray-50 text-gray-400 group-hover:bg-[#FF6600]/10 group-hover:text-[#FF6600]'
                      }`}
                    >
                      <ChevronDown size={20} strokeWidth={3} />
                    </div>
                  </button>

                  {/* Animated Answer Section */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="px-8 pb-8">
                      <p className="text-gray-600 leading-relaxed text-sm font-medium border-t border-[#FF6600]/10 pt-4">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA SECTION (Based on image_01d63a.png) --- */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#FF6600] rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-orange-200">
            {/* Decorative background circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                Still have questions?
              </h2>
              <p className="text-orange-50 text-lg md:text-xl font-medium mb-12 max-w-xl mx-auto opacity-90">
                Our team is ready to help you get started on your professional
                website journey today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {/* Call Button */}
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="group flex items-center gap-3 bg-white text-[#FF6600] px-10 py-5 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-orange-50 transition-all shadow-xl shadow-black/10"
                >
                  <Phone
                    size={20}
                    className="group-hover:rotate-12 transition-transform"
                  />
                  Call Now
                </a>

                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  className="group flex items-center gap-3 bg-white/10 border-2 border-white/20 text-white px-10 py-5 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-white/20 transition-all backdrop-blur-sm"
                >
                  <MessageCircle
                    size={20}
                    className="group-hover:scale-110 transition-transform"
                  />
                  WhatsApp
                </a>
              </div>

              <p className="mt-10 text-orange-100/60 text-[10px] font-bold uppercase tracking-[0.2em]">
                Available 24/7 for free consultation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- DETAILED SERVICES & LOCATIONS SECTION (Based on image_01d95d.png) --- */}
      <section className="py-24 px-6 bg-[#fcf9f6]">
        <div className="max-w-7xl mx-auto">
          {/* Part 1: Service Grid */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#1e293b] mb-4">
              Our <span className="text-[#FF6600]">Website Development</span>{' '}
              Services
            </h2>
            <p className="text-gray-500 font-medium">
              Complete web solutions for your business
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
            {[
              {
                title: 'Custom Design',
                desc: 'Unique websites',
                icon: <Layout />,
                color: 'bg-purple-100 text-purple-600',
              },
              {
                title: 'Ecommerce',
                desc: 'Online stores',
                icon: <ShoppingCart />,
                color: 'bg-indigo-100 text-indigo-600',
              },
              {
                title: 'WordPress',
                desc: 'CMS websites',
                icon: <Globe />,
                color: 'bg-blue-100 text-blue-600',
              },
              {
                title: 'Responsive Design',
                desc: 'Mobile-first',
                icon: <Smartphone />,
                color: 'bg-green-100 text-green-600',
              },
              {
                title: 'Professional Design',
                desc: 'Premium quality',
                icon: <Award />,
                color: 'bg-blue-100 text-blue-600',
              },
              {
                title: 'Small Business',
                desc: 'Starter websites',
                icon: <Store />,
                color: 'bg-emerald-100 text-emerald-600',
              },
              {
                title: 'Landing Pages',
                desc: 'High converting',
                icon: <Zap />,
                color: 'bg-orange-100 text-[#FF6600]',
              },
              {
                title: 'Website Redesign',
                desc: 'Modernize your site',
                icon: <RefreshCw />,
                color: 'bg-[#FF6600]/10 text-[#FF6600]',
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${service.color}`}
                >
                  {React.cloneElement(service.icon, { size: 20 })}
                </div>
                <div>
                  <h3 className="font-black text-[#1e293b] text-sm">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-xs">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="h-px bg-gray-200 w-full mb-20" />

          {/* Part 2: Location-Based & Tags */}
          <div className="text-center mb-12">
            <h3 className="text-xl font-black text-[#1e293b] mb-2 uppercase tracking-tight">
              Location-Based Services
            </h3>
            <p className="text-gray-400 text-sm">
              We serve businesses worldwide
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              'Website Dev Chennai',
              'Website Dev Pune',
              'Designer Near Me',
              'Web Dev Company',
              'Fast Development',
              '24-Hour Website',
              'Affordable Websites',
              'App Development',
              'SaaS Development',
              'Website as a Service',
            ].map((tag, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-100 px-5 py-3 rounded-full shadow-sm flex items-center gap-2 hover:border-[#FF6600]/30 transition-colors cursor-default"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF6600]" />
                <span className="text-xs font-bold text-gray-600">{tag}</span>
              </div>
            ))}
          </div>

          {/* Final Action Button */}
          <div className="mt-16 text-center">
            <button className="bg-[#FF6600] text-white px-10 py-4 rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl shadow-orange-200 hover:scale-105 transition-all inline-flex items-center gap-2">
              View All Pricing <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------- Card ---------- */

const IndustryCard = ({ icon, title, text, tags, color }) => {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition shadow-sm">
      <div
        className={`w-11 h-11 rounded-xl flex items-center justify-center text-white mb-4 ${color}`}
      >
        {icon}
      </div>

      <h3 className="font-semibold text-white mb-2">{title}</h3>

      <p className="text-sm text-slate-300 leading-relaxed mb-4">{text}</p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="px-2.5 py-0.5 text-xs rounded-full bg-white/10 text-slate-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
