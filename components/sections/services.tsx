'use client';

import { motion } from 'framer-motion';
import {
  Crosshair,
  Layers,
  BookOpen,
  Radar,
  Gem,
  UserStar,
  ArrowUpRight,
} from 'lucide-react';

const services = [
  {
    title: 'Brand Positioning',
    description:
      'Define an undefendable market position through strategic clarity and competitive differentiation.',
    icon: Crosshair,
    tag: 'Strategy',
  },
  {
    title: 'Identity Systems',
    description:
      'Cohesive visual and verbal identity built to communicate positioning with precision and impact.',
    icon: Layers,
    tag: 'Design',
  },
  {
    title: 'Strategic Storytelling',
    description:
      'Narratives that resonate with the right audiences and convert attention into commercial loyalty.',
    icon: BookOpen,
    tag: 'Narrative',
  },
  {
    title: 'Market Perception',
    description:
      'Engineered perception through PR, thought leadership and surgical strategic communications.',
    icon: Radar,
    tag: 'Influence',
  },
  {
    title: 'Luxury Brand Strategy',
    description:
      'Premium positioning that justifies price elasticity and attracts high-value customers.',
    icon: Gem,
    tag: 'Premium',
  },
  {
    title: 'Founder Branding',
    description:
      'Position the founder as the unquestionable authority in their market and category.',
    icon: UserStar,
    tag: 'Authority',
  },
];

export const Services = () => {
  return (
    <section
      id="services"
      className="relative py-32 sm:py-40 bg-[#050505] px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-[#ff6a00] mb-6">
              <span className="w-6 h-px bg-[#ff6a00]" />
              Services
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] leading-[1.02] text-white max-w-3xl">
              Strategic <span className="font-serif italic text-white/60">services</span> for brands
              that refuse to be ignored.
            </h2>
          </div>
          <p className="text-base text-white/55 leading-relaxed max-w-sm">
            Six disciplines. One outcome — brands that command attention,
            premium pricing, and category dominance.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.a
                key={i}
                href="#contact"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                viewport={{ once: true, amount: 0.3 }}
                className="group relative bg-[#070707] p-8 sm:p-10 hover:bg-[#0a0a0a] transition-colors duration-500 overflow-hidden block"
              >
                <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#ff6a00]/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex flex-col h-full">
                  <div className="flex items-start justify-between mb-12">
                    <div className="w-11 h-11 rounded-xl border border-white/10 bg-white/[0.02] flex items-center justify-center text-white/80 group-hover:border-[#ff6a00]/40 group-hover:text-[#ff6a00] group-hover:rotate-[-6deg] transition-all duration-500">
                      <Icon className="w-[18px] h-[18px]" strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] tracking-[0.22em] uppercase text-white/35 font-mono">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-medium tracking-[-0.02em] mb-3 text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/55 leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>

                  <div className="inline-flex items-center gap-1.5 text-[12px] text-white/40 group-hover:text-[#ff6a00] transition-colors duration-300 w-fit">
                    <span>Explore</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-45" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
