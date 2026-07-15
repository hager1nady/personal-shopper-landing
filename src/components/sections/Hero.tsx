import { MessageCircle, ArrowRight, Instagram } from "lucide-react";
import { WHATSAPP_URL, INSTAGRAM_URL } from "../../constants/links";
import { useTranslations } from "../../i18n/useTranslations";

export function Hero() {
  const t = useTranslations();

  return (
    <section id="hero" className="relative min-h-screen flex items-end pb-20 md:pb-32">
      {/* Image */}
      <div className="absolute inset-0 bg-[#c8b49a]">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1800&h=1200&fit=crop&auto=format"
          alt={t.hero.imageAlt}
          width={1800}
          height={1200}
          className="w-full h-full object-cover object-[70%_top]"
          loading="eager"
        />
        {/* Gradient: warm top, stronger bottom for text */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2a0a10]/80 via-[#2a0a10]/20 to-[#f0ddc8]/5" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2a0a10]/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12">
        {/* Label with background pill for contrast */}
        <div className="flex items-center gap-2.5 mb-6">
          <div className="h-px w-8 bg-[#C9A227]" />
          <span
            className="text-white text-xs tracking-[0.28em] uppercase"
            style={{
              fontFamily: "'Manrope', 'Tajawal', sans-serif",
              fontWeight: 700,
              textShadow: "0 1px 8px rgba(0,0,0,0.7)",
            }}
          >
            {t.hero.badge}
          </span>
        </div>

        <h1
          className="mb-6 drop-shadow-md"
          style={{ fontFamily: "'Playfair Display', 'Tajawal', serif", fontWeight: 400, lineHeight: 1.12 }}
        >
          <span className="block text-white text-4xl md:text-6xl lg:text-[5.25rem]">{t.hero.titleLine1}</span>
          <span className="block text-[#C9A227] text-3xl md:text-5xl lg:text-[4.25rem] mt-2">{t.hero.titleLine2}</span>
        </h1>

        <p
          className="text-white/90 text-base md:text-lg max-w-[420px] mb-10 leading-[1.8] drop-shadow-sm"
          style={{ fontFamily: "'Manrope', 'Tajawal', sans-serif", fontWeight: 400 }}
        >
          {t.hero.paragraph}
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 bg-[#5A0018] hover:bg-[#4a0013] text-white px-9 py-4 rounded-2xl text-sm tracking-wide transition-all duration-300 shadow-[0_6px_24px_rgba(90,0,24,0.5)] hover:shadow-[0_10px_36px_rgba(90,0,24,0.65)] hover:-translate-y-0.5"
            style={{ fontFamily: "'Manrope', 'Tajawal', sans-serif", fontWeight: 700 }}
          >
            <MessageCircle size={17} aria-hidden="true" />
            {t.hero.ctaWhatsapp}
            <ArrowRight size={15} aria-hidden="true" className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 bg-[#F7F5F2]/92 hover:bg-white text-[#5A0018] border-2 border-[#5A0018] px-8 py-4 rounded-2xl text-sm tracking-wide backdrop-blur-sm transition-all duration-300 hover:shadow-[0_6px_20px_rgba(90,0,24,0.25)] hover:-translate-y-0.5"
            style={{ fontFamily: "'Manrope', 'Tajawal', sans-serif", fontWeight: 600 }}
          >
            <Instagram size={17} aria-hidden="true" />
            {t.hero.ctaInstagram}
          </a>
        </div>
      </div>
    </section>
  );
}
