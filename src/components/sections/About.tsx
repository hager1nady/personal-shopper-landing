import { ArrowRight } from "lucide-react";
import { FadeUp } from "../common/FadeUp";
import { GoldBar } from "../common/GoldBar";
import { SectionLabel } from "../common/SectionLabel";
import { WHATSAPP_URL } from "../../constants/links";
import { useTranslations } from "../../i18n/useTranslations";

export function About() {
  const t = useTranslations();

  return (
    <section id="about" className="bg-background py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Image */}
        <FadeUp>
          <div className="relative rounded-3xl overflow-hidden bg-muted shadow-[0_8px_48px_rgba(90,0,24,0.12)]">
            <img
              src="https://images.unsplash.com/photo-1606132653399-36248f2e2a99?w=800&h=960&fit=crop&auto=format"
              alt={t.about.imageAlt}
              width={800}
              height={960}
              className="w-full h-[420px] md:h-[500px] object-cover"
              loading="lazy"
            />
            {/* gold accent bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C9A227]/60 via-[#C9A227] to-[#C9A227]/60" />
          </div>
        </FadeUp>

        {/* Text */}
        <FadeUp delay={120}>
          <GoldBar />
          <SectionLabel text={t.about.label} />
          <h2
            className="text-3xl md:text-4xl text-foreground mb-5"
            style={{ fontFamily: "'Playfair Display', 'Tajawal', serif", fontWeight: 400, lineHeight: 1.25 }}
          >
            {t.about.titleMain}{" "}
            <em className="text-[#5A0018] not-italic">{t.about.titleEm}</em>
          </h2>
          <p className="text-muted-foreground text-sm leading-[1.9] mb-5">{t.about.paragraph1}</p>
          <p className="text-muted-foreground text-sm leading-[1.9] mb-8">{t.about.paragraph2}</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#5A0018] text-sm font-semibold group"
            style={{ fontFamily: "'Manrope', 'Tajawal', sans-serif" }}
          >
            {t.about.cta}
            <ArrowRight size={15} aria-hidden="true" className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
