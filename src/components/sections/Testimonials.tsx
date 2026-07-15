import { FadeUp } from "../common/FadeUp";
import { GoldBar } from "../common/GoldBar";
import { SectionLabel } from "../common/SectionLabel";
import { StarRow } from "../common/StarRow";
import { TESTIMONIALS_META } from "../../constants/testimonials";
import { useTranslations } from "../../i18n/useTranslations";
import { useLanguage } from "../../i18n/LanguageContext";

export function Testimonials() {
  const t = useTranslations();
  const { lang } = useLanguage();

  return (
    <section id="reviews" className="bg-background py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <FadeUp className="text-center mb-14">
          <GoldBar />
          <SectionLabel text={t.testimonials.label} />
          <h2
            className="text-3xl md:text-5xl text-foreground"
            style={{ fontFamily: "'Playfair Display', 'Tajawal', serif", fontWeight: 400 }}
          >
            {t.testimonials.titleMain}{" "}
            <em className="text-[#5A0018] not-italic">{t.testimonials.titleEm}</em>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS_META.map((meta, i) => {
            const item = t.testimonials.items[i];
            return (
              <FadeUp key={i} delay={i * 100}>
                <article className="bg-white rounded-[22px] p-8 border border-[rgba(90,0,24,0.08)] shadow-[0_4px_24px_rgba(90,0,24,0.06)] hover:shadow-[0_12px_48px_rgba(90,0,24,0.12)] hover:-translate-y-1 transition-all duration-400 flex flex-col h-full">
                  <StarRow count={meta.stars} />
                  <blockquote
                    className="text-foreground/75 text-sm leading-[1.85] mt-5 mb-7 flex-1 italic"
                    style={{ fontFamily: "'Playfair Display', 'Tajawal', serif", fontWeight: 400 }}
                  >
                    &ldquo;{item.text}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3 pt-5 border-t border-[rgba(90,0,24,0.07)]">
                    {/* Elegant initial avatar */}
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#5A0018] to-[#8a1030] flex items-center justify-center shadow-sm flex-shrink-0" aria-hidden="true">
                      <span
                        className="text-white text-sm"
                        style={{ fontFamily: "'Playfair Display', 'Tajawal', serif", fontWeight: 500 }}
                      >
                        {meta.initial}
                      </span>
                    </div>
                    <div>
                      <cite
                        className="text-sm text-foreground not-italic block"
                        style={{ fontFamily: "'Manrope', 'Tajawal', sans-serif", fontWeight: 700 }}
                      >
                        {lang === "ar" ? meta.name : meta.nameEn}
                      </cite>
                      <p className="text-xs text-muted-foreground">{item.role}</p>
                    </div>
                  </div>
                </article>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
