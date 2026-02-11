'use client';

import {
  Building2,
  ShoppingCart,
  Globe,
  Code2,
  LayoutTemplate,
  RefreshCcw,
} from 'lucide-react';

export default function WebsiteDeve() {
  return (
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
          Services <span className="text-[#FF6600]">That Deliver Results</span>
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
  );
}

/* ---------- INLINE Card ---------- */

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
