"use client";

import { PropsWithChildren } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxSceneProps extends PropsWithChildren {
  intensity?: number;
  className?: string;
}

export function ParallaxScene({ children, intensity = 60, className }: ParallaxSceneProps) {
  const { scrollY } = useScroll();
  const translateY = useTransform(scrollY, [0, 600], [0, intensity]);
  const rotate = useTransform(scrollY, [0, 600], [0, intensity / 5]);

  return (
    <motion.div style={{ y: translateY, rotate }} className={className}>
      {children}
    </motion.div>
  );
}
