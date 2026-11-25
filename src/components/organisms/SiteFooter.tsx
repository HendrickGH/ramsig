import { CONTACT, HEADER_CTA, NAV_LINKS } from "@/design-system/content";
import { Text } from "../atoms/Text";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__stack">
        <nav aria-label="Enlaces de pie de página" className="site-footer__nav">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="site-nav__link">
              {link.label}
            </a>
          ))}
          <a href="#contacto" className="site-nav__link">
            {HEADER_CTA}
          </a>
        </nav>

        <div className="site-footer__row">
          <Text muted>{CONTACT.copyright}</Text>
          <Text muted>{CONTACT.photoCredit}</Text>
        </div>
      </div>
    </footer>
  );
}
