'use client';

import { motion } from 'framer-motion';
import { Twitter, Linkedin, Instagram, Mail, MapPin, ArrowUpRight } from 'lucide-react';

const links = {
  company: [
    { label: 'About', href: '#about' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Process', href: '#process' },
    { label: 'Careers', href: '#' },
  ],
  resources: [
    { label: 'Case Studies', href: '#' },
    { label: 'Journal', href: '#' },
    { label: 'Research', href: '#' },
    { label: 'Newsletter', href: '#' },
  ],
  legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Cookies', href: '#' },
  ],
};

const socials = [
  { Icon: Twitter, href: '#', label: 'Twitter' },
  { Icon: Linkedin, href: '#', label: 'LinkedIn' },
  { Icon: Instagram, href: '#', label: 'Instagram' },
];

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-[#050505] border-t border-white/[0.06] px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#ff6a00]/[0.06] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Top — wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16 sm:py-20 border-b border-white/[0.06]"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-9 h-9 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-md bg-linear-to-br from-[#ff6a00] to-[#ff3d00]" />
                  <div className="absolute inset-[4px] rounded-sm bg-[#050505]" />
                  <div className="relative w-2 h-2 rounded-full bg-[#ff6a00] shadow-[0_0_12px_#ff6a00]" />
                </div>
                <span className="text-xl font-semibold tracking-tight text-white">
                  Percepto<span className="text-[#ff6a00]">.</span>
                </span>
              </div>
              <h3 className="text-3xl sm:text-5xl font-semibold tracking-[-0.035em] leading-[1.05] text-white max-w-2xl">
                Let's reshape <br />
                how the world{' '}
                <span className="font-serif italic text-white/60">sees you.</span>
              </h3>
            </div>
            <a
              href="mailto:hello@percepto.com"
              className="group inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-black bg-white hover:bg-[#ff6a00] rounded-full transition-all duration-300 w-fit"
            >
              hello@percepto.com
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
            </a>
          </div>
        </motion.div>

        {/* Middle — link columns */}
        <div className="py-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 max-w-sm"
          >
            <p className="text-sm text-white/50 leading-relaxed">
              Strategic branding that shapes perception and builds market power
              through psychology, positioning, and strategic clarity.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 inline-flex items-center justify-center rounded-full border border-white/10 text-white/60 hover:text-[#ff6a00] hover:border-[#ff6a00]/40 transition-all duration-300"
                >
                  <Icon className="w-3.5 h-3.5" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </motion.div>

          {[
            { title: 'Company', items: links.company },
            { title: 'Resources', items: links.resources },
            { title: 'Contact', items: null },
          ].map((col, i) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 + i * 0.05 }}
              viewport={{ once: true }}
            >
              <h4 className="text-[11px] tracking-[0.22em] uppercase text-white/35 font-medium mb-5">
                {col.title}
              </h4>
              {col.items ? (
                <ul className="space-y-3">
                  {col.items.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="group inline-flex items-center gap-1 text-sm text-white/65 hover:text-[#ff6a00] transition-colors"
                      >
                        {link.label}
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="space-y-3 text-sm text-white/65">
                  <li className="flex items-start gap-2">
                    <Mail className="w-3.5 h-3.5 mt-1 text-[#ff6a00]" />
                    <a href="mailto:hello@percepto.com" className="hover:text-[#ff6a00] transition-colors">
                      hello@percepto.com
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 mt-1 text-[#ff6a00]" />
                    <span>New York · London</span>
                  </li>
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        {/* Wordmark display */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative py-10 overflow-hidden select-none"
        >
          <div className="text-[18vw] sm:text-[15vw] font-semibold leading-none tracking-[-0.06em] text-center text-gradient mask-fade-b">
            Percepto
          </div>
        </motion.div>

        {/* Bottom */}
        <div className="py-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © {year} Percepto. All rights reserved.
          </p>
          <div className="flex gap-6">
            {links.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-white/40 hover:text-[#ff6a00] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
