import { CONTACT } from "@/design-system/content";
import { Logo } from "../atoms/Logo";
import { Text } from "../atoms/Text";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__row">
        <Logo />
        <Text muted>{CONTACT.copyright}</Text>
      </div>
    </footer>
  );
}
