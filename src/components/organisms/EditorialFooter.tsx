"use client";

import { useEffect, useState } from "react";
import { Surface } from "@/design-system/Primitives";
import type {
  ContactInfo,
  FOOTER_COPY,
  NavLinkItem,
  PrivacyNotice,
  StateOffice,
} from "@/design-system/services";
import { A11Y_COPY } from "@/design-system/services";
import { BrandMark } from "../atoms/BrandMark";
import { Button } from "../atoms/Button";
import { Eyebrow } from "../atoms/Eyebrow";
import { Heading } from "../atoms/Heading";
import { TacticalIcon } from "../atoms/TacticalIcon";
import { NavLinkPill } from "../molecules/NavLinkPill";

export interface EditorialFooterProps {
  navLinks: readonly NavLinkItem[];
  offices: readonly StateOffice[];
  contactInfo: ContactInfo;
  privacyNotice: PrivacyNotice;
  footerCopy: typeof FOOTER_COPY;
  privacyModalOpen?: boolean;
  onOpenPrivacy?: () => void;
  onClosePrivacy?: () => void;
}

export function EditorialFooter({
  navLinks,
  offices,
  contactInfo,
  privacyNotice,
  footerCopy,
  privacyModalOpen,
  onOpenPrivacy,
  onClosePrivacy,
}: EditorialFooterProps) {
  const [internalOpen, setInternalOpen] = useState(false);

  const isControlled = privacyModalOpen !== undefined;
  const isModalOpen = isControlled ? privacyModalOpen : internalOpen;

  const handleOpen = () => {
    if (onOpenPrivacy) {
      onOpenPrivacy();
    } else {
      setInternalOpen(true);
    }
  };

  const handleClose = () => {
    if (onClosePrivacy) {
      onClosePrivacy();
    } else {
      setInternalOpen(false);
    }
  };

  useEffect(() => {
    if (!isModalOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <Surface as="footer" level={0} className="site-footer">
      <div className="container-capsule">
        <div className="footer-grid">
          <div className="footer-col">
            <BrandMark
              size="md"
              href={A11Y_COPY.brandHref}
              ariaLabel={A11Y_COPY.brandAriaLabel}
            />
            <p className="body-copy">{footerCopy.tagline}</p>
            <p className="footer-col__title">
              {A11Y_COPY.footerCoverageHeading}
            </p>
            <p className="footer-states">
              {offices.map((office) => office.name).join(" · ")}
            </p>
          </div>

          <div className="footer-col">
            <p className="footer-col__title">{footerCopy.navigationTitle}</p>
            <nav
              aria-label={A11Y_COPY.footerNavAriaLabel}
              className="footer-links"
            >
              {navLinks.map((link) => (
                <NavLinkPill
                  key={link.id}
                  href={link.href}
                  label={link.label}
                />
              ))}
            </nav>

            <div>
              <Button variant="secondary" onClick={handleOpen}>
                <TacticalIcon name="lock" size={16} />
                <span>{footerCopy.privacyButtonLabel}</span>
              </Button>
            </div>
          </div>

          <div className="footer-col">
            <p className="footer-col__title">{footerCopy.contactTitle}</p>

            <div className="footer-links">
              <a href={contactInfo.phoneHref} className="footer-link">
                <TacticalIcon name="phone" size={16} />
                <span>{contactInfo.phoneDisplay}</span>
              </a>

              <a
                href={contactInfo.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <TacticalIcon name="message-square" size={16} />
                <span>
                  {contactInfo.whatsappLabel}: {contactInfo.whatsappDisplay}
                </span>
              </a>

              <a href={contactInfo.emailHref} className="footer-link">
                <TacticalIcon name="mail" size={16} />
                <span>{contactInfo.email}</span>
              </a>
            </div>

            <p className="muted-copy">{contactInfo.addressFull}</p>
            <p className="muted-copy">
              {contactInfo.adminSchedule.label}:{" "}
              {contactInfo.adminSchedule.hours}
            </p>
          </div>
        </div>

        <Surface level={1} radius="md" className="footer-bottom">
          <p className="muted-copy">{contactInfo.copyright}</p>
          <p className="muted-copy">
            {contactInfo.operationsSchedule.label}:{" "}
            {contactInfo.operationsSchedule.hours}
          </p>
        </Surface>
      </div>

      {isModalOpen ? (
        <div
          className="privacy-modal-backdrop"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              handleClose();
            }
          }}
        >
          <Surface
            level={2}
            radius="md"
            role="dialog"
            aria-modal="true"
            aria-labelledby="privacy-modal-title"
            aria-label={A11Y_COPY.privacyDialogAriaLabel}
            className="privacy-modal"
          >
            <div className="privacy-modal__header">
              <div className="capsule-stack">
                <Eyebrow tone="gold">{A11Y_COPY.privacyEyebrow}</Eyebrow>
                <Heading as="h2" id="privacy-modal-title" size="card">
                  {privacyNotice.title}
                </Heading>
              </div>
              <Button
                variant="ghost"
                ariaLabel={privacyNotice.closeLabel}
                onClick={handleClose}
              >
                <TacticalIcon name="close" size={20} />
              </Button>
            </div>

            <p className="body-copy">{privacyNotice.summary}</p>

            <div className="privacy-modal__rights">
              <Heading as="h3" size="sub" tone="gold">
                {privacyNotice.rightsLabel}
              </Heading>
              <p className="body-copy">{privacyNotice.rightsDetail}</p>
            </div>

            <div>
              <Button variant="primary" onClick={handleClose}>
                {privacyNotice.closeLabel}
              </Button>
            </div>
          </Surface>
        </div>
      ) : null}
    </Surface>
  );
}
