import { Sparkles } from "lucide-react";
import { FadeUp } from "../common/FadeUp";
import { GoldBar } from "../common/GoldBar";
import { SectionLabel } from "../common/SectionLabel";
import { GALLERY_META } from "../../constants/gallery";
import { useTranslations } from "../../i18n/useTranslations";

export function Gallery() {
  const t = useTranslations();

  return (
    <section id="gallery" className="bg-[#F2F2F2] py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <FadeUp className="text-center mb-14">
          <GoldBar />
          <SectionLabel text={t.gallery.label} />
          <h2
            className="text-3xl md:text-5xl text-foreground"
            style={{ fontFamily: "'Playfair Display', 'Tajawal', serif", fontWeight: 400 }}
          >
            {t.gallery.titleMain}{" "}
            <em className="text-[#5A0018] not-italic">{t.gallery.titleEm}</em>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4" style={{ gridAutoRows: "200px" }}>
          {GALLERY_META.map((img, i) => (
            <FadeUp key={i} delay={i * 60} className={img.span}>
              <div className="group relative overflow-hidden rounded-2xl bg-muted w-full h-full cursor-pointer">
                <img
                  src={img.src}
                  alt={t.gallery.items[i].alt}
                  width={img.width}
                  height={img.height}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-107"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#5A0018]/0 group-hover:bg-[#5A0018]/18 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <div className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow-md">
                    <Sparkles size={14} className="text-[#5A0018]" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
