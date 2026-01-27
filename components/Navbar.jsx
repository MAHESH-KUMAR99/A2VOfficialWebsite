"use client";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import logoIcon from "@/public/asstes/A2v Logo.png";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const serviceList = [
  { title: "Digital Strategy", desc: "Crafting digital roadmaps for growth." },
  { title: "Design Services", desc: "User-centric UI/UX and branding." },
  { title: "E-commerce Solutions", desc: "Scalable online stores." },
  { title: "Web Development", desc: "High-performance websites." },
  { title: "Web Application Development", desc: "Custom software solutions." },
  { title: "Technology", desc: "Integrating cutting-edge tech." },
  { title: "Digital Marketing", desc: "Results-driven marketing." },
  { title: "Web Hosting Services", desc: "Secure and fast managed hosting." },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${montserrat.className} sticky top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out px-6 lg:px-12 py-3 flex items-center justify-between ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2 border-b border-gray-100"
          : "bg-white py-5"
      }`}
    >
      {/* 1. Logo Section */}
      <Link
        href="/"
        className="flex flex-col items-center group transition-all"
      >
        <Image
          src={logoIcon}
          alt="A2V Groups Logo"
          width={isScrolled ? 45 : 55}
          height={35}
          quality={100}
          className="object-contain transition-all duration-300"
        />
        <div className="flex flex-col items-center leading-none mt-1">
          <span className="text-[14px] font-extrabold tracking-[0.15em] text-[#000000]">
            A2V <span className="text-[#FF6600]">GROUPS</span>
          </span>
          <div className="h-[2px] w-0 group-hover:w-full bg-[#FF6600] transition-all duration-300 mt-0.5"></div>
        </div>
      </Link>

      {/* 2. Navigation Links */}
      <div className="flex items-center gap-10">
        <ul className="hidden lg:flex items-center gap-8 text-[15px] font-semibold text-[#000000]">
          <li className="hover:text-[#FFA10A] transition-colors cursor-pointer">
            <Link href="/about">About</Link>
          </li>

          {/* Mega Menu Trigger */}
          <li className="group static">
            <button className="flex items-center gap-1 hover:text-[#FFA10A] transition-colors py-4">
              Services
              <svg
                className="w-4 h-4 transition-transform group-hover:rotate-180"
                fill="none"
                stroke="#FF6600"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* 3. WHITE THEME MEGA MENU */}
            <div className="absolute left-0 right-0 top-full bg-white border-t border-gray-100 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out translate-y-2 group-hover:translate-y-0">
              <div className="max-w-7xl mx-auto px-12 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {serviceList.map((service, index) => (
                  <Link
                    key={index}
                    href={`/services/${service.title.toLowerCase().replace(/ /g, "-")}`}
                    className="group/item flex flex-col gap-2 p-4 rounded-xl hover:bg-[#FFA10A]/5 transition-all border border-transparent hover:border-[#FF6600]/10"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] text-[#FFA10A] font-bold tracking-widest uppercase">
                        0{index + 1}
                      </span>
                      <svg
                        className="w-4 h-4 text-[#FF6600] opacity-0 group-hover/item:opacity-100 transition-all transform -rotate-45"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                    <h4 className="text-[16px] text-[#000000] font-bold group-hover/item:text-[#FF6600]">
                      {service.title}
                    </h4>
                    <p className="text-[13px] text-gray-500 leading-relaxed">
                      {service.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </li>

          <li className="hover:text-[#FFA10A] transition-colors cursor-pointer">
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li className="hover:text-[#FFA10A] transition-colors cursor-pointer">
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>

        {/* 4. Action Button - Main Orange with Mango Hover */}
        <Link
          href="/get-in-touch"
          className="bg-[#FF6600] text-white px-8 py-3 rounded-full text-[13px] font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:bg-[#FFA10A] hover:scale-105 active:scale-95"
        >
          Get In Touch
        </Link>
      </div>
    </nav>
  );
}
