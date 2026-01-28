import AboutSection from "@/components/AboutSection";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Portfolio from "@/components/Portfolio";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    {/* <Navbar /> */}
    <Hero/>
    <AboutSection />
    <Service/>
    <Portfolio/>
    </>
  );
}
