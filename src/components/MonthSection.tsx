import type { MonthPlan } from "@/data/md-plan";
import ProductCard from "./ProductCard";

const seasonColors: Record<string, string> = {
  冬物: "bg-blue-100 text-blue-800",
  "冬物最終": "bg-blue-50 text-blue-600",
  春物先行: "bg-emerald-50 text-emerald-600",
  春物: "bg-emerald-100 text-emerald-800",
  "春物最終": "bg-emerald-50 text-emerald-600",
  初夏先行: "bg-yellow-50 text-yellow-700",
  初夏物: "bg-yellow-100 text-yellow-800",
  夏物: "bg-orange-100 text-orange-800",
  "夏物最終": "bg-orange-50 text-orange-600",
  秋物先行: "bg-amber-50 text-amber-600",
  秋物: "bg-amber-100 text-amber-800",
  "秋物最終": "bg-amber-50 text-amber-600",
  冬物先行: "bg-blue-50 text-blue-600",
  梅雨対策: "bg-sky-100 text-sky-800",
  ギフト: "bg-pink-100 text-pink-800",
};

function getSeasonColor(label: string) {
  return seasonColors[label] ?? "bg-gray-100 text-gray-700";
}

export default function MonthSection({ plan }: { plan: MonthPlan }) {
  return (
    <section
      id={`month-${plan.month}`}
      className="scroll-mt-20"
    >
      <div className="bg-base-card rounded-2xl border border-brand/10 shadow-[0_1px_3px_rgba(0,0,0,0.03)] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-brand/10 via-brand/5 to-transparent px-6 py-5 border-b border-brand/10">
          <div className="flex items-baseline gap-3">
            <span className="text-[40px] font-bold text-brand leading-none tabular-nums">
              {plan.month}
            </span>
            <span className="text-[15px] text-text-muted font-medium">月</span>
            <h2 className="text-[17px] font-semibold text-text-heading">
              {plan.theme}
            </h2>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* KPI Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <KpiCard label="売上目標" value={plan.salesTarget} />
            <KpiCard label="構成比" value={plan.salesRatio} />
            <KpiCard label="在庫目標" value={plan.inventory.target} />
            <KpiCard label="在庫/売上比" value={plan.inventory.ratio} />
          </div>

          {/* Season Breakdown */}
          <div className="flex flex-wrap gap-2">
            {plan.seasonBreakdown.map((s) => (
              <span
                key={s.label}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-semibold ${getSeasonColor(s.label)}`}
              >
                {s.label}
                <span className="font-normal opacity-75">
                  {s.amount}（{s.ratio}）
                </span>
              </span>
            ))}
          </div>

          {/* Products */}
          <div>
            <h3 className="text-[13px] font-semibold text-text-heading uppercase tracking-wider mb-3">
              注力商品
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {plan.products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>

          {/* Categories & Events */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Categories */}
            <div className="rounded-xl bg-base p-4">
              <h3 className="text-[12px] font-semibold text-text-secondary uppercase tracking-wider mb-2">
                カテゴリ別展開
              </h3>
              <div className="space-y-2">
                {plan.categories.map((cat) => (
                  <div key={cat.name} className="flex items-start gap-2">
                    <span className="text-[12px] font-semibold text-brand min-w-[80px]">
                      {cat.name}
                    </span>
                    <span className="text-[13px] text-text-primary">
                      {cat.items.join("、")}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Events */}
            <div className="rounded-xl bg-base p-4">
              <h3 className="text-[12px] font-semibold text-text-secondary uppercase tracking-wider mb-2">
                イベント・施策
              </h3>
              <div className="flex flex-wrap gap-2">
                {plan.events.map((ev) => (
                  <span
                    key={ev}
                    className="px-2.5 py-1 rounded-lg bg-brand/10 text-[12px] font-medium text-brand-dark"
                  >
                    {ev}
                  </span>
                ))}
              </div>
              {plan.notes.length > 0 && (
                <ul className="mt-3 space-y-1">
                  {plan.notes.map((note) => (
                    <li
                      key={note}
                      className="text-[12px] text-text-secondary flex items-start gap-1.5"
                    >
                      <span className="text-brand mt-0.5">●</span>
                      {note}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function KpiCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-base px-4 py-3 border border-brand/5">
      <p className="text-[11px] font-medium text-text-muted uppercase tracking-wider">
        {label}
      </p>
      <p className="mt-1 text-[20px] font-bold text-text-heading tabular-nums leading-tight">
        {value}
      </p>
    </div>
  );
}
