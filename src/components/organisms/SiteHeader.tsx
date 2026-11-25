import { HEADER_CTA, NAV_LINKS } from "@/design-system/content";
import { Button } from "../atoms/Button";
import { Logo } from "../atoms/Logo";

export function SiteHeader() {
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
        </div>
      </div>
    </header>
  );
}
