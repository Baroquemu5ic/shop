import PhoneIcon from "./icons/phone";
import ContentJson from "@/content.json";

export function PhoneLink() {
  const { phone } = ContentJson.contactDetails;
  const href = `tel:${phone}`;

  return (
    <a href={href} className="cursor-pointer">
      <PhoneIcon width={24} height={24} className="animate-pulse" />
    </a>
  );
}
