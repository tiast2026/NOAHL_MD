import type { MonthPlan } from "@/data/types";
import ProductCard from "./ProductCard";

/* ── Season Color Map ── */
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

/* ── Reusable Section Header ── */
function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[13px] font-bold text-text-heading tracking-wide flex items-center gap-2 mb-3">
      <span className="w-1 h-4 bg-brand rounded-full" />
      {children}
    </h3>
  );
}

export default function MonthSection({ plan }: { plan: MonthPlan }) {
  const sTier = plan.products.filter((p) => p.tier === "S");
  const aTier = plan.products.filter((p) => p.tier === "A");
  const bTier = plan.products.filter((p) => p.tier === "B");
  const makerTier = plan.products.filter((p) => p.tier === "maker");

  return (
    <section id={`month-${plan.month}`} className="scroll-mt-20">
      <div className="bg-base-card rounded-2xl border border-brand/10 shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden">
        {/* ── Header ── */}
        <div className="relative bg-gradient-to-r from-brand/12 via-brand/5 to-transparent px-6 py-6 border-b border-brand/10">
          <div className="flex items-end gap-3 mb-1">
            <span className="text-[48px] font-extrabold text-brand leading-none tabular-nums">
              {plan.month}
            </span>
            <span className="text-[16px] text-text-muted font-medium mb-1">月</span>
            <div className="ml-1 mb-1">
              <h2 className="text-[20px] font-bold text-text-heading leading-tight">
                {plan.theme}
              </h2>
              {plan.subTheme && (
                <p className="text-[12px] text-text-secondary mt-0.5">{plan.subTheme}</p>
              )}
            </div>
          </div>
        </div>

        <div className="p-6 space-y-8">
          {/* ── KPI Row ── */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <KpiCard label="売上目標" value={plan.salesTarget} accent />
            <KpiCard label="構成比" value={plan.salesRatio} />
            <KpiCard label="在庫目標" value={plan.inventory.target} />
            <KpiCard label="在庫/売上比" value={plan.inventory.ratio} />
          </div>

          {/* ── Season Breakdown ── */}
          <div className="flex flex-wrap gap-2">
            {plan.seasonBreakdown.map((s) => (
              <span
                key={s.label}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-semibold ${getSeasonColor(s.label)}`}
              >
                {s.label}
                <span className="font-normal opacity-80">
                  {s.amount}（{s.ratio}）
                </span>
              </span>
            ))}
          </div>

          {/* ── Products by Tier ── */}
          {sTier.length > 0 && (
            <div>
              <SectionHeader>S級（主力商品）</SectionHeader>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {sTier.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}

          {aTier.length > 0 && (
            <div>
              <SectionHeader>A級</SectionHeader>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {aTier.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}

          {bTier.length > 0 && (
            <div>
              <SectionHeader>B級</SectionHeader>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {bTier.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}

          {makerTier.length > 0 && (
            <div>
              <SectionHeader>メーカー仕入</SectionHeader>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {makerTier.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}

          {/* ── Weekly Plan ── */}
          {plan.weeklyPlan && plan.weeklyPlan.length > 0 && (
            <div>
              <SectionHeader>週別ロールアウト</SectionHeader>
              <div className="overflow-x-auto -mx-2">
                <table className="w-full text-[12px]">
                  <thead>
                    <tr className="bg-base">
                      <th className="text-left px-3 py-2 font-semibold text-text-secondary rounded-l-lg">週</th>
                      <th className="text-left px-3 py-2 font-semibold text-text-secondary">タイミング</th>
                      <th className="text-left px-3 py-2 font-semibold text-text-secondary">投入商品</th>
                      <th className="text-left px-3 py-2 font-semibold text-text-secondary rounded-r-lg">施策</th>
                    </tr>
                  </thead>
                  <tbody>
                    {plan.weeklyPlan.map((w, i) => (
                      <tr key={w.week} className={i % 2 === 1 ? "bg-row-alt" : ""}>
                        <td className="px-3 py-2.5 font-bold text-brand whitespace-nowrap">{w.week}</td>
                        <td className="px-3 py-2.5 text-text-secondary whitespace-nowrap">{w.timing}</td>
                        <td className="px-3 py-2.5 text-text-primary font-medium">{w.launch}</td>
                        <td className="px-3 py-2.5 text-text-secondary">{w.coordination}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ── Budget & Restock (side by side) ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Budget */}
            {plan.budget && plan.budget.length > 0 && (
              <div className="rounded-xl bg-base p-4">
                <SectionHeader>仕入予算配分</SectionHeader>
                <div className="space-y-2">
                  {plan.budget.map((b) => (
                    <div key={b.category} className="flex items-center justify-between">
                      <span className="text-[12px] text-text-primary">{b.category}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-[13px] font-bold text-text-heading tabular-nums">
                          {b.amount}
                        </span>
                        <span className="text-[11px] text-text-muted w-10 text-right tabular-nums">
                          {b.share}
                        </span>
                      </div>
                    </div>
                  ))}
                  {/* Budget bar visualization */}
                  <div className="flex h-2 rounded-full overflow-hidden mt-2 gap-0.5">
                    {plan.budget.map((b, i) => {
                      const colors = ["bg-brand", "bg-official", "bg-emerald-500", "bg-amber-400"];
                      return (
                        <div
                          key={b.category}
                          className={`${colors[i % colors.length]} rounded-full`}
                          style={{ width: b.share }}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Restock */}
            {plan.restockItems && plan.restockItems.length > 0 && (
              <div className="rounded-xl bg-base p-4">
                <SectionHeader>再入荷リスト</SectionHeader>
                <div className="space-y-2">
                  {plan.restockItems.map((r) => {
                    const actionColor =
                      r.action === "緊急追加" || r.action === "在庫危機"
                        ? "bg-red-100 text-red-700"
                        : r.action === "4月リスク"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-emerald-50 text-emerald-700";
                    return (
                      <div
                        key={r.id}
                        className="flex items-center justify-between gap-2 text-[12px]"
                      >
                        <div className="min-w-0 flex-1">
                          <span className="font-mono text-text-muted text-[10px]">{r.id}</span>
                          <span className="ml-1 font-medium text-text-primary">{r.name}</span>
                        </div>
                        <span className="text-text-secondary tabular-nums whitespace-nowrap">
                          {r.sales}
                        </span>
                        <span className="text-text-muted tabular-nums whitespace-nowrap">
                          残{r.currentStock}
                        </span>
                        <span
                          className={`px-1.5 py-0.5 rounded text-[10px] font-semibold whitespace-nowrap ${actionColor}`}
                        >
                          {r.action}
                        </span>
                        <span className="font-bold text-text-heading tabular-nums whitespace-nowrap">
                          {r.budget}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* ── Market Insights & Trends ── */}
          {(plan.marketInsights || plan.trends) && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Market Insights */}
              {plan.marketInsights && (
                <div className="rounded-xl bg-base p-4">
                  <SectionHeader>マーケット動向</SectionHeader>
                  <div className="space-y-3">
                    {plan.marketInsights.map((m) => (
                      <div key={m.source}>
                        <span
                          className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                            m.source === "ZOZO"
                              ? "bg-zozo text-white"
                              : "bg-rakuten text-white"
                          }`}
                        >
                          {m.source}
                        </span>
                        <ul className="mt-1.5 space-y-1">
                          {m.insights.map((insight) => (
                            <li key={insight} className="text-[11px] text-text-secondary flex items-start gap-1.5">
                              <span className="text-brand mt-0.5 text-[8px]">&#9679;</span>
                              {insight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Trends */}
              {plan.trends && (
                <div className="rounded-xl bg-base p-4">
                  <SectionHeader>トレンド適合度</SectionHeader>
                  <div className="space-y-2.5">
                    {plan.trends.map((t) => (
                      <div key={t.name}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[12px] text-text-primary">{t.name}</span>
                          <span className="text-[12px] font-bold text-brand tabular-nums">
                            {t.score}/10
                          </span>
                        </div>
                        <div className="h-1.5 bg-brand/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-brand to-brand-dark rounded-full transition-all duration-500"
                            style={{ width: `${t.score * 10}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ── Categories & Events ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl bg-base p-4">
              <SectionHeader>カテゴリ別展開</SectionHeader>
              <div className="space-y-2.5">
                {plan.categories.map((cat) => (
                  <div key={cat.name} className="flex items-start gap-2">
                    <span className="text-[11px] font-bold text-brand min-w-[72px] mt-0.5">
                      {cat.name}
                    </span>
                    <span className="text-[12px] text-text-primary leading-relaxed">
                      {cat.items.join(" / ")}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-base p-4">
              <SectionHeader>イベント・施策</SectionHeader>
              <div className="flex flex-wrap gap-2 mb-3">
                {plan.events.map((ev) => (
                  <span
                    key={ev}
                    className="px-2.5 py-1 rounded-lg bg-brand/10 text-[11px] font-medium text-brand-dark"
                  >
                    {ev}
                  </span>
                ))}
              </div>

              {/* Success / Failure Patterns */}
              {plan.successPatterns && (
                <div className="mt-3">
                  <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider mb-1">
                    Success Pattern
                  </p>
                  {plan.successPatterns.map((s) => (
                    <p key={s} className="text-[11px] text-text-secondary leading-relaxed">
                      {s}
                    </p>
                  ))}
                </div>
              )}
              {plan.failurePatterns && (
                <div className="mt-2">
                  <p className="text-[10px] font-bold text-red-500 uppercase tracking-wider mb-1">
                    Failure Pattern
                  </p>
                  {plan.failurePatterns.map((f) => (
                    <p key={f} className="text-[11px] text-text-secondary leading-relaxed">
                      {f}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* ── Notes ── */}
          {plan.notes.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-4 border-t border-brand/10">
              {plan.notes.map((note) => (
                <span
                  key={note}
                  className="inline-flex items-center gap-1.5 text-[11px] text-text-secondary bg-base px-3 py-1.5 rounded-lg"
                >
                  <span className="text-brand">&#9679;</span>
                  {note}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ── KPI Card ── */
function KpiCard({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div
      className={`rounded-xl px-4 py-3 border ${
        accent
          ? "bg-gradient-to-br from-brand/8 to-brand/3 border-brand/15"
          : "bg-base border-brand/5"
      }`}
    >
      <p className="text-[10px] font-semibold text-text-muted uppercase tracking-wider">
        {label}
      </p>
      <p
        className={`mt-1 text-[22px] font-extrabold tabular-nums leading-tight ${
          accent ? "text-brand-dark" : "text-text-heading"
        }`}
      >
        {value}
      </p>
    </div>
  );
}
