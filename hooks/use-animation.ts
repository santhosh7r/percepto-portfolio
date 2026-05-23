import { useEffect, useRef } from 'react';
import { scrollReveal, staggerFadeIn, magneticHover } from '@/lib/animation-utils';

export const useScrollReveal = (options?: {
  delay?: number;
  duration?: number;
  ease?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      scrollReveal(ref.current, options);
    }
  }, [options]);

  return ref;
};

export const useStaggerFadeIn = (itemCount: number) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      const items = containerRef.current.querySelectorAll('[data-stagger]');
      staggerFadeIn(items, 0.1);
    }
  }, [itemCount]);

  return containerRef;
};

export const useMagneticHover = () => {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      magneticHover(ref.current);
    }
  }, []);

  return ref;
};
