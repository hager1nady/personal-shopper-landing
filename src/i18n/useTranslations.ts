import { useLanguage } from "./LanguageContext";
import { TRANSLATIONS } from "./translations";

export function useTranslations() {
  const { lang } = useLanguage();
  return TRANSLATIONS[lang];
}
