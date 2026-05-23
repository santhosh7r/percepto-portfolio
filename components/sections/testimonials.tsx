'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      "Percepto didn't just rebrand us — they repositioned us as the market leader. Industry perception fundamentally changed within a quarter.",
    author: 'Sarah Chen',
    title: 'CEO',
    company: 'Tech Innovators · Series B',
    initial: 'SC',
  },
  {
    quote:
      'The psychological insights they brought to our positioning were game-changing. We went from commodity to premium in a matter of months.',
    author: 'Michael Roberts',
    title: 'Founder & Chairman',
    company: 'Luxury Goods Brand',
    initial: 'MR',
  },
  {
    quote:
      'What makes Percepto different is they understand brand as a strategic asset — not a creative exercise. The lift in pricing power was immediate.',
    author: 'Jessica Wu',
    title: 'CMO',
    company: 'Fortune 500 Enterprise',
    initial: 'JW',
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative py-32 sm:py-40 bg-[#050505] px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/8 to-transparent" />

      <div className="relative max-w-7xl mx-auto">
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
              Testimonials
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] leading-[1.02] text-white max-w-3xl">
              Results speak{' '}
              <span className="font-serif italic text-white/60">louder</span> than claims.
            </h2>
          </div>
          <div className="flex items-center gap-3 text-white/60">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#ff6a00] text-[#ff6a00]" />
              ))}
            </div>
            <span className="text-sm">4.9 · 120+ engagements</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="group relative"
            >
              <div className="relative h-full p-px rounded-2xl bg-linear-to-b from-white/8 to-white/2 hover:from-[#ff6a00]/30 transition-all duration-500">
                <div className="relative h-full p-8 sm:p-10 rounded-2xl bg-[#0a0a0a] flex flex-col overflow-hidden">
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-white/[0.04] group-hover:text-[#ff6a00]/15 transition-colors duration-500" strokeWidth={1.5} />

                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 fill-[#ff6a00] text-[#ff6a00]" />
                    ))}
                  </div>

                  <p className="text-base sm:text-lg leading-relaxed text-white/80 mb-8 flex-grow">
                    "{t.quote}"
                  </p>

                  <div className="flex items-center gap-4 pt-6 border-t border-white/[0.06]">
                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#ff6a00]/30 to-[#ff3d00]/10 border border-[#ff6a00]/30 flex items-center justify-center text-[12px] font-medium text-[#ff6a00]">
                      {t.initial}
                    </div>
                    <div>
                      <p className="font-medium text-white text-sm">{t.author}</p>
                      <p className="text-xs text-white/45">{t.title}</p>
                      <p className="text-[11px] text-[#ff6a00]/70 mt-0.5">{t.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
