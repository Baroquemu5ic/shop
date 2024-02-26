import Image from "next/image";
import YoutubeIcon from "../icons/youtube";
import InstagramIcon from "../icons/svg/InstagramIcon.svg";
import { cn } from "@/lib/utils";

interface SocialMediaIconsProps {
  className?: string;
}

export default function SocialMediaIcons(props: SocialMediaIconsProps) {
  return (
    <div
      className={cn(
        "flex flex-col lg:flex-row items-end pt-2  lg:p-0 lg:justify-between lg:items-center gap-4",
        props.className
      )}
    >
      <a
        href="https://www.youtube.com/@BaroqueMu5ic"
        target="_blank"
        title="Youtube"
        className="size-10 cursor-pointer flex items-center justify-center hover:scale-105 ease-in"
      >
        <YoutubeIcon className="w-fit h-fit" />
      </a>
      <a
        href="https://www.instagram.com/baroquemusic.in/"
        target="_blank"
        title="Instagram"
        className="size-10 cursor-pointer flex items-center justify-center hover:scale-105 ease-in"
      >
        <Image src={InstagramIcon} alt="Instagram" className="w-fit h-fit" />
      </a>
    </div>
  );
}
