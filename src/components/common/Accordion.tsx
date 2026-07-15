import { useState } from "react";
import { Plus } from "lucide-react";

interface PolicyItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: readonly PolicyItem[];
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\u0600-\u06FF]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const baseId = `accordion-${slugify(item.question)}-${i}`;
        const buttonId = `${baseId}-button`;
        const panelId = `${baseId}-panel`;
        return (
          <div
            key={item.question}
            className="bg-white rounded-[22px] border border-[rgba(90,0,24,0.08)] shadow-[0_2px_20px_rgba(90,0,24,0.05)] overflow-hidden transition-shadow duration-300"
          >
            <button
              id={buttonId}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left"
            >
              <span
                className="text-base text-foreground"
                style={{ fontFamily: "'Playfair Display', 'Tajawal', serif", fontWeight: 500 }}
              >
                {item.question}
              </span>
              <span
                className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#5A0018]/8 flex items-center justify-center transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                <Plus size={15} className="text-[#5A0018]" aria-hidden="true" />
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="grid transition-all duration-300 ease-in-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="text-muted-foreground text-sm leading-relaxed px-7 pb-6">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
