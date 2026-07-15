import { MessageCircle, Menu, X } from "lucide-react";
import { NAV_HREFS } from "../../constants/navigation";
import { WHATSAPP_URL } from "../../constants/links";
import { useScrolled } from "../../hooks/useScrolled";
import { useSmoothScrollNav } from "../../hooks/useSmoothScrollNav";
import { useTranslations } from "../../i18n/useTranslations";
import { LanguageSwitcher } from "../common/LanguageSwitcher";
import logoLight from "../../assets/logo-light.png";
import logoDark from "../../assets/logo-dark.png";

export function Header() {
  const scrolled = useScrolled(60);
  const { menuOpen, setMenuOpen, scrollTo } = useSmoothScrollNav();
  const t = useTranslations();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_2px_24px_rgba(90,0,24,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <button onClick={() => scrollTo("#hero")} className="flex items-center group">
          <span className="relative h-9 md:h-10 w-12 md:w-14 inline-block">
            <img
              src={logoLight}
              alt={t.header.brand}
              className={`absolute inset-0 m-auto h-full w-auto object-contain transition-opacity duration-500 ${
                scrolled ? "opacity-0" : "opacity-100"
              }`}
            />
            <img
              src={logoDark}
              alt={t.header.brand}
              className={`absolute inset-0 m-auto h-full w-auto object-contain transition-opacity duration-500 ${
                scrolled ? "opacity-100" : "opacity-0"
              }`}
            />
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
          {NAV_HREFS.map((href, i) => (
            <button
              key={href}
              onClick={() => scrollTo(href)}
              className={`text-xs tracking-wide transition-colors duration-200 hover:text-[#5A0018] ${
                scrolled ? "text-foreground/70" : "text-white/80"
              }`}
              style={{ fontFamily: "'Manrope', 'Tajawal', sans-serif", fontWeight: 500 }}
            >
              {t.nav.items[i]}
            </button>
          ))}
        </nav>

        {/* Language switcher + CTA + burger */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher scrolled={scrolled} />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-[#5A0018] hover:bg-[#4a0013] text-white px-5 py-2.5 rounded-xl text-xs tracking-wide transition-all duration-300 hover:shadow-[0_4px_20px_rgba(90,0,24,0.4)]"
            style={{ fontFamily: "'Manrope', 'Tajawal', sans-serif", fontWeight: 600 }}
          >
            <MessageCircle size={14} aria-hidden="true" />
            {t.header.whatsappShort}
          </a>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className={`md:hidden transition-colors duration-200 ${
              scrolled ? "text-foreground" : "text-white"
            }`}
          >
            {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="md:hidden bg-white/98 backdrop-blur-lg border-t border-border px-6 py-5 flex flex-col gap-4 shadow-xl"
        >
          {NAV_HREFS.map((href, i) => (
            <button
              key={href}
              onClick={() => scrollTo(href)}
              className="text-left text-sm text-foreground/80 hover:text-[#5A0018] transition-colors py-1"
              style={{ fontFamily: "'Manrope', 'Tajawal', sans-serif", fontWeight: 500 }}
            >
              {t.nav.items[i]}
            </button>
          ))}
          <div className="pt-1">
            <LanguageSwitcher variant="mobile" />
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#5A0018] text-white px-5 py-3 rounded-xl text-sm mt-2"
            style={{ fontFamily: "'Manrope', 'Tajawal', sans-serif", fontWeight: 600 }}
          >
            <MessageCircle size={16} aria-hidden="true" />
            {t.header.whatsappOrder}
          </a>
        </nav>
      )}
    </header>
  );
}
