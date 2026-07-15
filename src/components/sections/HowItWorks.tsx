import { MessageCircle, ArrowRight } from "lucide-react";
import { FadeUp } from "../common/FadeUp";
import { GoldBar } from "../common/GoldBar";
import { SectionLabel } from "../common/SectionLabel";
import { STEP_META } from "../../constants/steps";
import { WHATSAPP_URL } from "../../constants/links";
import { useTranslations } from "../../i18n/useTranslations";

export function HowItWorks() {
  const t = useTranslations();

  return (
    <section id="how" className="bg-background py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <FadeUp className="text-center mb-14">
          <GoldBar />
          <SectionLabel text={t.howItWorks.label} />
          <h2
            className="text-3xl md:text-5xl text-foreground"
            style={{ fontFamily: "'Playfair Display', 'Tajawal', serif", fontWeight: 400 }}
          >
            {t.howItWorks.titleMain}{" "}
            <em className="text-[#5A0018] not-italic">{t.howItWorks.titleEm}</em>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* connector line desktop */}
          <div
            className="hidden md:block absolute top-7 left-[calc(16.67%+0px)] right-[calc(16.67%+0px)] h-px"
            style={{ background: "linear-gradient(to right, transparent, #C9A227 20%, #C9A227 80%, transparent)" }}
          />

          {STEP_META.map((meta, i) => {
            const Icon = meta.icon;
            const step = t.howItWorks.steps[i];
            return (
              <FadeUp key={i} delay={i * 120} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#5A0018] text-white mb-5 shadow-[0_4px_20px_rgba(90,0,24,0.3)] relative z-10">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <div className="mb-1">
                  <span
                    className="text-[10px] tracking-[0.2em] text-[#C9A227] uppercase"
                    style={{ fontFamily: "'Manrope', 'Tajawal', sans-serif", fontWeight: 700 }}
                  >
                    {t.howItWorks.stepLabel} {meta.num}
                  </span>
                </div>
                <h3
                  className="text-lg text-foreground mb-3"
                  style={{ fontFamily: "'Playfair Display', 'Tajawal', serif", fontWeight: 500 }}
                >
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-[220px] mx-auto">{step.desc}</p>
              </FadeUp>
            );
          })}
        </div>

        {/* WhatsApp note */}
        <FadeUp delay={400} className="mt-14">
          <div className="bg-[#5A0018]/5 border border-[#5A0018]/15 rounded-2xl px-8 py-5 text-center max-w-xl mx-auto">
            <p
              className="text-[#5A0018] text-sm leading-relaxed"
              style={{ fontFamily: "'Manrope', 'Tajawal', sans-serif", fontWeight: 600 }}
            >
              {t.howItWorks.noteLine1}
            </p>
            <p className="text-muted-foreground text-xs mt-1">{t.howItWorks.noteLine2}</p>
          </div>
        </FadeUp>

        <FadeUp delay={500} className="text-center mt-8">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 bg-[#5A0018] hover:bg-[#4a0013] text-white px-9 py-4 rounded-2xl text-sm transition-all duration-300 hover:shadow-[0_8px_32px_rgba(90,0,24,0.4)] hover:-translate-y-0.5"
            style={{ fontFamily: "'Manrope', 'Tajawal', sans-serif", fontWeight: 700 }}
          >
            <MessageCircle size={16} aria-hidden="true" />
            {t.howItWorks.ctaFinal}
            <ArrowRight size={15} aria-hidden="true" className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
