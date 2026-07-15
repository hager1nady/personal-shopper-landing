import { useLanguage } from "../../i18n/LanguageContext";

interface LanguageSwitcherProps {
  scrolled?: boolean;
  variant?: "header" | "mobile";
}

export function LanguageSwitcher({ scrolled, variant = "header" }: LanguageSwitcherProps) {
  const { lang, setLang } = useLanguage();

  const baseBtn =
    "px-2.5 py-1 text-xs rounded-md transition-colors duration-200";

  const wrapperClass =
    variant === "header"
      ? `flex items-center rounded-lg border overflow-hidden ${
          scrolled ? "border-foreground/15" : "border-white/30"
        }`
      : "inline-flex items-center rounded-lg border border-border overflow-hidden";

  const inactiveText =
    variant === "header" && !scrolled ? "text-white/70" : "text-foreground/60";

  return (
    <div
      className={wrapperClass}
      style={{ fontFamily: "'Manrope', 'Tajawal', sans-serif", fontWeight: 600 }}
      role="group"
      aria-label="Language"
    >
      <button
        onClick={() => setLang("en")}
        className={`${baseBtn} ${lang === "en" ? "bg-[#5A0018] text-white" : inactiveText}`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <button
        onClick={() => setLang("ar")}
        className={`${baseBtn} ${lang === "ar" ? "bg-[#5A0018] text-white" : inactiveText}`}
        aria-pressed={lang === "ar"}
      >
        AR
      </button>
    </div>
  );
}
