import { FadeUp } from "../common/FadeUp";
import { GoldBar } from "../common/GoldBar";
import { SectionLabel } from "../common/SectionLabel";
import { WHY_ICONS } from "../../constants/whyItems";
import { useTranslations } from "../../i18n/useTranslations";

export function WhyChooseUs() {
  const t = useTranslations();

  return (
    <section className="bg-background py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <FadeUp className="text-center mb-14">
          <GoldBar />
          <SectionLabel text={t.whyChooseUs.label} />
          <h2
            className="text-3xl md:text-5xl text-foreground"
            style={{ fontFamily: "'Playfair Display', 'Tajawal', serif", fontWeight: 400 }}
          >
            {t.whyChooseUs.titleMain}{" "}
            <em className="text-[#5A0018] not-italic">{t.whyChooseUs.titleEm}</em>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 center">
          {WHY_ICONS.map((Icon, i) => {
            const item = t.whyChooseUs.items[i];
            return (
              <FadeUp key={item.title} delay={i * 80}>
                <div className="flex gap-5 bg-[#F7F5F2] rounded-[22px] p-7 border border-[rgba(90,0,24,0.07)] hover:shadow-[0_8px_40px_rgba(90,0,24,0.10)] hover:-translate-y-0.5 transition-all duration-350">
                  <div className="w-11 h-11 rounded-xl bg-[#5A0018] flex items-center justify-center flex-shrink-0 shadow-[0_4px_16px_rgba(90,0,24,0.25)]">
                    <Icon size={20} className="text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3
                      className="text-base text-foreground mb-2"
                      style={{ fontFamily: "'Playfair Display', 'Tajawal', serif", fontWeight: 500 }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
