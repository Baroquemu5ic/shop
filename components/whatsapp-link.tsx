import WhatsAppIcon from "./icons/whatsapp";

export function WhatsAppLink() {
  return (
    <a
      href="https://wa.me/918884648080"
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer"
    >
      <WhatsAppIcon width={24} height={24} className="animate-pulse" />
    </a>
  );
}
