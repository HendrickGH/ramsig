"use client";

import { useEffect, useState } from "react";
import { Surface } from "@/design-system/Primitives";
import type { NavLinkItem } from "@/design-system/services";
import { A11Y_COPY, HEADER_COPY } from "@/design-system/services";
import { BrandMark } from "../atoms/BrandMark";
import { Button } from "../atoms/Button";
import { TacticalIcon } from "../atoms/TacticalIcon";
import { NavLinkPill } from "../molecules/NavLinkPill";

export interface CapsuleNavbarProps {
  links?: readonly NavLinkItem[];
  onRequestQuote?: () => void;
}

export function CapsuleNavbar({
  links = [],
  onRequestQuote,
}: CapsuleNavbarProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string>(
    links[0]?.id ?? "servicios"
  );

  useEffect(() => {
    if (!isDrawerOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsDrawerOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDrawerOpen]);

  const handleNavClick = (sectionId: string) => {
    setActiveSectionId(sectionId);
    setIsDrawerOpen(false);
  };

  const handleQuoteCtaClick = () => {
    setActiveSectionId("contacto");
    setIsDrawerOpen(false);
    onRequestQuote?.();
  };

  return (
    <header className="site-header">
      <div className="container-capsule">
        <Surface level={1} radius="pill" className="navbar-capsule">
          <BrandMark
            size="sm"
            href={A11Y_COPY.brandHref}
            ariaLabel={A11Y_COPY.brandAriaLabel}
          />

          <nav aria-label={HEADER_COPY.navAriaLabel} className="navbar-links">
            {links.map((link) => (
              <NavLinkPill
                key={link.id}
                href={link.href}
                label={link.label}
                active={activeSectionId === link.id}
                onClick={() => setActiveSectionId(link.id)}
              />
            ))}
          </nav>

          <div className="navbar-actions">
            <Button
              variant="primary"
              href={HEADER_COPY.ctaHref}
              className="navbar-desktop-cta"
              onClick={handleQuoteCtaClick}
            >
              {HEADER_COPY.ctaLabel}
            </Button>

            <button
              type="button"
              className="btn btn--ghost navbar-toggle"
              aria-expanded={isDrawerOpen}
              aria-controls="mobile-nav-drawer"
              aria-label={
                isDrawerOpen
                  ? HEADER_COPY.closeMenuLabel
                  : HEADER_COPY.openMenuLabel
              }
              onClick={() => setIsDrawerOpen((prev) => !prev)}
            >
              <TacticalIcon name={isDrawerOpen ? "close" : "menu"} size={20} />
            </button>
          </div>
        </Surface>
      </div>

      {isDrawerOpen ? (
        <div
          id="mobile-nav-drawer"
          className="mobile-drawer"
          role="dialog"
          aria-modal="true"
          aria-label={A11Y_COPY.mobileDrawerAriaLabel}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setIsDrawerOpen(false);
            }
          }}
        >
          <Surface level={1} radius="md" className="mobile-drawer__panel">
            <div className="mobile-drawer__top">
              <div className="mobile-drawer__head">
                <BrandMark
                  size="sm"
                  showSubtitle={false}
                  href={A11Y_COPY.brandHref}
                  ariaLabel={A11Y_COPY.brandAriaLabel}
                />
                <Button
                  variant="ghost"
                  ariaLabel={HEADER_COPY.closeMenuLabel}
                  onClick={() => setIsDrawerOpen(false)}
                >
                  <TacticalIcon name="close" size={20} />
                </Button>
              </div>

              <nav
                aria-label={A11Y_COPY.mobileDrawerAriaLabel}
                className="mobile-drawer__links"
              >
                {links.map((link) => (
                  <NavLinkPill
                    key={link.id}
                    href={link.href}
                    label={link.label}
                    active={activeSectionId === link.id}
                    className="mobile-drawer__link"
                    onClick={() => handleNavClick(link.id)}
                  />
                ))}
              </nav>
            </div>

            <div className="mobile-drawer__footer">
              <Button
                variant="primary"
                fullWidth
                href={HEADER_COPY.ctaHref}
                onClick={handleQuoteCtaClick}
              >
                {HEADER_COPY.ctaLabel}
              </Button>
            </div>
          </Surface>
        </div>
      ) : null}
    </header>
  );
}
