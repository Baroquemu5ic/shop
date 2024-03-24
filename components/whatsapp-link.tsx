import WhatsAppIcon from "./icons/whatsapp";
import ContentJson from "@/content.json";

export function WhatsAppLink() {
  const { whatsAppNumber } = ContentJson.contactDetails;
  const href = `https://wa.me/${whatsAppNumber}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer"
    >
      <WhatsAppIcon width={24} height={24} className="animate-pulse" />
    </a>
  );
}
