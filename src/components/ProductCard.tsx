import type { Product } from "@/data/md-plan";

const tagStyles: Record<Product["tag"], { label: string; bg: string; text: string }> = {
  ace: { label: "エース", bg: "bg-brand", text: "text-white" },
  repush: { label: "再プッシュ", bg: "bg-text-secondary", text: "text-white" },
  limited: { label: "限定", bg: "bg-rakuten", text: "text-white" },
  new: { label: "NEW", bg: "bg-official", text: "text-white" },
};

export default function ProductCard({ product }: { product: Product }) {
  const tag = tagStyles[product.tag];

  return (
    <a
      href={product.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl border border-brand/20 bg-base-card shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-shadow duration-300 overflow-hidden"
    >
      <div className="relative aspect-[4/5] bg-base overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span
          className={`absolute top-2 left-2 px-2 py-0.5 rounded-full text-[11px] font-semibold ${tag.bg} ${tag.text}`}
        >
          {tag.label}
        </span>
      </div>
      <div className="p-3">
        <p className="text-[11px] font-mono text-text-muted tracking-wider uppercase">
          {product.id}
        </p>
        <p className="mt-0.5 text-[13px] font-medium text-text-heading leading-tight truncate">
          {product.name}
        </p>
      </div>
    </a>
  );
}
