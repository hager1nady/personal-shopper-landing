import { MessageCircle, Send, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface StepMeta {
  num: string;
  icon: LucideIcon;
}

export const STEP_META: StepMeta[] = [
  { num: "01", icon: MessageCircle },
  { num: "02", icon: Send },
  { num: "03", icon: Sparkles },
];
