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
                Digital Marketing Specialists
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6900] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF6900]"></span>
                </span>
              </div>
              <h1 className="text-6xl font-extrabold text-[#FF6900] leading-tight">
                Digital Marketing <br />
                <span className="text-[#1e293b] border-b-4 border-[#FF6900]">
                  Services
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

        <section className="relative py-24 overflow-hidden bg-[#f6faff]">
          {/* Grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(#e5edff_1px,transparent_1px),linear-gradient(90deg,#e5edff_1px,transparent_1px)] bg-[size:32px_32px]" />

          {/* Soft orange circle */}
          <div className="absolute right-[-200px] top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-orange-200/40 blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-6 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold mb-6 shadow">
              💡 Why It Matters
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Why Professional{' '}
              <span className="text-orange-500">
                Website <br /> Development
              </span>{' '}
              Matters
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-slate-600 text-lg">
              Your website is often the first impression customers have of your
              business. Make it count.
            </p>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard value="75%" label="Judge by Design" />
              <StatCard value="0.05s" label="First Impression" />
              <StatCard value="24/7" label="Always Working" />
              <StatCard value="3x" label="More Conversions" />
            </div>

            {/* Info Cards */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <InfoCard
                icon={<Clock />}
                title="Works 24/7 For You"
                text="Your website works around the clock, reaching customers while you sleep. A professionally built site generates leads and converts visitors into paying customers 24/7."
              />

              <InfoCard
                icon={<Eye />}
                title="First Impressions Matter"
                highlight="75% of users"
                highlight2="0.05 seconds"
                text="judge credibility by website design. First impressions happen incredibly fast — you never get a second chance."
              />

              <InfoCard
                icon={<Play />}
                title="Performance = Results"
                text="Fast websites rank higher on Google and convert more visitors. Speed and user experience directly impact revenue."
              />

              <InfoCard
                icon={<Award />}
                title="Professional Edge"
                text="A DIY site says you exist. A professional site says you mean business. Quality decides who customers trust."
              />
            </div>
          </div>
        </section>

        <section className="relative py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            {/* Badge - #FF6600 theme */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-50 text-[#FF6600] text-sm font-semibold mb-6 shadow-sm border border-orange-100">
              🔶 Why Choose Us
            </div>

            {/* Heading - Primary color highlight */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
              Why{' '}
              <span className="text-[#FF6600] bg-orange-50 px-2 py-1 rounded-lg">
                Businesses
              </span>{' '}
              Choose Us
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-slate-600 text-lg">
              Why businesses choose our professional website development
              services.
            </p>

            {/* Cards - All #FF6600 variants */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <FeatureCard
                icon={<Paintbrush />}
                title="100% Custom Design"
                text="No templates. No themes. Every website is designed from scratch specifically for your brand — that's our promise."
                iconBg="bg-orange-50"
                iconColor="text-[#FF6600]"
              />

              <FeatureCard
                icon={<Trophy />}
                title="15+ Years Experience"
                text="Since 2009, we have delivered 7,000+ successful projects. Our proven expertise means your project is in experienced hands."
                iconBg="bg-orange-50"
                iconColor="text-[#FF6600]"
              />

              <FeatureCard
                icon={<Wallet />}
                title="₹0 Advance Payment"
                text="Pay nothing upfront. We build first, you pay only after you're 100% satisfied with the result."
                iconBg="bg-orange-50"
                iconColor="text-[#FF6600]"
              />

              <FeatureCard
                icon={<FastForward />}
                title="1.2 Second Load Speed"
                text="Fast websites convert better. Every site we build loads in under 1.2 seconds — lower bounce rates, higher engagement."
                iconBg="bg-orange-50"
                iconColor="text-[#FF6600]"
              />
            </div>
          </div>
        </section>

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