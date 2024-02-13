import LocationIcon from "./icons/location";
import NewTabIcon from "./icons/new-tab";
import ContentJson from "@/content.json";

import { cn } from "@/lib/utils";

export function Location({ className }: { className?: string }) {
  return (
    <a
      className="text-[#DE7F11] flex flex-col md:flex-row items-center text-center opacity-80 group"
      href="https://maps.app.goo.gl/pPZJrBUcc5Fj4Qxc8"
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
      <span className={cn("tracking-tight font-bold ml-px", className)}>
        {ContentJson.footer.address}
      </span>
    </a>
  );
}