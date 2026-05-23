'use client';

import { motion } from 'framer-motion';
import {
  Microscope,
  BrainCircuit,
  Crosshair,
  Palette,
  Megaphone,
  ArrowUpRight,
} from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Research',
    icon: Microscope,
    description:
      'Deep market analysis, competitor intelligence and customer psychology mapping.',
    duration: 'Week 01 – 02',
  },
  {
    number: '02',
    title: 'Psychology Mapping',
    icon: BrainCircuit,
    description:
      'Surface the psychological triggers driving customer decisions and brand loyalty.',
    duration: 'Week 02 – 04',
  },
  {
    number: '03',
    title: 'Positioning Strategy',
    icon: Crosshair,
    description:
      'Develop undefendable positioning grounded in insight and market opportunity.',
    duration: 'Week 04 – 06',
  },
  {
    number: '04',
    title: 'Identity Direction',
    icon: Palette,
    description:
      'Visual and verbal identity systems that communicate the position with precision.',
    duration: 'Week 06 – 09',
  },
  {
    number: '05',
    title: 'Market Influence',
    icon: Megaphone,
    description:
      'Launch and amplify through strategic communications, PR and ongoing market presence.',
    duration: 'Week 09 – 12+',
  },
];

export const Process = () => {
  return (
    <section
      id="process"
      className="relative py-32 sm:py-40 bg-[#050505] px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-small mask-radial opacity-40" />

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
            Process
            <span className="w-6 h-px bg-[#ff6a00]" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] leading-[1.02] text-white">
            A proven{' '}
            <span className="font-serif italic text-white/60">five-step</span>{' '}
            methodology.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-white/55 leading-relaxed">
            Twelve weeks. Five disciplines. One repositioned brand.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[27px] sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

          <div className="space-y-12 sm:space-y-20">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: i * 0.05 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="relative flex sm:items-center gap-6 sm:gap-12"
                >
                  {/* Mobile: icon dot on left, card on right. Desktop: alternating sides. */}
                  <div className="sm:hidden flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl border border-white/10 bg-[#0a0a0a] flex items-center justify-center text-[#ff6a00] relative z-10">
                      <Icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Desktop left card */}
                  <div className={`hidden sm:flex sm:w-1/2 ${isLeft ? 'sm:justify-end sm:pr-12' : 'sm:order-3 sm:pl-12'}`}>
                    {isLeft && <StepCard step={step} />}
                    {!isLeft && <StepCard step={step} />}
                  </div>

                  {/* Center icon (desktop) */}
                  <div className="hidden sm:flex sm:w-px sm:justify-center sm:order-2 relative">
                    <div className="absolute -translate-x-1/2 left-1/2 z-10 w-14 h-14 rounded-2xl border border-white/10 bg-[#0a0a0a] flex items-center justify-center text-[#ff6a00] shadow-[0_0_0_6px_#050505]">
                      <Icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Other half spacer */}
                  <div className={`hidden sm:block sm:w-1/2 ${isLeft ? 'sm:order-3' : ''}`} />

                  {/* Mobile card */}
                  <div className="sm:hidden flex-1">
                    <StepCard step={step} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-24 flex flex-col items-center gap-5"
        >
          <p className="text-sm text-white/50">Ready to transform your brand?</p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-black bg-[#ff6a00] hover:bg-white rounded-full transition-all duration-300"
          >
            Start your engagement
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const StepCard = ({ step }: { step: (typeof steps)[number] }) => (
  <div className="group relative p-7 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#0a0a0a]/80 backdrop-blur-sm hover:border-[#ff6a00]/30 transition-all duration-500 w-full sm:max-w-md overflow-hidden">
    <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#ff6a00]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative">
      <div className="flex items-center gap-3 mb-5">
        <span className="text-[10px] tracking-[0.22em] uppercase text-[#ff6a00] font-mono">
          / {step.number}
        </span>
        <span className="text-[10px] tracking-[0.22em] uppercase text-white/30 font-mono">
          {step.duration}
        </span>
      </div>
      <h3 className="text-2xl font-medium tracking-[-0.02em] mb-3 text-white">
        {step.title}
      </h3>
      <p className="text-sm text-white/55 leading-relaxed">{step.description}</p>
    </div>
  </div>
);
