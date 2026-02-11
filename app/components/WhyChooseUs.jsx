'use client';

import { Paintbrush, Trophy, Wallet, FastForward } from 'lucide-react';

export default function WhyChooseUs() {
  return (
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
          Why businesses choose our professional website development services.
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
  );
}

/* ---------- Updated FeatureCard ---------- */
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
