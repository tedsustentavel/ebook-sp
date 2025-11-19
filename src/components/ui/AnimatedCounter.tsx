"use client";

import { useEffect, useMemo, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
  formatter?: (value: number) => string;
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  decimals = 0,
  className,
  formatter,
}: AnimatedCounterProps) {
  const [display, setDisplay] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (!inView) return;

    let frame = 0;
    const totalFrames = Math.round(duration * 60);

    const animate = () => {
      frame += 1;
      const progress = Math.min(frame / totalFrames, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(parseFloat((value * eased).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(animate);
    };

    animate();
  }, [value, duration, decimals, inView]);

  const formattedValue = useMemo(() => {
    if (formatter) {
      return formatter(display);
    }

    return display.toLocaleString("pt-BR", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  }, [display, formatter, decimals]);

  return (
    <motion.div ref={ref} className={className} initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
      {prefix}
      {formattedValue}
      {suffix}
    </motion.div>
  );
}
