import { CONTACT } from "@/design-system/content";
import { Text } from "../atoms/Text";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__row">
        <Text muted>{CONTACT.copyright}</Text>
        <Text muted>{CONTACT.photoCredit}</Text>
      </div>
    </footer>
  );
}
