import LocationIcon from "./icons/location";
import ContentJson from "@/content.json";

import { cn } from "@/lib/utils";

export function Location({ className }: { className?: string }) {
  return (
    <a
      className="text-[#DE7F11] flex flex-col md:flex-row items-center text-center opacity-80 group"
      href={ContentJson.footer.addressGoogleMapsLink || ""}
      target="_blank"
      rel="noopener noreferrer"
      title="Our Address"
    >
      <LocationIcon
        width={32}
        height={32}
        color="#DE7F11"
        className="animate-pulse"
      />
      <p
        className={cn(
          "tracking-tight font-bold ml-px flex flex-col lg:items-start",
          className
        )}
      >
        <span>{ContentJson.footer.address[0]}</span>
        <span>{ContentJson.footer.address[1]}</span>
      </p>
    </a>
  );
}
