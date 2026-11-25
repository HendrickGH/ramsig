"use client";

import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ParsedMetric {
  prefix: string;
  target: number;
  decimals: number;
  hasComma: boolean;
  suffix: string;
}

function parseMetricValue(raw: string): ParsedMetric | null {
  const match = raw.match(/^([^0-9]*)([0-9][0-9.,]*)(.*)$/);
  if (!match) return null;

  const [, prefix, numPart, suffix] = match;
  const hasComma = numPart.includes(",");
  const clean = numPart.replace(/,/g, "");
  const decimals = clean.includes(".") ? clean.split(".")[1].length : 0;
  const target = Number.parseFloat(clean);

  if (!Number.isFinite(target)) return null;

  return { prefix, target, decimals, hasComma, suffix };
}

/**
 * Registers page-wide GSAP entrance, scroll-reveal, parallax, and metric
 * count-up choreography scoped to `rootRef`, honoring `prefers-reduced-motion`.
 */
export function useLandingAnimations(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia(root);

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Header entrance
      gsap.from(".site-header .logo-plate, .site-header .site-nav__link, .site-header .btn, .site-header .site-menu-toggle", {
        y: -8,
        opacity: 0,
        duration: 0.42,
        stagger: 0.04,
        ease: "power3.out",
        clearProps: "transform,opacity",
      });

      // Hero media settle + subtle scroll parallax
      gsap.fromTo(
        ".hero-stage__media",
        { scale: 1.12, yPercent: -4, opacity: 0.85 },
        {
          scale: 1.08,
          yPercent: -4,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          clearProps: "opacity",
        },
      );

      gsap.to(".hero-stage__media", {
        yPercent: 4,
        ease: "none",
        scrollTrigger: {
          trigger: "#inicio",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.from(".hero__copy > *", {
        y: 20,
        opacity: 0,
        duration: 0.55,
        stagger: 0.08,
        delay: 0.08,
        ease: "power3.out",
        clearProps: "transform,opacity",
      });

      // About section: intro copy + clip-path media reveal
      gsap.from("#acerca .split__intro > *", {
        y: 18,
        opacity: 0,
        duration: 0.5,
        stagger: 0.07,
        ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: {
          trigger: "#acerca",
          start: "top 84%",
          once: true,
        },
      });

      gsap.fromTo(
        "#acerca .media-frame--split",
        { clipPath: "inset(0 0 100% 0)" },
        {
          clipPath: "inset(0 0 0% 0)",
          duration: 0.72,
          ease: "power3.inOut",
          clearProps: "clipPath",
          scrollTrigger: {
            trigger: "#acerca",
            start: "top 82%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        "#acerca .media-frame__img",
        { scale: 1.07 },
        {
          scale: 1,
          duration: 0.85,
          ease: "power3.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: "#acerca",
            start: "top 82%",
            once: true,
          },
        },
      );

      // Services section (split list)
      gsap.from("#servicios .split__intro > *", {
        y: 18,
        opacity: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: {
          trigger: "#servicios",
          start: "top 84%",
          once: true,
        },
      });

      gsap.from("#servicios .entry", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.07,
        ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: {
          trigger: "#servicios .stack",
          start: "top 85%",
          once: true,
        },
      });

      // Sectors section (3-column cards with image clip reveal)
      gsap.from("#sectores .section-head > *", {
        y: 18,
        opacity: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: {
          trigger: "#sectores",
          start: "top 84%",
          once: true,
        },
      });

      gsap.from("#sectores .entry", {
        y: 20,
        opacity: 0,
        scale: 0.97,
        duration: 0.52,
        stagger: 0.07,
        ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: {
          trigger: "#sectores .grid-3",
          start: "top 85%",
          once: true,
        },
      });

      gsap.fromTo(
        "#sectores .media-frame--card",
        { clipPath: "inset(0 0 100% 0)" },
        {
          clipPath: "inset(0 0 0% 0)",
          duration: 0.65,
          stagger: 0.07,
          ease: "power3.inOut",
          clearProps: "clipPath",
          scrollTrigger: {
            trigger: "#sectores .grid-3",
            start: "top 85%",
            once: true,
          },
        },
      );

      gsap.from("#sectores .section-flow > .text--muted", {
        y: 12,
        opacity: 0,
        duration: 0.45,
        ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: {
          trigger: "#sectores .section-flow > .text--muted",
          start: "top 92%",
          once: true,
        },
      });

      // Impact section (metrics grid + numeric count-up)
      gsap.from("#impacto .section-head > *", {
        y: 18,
        opacity: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: {
          trigger: "#impacto",
          start: "top 84%",
          once: true,
        },
      });

      gsap.from("#impacto .metric", {
        y: 18,
        opacity: 0,
        duration: 0.48,
        stagger: 0.05,
        ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: {
          trigger: "#impacto .metrics-grid",
          start: "top 85%",
          once: true,
        },
      });

      const metricValues = root.querySelectorAll<HTMLElement>("#impacto .metric__value");
      metricValues.forEach((el, index) => {
        const raw = el.textContent?.trim() ?? "";
        const parsed = parseMetricValue(raw);
        if (!parsed) return;

        const counter = { val: 0 };
        gsap.to(counter, {
          val: parsed.target,
          duration: 0.9,
          delay: index * 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#impacto .metrics-grid",
            start: "top 85%",
            once: true,
          },
          onUpdate: () => {
            const formattedNum =
              parsed.decimals > 0
                ? counter.val.toFixed(parsed.decimals)
                : parsed.hasComma
                  ? Math.round(counter.val).toLocaleString("en-US")
                  : Math.round(counter.val).toString();
            el.textContent = `${parsed.prefix}${formattedNum}${parsed.suffix}`;
          },
          onComplete: () => {
            el.textContent = raw;
          },
        });
      });

      // Presence section (intro + state list cascade + map reveal)
      gsap.from("#presencia .split__intro > h2, #presencia .prose-stack > *", {
        y: 18,
        opacity: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: {
          trigger: "#presencia",
          start: "top 84%",
          once: true,
        },
      });

      gsap.from("#presencia .presence-states__item", {
        x: -14,
        opacity: 0,
        duration: 0.42,
        stagger: 0.05,
        ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: {
          trigger: "#presencia .presence-states",
          start: "top 86%",
          once: true,
        },
      });

      gsap.from("#presencia .presence-map", {
        scale: 0.96,
        opacity: 0,
        duration: 0.65,
        ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: {
          trigger: "#presencia .presence-map-wrap",
          start: "top 85%",
          once: true,
        },
      });

      // Framework section
      gsap.from("#marco .section-head > *", {
        y: 18,
        opacity: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: {
          trigger: "#marco",
          start: "top 84%",
          once: true,
        },
      });

      gsap.from("#marco .entry", {
        y: 20,
        opacity: 0,
        scale: 0.97,
        duration: 0.5,
        stagger: 0.07,
        ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: {
          trigger: "#marco .grid-3",
          start: "top 85%",
          once: true,
        },
      });

      // Careers section
      gsap.from("#bolsa-de-trabajo .split__intro > *", {
        y: 18,
        opacity: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: {
          trigger: "#bolsa-de-trabajo",
          start: "top 84%",
          once: true,
        },
      });

      gsap.fromTo(
        "#bolsa-de-trabajo .media-frame--split",
        { clipPath: "inset(0 0 100% 0)" },
        {
          clipPath: "inset(0 0 0% 0)",
          duration: 0.72,
          ease: "power3.inOut",
          clearProps: "clipPath",
          scrollTrigger: {
            trigger: "#bolsa-de-trabajo",
            start: "top 82%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        "#bolsa-de-trabajo .media-frame__img",
        { scale: 1.07 },
        {
          scale: 1,
          duration: 0.85,
          ease: "power3.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: "#bolsa-de-trabajo",
            start: "top 82%",
            once: true,
          },
        },
      );

      // Contact section
      gsap.from("#contacto .split__intro > *", {
        y: 18,
        opacity: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: {
          trigger: "#contacto",
          start: "top 84%",
          once: true,
        },
      });

      gsap.from("#contacto .contact-panel", {
        y: 20,
        opacity: 0,
        scale: 0.98,
        duration: 0.55,
        ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: {
          trigger: "#contacto .contact-panel",
          start: "top 86%",
          once: true,
        },
      });

      // Footer
      gsap.from(".site-footer .site-footer__stack > *", {
        y: 12,
        opacity: 0,
        duration: 0.45,
        stagger: 0.06,
        ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: {
          trigger: ".site-footer",
          start: "top 92%",
          once: true,
        },
      });

      // Floating WhatsApp CTA entrance
      gsap.from(".whatsapp-float", {
        y: 12,
        scale: 0.92,
        opacity: 0,
        duration: 0.45,
        delay: 0.35,
        ease: "power3.out",
        clearProps: "transform,opacity",
      });
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      const fadeTargets = [
        "#acerca",
        "#servicios",
        "#sectores",
        "#impacto",
        "#presencia",
        "#marco",
        "#bolsa-de-trabajo",
        "#contacto",
        ".site-footer",
      ];

      fadeTargets.forEach((selector) => {
        gsap.from(selector, {
          opacity: 0,
          duration: 0.25,
          ease: "power2.out",
          clearProps: "opacity",
          scrollTrigger: {
            trigger: selector,
            start: "top 88%",
            once: true,
          },
        });
      });
    });

    return () => mm.revert();
  }, [rootRef]);
}
