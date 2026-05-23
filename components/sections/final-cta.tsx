'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Sparkles } from 'lucide-react';

export const FinalCTA = () => {
  return (
    <section
      id="contact"
      className="relative py-32 sm:py-48 bg-[#050505] px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid mask-radial opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#ff6a00]/[0.12] blur-[140px] animate-aurora" />
      <div className="absolute inset-0 bg-noise pointer-events-none opacity-50" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.4 }}
          className="inline-flex items-center gap-2 mb-10 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm"
        >
          <Sparkles className="w-3 h-3 text-[#ff6a00]" />
          <span className="text-[12px] tracking-[0.18em] uppercase text-white/70 font-medium">
            Taking 4 engagements for Q3 2026
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-5xl sm:text-7xl lg:text-[8rem] font-semibold leading-[0.95] tracking-[-0.045em] text-white mb-6">
            Your brand isn't <br />
            what you{' '}
            <span className="font-serif italic text-white/55">sell.</span>
          </h2>
          <p className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.03em] text-gradient-orange mb-10">
            It's what people remember.
          </p>
          <p className="text-base sm:text-lg text-white/55 max-w-2xl mx-auto mb-14 leading-relaxed">
            Let us help you build that memory — through strategic clarity, psychological insight and relentless positioning excellence.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <a
            href="#"
            className="group relative inline-flex items-center gap-2 px-7 py-4 text-sm font-medium text-black bg-white rounded-full overflow-hidden transition-all duration-300 hover:bg-[#ff6a00] glow-orange-soft"
          >
            <span className="relative z-10">Start building perception</span>
            <ArrowUpRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
          </a>
          <a
            href="#"
            className="group inline-flex items-center gap-2 px-7 py-4 text-sm font-medium text-white/80 hover:text-white border border-white/10 hover:border-white/30 rounded-full transition-all duration-300"
          >
            <Calendar className="w-4 h-4" />
            Schedule a call
          </a>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-24 pt-12 border-t border-white/[0.06]"
        >
          <p className="text-[10px] tracking-[0.28em] uppercase text-white/35 mb-8">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 text-white/40 text-sm">
            {['Tech Innovators', 'Luxury Collective', 'Fortune 500', 'Series B Studio', 'Global Brands'].map((name, i, arr) => (
              <span key={name} className="flex items-center gap-10">
                <span className="font-medium tracking-tight">{name}</span>
                {i < arr.length - 1 && <span className="w-1 h-1 rounded-full bg-white/15 hidden sm:block" />}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
