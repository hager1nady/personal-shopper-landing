interface SectionLabelProps {
  text: string;
}

export function SectionLabel({ text }: SectionLabelProps) {
  return (
    <p
      className="text-xs tracking-[0.28em] uppercase text-muted-foreground mb-3"
      style={{ fontFamily: "'Manrope', 'Tajawal', sans-serif", fontWeight: 600 }}
    >
      {text}
    </p>
  );
}
