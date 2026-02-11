'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamic imports with NO SSR for problematic components
const Navbar = dynamic(() => import('./components/Navbar'), { ssr: false });
const ITSolutionPage = dynamic(() => import('./components/Hero'), {
  ssr: false,
});
const A2VAgency = dynamic(() => import('./components/Service'), { ssr: false });
const PortfolioSection = dynamic(() => import('./components/Portfolio'), {
  ssr: false,
});
const ContactSection = dynamic(() => import('./components/ContactSection'), {
  ssr: false,
});
const AgencyFooter = dynamic(() => import('./components/Footer'), {
  ssr: false,
});

// Simple Server Components (no animations)
import AboutSection from './about/page';

export default function Home() {
  return (
    <>
      <Navbar />
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            Loading Hero...
          </div>
        }
      >
        <ITSolutionPage />
      </Suspense>

      <AboutSection />

      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center py-20">
            Loading Services...
          </div>
        }
      >
        <A2VAgency />
      </Suspense>

      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            Loading Portfolio...
          </div>
        }
      >
        <PortfolioSection />
      </Suspense>

      <Suspense
        fallback={
          <div className="h-40 bg-gray-900 flex items-center justify-center">
            Loading Contact...
          </div>
        }
      >
        <ContactSection />
      </Suspense>

      <Suspense fallback={<div className="h-32 bg-gray-900" />}>
        <AgencyFooter />
      </Suspense>
    </>
  );
}
