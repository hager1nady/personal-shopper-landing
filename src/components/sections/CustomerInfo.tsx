import { useState } from "react";
import type { FormEvent } from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { FadeUp } from "../common/FadeUp";
import { GoldBar } from "../common/GoldBar";
import { SectionLabel } from "../common/SectionLabel";
import { WHATSAPP_NUMBER } from "../../constants/links";
import { useTranslations } from "../../i18n/useTranslations";
import { useLanguage } from "../../i18n/LanguageContext";
import {
  CUSTOMER_INFO_INITIAL_STATE,
  SAUDI_REGIONS,
  getRegionLabel,
  getCityLabel,
  validateCustomerInfoField,
  validateCustomerInfoForm,
} from "./customerInfo.helpers";
import type { CustomerInfoForm } from "./customerInfo.helpers";

function buildWhatsAppMessage(data: CustomerInfoForm) {
  return [
    "السلام عليكم،",
    "لدي طلب جديد.",
    "👤 الاسم:",
    data.fullName.trim().replace(/\s+/g, " "),
    "📞 رقم الجوال:",
    data.mobileNumber.trim().replace(/[\s-]/g, ""),
    "📍 المنطقة:",
    getRegionLabel(data.region, "ar"),
    "🏙️ المدينة:",
    getCityLabel(data.region, data.city, "ar"),
    "🏠 موقع التوصيل:",
    data.deliveryAddress.trim().replace(/\s+/g, " "),
    "🛍️ تفاصيل الطلب:",
    data.shoppingRequest.trim() || "-",
  ].join("\n");
}

const inputClasses =
  "w-full bg-input-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-[#5A0018] transition-colors duration-200";
const inputErrorClasses = "border-destructive focus:border-destructive";

