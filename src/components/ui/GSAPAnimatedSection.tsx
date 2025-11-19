"use client";

import { ReactNode, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface GSAPAnimatedSectionProps {
  children: ReactNode;
  animation?: "fadeInUp" | "fadeInScale" | "slideInLeft" | "slideInRight" | "rotateIn" | "custom";
  className?: string;
  id?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  customAnimation?: gsap.TweenVars;
  scrollTriggerOptions?: ScrollTrigger.Vars;
  stagger?: number;
  once?: boolean;
}

export function GSAPAnimatedSection({
  children,
  animation = "fadeInUp",
  className = "",
  id,
  delay = 0,
  duration = 1,
  ease = "power3.out",
  customAnimation,
  scrollTriggerOptions,
  stagger,
  once = true,
}: GSAPAnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const animations: Record<string, gsap.TweenVars> = {
      fadeInUp: {
        opacity: 0,
        y: 50,
      },
      fadeInScale: {
        opacity: 0,
        scale: 0.8,
      },
      slideInLeft: {
        opacity: 0,
        x: -100,
      },
      slideInRight: {
        opacity: 0,
        x: 100,
      },
      rotateIn: {
        opacity: 0,
        rotation: -10,
        scale: 0.9,
      },
      custom: customAnimation || {},
    };

    const selectedAnimation = animations[animation];
    
    const scrollTrigger = {
      trigger: sectionRef.current,
      start: "top 85%",
      toggleActions: once ? "play none none none" : "play reverse play reverse",
      ...scrollTriggerOptions,
    };

    const ctx = gsap.context(() => {
      if (stagger && sectionRef.current?.children) {
        // Animate children with stagger
        gsap.from(sectionRef.current.children, {
          ...selectedAnimation,
          duration,
          ease,
          delay,
          stagger,
          scrollTrigger,
        });
      } else {
        // Animate the section itself
        gsap.from(sectionRef.current, {
          ...selectedAnimation,
          duration,
          ease,
          delay,
          scrollTrigger,
        });
      }
    });

    return () => ctx.revert();
  }, [animation, delay, duration, ease, customAnimation, scrollTriggerOptions, stagger, once]);

  return (
    <div ref={sectionRef} className={className} id={id}>
      {children}
    </div>
  );
}
