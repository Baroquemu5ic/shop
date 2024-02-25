import PhoneIcon from "./icons/phone";

export function PhoneLink() {
  return (
    <a href="tel:+918884648080" className="cursor-pointer">
      <PhoneIcon width={24} height={24} className="animate-pulse" />
    </a>
  );
}
