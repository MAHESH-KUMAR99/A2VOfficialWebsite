'use client';

import { Clock, Eye, Zap, Award, Play } from 'lucide-react';

export default function WhyWebsiteMatters() {
  return (
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
          <span className="text-orange-500">Website <br/>    Development</span> Matters
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
  );
}

/* ---------- INLINE Helpers (same file) ---------- */

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
