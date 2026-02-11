'use client';

import React, { useState } from 'react';
import {
  TrendingUp,
  Search,
  Facebook,
  MapPin,
  Globe,
  MessageSquare,
  LineChart,
  PhoneCall,
  FileSearch,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Code2,
  Zap,
  BarChart3,
  Trophy,
  Clock,
  Target,
  HeartPulse,
  X,
  Check,
  ArrowRight,
  Send,
  Instagram,
  Linkedin,
  Twitter,
  ChevronRight,
  ArrowUpRight,
  Mail,
  Phone,
  Award,
  Users,
  Headphones,
  Scale,
  Play,
  Eye,
  FastForward,
  Wallet,
  Paintbrush,
  RefreshCcw,
  LayoutTemplate,
  ShoppingCart,
  Building2,
  Headset,
  Smartphone,
  Palette,
  Home,
  GraduationCap,
  Utensils,
  ShoppingBag,
  Briefcase,
  Factory,
  Plane,
  Star,
  HelpCircle,
  ChevronDown,
  MessageCircle,
  Layout,
  Store,
  RefreshCw,
  Cloud,
  Code,
  Shield,
  Gift,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import AgencyFooter from '../components/Footer';

// --- HELPER COMPONENTS ---

const Card = ({
  icon,
  title,
  sub,
  iconBg,
  width = 'w-48',
  accentBorder = '',
}) => (
  <div
    className={`${width} ${accentBorder} flex items-center gap-3 bg-white px-4 py-3 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.08)] border border-white/50 hover:scale-105 transition-transform duration-300`}
  >
    <div className={`p-2 rounded-xl ${iconBg}`}>{icon}</div>
    <div>
      <p className="font-bold text-[13px] text-gray-800 leading-tight">
        {title}
      </p>
      <p className="text-[10px] text-gray-400 font-medium">{sub}</p>
    </div>
  </div>
);

const SmallGridItem = ({ icon, title, sub }) => (
  <div className="flex items-start gap-3">
    <div className="p-2 bg-gray-50 rounded-xl shadow-inner border border-gray-100 shrink-0">
      {icon}
    </div>
    <div className="flex flex-col">
      <p className="font-bold text-[11px] text-gray-800 leading-none">
        {title}
      </p>
      <p className="text-[9px] text-gray-400 mt-1">{sub}</p>
    </div>
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

const FloatingInput = ({ label, placeholder, type }) => (
  <div className="space-y-2">
    <label className="text-[11px] font-black uppercase text-gray-400 ml-4 tracking-widest">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full bg-[#f8fafc] border border-transparent focus:border-[#FF6900]/30 focus:bg-white outline-none px-6 py-4 rounded-2xl text-sm font-bold text-[#1e293b] transition-all shadow-sm"
    />
  </div>
);

// --- MAIN PAGE COMPONENT ---

export default function AgencyLandingPage() {
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

  const comparisonData = [
    {
      feature: 'Marketing Approach',
      others: 'Random posting & ads',
      us: 'Strategy-based execution',
      icon: <Zap size={20} />,
    },
    {
      feature: 'Reporting',
      others: 'Limited or unclear',
      us: 'Detailed monthly reports',
      icon: <BarChart3 size={20} />,
    },
    {
      feature: 'Ad Spend Handling',
      others: 'Wastage',
      us: 'Optimized ROI focus',
      icon: <Trophy size={20} />,
    },
    {
      feature: 'Contracts',
      others: 'Long-term binding',
      us: 'Flexible plans',
      icon: <ShieldCheck size={20} />,
    },
    {
      feature: 'Industry Experience',
      others: 'Limited niches',
      us: 'Multiple business domains',
      icon: <Clock size={20} />,
    },
    {
      feature: 'Goal Focus',
      others: 'Likes & clicks',
      us: 'Leads & sales',
      icon: <Target size={20} />,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f0f7ff] font-sans selection:bg-[#FF6900] selection:text-white">
        {/* 1. HERO SECTION */}
        <section className="relative overflow-hidden pt-5 pb-32">
          <style
            dangerouslySetInnerHTML={{
              __html: `@keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-14px); } } .float { animation: float 4s ease-in-out infinite; } .float-slow { animation: float 6s ease-in-out infinite; }`,
            }}
          />
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#FFB303] text-black text-sm font-semibold shadow-lg shadow-orange-200/40">
                <span className="bg-white p-1.5 rounded-full">
                  <Code2 size={14} color="black" />
                </span>
                Website as a Service Experts
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6900] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF6900]"></span>
                </span>
              </div>
              <h1 className="text-6xl font-extrabold text-[#FF6900] leading-tight">
                Website as a<br />
                <span className="text-[#1e293b] border-b-4 border-[#FF6900]">
                  Service
                </span>
              </h1>
              <p className="text-gray-600 text-lg max-w-xl font-medium">
                Data-driven marketing strategies that attract the right audience
                and convert them into customers. No blind spending — only
                results.
              </p>
              <div className="grid grid-cols-2 gap-4 text-black">
                {[
                  'ROI focused',
                  'Transparent reports',
                  'Growth strategies',
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-2 font-bold">
                    <CheckCircle2 className="text-green-500" size={18} /> {text}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-[#FF6900] text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm shadow-xl hover:bg-[#1e293b] transition-all flex items-center gap-3">
                  <PhoneCall size={18} /> Talk to Expert
                </button>
                <button className="bg-white border-2 border-[#FF6900] text-[#FF6900] px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:bg-[#FF6900] hover:text-white transition-all flex items-center gap-3">
                  <FileSearch size={18} /> Free Audit
                </button>
              </div>
            </div>

            {/* Hero Dashboard Graphic */}
            <div className="relative flex justify-center items-center">
              <div className="relative w-[440px] h-[600px] rounded-[50px] bg-white/20 backdrop-blur-2xl border border-white/40 shadow-2xl flex flex-col">
                <div className="mt-8 mx-auto w-[75%] h-8 bg-white/40 rounded-full border border-white/20 flex items-center px-4 justify-between shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-[#FF6900]" />
                  <span className="text-[10px] text-gray-500 font-medium italic">
                    a2vgroups.com
                  </span>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-gray-300" />
                    <div className="w-1 h-1 rounded-full bg-gray-300" />
                  </div>
                </div>
                <div className="absolute top-12 -left-12 z-20 float">
                  <Card
                    icon={<TrendingUp size={18} color="#FF6900" />}
                    title="SEO Optimized"
                    sub="Rank higher"
                    iconBg="bg-orange-50"
                  />
                </div>
                <div className="absolute top-28 -right-8 z-20 float-slow">
                  <Card
                    icon={<Search size={18} color="#FF6900" />}
                    title="Google Ads"
                    sub="PPC Campaigns"
                    iconBg="bg-orange-50"
                  />
                </div>
                <div className="absolute top-[42%] -right-16 z-20 float">
                  <Card
                    icon={<Facebook size={20} color="#FF6900" />}
                    title="Social Media"
                    sub="Build Your Brand"
                    iconBg="bg-orange-50"
                    width="w-64"
                    accentBorder="border-l-4 border-l-[#FF6900]"
                  />
                </div>
                <div className="flex-grow flex items-center justify-center -mt-20">
                  <TrendingUp
                    size={180}
                    className="text-[#FF6900] opacity-30 rotate-[-12deg] drop-shadow-2xl"
                    strokeWidth={2.5}
                  />
                </div>
                <div className="relative mx-5 mb-5 p-6 bg-white rounded-[38px] shadow-xl z-30">
                  <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                    <SmallGridItem
                      icon={<Search className="text-purple-500" size={18} />}
                      title="SEO"
                      sub="Optimization"
                    />
                    <SmallGridItem
                      icon={<TrendingUp className="text-[#FF6900]" size={18} />}
                      title="Ads"
                      sub="PPC"
                    />
                    <SmallGridItem
                      icon={<Facebook className="text-blue-500" size={18} />}
                      title="Social"
                      sub="Marketing"
                    />
                    <SmallGridItem
                      icon={
                        <MessageSquare className="text-orange-400" size={18} />
                      }
                      title="Ads"
                      sub="Social Media"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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

        <section className="relative py-24 bg-white overflow-hidden">
          {/* soft orange glow */}
          <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] rounded-full bg-[#FF6600]/10 blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-6 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FF6600]/10 text-[#FF6600] text-sm font-semibold mb-6 shadow-sm">
              ● Our Services
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Website Development <br />
              Services{' '}
              <span className="text-[#FF6600]">That Deliver Results</span>
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-slate-600 text-lg">
              Complete web solutions for businesses of all sizes. From simple
              landing pages to complex web applications, we handle everything.
            </p>

            {/* Cards */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              <ServiceCard
                icon={<Building2 />}
                title="Business Websites"
                text="Professional websites to establish your online presence. Corporate sites, portfolios, service pages optimized for lead generation and WhatsApp integration."
                tags={['Corporate', 'Portfolio', 'Services']}
              />

              <ServiceCard
                icon={<ShoppingCart />}
                title="E-commerce Development"
                text="Complete online stores with payment gateways, inventory management, shipping integration, and customer accounts. Sell products 24/7."
                tags={['Online Store', 'Payments', 'Shipping']}
              />

              <ServiceCard
                icon={<Globe />}
                title="WordPress Development"
                text="Custom WordPress themes from scratch. User-friendly admin panel, SEO ready, secure, and easy to manage without dependency."
                tags={['Custom Theme', 'SEO Ready', 'Self-Managed']}
              />

              <ServiceCard
                icon={<Code2 />}
                title="Web Applications"
                text="Custom web apps including CRM systems, booking platforms, dashboards, and portals built with modern scalable technologies."
                tags={['CRM', 'Portals', 'Dashboards']}
              />

              <ServiceCard
                icon={<LayoutTemplate />}
                title="Landing Pages"
                text="High-converting landing pages for ads and marketing campaigns. Optimized forms, trust signals, and compelling layouts."
                tags={['PPC Ready', 'Lead Gen', 'A/B Testing']}
              />

              <ServiceCard
                icon={<RefreshCcw />}
                title="Website Redesign"
                text="Transform outdated websites into modern, fast, mobile-first designs with improved UX and SEO-safe migration."
                tags={['Modernize', 'Speed Up', 'SEO Safe']}
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6600]/10 text-[#FF6600] text-sm font-semibold mb-6">
              ● What’s Included
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Everything You Get With <br />
              Our{' '}
              <span className="text-[#FF6600]">
                Professional Website Development
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mt-6 max-w-3xl mx-auto text-slate-600 text-lg">
              No hidden costs. No surprises. Every website comes with these
              essential features included from day one at no extra charge.
            </p>

            {/* Cards */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              <FeatureCards
                icon={<Palette />}
                title="100% Custom Design"
                text="Every website designed from scratch for your brand. No templates — completely unique. We study competitors and make you stand out."
                bg="bg-blue-50"
                iconBg="bg-blue-500"
              />

              <FeatureCards
                icon={<Zap />}
                title="Under 1.2s Load Speed"
                text="Guaranteed fast loading with image optimization, minified code, lazy loading and CDN. Faster sites rank higher on Google."
                bg="bg-green-50"
                iconBg="bg-green-500"
              />

              <FeatureCards
                icon={<Smartphone />}
                title="Mobile Responsive"
                text="70%+ traffic is mobile. Perfect display on all devices — phones, tablets, laptops and desktops. Tested on real devices."
                bg="bg-purple-50"
                iconBg="bg-purple-500"
              />

              <FeatureCards
                icon={<Search />}
                title="SEO Foundation"
                text="Complete on-page SEO: meta tags, schema markup, XML sitemap, robots.txt and Google Analytics. Rank from day one."
                bg="bg-orange-50"
                iconBg="bg-orange-500"
              />

              <FeatureCards
                icon={<ShieldCheck />}
                title="SSL & Security"
                text="Free SSL certificate, secure coding and vulnerability protection. Visitors see the padlock icon in their browser."
                bg="bg-cyan-50"
                iconBg="bg-cyan-500"
              />

              <FeatureCards
                icon={<Headset />}
                title="Lifetime Support"
                text="We don’t disappear after delivery. Lifetime support, free updates and dedicated assistance. Just one WhatsApp away."
                bg="bg-pink-50"
                iconBg="bg-pink-500"
              />
            </div>
          </div>
        </section>

        {/* --- SAAS POTENTIAL & RECURRING REVENUE SECTION (Based on image_9aff22.jpg) --- */}
        <section className="py-24 px-6 bg-[#1e1b4b] relative overflow-hidden">
          {/* Background Pattern - Subtle dots/grid */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }}
          ></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 border border-white/20 backdrop-blur-md">
                  <div className="w-1.5 h-1.5 bg-[#FF6600] rounded-full animate-pulse" />{' '}
                  Why Build a SaaS?
                </div>

                <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-[1.1]">
                  Recurring Revenue = <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6600] to-pink-500">
                    Predictable Growth
                  </span>
                </h2>

                <p className="text-blue-100/70 text-lg font-medium mb-10 max-w-xl leading-relaxed">
                  SaaS businesses are valued at 10-15x ARR. Build once, sell
                  forever. Here's what our clients achieve:
                </p>

                <ul className="space-y-5">
                  {[
                    '₹10 Lakhs+ MRR within 12 months',
                    '85% gross margins (vs 20-30% for services)',
                    'Valuation multiplier: 10-15x annual revenue',
                    'Location-independent, global customer base',
                    'Passive income while you sleep',
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-4 text-white font-bold group"
                    >
                      <div className="w-6 h-6 bg-[#FF6600] rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-[#FF6600]/20 group-hover:scale-110 transition-transform">
                        <Check size={14} strokeWidth={4} />
                      </div>
                      <span className="opacity-90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Content: ROI Card */}
              <div className="relative">
                {/* Decorative Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#FF6600] to-pink-500 rounded-[50px] blur-2xl opacity-20"></div>

                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-10 md:p-14 rounded-[40px] shadow-2xl">
                  <div className="flex items-center gap-3 text-white/80 font-black uppercase tracking-widest text-[10px] mb-8 justify-center lg:justify-start">
                    <Layout size={16} className="text-[#FF6600]" /> Your SaaS
                    Potential
                  </div>

                  <p className="text-center lg:text-left text-white/60 text-sm font-medium mb-8">
                    If you get just{' '}
                    <span className="text-white font-black">100 customers</span>{' '}
                    paying ₹2,000/month:
                  </p>

                  <div className="bg-gradient-to-br from-[#FF6600] to-pink-600 p-10 rounded-[30px] text-center shadow-xl mb-10">
                    <div className="text-white/80 text-xs font-black uppercase tracking-widest mb-2">
                      Monthly Recurring Revenue
                    </div>
                    <div className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-4">
                      ₹2,00,000
                    </div>
                    <div className="text-white/60 text-[10px] font-bold">
                      = ₹24 Lakhs/year • Company valuation: ₹2.4 - 3.6 Cr
                    </div>
                  </div>

                  <button className="w-full py-5 bg-white text-[#1e1b4b] rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-[#FF6600] hover:text-white transition-all shadow-xl flex items-center justify-center gap-2 group">
                    Calculate My ROI{' '}
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Stats Row */}
            <div className="mt-24 pt-12 border-t border-white/5 grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: 'SaaS Products Built', value: '50+' },
                { label: 'Client ARR Generated', value: '₹10Cr+' },
                { label: 'End Users Served', value: '500K+' },
                { label: 'Avg. Uptime', value: '99.9%' },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-4xl font-black text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-blue-100/40 text-[10px] font-black uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- FROM IDEA TO LAUNCH SECTION (Based on image_9b55d3.png) --- */}
        <section className="py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-[#FF6600]/10 text-[#FF6600] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-[#FF6600]/20">
                <Zap size={12} /> Our Process
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-[#1e293b] tracking-tighter mb-6">
                From Idea to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6600] to-pink-500">
                  Launch
                </span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
                Our proven process ensures your SaaS is built right and ready
                for scale.
              </p>
            </div>

            {/* Horizontal Process Line Wrapper */}
            <div className="relative mt-20">
              {/* Background Connecting Line (Desktop) */}
              <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-1 bg-gradient-to-r from-purple-200 via-[#FF6600]/30 to-pink-200 z-0" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-4 relative z-10">
                {[
                  {
                    step: '1',
                    title: 'Discovery & Planning',
                    desc: 'Requirements, user stories, tech stack selection, architecture design',
                    gradient: 'from-purple-500 to-indigo-500',
                  },
                  {
                    step: '2',
                    title: 'UI/UX Design',
                    desc: 'Wireframes, prototypes, user testing, design system creation',
                    gradient: 'from-indigo-500 to-[#FF6600]',
                  },
                  {
                    step: '3',
                    title: 'Development',
                    desc: 'Agile sprints, weekly demos, CI/CD pipeline, code reviews',
                    gradient: 'from-[#FF6600] to-pink-500',
                  },
                  {
                    step: '4',
                    title: 'Launch & Scale',
                    desc: 'Cloud deployment, monitoring, performance optimization, support',
                    gradient: 'from-pink-500 to-[#FF6600]',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center group cursor-pointer"
                  >
                    {/* Step Circle with Hover Effect */}
                    <div className="relative mb-8">
                      {/* The Circle */}
                      <div
                        className={`
                w-20 h-20 rounded-full border-4 flex items-center justify-center text-2xl font-black transition-all duration-500
                border-purple-100 bg-white text-gray-400
                group-hover:border-transparent group-hover:text-white group-hover:shadow-2xl
                ${idx === 3 ? 'lg:border-transparent lg:bg-gradient-to-br lg:from-pink-500 lg:to-[#FF6600] lg:text-white lg:shadow-xl lg:shadow-pink-200' : ''}
                group-hover:bg-gradient-to-br group-hover:${item.gradient}
              `}
                      >
                        {item.step}
                      </div>

                      {/* Decorative Pulse (Only on Hover) */}
                      <div className="absolute inset-0 rounded-full bg-[#FF6600]/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Content */}
                    <div className="text-center px-4">
                      <h3 className="text-lg font-black text-[#1e293b] mb-3 group-hover:text-[#FF6600] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-xs leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
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
                  "My clinic now has online appointment booking. The website
                  loads super fast and patients love the easy navigation. Highly
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
                  Pay only after seeing your completed website. 100%
                  Satisfaction or zero cost.
                </p>
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

        {/* --- FINAL SAAS CTA SECTION (Based on image_9b6c35.png) --- */}
        <section className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden">
          {/* Subtle Grid Background Pattern */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          ></div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            {/* Top Label */}
            <div className="inline-flex items-center gap-2 bg-[#FF6600]/10 text-[#FF6600] px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 border border-[#FF6600]/20 backdrop-blur-sm">
              <Gift size={14} /> Free SaaS Consultation
            </div>

            {/* Main Heading */}
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-tight">
              Ready to Build Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6600] to-pink-500">
                SaaS Empire?
              </span>
            </h2>

            {/* Subtext */}
            <p className="text-gray-400 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
              Share your idea and get a free technical consultation + detailed
              quote within 48 hours.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16">
              <button className="group relative bg-[#FF6600] text-white px-10 py-5 rounded-2xl font-black uppercase text-sm tracking-widest overflow-hidden transition-all hover:scale-105 shadow-[0_20px_40px_rgba(255,102,0,0.3)]">
                <span className="relative z-10 flex items-center gap-2">
                  Build My SaaS{' '}
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>

              <button className="flex items-center gap-3 bg-white text-[#0a0a0a] px-10 py-5 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-gray-100 transition-all shadow-xl">
                <MessageCircle size={18} /> WhatsApp Now
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 pt-10 border-t border-white/5">
              {[
                {
                  label: 'NDA Protection',
                  icon: <Shield size={14} className="text-green-500" />,
                },
                {
                  label: 'Full Source Code',
                  icon: <Code size={14} className="text-[#FF6600]" />,
                },
                {
                  label: 'Cloud Ready',
                  icon: <Cloud size={14} className="text-blue-400" />,
                },
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-2">
                  {badge.icon}
                  <span className="text-white/40 text-[10px] font-black uppercase tracking-widest">
                    {badge.label}
                  </span>
                </div>
              ))}
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

        <AgencyFooter />
      </div>
    </>
  );
}

const StatCard = ({ value, label }) => {
  return (
    <div className="rounded-2xl bg-white border border-orange-100 p-8 shadow-lg hover:shadow-xl transition">
      <div className="text-4xl font-extrabold text-orange-500">{value}</div>
      <div className="mt-2 text-sm font-medium text-slate-600">{label}</div>
    </div>
  );
};

const InfoCard = ({ icon, title, text, highlight, highlight2 }) => {
  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-lg hover:shadow-xl transition">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-xl bg-orange-100 text-orange-600">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      </div>

      <p className="text-slate-600 leading-relaxed">
        {highlight && (
          <span className="text-orange-500 font-semibold">{highlight}</span>
        )}{' '}
        {text}{' '}
        {highlight2 && (
          <span className="text-orange-500 font-semibold">{highlight2}</span>
        )}
      </p>
    </div>
  );
};

const FeatureCard = ({ icon, title, text, iconBg, iconColor }) => {
  return (
    <div className="group rounded-2xl bg-white/80 backdrop-blur-sm border border-orange-100/50 p-8 shadow-lg hover:shadow-[0_20px_40px_rgba(255,102,0,0.15)] hover:border-[#FF6600]/30 transition-all duration-300 hover:-translate-y-1">
      <div
        className={`w-16 h-16 flex items-center justify-center rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 ${iconBg} ${iconColor}`}
      >
        {icon}
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#FF6600] transition-colors">
        {title}
      </h3>

      <p className="text-slate-600 leading-relaxed text-base">{text}</p>
    </div>
  );
};

const ServiceCard = ({ icon, title, text, tags }) => {
  return (
    <div className="rounded-2xl bg-[#f8fbff] border border-[#FF6600]/20 p-8 shadow-sm hover:shadow-lg transition">
      <div className="w-14 h-14 flex items-center justify-center rounded-xl mb-6 bg-[#FF6600]/10 text-[#FF6600]">
        {icon}
      </div>

      <h3 className="text-lg font-bold text-slate-900 mb-3">{title}</h3>

      <p className="text-slate-600 text-sm leading-relaxed mb-5">{text}</p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs rounded-full bg-[#FF6600]/10 text-[#FF6600] font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const FeatureCards = ({ icon, title, text, bg, iconBg }) => {
  return (
    <div
      className={`rounded-2xl p-8 ${bg} border border-black/5 shadow-sm hover:shadow-md transition`}
    >
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center text-white mb-5 ${iconBg}`}
      >
        {icon}
      </div>

      <h3 className="text-base font-bold text-slate-900 mb-2">{title}</h3>

      <p className="text-sm text-slate-600 leading-relaxed">{text}</p>
    </div>
  );
};

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