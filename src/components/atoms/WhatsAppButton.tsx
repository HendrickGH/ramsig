import { CONTACT } from "@/design-system/content";

export function WhatsAppButton() {
  return (
    <a
      href={CONTACT.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={CONTACT.whatsappLabel}
      title={CONTACT.whatsappLabel}
      className="whatsapp-float"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="currentColor"
        className="whatsapp-float__icon"
      >
        <path d="M12.04 2C6.51 2 2.04 6.47 2.04 12c0 1.76.46 3.48 1.33 4.99L2 22l5.15-1.35A9.96 9.96 0 0 0 12.04 22c5.52 0 10-4.48 10-10S17.56 2 12.04 2Zm5.82 14.12c-.24.68-1.42 1.3-1.97 1.38-.52.08-1.18.11-1.9-.12-.44-.14-1-.33-1.72-.64-3.03-1.31-5.01-4.37-5.16-4.57-.15-.2-1.23-1.64-1.23-3.13 0-1.49.78-2.22 1.06-2.52.28-.3.61-.38.81-.38.2 0 .41.01.59.01.19 0 .44-.07.69.53.25.61.86 2.1.94 2.25.08.15.13.33.03.53-.1.2-.15.33-.3.51-.15.18-.32.4-.45.54-.15.15-.31.31-.13.62.18.3.79 1.31 1.7 2.12 1.17 1.04 2.15 1.36 2.45 1.52.3.15.48.13.66-.08.18-.2.76-.89.96-1.19.2-.3.41-.25.69-.15.28.1 1.77.84 2.07.99.3.15.51.23.58.36.08.13.08.75-.16 1.43Z" />
      </svg>
    </a>
  );
}
