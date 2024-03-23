import { cn } from "@/lib/utils";

interface GoogleMapsEmbedProps {
  className?: string;
}

export function GoogleMapsEmbed({ className }: GoogleMapsEmbedProps) {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15548.247207276358!2d77.653068!3d13.0317364!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ee9479869646a35%3A0x2755c832d2a04ed9!2sBaroque%20Music%20Academy!5e0!3m2!1sen!2sin!4v1711210101721!5m2!1sen!2sin"
      style={{ border: 0, width: "100%", height: "100%" }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className={cn("rounded-xl", className)}
    ></iframe>
  );
}
