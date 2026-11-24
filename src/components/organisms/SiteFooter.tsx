import { CONTACT } from "@/design-system/content";
import { Text } from "../atoms/Text";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <Text muted>{CONTACT.copyright}</Text>
      </div>
    </footer>
  );
}
