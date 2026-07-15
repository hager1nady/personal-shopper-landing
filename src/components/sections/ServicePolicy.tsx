import { FadeUp } from "../common/FadeUp";
import { GoldBar } from "../common/GoldBar";
import { SectionLabel } from "../common/SectionLabel";
import { Accordion } from "../common/Accordion";
import { useTranslations } from "../../i18n/useTranslations";

export function ServicePolicy() {
  const t = useTranslations();

  return (
    <section id="policy" className="bg-[#F7F5F2] py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <FadeUp className="text-center mb-14">
          <GoldBar />
          <SectionLabel text={t.servicePolicy.label} />
          <h2
            className="text-3xl md:text-5xl text-foreground"
            style={{ fontFamily: "'Playfair Display', 'Tajawal', serif", fontWeight: 400 }}
          >
            {t.servicePolicy.titleMain}{" "}
            <em className="text-[#5A0018] not-italic">{t.servicePolicy.titleEm}</em>
          </h2>
          <p className="text-muted-foreground text-sm mt-4 max-w-lg mx-auto leading-relaxed">
            {t.servicePolicy.subtitle}
          </p>
        </FadeUp>

        <FadeUp delay={100}>
          <Accordion items={t.servicePolicy.items} />
        </FadeUp>
      </div>
    </section>
  );
}
