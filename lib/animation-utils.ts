import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const fadeInUp = (element: HTMLElement, delay = 0) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay,
      ease: 'power2.out',
    }
  );
};

export const staggerFadeIn = (
  elements: HTMLElement[] | NodeListOf<Element>,
  staggerAmount = 0.1,
  delay = 0
) => {
  gsap.fromTo(
    elements,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay,
      stagger: staggerAmount,
      ease: 'power2.out',
    }
  );
};

export const parallax = (element: HTMLElement, speed = 0.5) => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      scrub: true,
    },
    y: window.innerHeight * speed,
    ease: 'none',
  });
};

export const scrollReveal = (
  element: HTMLElement,
  options?: {
    delay?: number;
    duration?: number;
    ease?: string;
  }
) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: options?.duration ?? 0.8,
      delay: options?.delay ?? 0,
      ease: options?.ease ?? 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 50%',
        scrub: false,
      },
    }
  );
};

export const countUp = (
  element: HTMLElement,
  target: number,
  duration = 2
) => {
  const obj = { value: 0 };
  gsap.to(obj, {
    value: target,
    duration,
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
    },
    onUpdate: () => {
      element.textContent = Math.floor(obj.value).toString();
    },
    ease: 'power1.out',
  });
};

export const glitchText = (element: HTMLElement) => {
  gsap.fromTo(
    element,
    {
      opacity: 0.5,
    },
    {
      opacity: 1,
      duration: 0.1,
      repeat: 3,
      yoyo: true,
    }
  );
};

export const magneticHover = (element: HTMLElement) => {
  element.addEventListener('mousemove', (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(element, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      overwrite: 'auto',
    });
  });

  element.addEventListener('mouseleave', () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.4,
      overwrite: 'auto',
    });
  });
};

export const setupScrollTrigger = () => {
  ScrollTrigger.refresh();
};

export const killScrollTriggers = () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
};
