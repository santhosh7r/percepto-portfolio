'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { Nav } from '@/components/sections/nav';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Philosophy } from '@/components/sections/philosophy';
import { Services } from '@/components/sections/services';
import { Process } from '@/components/sections/process';
import { Testimonials } from '@/components/sections/testimonials';
import { FinalCTA } from '@/components/sections/final-cta';
import { Footer } from '@/components/sections/footer';

export default function Page() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="bg-[#050505] text-white overflow-hidden">
      <Nav />
      <Hero />
      <About />
      <Philosophy />
      <Services />
      <Process />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
