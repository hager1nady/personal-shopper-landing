import { Instagram, Music2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { INSTAGRAM_URL, TIKTOK_URL } from "./links";

export interface SocialMeta {
  icon: LucideIcon;
  label: string;
  handle: string;
  href: string;
}

export const SOCIALS_META: SocialMeta[] = [
  {
    icon: Instagram,
    label: "Instagram",
    handle: "@yourpersonalshopper",
    href: INSTAGRAM_URL,
  },
  {
    icon: Music2,
    label: "TikTok",
    handle: "@yourpersonalshopper",
    href: TIKTOK_URL,
  },
];
