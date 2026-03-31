import type { Product } from "@/data/md-plan";

const tierStyles: Record<Product["tier"], { label: string; bg: string }> = {
  S: { label: "S", bg: "bg-gradient-to-r from-amber-500 to-amber-600 text-white" },
  A: { label: "A", bg: "bg-gradient-to-r from-brand to-brand-dark text-white" },
  B: { label: "B", bg: "bg-text-secondary text-white" },
  restock: { label: "再入荷", bg: "bg-emerald-600 text-white" },
  maker: { label: "仕入", bg: "bg-official text-white" },
};

function FourAxisBadge({ label, value }: { label: string; value: string }) {
  const color =
    value === "◎" ? "text-emerald-600" : value === "○" ? "text-brand" : "text-text-muted";
  return (
    <span className="inline-flex items-center gap-0.5 text-[10px]">
      <span className="text-text-muted">{label}</span>
      <span className={`font-bold ${color}`}>{value}</span>
    </span>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  const tier = tierStyles[product.tier];

  return (
    <a
      href={product.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl border border-brand/15 bg-base-card shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] transition-all duration-300 overflow-hidden"
    >
      {/* Image */}
      <div className="relative aspect-[4/5] bg-base overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span
          className={`absolute top-2 left-2 px-2 py-0.5 rounded-md text-[11px] font-bold ${tier.bg} shadow-sm`}
        >
          {tier.label}
        </span>
      </div>

      {/* Info */}
      <div className="p-3 space-y-1.5">
        <p className="text-[11px] font-mono text-text-muted tracking-wider leading-tight">
          {product.id}
        </p>
        <p className="text-[13px] font-semibold text-text-heading leading-tight line-clamp-2">
          {product.name}
        </p>

        {/* Price & Units */}
        {(product.price || product.units) && (
          <div className="flex items-center gap-2 flex-wrap">
            {product.price && (
              <span className="text-[12px] font-bold text-text-primary">{product.price}</span>
            )}
            {product.colors && product.units && (
              <span className="text-[10px] text-text-muted">
                {product.colors}色×{Math.round(product.units / product.colors)}={product.units}枚
              </span>
            )}
            {product.cost && (
              <span className="text-[10px] text-text-secondary bg-base px-1.5 py-0.5 rounded">
                原価 {product.cost}
              </span>
            )}
          </div>
        )}

        {/* Sales Record */}
        {product.salesRecord && (
          <p className="text-[10px] text-text-secondary leading-tight">
            {product.salesRecord}
          </p>
        )}

        {/* 4-Axis */}
        {product.fourAxis && (
          <div className="flex items-center gap-2 pt-1 border-t border-brand/5">
            <FourAxisBadge label="Z" value={product.fourAxis.zozo} />
            <FourAxisBadge label="R" value={product.fourAxis.rakuten} />
            <FourAxisBadge label="T" value={product.fourAxis.trend} />
            <FourAxisBadge label="内" value={product.fourAxis.internal} />
          </div>
        )}
      </div>
    </a>
  );
}