export function CustomerInfo() {
  const t = useTranslations();
  const { lang } = useLanguage();
  const [form, setForm] = useState<CustomerInfoForm>(CUSTOMER_INFO_INITIAL_STATE);
  const [errors, setErrors] = useState<Partial<Record<keyof CustomerInfoForm, string>>>({});

  function handleChange(field: keyof CustomerInfoForm, value: string) {
    setForm((prev) => {
      const next = { ...prev, [field]: value };
      if (field === "region") next.city = "";
      return next;
    });

    setErrors((prev) => {
      if (!prev[field] && field !== "region") return prev;
      const next = { ...prev };
      const fieldError = validateCustomerInfoField(field, value, lang);
      if (fieldError) {
        next[field] = fieldError;
      } else {
        delete next[field];
      }
      if (field === "region") delete next.city;
      return next;
    });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const nextErrors = validateCustomerInfoForm(form, lang);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    const message = buildWhatsAppMessage(form);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const fieldLabel = (id: string, text: string, required: boolean) => (
    <label
      htmlFor={id}
      className="block text-sm text-foreground mb-2"
      style={{ fontFamily: "'Manrope', 'Tajawal', sans-serif", fontWeight: 600 }}
    >
      {text}
      {required ? <span className="text-[#5A0018]"> *</span> : (
        <span className="text-muted-foreground font-normal"> ({t.customerInfo.optional})</span>
      )}
    </label>
  );

  const selectedRegion = SAUDI_REGIONS.find((r) => r.id === form.region);

  return (
    <section id="customer-info" className="bg-background py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-2xl mx-auto">
        <FadeUp className="text-center mb-14">
          <GoldBar />
          <SectionLabel text={t.customerInfo.label} />
          <h2
            className="text-3xl md:text-5xl text-foreground"
            style={{ fontFamily: "'Playfair Display', 'Tajawal', serif", fontWeight: 400 }}
          >
            {t.customerInfo.titleMain}{" "}
            <em className="text-[#5A0018] not-italic">{t.customerInfo.titleEm}</em>
          </h2>
          <p className="text-muted-foreground text-sm mt-4 max-w-lg mx-auto leading-relaxed">
            {t.customerInfo.subtitle}
          </p>
        </FadeUp>

        <FadeUp delay={100}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-white rounded-[22px] p-8 md:p-10 border border-[rgba(90,0,24,0.08)] shadow-[0_2px_20px_rgba(90,0,24,0.05)]"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                {fieldLabel("fullName", t.customerInfo.fullName, true)}
                <input
                  id="fullName"
                  type="text"
                  value={form.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  aria-required="true"
                  aria-invalid={!!errors.fullName}
                  aria-describedby={errors.fullName ? "fullName-error" : undefined}
                  className={`${inputClasses} ${errors.fullName ? inputErrorClasses : ""}`}
                />
                {errors.fullName && (
                  <p id="fullName-error" className="text-destructive text-xs mt-1.5">{errors.fullName}</p>
                )}
              </div>

              <div>
                {fieldLabel("mobileNumber", t.customerInfo.mobileNumber, true)}
                <input
                  id="mobileNumber"
                  type="tel"
                  value={form.mobileNumber}
                  onChange={(e) => handleChange("mobileNumber", e.target.value)}
                  placeholder="05XXXXXXXX"
                  aria-required="true"
                  aria-invalid={!!errors.mobileNumber}
                  aria-describedby={errors.mobileNumber ? "mobileNumber-error" : undefined}
                  className={`${inputClasses} ${errors.mobileNumber ? inputErrorClasses : ""}`}
                />
                {errors.mobileNumber && (
                  <p id="mobileNumber-error" className="text-destructive text-xs mt-1.5">{errors.mobileNumber}</p>
                )}
              </div>

              <div>
                {fieldLabel("region", t.customerInfo.region, true)}
                <select
                  id="region"
                  value={form.region}
                  onChange={(e) => handleChange("region", e.target.value)}
                  aria-required="true"
                  aria-invalid={!!errors.region}
                  aria-describedby={errors.region ? "region-error" : undefined}
                  className={`${inputClasses} ${errors.region ? inputErrorClasses : ""}`}
                >
                  <option value="" disabled>
                    {lang === "ar" ? "اختر المنطقة" : "Select region"}
                  </option>
                  {SAUDI_REGIONS.map((region) => (
                    <option key={region.id} value={region.id}>
                      {lang === "ar" ? region.ar : region.en}
                    </option>
                  ))}
                </select>
                {errors.region && (
                  <p id="region-error" className="text-destructive text-xs mt-1.5">{errors.region}</p>
                )}
              </div>

              <div>
                {fieldLabel("city", t.customerInfo.city, true)}
                <select
                  id="city"
                  value={form.city}
                  onChange={(e) => handleChange("city", e.target.value)}
                  disabled={!selectedRegion}
                  aria-required="true"
                  aria-invalid={!!errors.city}
                  aria-describedby={errors.city ? "city-error" : undefined}
                  className={`${inputClasses} ${errors.city ? inputErrorClasses : ""} ${!selectedRegion ? "opacity-60 cursor-not-allowed" : ""}`}
                >
                  <option value="" disabled>
                    {lang === "ar" ? "اختر المدينة" : "Select city"}
                  </option>
                  {selectedRegion?.cities.map((city) => (
                    <option key={city.id} value={city.id}>
                      {lang === "ar" ? city.ar : city.en}
                    </option>
                  ))}
                </select>
                {errors.city && (
                  <p id="city-error" className="text-destructive text-xs mt-1.5">{errors.city}</p>
                )}
              </div>

              <div className="sm:col-span-2">
                {fieldLabel("deliveryAddress", t.customerInfo.deliveryAddress, true)}
                <textarea
                  id="deliveryAddress"
                  rows={2}
                  value={form.deliveryAddress}
                  onChange={(e) => handleChange("deliveryAddress", e.target.value)}
                  aria-required="true"
                  aria-invalid={!!errors.deliveryAddress}
                  aria-describedby={errors.deliveryAddress ? "deliveryAddress-error" : undefined}
                  className={`${inputClasses} resize-none ${errors.deliveryAddress ? inputErrorClasses : ""}`}
                />
                {errors.deliveryAddress && (
                  <p id="deliveryAddress-error" className="text-destructive text-xs mt-1.5">{errors.deliveryAddress}</p>
                )}
              </div>

              <div className="sm:col-span-2">
                {fieldLabel("shoppingRequest", t.customerInfo.shoppingRequest, false)}
                <textarea
                  id="shoppingRequest"
                  rows={4}
                  value={form.shoppingRequest}
                  onChange={(e) => handleChange("shoppingRequest", e.target.value)}
                  aria-invalid={!!errors.shoppingRequest}
                  aria-describedby={errors.shoppingRequest ? "shoppingRequest-error" : undefined}
                  className={`${inputClasses} resize-none ${errors.shoppingRequest ? inputErrorClasses : ""}`}
                />
                {errors.shoppingRequest && (
                  <p id="shoppingRequest-error" className="text-destructive text-xs mt-1.5">{errors.shoppingRequest}</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="group w-full sm:w-auto mt-8 inline-flex items-center justify-center gap-2.5 bg-[#5A0018] hover:bg-[#4a0013] text-white px-9 py-4 rounded-2xl text-sm tracking-wide transition-all duration-300 shadow-[0_6px_24px_rgba(90,0,24,0.3)] hover:shadow-[0_10px_36px_rgba(90,0,24,0.45)] hover:-translate-y-0.5"
              style={{ fontFamily: "'Manrope', 'Tajawal', sans-serif", fontWeight: 700 }}
            >
              <MessageCircle size={17} aria-hidden="true" />
              {t.customerInfo.submit}
              <ArrowRight size={15} aria-hidden="true" className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </button>
          </form>
        </FadeUp>
      </div>
    </section>
  );
}
