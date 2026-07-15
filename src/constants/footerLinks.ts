import { Instagram, Music2, MessageCircle } from "lucide-react";
import type { FooterSocialLink } from "../types";
import { INSTAGRAM_URL, TIKTOK_URL, WHATSAPP_URL } from "./links";

export const FOOTER_SOCIAL_LINKS: FooterSocialLink[] = [
  { icon: Instagram, href: INSTAGRAM_URL, label: "Instagram" },
  { icon: Music2, href: TIKTOK_URL, label: "TikTok" },
  { icon: MessageCircle, href: WHATSAPP_URL, label: "WhatsApp" },
];
