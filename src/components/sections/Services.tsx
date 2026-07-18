import { FadeUp } from "../common/FadeUp";
import { GoldBar } from "../common/GoldBar";
import { SectionLabel } from "../common/SectionLabel";
import { SERVICE_ICONS } from "../../constants/services";
import { useTranslations } from "../../i18n/useTranslations";

export function Services() {
  const t = useTranslations();

  return (
    <section id="services" className="bg-[#F7F5F2] py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <FadeUp className="text-center mb-14">
          <GoldBar />
          <SectionLabel text={t.services.label} />
          <h2
            className="text-3xl md:text-5xl text-foreground"
            style={{ fontFamily: "'Playfair Display', 'Tajawal', serif", fontWeight: 400 }}
          >
            {t.services.titleMain}{" "}
            <em className="text-[#5A0018] not-italic">{t.services.titleEm}</em>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SERVICE_ICONS.map((Icon, i) => {
            const item = t.services.items[i];
            return (
              <FadeUp key={item.title} delay={i * 100}>
                <div className="bg-white rounded-[22px] p-8 border border-[rgba(90,0,24,0.08)] shadow-[0_2px_20px_rgba(90,0,24,0.05)] hover:shadow-[0_12px_48px_rgba(90,0,24,0.13)] transition-all duration-400 hover:-translate-y-1 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#5A0018]/8 flex items-center justify-center mb-6 flex-shrink-0">
                    <Icon size={22} className="text-[#5A0018]" aria-hidden="true" />
                  </div>
                  <h3
                    className="text-lg text-foreground mb-3"
                    style={{ fontFamily: "'Playfair Display', 'Tajawal', serif", fontWeight: 500 }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{item.desc}</p>
                  <div className="mt-6 h-px w-8 bg-[#C9A227]/50 group-hover:w-16 transition-all duration-500" />
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
