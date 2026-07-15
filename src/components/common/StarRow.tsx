import { Star } from "lucide-react";

interface StarRowProps {
  count: number;
}

export function StarRow({ count }: StarRowProps) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} className="fill-[#C9A227] text-[#C9A227]" aria-hidden="true" />
      ))}
    </div>
  );
}
