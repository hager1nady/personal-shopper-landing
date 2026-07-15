export interface CustomerInfoForm {
  fullName: string;
  mobileNumber: string;
  region: string;
  city: string;
  deliveryAddress: string;
  shoppingRequest: string;
}

export const CUSTOMER_INFO_INITIAL_STATE: CustomerInfoForm = {
  fullName: "",
  mobileNumber: "",
  region: "",
  city: "",
  deliveryAddress: "",
  shoppingRequest: "",
};

export interface RegionOption {
  id: string;
  en: string;
  ar: string;
  cities: { id: string; en: string; ar: string }[];
}

// A representative (non-exhaustive) list of Saudi regions and their main cities,
// sufficient for a simple dependent region -> city dropdown.
export const SAUDI_REGIONS: RegionOption[] = [
  {
    id: "riyadh",
    en: "Riyadh",
    ar: "الرياض",
    cities: [
      { id: "riyadh-city", en: "Riyadh", ar: "الرياض" },
      { id: "al-kharj", en: "Al-Kharj", ar: "الخرج" },
      { id: "al-dawadmi", en: "Al-Dawadmi", ar: "الدوادمي" },
      { id: "al-majmaah", en: "Al-Majmaah", ar: "المجمعة" },
      { id: "az-zulfi", en: "Az-Zulfi", ar: "الزلفي" },
      { id: "wadi-ad-dawasir", en: "Wadi Ad-Dawasir", ar: "وادي الدواسر" },
    ],
  },
  {
    id: "makkah",
    en: "Makkah",
    ar: "مكة المكرمة",
    cities: [
      { id: "makkah-city", en: "Makkah", ar: "مكة المكرمة" },
      { id: "jeddah", en: "Jeddah", ar: "جدة" },
      { id: "taif", en: "Taif", ar: "الطائف" },
      { id: "rabigh", en: "Rabigh", ar: "رابغ" },
      { id: "al-qunfudhah", en: "Al-Qunfudhah", ar: "القنفذة" },
    ],
  },
  {
    id: "madinah",
    en: "Madinah",
    ar: "المدينة المنورة",
    cities: [
      { id: "madinah-city", en: "Madinah", ar: "المدينة المنورة" },
      { id: "yanbu", en: "Yanbu", ar: "ينبع" },
      { id: "alula", en: "AlUla", ar: "العلا" },
      { id: "badr", en: "Badr", ar: "بدر" },
    ],
  },
  {
    id: "eastern",
    en: "Eastern Province",
    ar: "المنطقة الشرقية",
    cities: [
      { id: "dammam", en: "Dammam", ar: "الدمام" },
      { id: "al-khobar", en: "Al-Khobar", ar: "الخبر" },
      { id: "dhahran", en: "Dhahran", ar: "الظهران" },
      { id: "al-ahsa", en: "Al-Ahsa", ar: "الأحساء" },
      { id: "jubail", en: "Jubail", ar: "الجبيل" },
      { id: "qatif", en: "Qatif", ar: "القطيف" },
      { id: "hafr-al-batin", en: "Hafr Al-Batin", ar: "حفر الباطن" },
    ],
  },
  {
    id: "asir",
    en: "Asir",
    ar: "عسير",
    cities: [
      { id: "abha", en: "Abha", ar: "أبها" },
      { id: "khamis-mushait", en: "Khamis Mushait", ar: "خميس مشيط" },
      { id: "bisha", en: "Bisha", ar: "بيشة" },
      { id: "an-namas", en: "An-Namas", ar: "النماص" },
    ],
  },
  {
    id: "tabuk",
    en: "Tabuk",
    ar: "تبوك",
    cities: [
      { id: "tabuk-city", en: "Tabuk", ar: "تبوك" },
      { id: "al-wajh", en: "Al-Wajh", ar: "الوجه" },
      { id: "duba", en: "Duba", ar: "ضباء" },
    ],
  },
  {
    id: "hail",
    en: "Hail",
    ar: "حائل",
    cities: [
      { id: "hail-city", en: "Hail", ar: "حائل" },
      { id: "baqaa", en: "Baqaa", ar: "بقعاء" },
    ],
  },
  {
    id: "northern-borders",
    en: "Northern Borders",
    ar: "الحدود الشمالية",
    cities: [
      { id: "arar", en: "Arar", ar: "عرعر" },
      { id: "rafha", en: "Rafha", ar: "رفحاء" },
      { id: "turaif", en: "Turaif", ar: "طريف" },
    ],
  },
  {
    id: "jazan",
    en: "Jazan",
    ar: "جازان",
    cities: [
      { id: "jazan-city", en: "Jazan", ar: "جازان" },
      { id: "sabya", en: "Sabya", ar: "صبيا" },
      { id: "abu-arish", en: "Abu Arish", ar: "أبو عريش" },
    ],
  },
  {
    id: "najran",
    en: "Najran",
    ar: "نجران",
    cities: [
      { id: "najran-city", en: "Najran", ar: "نجران" },
      { id: "sharurah", en: "Sharurah", ar: "شرورة" },
    ],
  },
  {
    id: "al-bahah",
    en: "Al-Bahah",
    ar: "الباحة",
    cities: [
      { id: "al-bahah-city", en: "Al-Bahah", ar: "الباحة" },
      { id: "baljurashi", en: "Baljurashi", ar: "بلجرشي" },
    ],
  },
  {
    id: "al-jouf",
    en: "Al-Jouf",
    ar: "الجوف",
    cities: [
      { id: "sakaka", en: "Sakaka", ar: "سكاكا" },
      { id: "dumat-al-jandal", en: "Dumat Al-Jandal", ar: "دومة الجندل" },
      { id: "qurayyat", en: "Qurayyat", ar: "القريات" },
    ],
  },
  {
    id: "qassim",
    en: "Qassim",
    ar: "القصيم",
    cities: [
      { id: "buraidah", en: "Buraidah", ar: "بريدة" },
      { id: "unaizah", en: "Unaizah", ar: "عنيزة" },
      { id: "ar-rass", en: "Ar-Rass", ar: "الرس" },
    ],
  },
];

