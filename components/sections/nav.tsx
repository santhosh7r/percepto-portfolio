'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 inset-x-0 z-50 flex justify-center pointer-events-none"
      >
        <div
          className={`pointer-events-auto mt-4 w-[min(96%,1120px)] transition-all duration-500 ${
            scrolled
              ? 'bg-black/60 backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]'
              : 'bg-transparent border border-transparent'
          } rounded-full`}
        >
          <div className="flex items-center justify-between px-5 sm:px-6 py-3">
            <a href="#" className="group flex items-center gap-2.5">
              <div className="relative w-7 h-7 flex items-center justify-center">
                <div className="absolute inset-0 rounded-md bg-gradient-to-br from-[#ff6a00] to-[#ff3d00]" />
                <div className="absolute inset-[3px] rounded-sm bg-black" />
                <div className="relative w-1.5 h-1.5 rounded-full bg-[#ff6a00] shadow-[0_0_12px_#ff6a00] animate-glow-pulse" />
              </div>
              <span className="text-[15px] font-semibold tracking-tight text-white">
                Percepto<span className="text-[#ff6a00]">.</span>
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-3 py-1.5 text-[13px] text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="#contact"
                className="group hidden sm:inline-flex items-center gap-1.5 pl-4 pr-3 py-1.5 text-[13px] font-medium text-black bg-white hover:bg-[#ff6a00] hover:text-black rounded-full transition-all duration-300"
              >
                Book a call
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-45" />
              </a>
              <button
                aria-label="Open menu"
                onClick={() => setOpen((v) => !v)}
                className="md:hidden w-9 h-9 inline-flex items-center justify-center rounded-full border border-white/10 text-white/80 hover:text-white"
              >
                {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden bg-black/90 backdrop-blur-2xl"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center justify-center h-full gap-6 px-8"
            >
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="text-3xl font-medium tracking-tight text-white/80 hover:text-[#ff6a00] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-4 inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-black bg-[#ff6a00] rounded-full"
              >
                Book a call <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
