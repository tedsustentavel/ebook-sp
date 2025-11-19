"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface GSAPAnimationOptions {
  animation?: gsap.TweenVars;
  scrollTrigger?: ScrollTrigger.Vars;
  delay?: number;
  duration?: number;
  ease?: string;
}

export const useGSAPAnimation = <T extends HTMLElement = HTMLElement>(
  options?: GSAPAnimationOptions
) => {
  const elementRef = useRef<T>(null);
  const animationRef = useRef<gsap.core.Tween | gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    if (!elementRef.current) return;

    const defaultAnimation = {
      opacity: 0,
      y: 50,
      duration: options?.duration || 1,
      ease: options?.ease || "power3.out",
      delay: options?.delay || 0,
      ...options?.animation,
    };

    const scrollTriggerConfig = options?.scrollTrigger
      ? {
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            ...options.scrollTrigger,
          },
        }
      : {};

    animationRef.current = gsap.from(elementRef.current, {
      ...defaultAnimation,
      ...scrollTriggerConfig,
    });

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [options]);

  return elementRef;
};

// Preset animations
export const fadeInUp = (): GSAPAnimationOptions => ({
  animation: {
    opacity: 0,
    y: 30,
    duration: 0.8,
  },
  scrollTrigger: {
    start: "top 85%",
  },
});

export const fadeInScale = (): GSAPAnimationOptions => ({
  animation: {
    opacity: 0,
    scale: 0.9,
    duration: 0.8,
  },
  scrollTrigger: {
    start: "top 85%",
  },
});

export const slideInLeft = (): GSAPAnimationOptions => ({
  animation: {
    opacity: 0,
    x: -100,
    duration: 1,
  },
  scrollTrigger: {
    start: "top 85%",
  },
});

export const slideInRight = (): GSAPAnimationOptions => ({
  animation: {
    opacity: 0,
    x: 100,
    duration: 1,
  },
  scrollTrigger: {
    start: "top 85%",
  },
});

export const staggerChildren = (
  parent: string,
  children: string,
  staggerAmount: number = 0.1
): GSAPAnimationOptions => ({
  animation: {
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: staggerAmount,
  },
  scrollTrigger: {
    trigger: parent,
    start: "top 85%",
  },
});