export function getRegionLabel(regionId: string, lang: "en" | "ar"): string {
  const region = SAUDI_REGIONS.find((r) => r.id === regionId);
  if (!region) return "";
  return lang === "ar" ? region.ar : region.en;
}

export function getCityLabel(regionId: string, cityId: string, lang: "en" | "ar"): string {
  const region = SAUDI_REGIONS.find((r) => r.id === regionId);
  const city = region?.cities.find((c) => c.id === cityId);
  if (!city) return "";
  return lang === "ar" ? city.ar : city.en;
}

// Validation messages kept local to this form only — translations.ts is not touched.
const VALIDATION_TEXT = {
  en: {
    required: "This field is required.",
    nameMin: "Full name must be at least 3 characters.",
    nameOnlyNumbers: "Full name cannot contain only numbers.",
    nameOnlySymbols: "Full name cannot contain only symbols.",
    mobileInvalid: "Enter a valid Saudi mobile number (e.g. 05XXXXXXXX).",
    addressMin: "Delivery address must be at least 10 characters.",
    requestMin: "If entered, this must be at least 5 characters.",
  },
  ar: {
    required: "هذا الحقل مطلوب.",
    nameMin: "يجب ألا يقل الاسم الكامل عن 3 أحرف.",
    nameOnlyNumbers: "لا يمكن أن يتكون الاسم الكامل من أرقام فقط.",
    nameOnlySymbols: "لا يمكن أن يتكون الاسم الكامل من رموز فقط.",
    mobileInvalid: "يرجى إدخال رقم جوال سعودي صحيح (مثال: 05XXXXXXXX).",
    addressMin: "يجب ألا يقل عنوان التوصيل عن 10 أحرف.",
    requestMin: "إذا تم إدخاله، يجب ألا يقل عن 5 أحرف.",
  },
} as const;

const SAUDI_MOBILE_REGEX = /^(05\d{8}|\+?9665\d{8})$/;

function validateFullName(value: string, lang: "en" | "ar"): string | null {
  const msg = VALIDATION_TEXT[lang];
  const trimmed = value.trim().replace(/\s+/g, " ");
  if (!trimmed) return msg.required;
  if (trimmed.length < 3) return msg.nameMin;
  if (/^[0-9]+$/.test(trimmed)) return msg.nameOnlyNumbers;
  if (!/\p{L}/u.test(trimmed)) return msg.nameOnlySymbols;
  return null;
}

function validateMobileNumber(value: string, lang: "en" | "ar"): string | null {
  const msg = VALIDATION_TEXT[lang];
  const cleaned = value.trim().replace(/[\s-]/g, "");
  if (!cleaned) return msg.required;
  if (!SAUDI_MOBILE_REGEX.test(cleaned)) return msg.mobileInvalid;
  return null;
}

function validateRegion(value: string, lang: "en" | "ar"): string | null {
  const msg = VALIDATION_TEXT[lang];
  return value ? null : msg.required;
}

function validateCity(value: string, lang: "en" | "ar"): string | null {
  const msg = VALIDATION_TEXT[lang];
  return value ? null : msg.required;
}

function validateDeliveryAddress(value: string, lang: "en" | "ar"): string | null {
  const msg = VALIDATION_TEXT[lang];
  const trimmed = value.trim().replace(/\s+/g, " ");
  if (!trimmed) return msg.required;
  if (trimmed.length < 10) return msg.addressMin;
  return null;
}

function validateShoppingRequest(value: string, lang: "en" | "ar"): string | null {
  const msg = VALIDATION_TEXT[lang];
  const trimmed = value.trim().replace(/\s+/g, " ");
  if (!trimmed) return null; // optional
  if (trimmed.length < 5) return msg.requestMin;
  return null;
}

const VALIDATORS: Record<keyof CustomerInfoForm, (value: string, lang: "en" | "ar") => string | null> = {
  fullName: validateFullName,
  mobileNumber: validateMobileNumber,
  region: validateRegion,
  city: validateCity,
  deliveryAddress: validateDeliveryAddress,
  shoppingRequest: validateShoppingRequest,
};

export function validateCustomerInfoField(
  field: keyof CustomerInfoForm,
  value: string,
  lang: "en" | "ar"
): string | null {
  return VALIDATORS[field](value, lang);
}

export function validateCustomerInfoForm(
  form: CustomerInfoForm,
  lang: "en" | "ar"
): Partial<Record<keyof CustomerInfoForm, string>> {
  const errors: Partial<Record<keyof CustomerInfoForm, string>> = {};
  (Object.keys(VALIDATORS) as (keyof CustomerInfoForm)[]).forEach((field) => {
    const error = VALIDATORS[field](form[field], lang);
    if (error) errors[field] = error;
  });
  return errors;
}
