import { cn } from "@/lib/utils";
import { PhoneLink } from "./phone-link";
import { WhatsAppLink } from "./whatsapp-link";
import ContentJson from "@/content.json";

interface ContactBannerProps {
  className?: string;
}

export function ContactBanner(props: ContactBannerProps) {
  return (
    <p
      className={cn(
        "flex pl-[35px] lg:pl-[40px] gap-2 items-center text-xl font-light text-white group",
        props.className
      )}
    >
      <PhoneLink />
      <WhatsAppLink />
      <span>{ContentJson.contactDetails.phoneDisplay}</span>
    </p>
  );
}
