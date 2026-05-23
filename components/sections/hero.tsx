'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ArrowUpRight, ArrowDown, Sparkles, Play } from 'lucide-react';

const logos = [
  'TECH INNOVATORS',
  'LUXURY COLLECTIVE',
  'FORTUNE 500',
  'SERIES B STARTUPS',
  'GLOBAL BRANDS',
  'CHALLENGER LABS',
];

export const Hero = () => {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion && titleRef.current) {
      const lines = titleRef.current.querySelectorAll('[data-line]');
      gsap.fromTo(
        lines,
        { opacity: 0, y: 24, filter: 'blur(8px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.1,
          stagger: 0.12,
          ease: 'power3.out',
          delay: 0.15,
        }
      );
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] pt-32 pb-24"
    >
      {/* Background — grid */}
      <div className="absolute inset-0 bg-grid mask-radial-top opacity-70" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      {/* Aurora glows */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[#ff6a00]/[0.08] blur-[120px] animate-aurora" />
      <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-[#ff3d00]/[0.06] blur-[100px] animate-aurora" style={{ animationDelay: '-5s' }} />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[#ff6a00]/[0.05] blur-[120px] animate-aurora" style={{ animationDelay: '-9s' }} />

      {/* Top edge fade */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />

      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#ff6a00] opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#ff6a00]" />
            </span>
            <span className="text-[12px] tracking-[0.18em] uppercase text-white/70 font-medium">
              Strategic Branding · 2026
            </span>
          </motion.div>

          {/* Title */}
          <div ref={titleRef} className="mb-8 max-w-5xl">
            <h1 className="text-[clamp(2.75rem,8.5vw,7rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-white">
              <span data-line className="block">
                Perception
              </span>
              <span data-line className="block">
                shapes{' '}
                <span className="font-serif italic text-gradient-orange tracking-tight">
                  power
                </span>
                .
              </span>
            </h1>
          </div>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-base sm:text-lg text-white/55 max-w-xl leading-relaxed mb-10"
          >
            We are not a marketing agency. We are a strategic branding firm that
            engineers perception through psychology, positioning and narrative
            with surgical precision.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 items-center mb-20"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-black bg-white rounded-full overflow-hidden transition-all duration-300 hover:bg-[#ff6a00]"
            >
              <span className="relative z-10">Book a strategy call</span>
              <ArrowUpRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
            </a>
            <a
              href="#process"
              className="group inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-white/80 hover:text-white border border-white/10 hover:border-white/30 rounded-full transition-all duration-300"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              View our process
            </a>
          </motion.div>

          {/* Metric strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="w-full max-w-3xl grid grid-cols-3 divide-x divide-white/[0.06] border-y border-white/[0.06]"
          >
            {[
              { value: '120+', label: 'Brands repositioned' },
              { value: '4.2×', label: 'Avg. perceived value lift' },
              { value: '11', label: 'Industries served' },
            ].map((m) => (
              <div key={m.label} className="px-4 py-6 text-center">
                <div className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                  {m.value}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.16em] text-white/40">
                  {m.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="relative mt-20 overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
          <div className="flex gap-16 animate-marquee whitespace-nowrap">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-[11px] tracking-[0.22em] text-white/30 font-medium"
              >
                <Sparkles className="w-3 h-3" />
                {logo}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/30 hover:text-white/70 transition-colors group"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-3.5 h-3.5" />
        </motion.div>
      </motion.a>
    </section>
  );
};
