"use client";

import type { Product } from "@/data/types";

const tierStyles: Record<Product["tier"], { label: string; bg: string }> = {
  S: { label: "S", bg: "bg-gradient-to-r from-amber-500 to-amber-600 text-white" },
  A: { label: "A", bg: "bg-gradient-to-r from-brand to-brand-dark text-white" },
  B: { label: "B", bg: "bg-text-secondary text-white" },
  restock: { label: "再入荷", bg: "bg-emerald-600 text-white" },
  maker: { label: "仕入", bg: "bg-official text-white" },
};

/** 画像URLまたはIDから品番を抽出 */
function extractProductCode(product: Product): string {
  const idBase = product.id.split(":")[0].trim().toLowerCase();
  if (/^(nltp|nlpt|nlwp|nlbi|nl0|nlc0|nlsk|nlda|nlot|nlxn|nlim)/.test(idBase)) {
    return product.id;
  }
  const match = product.imageUrl.match(/\/([a-z]{2,4}\d{2,}[a-z]?)-/i);
  if (match) return match[1];
  return product.id.replace(/[:：].*$/, "").trim();
}

function FourAxisBadge({ label, value }: { label: string; value: string }) {
  const color =
    value === "◎" ? "text-emerald-600" : value === "○" ? "text-brand" : "text-text-muted";
  return (
    <span className="inline-flex items-center gap-0.5 text-[11px]">
      <span className="text-text-muted">{label}</span>
      <span className={`font-bold ${color}`}>{value}</span>
    </span>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  const tier = tierStyles[product.tier];
  const productCode = extractProductCode(product);

  return (
    <div className="group rounded-xl border border-brand/15 bg-base-card shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] transition-all duration-300 overflow-hidden">
      {/* Image → links to product page */}
      <a
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative aspect-[4/5] bg-base overflow-hidden cursor-pointer"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            const img = e.currentTarget;
            if (!img.dataset.fallback) {
              img.dataset.fallback = "1";
              img.src = `https://placehold.co/400x500/F8F6F3/C4A882?text=${encodeURIComponent(productCode)}`;
            }
          }}
        />
        <span
          className={`absolute top-2 left-2 px-2 py-0.5 rounded-md text-[11px] font-bold ${tier.bg} shadow-sm`}
        >
          {tier.label}
        </span>
      </a>

      {/* Info — text is selectable/copyable */}
      <div className="p-3 space-y-1.5">
        <p className="text-[13px] font-mono text-brand-dark font-bold tracking-wider leading-tight select-all cursor-text">
          {productCode}
        </p>
        <p className="text-[14px] font-semibold text-text-heading leading-tight line-clamp-2">
          {product.name}
        </p>

        {/* Price & Units */}
        {(product.price || product.units) && (
          <div className="flex items-center gap-2 flex-wrap">
            {product.price && (
              <span className="text-[14px] font-bold text-text-primary">{product.price}</span>
            )}
            {product.colors && product.units && (
              <span className="text-[12px] text-text-muted">
                {product.colors}色×{Math.round(product.units / product.colors)}={product.units}枚
              </span>
            )}
            {product.cost && (
              <span className="text-[12px] text-text-secondary bg-base px-1.5 py-0.5 rounded">
                原価 {product.cost}
              </span>
            )}
          </div>
        )}

        {/* Sales Record */}
        {product.salesRecord && (
          <p className="text-[12px] text-text-secondary leading-snug">
            {product.salesRecord}
          </p>
        )}

        {/* 4-Axis */}
        {product.fourAxis && (
          <div className="flex items-center gap-1.5 pt-1.5 border-t border-brand/5 flex-wrap">
            <FourAxisBadge label="ZOZO" value={product.fourAxis.zozo} />
            <FourAxisBadge label="楽天" value={product.fourAxis.rakuten} />
            <FourAxisBadge label="トレンド" value={product.fourAxis.trend} />
            <FourAxisBadge label="自社" value={product.fourAxis.internal} />
          </div>
        )}
      </div>
    </div>
  );
}
