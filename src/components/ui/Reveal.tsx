"use client";

import { PropsWithChildren, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface RevealProps extends PropsWithChildren {
  delay?: number;
  className?: string;
}

export function Reveal({ children, delay = 0, className }: RevealProps) {
  const controls = useAnimationControls();
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.8, delay } });
    }
  }, [controls, delay, inView]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 48 }} animate={controls} className={className}>
      {children}
    </motion.div>
  );
}
