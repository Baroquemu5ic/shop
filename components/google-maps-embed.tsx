import { cn } from "@/lib/utils";
import ContentJson from "@/content.json";

interface GoogleMapsEmbedProps {
  className?: string;
}

export function GoogleMapsEmbed({ className }: GoogleMapsEmbedProps) {
  const { googleMapsLink } = ContentJson.contactDetails;

  return (
    <iframe
      src={googleMapsLink}
      style={{ border: 0, width: "100%", height: "100%" }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className={cn("rounded-xl", className)}
    ></iframe>
  );
}
