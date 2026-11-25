"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

export interface RotatingWordProps {
  words: readonly string[];
  intervalMs?: number;
  suffix?: string;
  wordClassName?: string;
}

/**
 * Cycles through a list of words at a fixed interval with a vertical reveal,
 * falling back to an instant swap when reduced motion is preferred.
 */
export function RotatingWord({
  words,
  intervalMs = 3000,
  suffix = "",
  wordClassName,
}: RotatingWordProps) {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (words.length <= 1) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [words.length, intervalMs]);

  const activeWord = words[index] ?? "";

  return (
    <span className="rotating-word-clip">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={activeWord}
          className="rotating-word"
          initial={prefersReducedMotion ? false : { opacity: 0, y: "0.35em" }}
          animate={{ opacity: 1, y: 0 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: "-0.35em" }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.28,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className={wordClassName}>{activeWord}</span>
          {suffix}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
