"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

export interface RotatingWordProps {
  words: readonly string[];
  intervalMs?: number;
  suffix?: string;
  wordClassName?: string;
}

/**
 * Cycles through a list of words at a fixed interval with a GSAP vertical
 * blur-masked reveal, falling back to an opacity-only swap when reduced motion
 * is preferred.
 */
export function RotatingWord({
  words,
  intervalMs = 3000,
  suffix = "",
  wordClassName,
}: RotatingWordProps) {
  const [index, setIndex] = useState(0);
  const wordRef = useRef<HTMLSpanElement>(null);
  const pendingEnterRef = useRef(false);

  useEffect(() => {
    if (words.length <= 1) return;

    const timer = window.setInterval(() => {
      const el = wordRef.current;
      if (!el) {
        setIndex((current) => (current + 1) % words.length);
        return;
      }

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      gsap.killTweensOf(el);

      if (reduced) {
        gsap.to(el, {
          opacity: 0,
          duration: 0.14,
          ease: "power2.out",
          onComplete: () => {
            pendingEnterRef.current = true;
            setIndex((current) => (current + 1) % words.length);
          },
        });
        return;
      }

      gsap.to(el, {
        y: "-0.32em",
        opacity: 0,
        filter: "blur(2px)",
        duration: 0.18,
        ease: "power3.out",
        onComplete: () => {
          pendingEnterRef.current = true;
          setIndex((current) => (current + 1) % words.length);
        },
      });
    }, intervalMs);

    return () => {
      window.clearInterval(timer);
      if (wordRef.current) {
        gsap.killTweensOf(wordRef.current);
      }
    };
  }, [words.length, intervalMs]);

  useLayoutEffect(() => {
    if (!pendingEnterRef.current) return;
    pendingEnterRef.current = false;

    const el = wordRef.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.killTweensOf(el);

    if (reduced) {
      gsap.fromTo(
        el,
        { opacity: 0, y: 0, filter: "none" },
        { opacity: 1, duration: 0.18, ease: "power2.out", clearProps: "opacity" },
      );
      return;
    }

    gsap.fromTo(
      el,
      { y: "0.35em", opacity: 0, filter: "blur(2px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.26,
        ease: "power3.out",
        clearProps: "transform,filter,opacity",
      },
    );
  }, [index]);

  const activeWord = words[index] ?? "";

  return (
    <span className="rotating-word-clip">
      <span ref={wordRef} className="rotating-word">
        <span className={wordClassName}>{activeWord}</span>
        {suffix}
      </span>
    </span>
  );
}
