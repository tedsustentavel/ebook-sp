"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypewriterTextProps {
  phrases: string[];
  typingSpeed?: number;
  pause?: number;
  className?: string;
}

export function TypewriterText({
  phrases,
  typingSpeed = 80,
  pause = 2000,
  className,
}: TypewriterTextProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedText === currentPhrase) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && displayedText === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }, typingSpeed);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText((prev) =>
          isDeleting ? currentPhrase.slice(0, prev.length - 1) : currentPhrase.slice(0, prev.length + 1)
        );
      }, isDeleting ? typingSpeed / 2 : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [phrases, currentPhraseIndex, displayedText, isDeleting, typingSpeed, pause]);

  return (
    <motion.span
      key={currentPhraseIndex}
      className={className}
      animate={{ opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      {displayedText}
      <span className="animate-pulse">|</span>
    </motion.span>
  );
}
