'use client';

import { motion } from 'framer-motion';
import { Target, Brain, Crown, ArrowRight } from 'lucide-react';

const points = [
  {
    icon: Target,
    eyebrow: '01 — Positioning',
    title: 'Strategic positioning, not branding',
    description:
      "We don't build logos. We engineer market perceptions that drive multiples on enterprise value.",
  },
  {
    icon: Brain,
    eyebrow: '02 — Psychology',
    title: 'Behavioral science at the core',
    description:
      'Every decision is grounded in psychology, behavioral economics and live market intelligence.',
  },
  {
    icon: Crown,
    eyebrow: '03 — Founders',
    title: 'Built around the founder',
    description:
      'Personal authority compounds company brand. We shape both as one strategic asset.',
  },
];

export const About = () => {
  return (
    <section
      id="about"
      className="relative py-32 sm:py-40 bg-[#050505] px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-24 mb-20 lg:mb-28"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-[#ff6a00] mb-6">
              <span className="w-6 h-px bg-[#ff6a00]" />
              About
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] leading-[1.02] text-white">
              We don't follow <br />
              <span className="font-serif italic text-white/60">trends</span> —{' '}
              <br className="hidden sm:block" />
              we create them.
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-6">
            <p className="text-lg sm:text-xl text-white/65 leading-relaxed max-w-xl">
              Our approach pairs data-driven strategy with psychological insight
              to build brands that command attention, loyalty and pricing power
              in the markets that matter.
            </p>
            <a
              href="#services"
              className="group inline-flex items-center gap-2 text-sm text-white/70 hover:text-[#ff6a00] transition-colors w-fit"
            >
              See how we work
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
          {points.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                viewport={{ once: true, amount: 0.3 }}
                className="group relative bg-[#070707] p-8 sm:p-10 hover:bg-[#0a0a0a] transition-colors duration-500 overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#ff6a00]/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="flex items-start justify-between mb-10">
                    <div className="w-11 h-11 rounded-xl border border-white/10 bg-white/[0.02] flex items-center justify-center text-white/80 group-hover:border-[#ff6a00]/40 group-hover:text-[#ff6a00] transition-all duration-500">
                      <Icon className="w-[18px] h-[18px]" strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] tracking-[0.22em] uppercase text-white/30 font-mono">
                      {point.eyebrow}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-medium tracking-[-0.02em] leading-snug mb-4 text-white">
                    {point.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/55 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
