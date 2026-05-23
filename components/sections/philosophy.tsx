'use client';

import { motion } from 'framer-motion';
import { Eye, Compass, BrainCircuit, Quote } from 'lucide-react';

const pillars = [
  {
    number: '01',
    title: 'Perception',
    icon: Eye,
    description:
      'Brand value exists in the customer\'s mind. We engineer the perception that drives preference and pricing power.',
  },
  {
    number: '02',
    title: 'Positioning',
    icon: Compass,
    description:
      'Market position is everything. We identify white space and build undefendable positioning through strategic clarity.',
  },
  {
    number: '03',
    title: 'Psychology',
    icon: BrainCircuit,
    description:
      'Every decision is rooted in human behavior. We apply behavioral science to build brands that resonate deeply.',
  },
];

export const Philosophy = () => {
  return (
    <section
      id="philosophy"
      className="relative py-32 sm:py-40 bg-[#050505] px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dot mask-radial opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#ff6a00]/[0.04] blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-[#ff6a00] mb-6">
            <span className="w-6 h-px bg-[#ff6a00]" />
            Philosophy
            <span className="w-6 h-px bg-[#ff6a00]" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] leading-[1.02] text-white">
            Three pillars,{' '}
            <span className="font-serif italic text-white/60">one discipline.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-white/55 leading-relaxed">
            Every engagement is shaped by the same strategic frame. Each pillar reinforces the others.
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-5">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, amount: 0.3 }}
                className="group relative"
              >
                <div className="relative h-full p-px rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] hover:from-[#ff6a00]/30 hover:to-white/[0.04] transition-all duration-500">
                  <div className="relative h-full p-8 sm:p-10 rounded-2xl bg-[#0a0a0a] overflow-hidden">
                    {/* Number watermark */}
                    <div className="absolute -top-6 -right-2 text-[140px] font-semibold text-white/[0.025] leading-none select-none group-hover:text-[#ff6a00]/10 transition-colors duration-500">
                      {pillar.number}
                    </div>

                    {/* Hover gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ff6a00]/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-lg border border-white/10 bg-white/[0.02] flex items-center justify-center text-[#ff6a00] group-hover:border-[#ff6a00]/40 group-hover:bg-[#ff6a00]/10 transition-all duration-500">
                          <Icon className="w-[18px] h-[18px]" strokeWidth={1.5} />
                        </div>
                        <span className="text-[10px] tracking-[0.22em] uppercase text-white/35 font-mono">
                          / {pillar.number}
                        </span>
                      </div>

                      <h3 className="text-3xl sm:text-4xl font-semibold tracking-[-0.025em] mb-4 text-white">
                        {pillar.title}
                      </h3>
                      <p className="text-sm sm:text-base text-white/55 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="relative p-10 sm:p-14 rounded-2xl border border-white/[0.08] bg-white/[0.015] backdrop-blur-sm">
            <Quote className="absolute -top-4 left-10 w-8 h-8 text-[#ff6a00] bg-[#050505] px-1" strokeWidth={1.5} />
            <p className="text-xl sm:text-2xl lg:text-3xl font-serif italic leading-[1.35] text-white/85 text-balance">
              Your brand is not what you sell. It's what people remember about you — and we build that memory with strategic clarity and psychological precision.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <div className="w-10 h-px bg-[#ff6a00]" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-white/50">
                Percepto Manifesto
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
