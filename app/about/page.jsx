import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="relative min-h-screen w-full bg-white flex items-center justify-center p-6 md:p-20 overflow-hidden">
      {/* --- NAYE LEFT SIDE ELEMENTS --- */}
      {/* Bada Gradient Semi-Circle (Left Edge) */}
      <div className="absolute left-[-150px] top-[20%] w-[300px] h-[600px] bg-gradient-to-b from-[#b14995] via-[#8454d4] to-[#6061e4] rounded-r-full opacity-90 -z-10" />

      {/* Chota Ring/Circle (Left Top) */}
      <div className="absolute left-[5%] top-[10%] w-10 h-10 border-2 border-purple-400 rounded-full flex items-center justify-center -z-10">
        <div className="w-4 h-4 bg-purple-200 rounded-full" />
      </div>
      {/* ------------------------------- */}

      {/* Background Blurry Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-3xl -z-20" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl -z-20" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        {/* Left Content Column */}
        <div className="space-y-8">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">
            About Us
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold text-[#1a134d] leading-tight">
            We’re Think Media <br /> Solutions
          </h1>

          <p className="text-gray-500 text-lg max-w-lg leading-relaxed">
            In Order To Scale New Customer Acquisition And Retention For
            E-Commerce Brands, We Work Across The Entire Customer Journey. Our
            Team Has A Successful Track Record Of Helping Brands Scale.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-10 border-t border-gray-100 pt-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-50 rounded-xl shadow-sm">
                <span className="text-2xl">📱</span>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-800">94%</h3>
                <p className="text-xs uppercase text-gray-400 font-semibold tracking-wider">
                  SMS Marketing
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-red-50 rounded-xl shadow-sm">
                <span className="text-2xl">📢</span>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-800">65%</h3>
                <p className="text-xs uppercase text-gray-400 font-semibold tracking-wider">
                  Cover Marketing
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <button className="flex items-center gap-3 bg-blue-50 text-blue-600 px-8 py-4 rounded-full font-bold group hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
              ABOUT US
              <span className="bg-blue-500 text-white p-1 rounded-full group-hover:bg-white group-hover:text-blue-600 transition-colors">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Right Image Column */}
        <div className="relative flex justify-center items-center">
          <div className="relative z-10 w-full max-w-md aspect-square bg-gradient-to-br from-purple-200 to-indigo-100 rounded-[40%_60%_70%_30%/40%_50%_60%_50%]">
            <div className="absolute inset-0 flex items-center justify-center transform -translate-y-10">
              <img
                src="https://thinkmediasolutions.in/assets/images/resources/about-1-1.png"
                alt="Woman with laptop"
                className="w-[120%] h-auto z-20 drop-shadow-2xl object-contain"
              />
            </div>

            {/* Floating UI Elements */}
            <div className="absolute top-10 left-0 bg-orange-500 text-white px-4 py-1 rounded-full flex items-center gap-2 shadow-lg z-30">
              <span>❤️</span> 999+
            </div>

            <div className="absolute bottom-10 right-0 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 z-30">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
                  >
                    <img
                      src={`https://i.pravatar.cc/100?u=${i}`}
                      alt="user"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <span className="text-sm font-bold text-gray-700">
                1.5k Happy Clients
              </span>
            </div>
          </div>

          {/* Static Decorative Symbols */}
          <div className="absolute top-20 right-10 text-blue-400 text-xl">
            ✦
          </div>
          <div className="absolute bottom-20 left-10 text-purple-400 text-xl">
            ⭐
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
