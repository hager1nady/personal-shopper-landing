import { CheckCircle2, MessageCircle, ArrowRight } from "lucide-react";
import { FadeUp } from "../common/FadeUp";
import { GoldBar } from "../common/GoldBar";
import { WHATSAPP_URL } from "../../constants/links";
import { useTranslations } from "../../i18n/useTranslations";

export function FinalCta() {
  const t = useTranslations();

  return (
    <section className="bg-[#F7F5F2] py-28 md:py-40 px-6 md:px-12">
      <div className="max-w-2xl mx-auto text-center">
        <FadeUp>
          <GoldBar />
          <div className="flex items-center justify-center gap-2 mt-4 mb-6">
            <CheckCircle2 size={14} className="text-[#C9A227]" aria-hidden="true" />
            <span
              className="text-xs tracking-[0.22em] uppercase text-muted-foreground"
              style={{ fontFamily: "'Manrope', 'Tajawal', sans-serif", fontWeight: 600 }}
            >
              {t.finalCta.badge}
            </span>
          </div>
          <h2
            className="text-4xl md:text-6xl text-foreground mb-5"
            style={{ fontFamily: "'Playfair Display', 'Tajawal', serif", fontWeight: 400, lineHeight: 1.15 }}
          >
            {t.finalCta.titleMain}{" "}
            <em className="text-[#5A0018] not-italic">{t.finalCta.titleEm}</em>
          </h2>
          <p className="text-muted-foreground text-base mb-10 leading-[1.8] max-w-lg mx-auto">
            {t.finalCta.paragraph}
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-[#5A0018] hover:bg-[#4a0013] text-white px-12 py-5 rounded-2xl text-base transition-all duration-300 hover:shadow-[0_16px_56px_rgba(90,0,24,0.45)] shadow-[0_8px_32px_rgba(90,0,24,0.3)] hover:-translate-y-1"
            style={{ fontFamily: "'Manrope', 'Tajawal', sans-serif", fontWeight: 700 }}
          >
            <MessageCircle size={21} aria-hidden="true" />
            {t.finalCta.cta}
            <ArrowRight size={17} aria-hidden="true" className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </a>
          <p
            className="text-muted-foreground/70 text-xs mt-5 tracking-wide"
            style={{ fontFamily: "'Manrope', 'Tajawal', sans-serif" }}
          >
            {t.finalCta.footNote}
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
