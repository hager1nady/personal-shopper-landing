import { MessageCircle, ArrowRight } from "lucide-react";
import { FadeUp } from "../common/FadeUp";
import { SOCIALS_META } from "../../constants/socials";
import { WHATSAPP_URL } from "../../constants/links";
import { useTranslations } from "../../i18n/useTranslations";

export function SocialMedia() {
  const t = useTranslations();

  return (
    <section id="contact" className="bg-[#5A0018] py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <FadeUp className="text-center mb-5">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-white/25" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
            <div className="h-px w-10 bg-white/25" />
          </div>
          <p
            className="text-xs tracking-[0.28em] uppercase text-white/40 mb-3"
            style={{ fontFamily: "'Manrope', 'Tajawal', sans-serif", fontWeight: 600 }}
          >
            {t.socialMedia.label}
          </p>
          <h2
            className="text-3xl md:text-5xl text-white"
            style={{ fontFamily: "'Playfair Display', 'Tajawal', serif", fontWeight: 400 }}
          >
            {t.socialMedia.titleMain}{" "}
            <em className="text-[#C9A227] not-italic">{t.socialMedia.titleEm}</em>
          </h2>
          <p className="text-white/50 text-sm mt-4 max-w-md mx-auto leading-relaxed">
            {t.socialMedia.paragraph}
          </p>
        </FadeUp>

        {/* WhatsApp — full width, prominent */}
        <FadeUp delay={100} className="mb-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 bg-white/10 hover:bg-white/16 border border-white/15 rounded-[22px] p-6 sm:p-8 transition-all duration-400 hover:shadow-[0_12px_48px_rgba(0,0,0,0.3)]"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#25a244] flex items-center justify-center flex-shrink-0 shadow-[0_4px_20px_rgba(37,162,68,0.4)]">
              <MessageCircle size={26} className="text-white" aria-hidden="true" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <h3
                  className="text-xl text-white"
                  style={{ fontFamily: "'Playfair Display', 'Tajawal', serif", fontWeight: 500 }}
                >
                  {t.socialMedia.whatsappTitle}
                </h3>
                <span
                  className="text-[10px] tracking-widest uppercase bg-[#C9A227] text-white px-2 py-0.5 rounded-full"
                  style={{ fontFamily: "'Manrope', 'Tajawal', sans-serif", fontWeight: 700 }}
                >
                  {t.socialMedia.primaryBadge}
                </span>
              </div>
              <p className="text-white/55 text-sm">{t.socialMedia.whatsappDesc}</p>
            </div>
            <div
              className="flex-shrink-0 w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-[#5A0018] px-5 py-3 rounded-xl text-sm font-semibold shadow-sm group-hover:shadow-md transition-all duration-200"
              style={{ fontFamily: "'Manrope', 'Tajawal', sans-serif" }}
            >
              {t.socialMedia.messageNowCta} <ArrowRight size={14} aria-hidden="true" className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </div>
          </a>
        </FadeUp>

        {/* Instagram + TikTok */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SOCIALS_META.map((meta, i) => {
            const Icon = meta.icon;
            const soc = t.socialMedia.socials[i];
            return (
              <FadeUp key={meta.label} delay={200 + i * 80}>
                <div className="bg-white/8 border border-white/10 rounded-[22px] p-7 hover:bg-white/12 transition-all duration-300 group h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-white/12 flex items-center justify-center">
                      <Icon size={20} className="text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h3
                        className="text-lg text-white"
                        style={{ fontFamily: "'Playfair Display', 'Tajawal', serif", fontWeight: 500 }}
                      >
                        {meta.label}
                      </h3>
                      <p className="text-white/40 text-xs">{meta.handle}</p>
                    </div>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed mb-5">{soc.desc}</p>
                  <a
                    href={meta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/12 hover:bg-white/20 text-white/90 border border-white/15 px-5 py-2.5 rounded-xl text-xs font-semibold transition-colors duration-200"
                    style={{ fontFamily: "'Manrope', 'Tajawal', sans-serif" }}
                  >
                    {soc.cta} <ArrowRight size={12} aria-hidden="true" />
                  </a>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
