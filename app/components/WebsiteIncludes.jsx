'use client';

import {
  Palette,
  Zap,
  Smartphone,
  Search,
  ShieldCheck,
  Headset,
} from 'lucide-react';

export default function WebsiteIncludes() {
  return (
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
          <FeatureCard
            icon={<Palette />}
            title="100% Custom Design"
            text="Every website designed from scratch for your brand. No templates — completely unique. We study competitors and make you stand out."
            bg="bg-blue-50"
            iconBg="bg-blue-500"
          />

          <FeatureCard
            icon={<Zap />}
            title="Under 1.2s Load Speed"
            text="Guaranteed fast loading with image optimization, minified code, lazy loading and CDN. Faster sites rank higher on Google."
            bg="bg-green-50"
            iconBg="bg-green-500"
          />

          <FeatureCard
            icon={<Smartphone />}
            title="Mobile Responsive"
            text="70%+ traffic is mobile. Perfect display on all devices — phones, tablets, laptops and desktops. Tested on real devices."
            bg="bg-purple-50"
            iconBg="bg-purple-500"
          />

          <FeatureCard
            icon={<Search />}
            title="SEO Foundation"
            text="Complete on-page SEO: meta tags, schema markup, XML sitemap, robots.txt and Google Analytics. Rank from day one."
            bg="bg-orange-50"
            iconBg="bg-orange-500"
          />

          <FeatureCard
            icon={<ShieldCheck />}
            title="SSL & Security"
            text="Free SSL certificate, secure coding and vulnerability protection. Visitors see the padlock icon in their browser."
            bg="bg-cyan-50"
            iconBg="bg-cyan-500"
          />

          <FeatureCard
            icon={<Headset />}
            title="Lifetime Support"
            text="We don’t disappear after delivery. Lifetime support, free updates and dedicated assistance. Just one WhatsApp away."
            bg="bg-pink-50"
            iconBg="bg-pink-500"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- Card ---------- */

const FeatureCard = ({ icon, title, text, bg, iconBg }) => {
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
