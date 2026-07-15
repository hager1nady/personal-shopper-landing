// import { ShoppingBag } from "lucide-react";
import logoLight from "../../assets/logo-light.png";
<img src={logoLight} alt="Logo" />
import { FOOTER_SOCIAL_LINKS } from "../../constants/footerLinks";
import { useTranslations } from "../../i18n/useTranslations";

export function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-[#1a0a0f] py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-14 h-14 rounded-md flex items-center justify-center">
          {/* <ShoppingBag size={12} className="text-white" aria-hidden="true" /> */}
          <img src={logoLight} alt="" />
          </div>
          <span
            className="text-white/80 text-sm"
            style={{ fontFamily: "'Playfair Display', 'Tajawal', serif", fontWeight: 400 }}
          >
            {t.footer.brand}
          </span>
        </div>

        <div className="flex items-center gap-1">
          {FOOTER_SOCIAL_LINKS.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="w-9 h-9 flex items-center justify-center rounded-lg text-white/40 hover:text-white hover:bg-white/8 transition-all duration-200"
              >
                <Icon size={16} aria-hidden="true" />
              </a>
            );
          })}
        </div>

        <p className="text-white/25 text-xs" style={{ fontFamily: "'Manrope', 'Tajawal', sans-serif" }}>
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
