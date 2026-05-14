import { IoIosMail } from "react-icons/io";
import { SiApplemusic, SiBandcamp, SiInstagram, SiSpotify, SiYoutube } from "react-icons/si";

const iconMap = {
  email: IoIosMail,
  youtube: SiYoutube,
  spotify: SiSpotify,
  instagram: SiInstagram,
  bandcamp: SiBandcamp,
  applemusic: SiApplemusic,
} as const;

type IconKey = keyof typeof iconMap;

export const DynamicIcon = ({ name, className }: { name: string; className: string }) => {
  if (name != undefined) {
    const Icon = iconMap[name.toLowerCase() as IconKey];
    if (!Icon) return null;
    return <Icon className={className} />;
  }
  return null;
};
