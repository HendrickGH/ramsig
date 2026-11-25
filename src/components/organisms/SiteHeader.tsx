"use client";

import { useEffect, useRef, useState } from "react";
import { HEADER_CTA, HEADER_MENU, NAV_LINKS } from "@/design-system/content";
import { Button } from "../atoms/Button";
import { Logo } from "../atoms/Logo";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };

    const mediaQuery = window.matchMedia("(min-width: 52rem)");
    const handleMediaChange = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="container site-header__row">
        <Logo href="#inicio" />
        <div className="site-header__actions">
          <nav aria-label="Navegación principal" className="site-nav">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="site-nav__link">
                {link.label}
              </a>
            ))}
          </nav>
          <Button href="#contacto" small>
            {HEADER_CTA}
          </Button>
          <button
            ref={toggleRef}
            type="button"
            className="site-menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? HEADER_MENU.closeLabel : HEADER_MENU.openLabel}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            >
              {menuOpen ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6L6 18" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="container mobile-nav-wrap">
          <nav id="mobile-nav" aria-label={HEADER_MENU.mobileNavLabel} className="mobile-nav">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="mobile-nav__link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
