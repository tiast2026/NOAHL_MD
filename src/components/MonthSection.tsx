import type { MonthPlan } from "@/data/types";
import { getImage, getLink } from "@/data/images";
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

const seasonStrokeColors: Record<string, string> = {
  冬物: "#3b82f6", "冬物最終": "#93c5fd", 春物先行: "#6ee7b7", 春物: "#10b981",
  "春物最終": "#6ee7b7", 初夏先行: "#fbbf24", 初夏物: "#f59e0b", 夏物: "#f97316",
  "夏物最終": "#fdba74", 秋物先行: "#fbbf24", 秋物: "#d97706", "秋物最終": "#fbbf24",
  冬物先行: "#93c5fd", 梅雨対策: "#38bdf8", ギフト: "#f472b6",
};

function getSeasonColor(label: string) {
  return seasonColors[label] ?? "bg-gray-100 text-gray-700";
}

/* ── Icons ── */
function CheckIcon() {
  return (
    <span className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shrink-0">
      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );
}

function XIcon() {
  return (
    <span className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shrink-0">
      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </span>
  );
}

function WarningIcon() {
  return (
    <svg className="w-6 h-6 text-red-500 shrink-0" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.168 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
    </svg>
  );
}

/* ── SVG Donut Chart ── */
function DonutChart({ segments }: { segments: { label: string; ratio: string }[] }) {
  const R = 15.9;
  let offset = 25;
  const arcs = segments.map((s) => {
    const pct = parseFloat(s.ratio) || 0;
    const color = seasonStrokeColors[s.label] ?? "#9ca3af";
    const arc = { pct, color, offset, label: s.label };
    offset += pct;
    return arc;
  });

  return (
    <svg viewBox="0 0 36 36" className="w-28 h-28 shrink-0">
      {arcs.map((a) => (
        <circle
          key={a.label}
          cx="18" cy="18" r={R}
          fill="none"
          stroke={a.color}
          strokeWidth="3.5"
          strokeDasharray={`${a.pct} ${100 - a.pct}`}
          strokeDashoffset={`${-a.offset}`}
          strokeLinecap="round"
        />
      ))}
      <text x="18" y="19" textAnchor="middle" className="fill-text-heading text-[6px] font-bold">
        {segments.length > 0 ? segments[0].ratio : ""}
      </text>
    </svg>
  );
}

/* ── Stock Health Bar ── */
function StockHealthBar({ stockMonths }: { stockMonths: string }) {
  const months = parseFloat(stockMonths) || 0;
  const color = months < 0.3 ? "bg-red-500" : months < 1 ? "bg-amber-500" : months <= 3 ? "bg-emerald-500" : "bg-gray-400";
  const width = months > 3 ? 100 : Math.max((months / 3) * 100, 4);
  return (
    <div className="flex items-center gap-2">
      <div className="w-20 h-3 bg-gray-100 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${width}%` }} />
      </div>
      <span className={`text-[13px] font-bold tabular-nums ${months < 0.3 ? "text-red-600" : months < 1 ? "text-amber-600" : months <= 3 ? "text-emerald-600" : "text-gray-500"}`}>
        {stockMonths}
      </span>
    </div>
  );
}

/* ── Section Header ── */
function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[17px] font-bold text-text-heading tracking-wide flex items-center gap-2 mb-4">
      <span className="w-1.5 h-6 bg-brand rounded-full" />
      {children}
    </h3>
  );
}

/* ── Budget Bar Row ── */
const budgetColors = ["bg-brand", "bg-blue-500", "bg-emerald-500", "bg-amber-400", "bg-purple-400"];

function BudgetBar({ category, amount, share, index }: { category: string; amount: string; share: string; index: number }) {
  const pct = parseFloat(share) || 0;
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <span className="text-[15px] text-text-primary font-medium">{category}</span>
        <div className="flex items-center gap-2">
          <span className="text-[16px] font-bold text-text-heading tabular-nums">{amount}</span>
          <span className="text-[14px] text-text-muted tabular-nums w-12 text-right">{share}</span>
        </div>
      </div>
      <div className="h-6 bg-brand/8 rounded-lg overflow-hidden">
        <div
          className={`h-full rounded-lg ${budgetColors[index % budgetColors.length]} flex items-center justify-end pr-2`}
          style={{ width: `${Math.max(pct, 8)}%` }}
        >
          {pct >= 15 && <span className="text-[12px] text-white font-bold">{share}</span>}
        </div>
      </div>
    </div>
  );
}

/* ── Restock Thumbnail ── */
function RestockThumb({ id }: { id: string }) {
  const imgUrl = getImage(id);
  const linkUrl = getLink(id);
  return (
    <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="shrink-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imgUrl}
        alt={id}
        className="w-14 h-14 rounded-lg object-cover border border-brand/10 hover:shadow-md transition-shadow"
      />
    </a>
  );
}

/* ══════════════════════════════════════════
   Main Component
   ══════════════════════════════════════════ */

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
            <span className="text-[52px] font-extrabold text-brand leading-none tabular-nums">
              {plan.month}
            </span>
            <span className="text-[18px] text-text-muted font-medium mb-1">月</span>
            <div className="ml-1 mb-1">
              <h2 className="text-[22px] font-bold text-text-heading leading-tight">
                {plan.theme}
              </h2>
              {plan.subTheme && (
                <p className="text-[15px] text-text-secondary mt-0.5">{plan.subTheme}</p>
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

          {/* ── Season Breakdown with Donut ── */}
          <div className="flex items-center gap-6 flex-wrap">
            <DonutChart segments={plan.seasonBreakdown} />
            <div className="flex flex-col gap-2">
              {plan.seasonBreakdown.map((s) => (
                <div key={s.label} className="flex items-center gap-2">
                  <span
                    className="w-3.5 h-3.5 rounded-sm shrink-0"
                    style={{ backgroundColor: seasonStrokeColors[s.label] ?? "#9ca3af" }}
                  />
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[14px] font-semibold ${getSeasonColor(s.label)}`}>
                    {s.label}
                    <span className="font-normal opacity-80">{s.amount}（{s.ratio}）</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── 4軸クロス総評 ── */}
          {plan.crossAnalysis && plan.crossAnalysis.length > 0 && (
            <div>
              <SectionHeader>4軸クロス総評：今月やるべきこと</SectionHeader>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {plan.crossAnalysis.map((item, i) => {
                  const nums = ["①", "②", "③", "④", "⑤"];
                  const titleText = item.title.replace(/^[①②③④⑤⑥⑦⑧⑨⑩]\s*/, "");
                  const axisPills = item.axes.split("×").map((a) => a.trim());
                  return (
                    <div key={item.title} className="rounded-xl border border-brand/15 bg-gradient-to-br from-brand/5 to-transparent p-5 flex flex-col">
                      <div className="flex items-start gap-3 mb-3">
                        <span className="w-11 h-11 rounded-full bg-gradient-to-br from-brand to-brand-dark text-white text-[20px] font-bold flex items-center justify-center shrink-0">
                          {nums[i] ?? String(i + 1)}
                        </span>
                        <h4 className="text-[16px] font-bold text-text-heading leading-snug pt-2">
                          {titleText}
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {axisPills.map((axis) => {
                          const c = axis.includes("ZOZO") ? "bg-gray-800 text-white"
                            : axis.includes("楽天") ? "bg-red-500 text-white"
                            : axis.includes("トレンド") ? "bg-purple-500 text-white"
                            : "bg-brand/20 text-brand-dark";
                          return <span key={axis} className={`px-2.5 py-0.5 rounded-full text-[12px] font-bold ${c}`}>{axis}</span>;
                        })}
                      </div>
                      <details className="flex-1">
                        <summary className="text-[14px] text-brand cursor-pointer font-semibold list-none flex items-center gap-1 hover:text-brand-dark">
                          <svg className="w-4 h-4 transition-transform" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>
                          詳細を見る
                        </summary>
                        <p className="text-[14px] text-text-secondary leading-relaxed mt-2">{item.description}</p>
                      </details>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ── Products by Tier ── */}
          {sTier.length > 0 && (
            <div>
              <SectionHeader>S級（主力商品）</SectionHeader>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {sTier.map((p) => <ProductCard key={p.id} product={p} />)}
              </div>
            </div>
          )}

          {aTier.length > 0 && (
            <div>
              <SectionHeader>A級</SectionHeader>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {aTier.map((p) => <ProductCard key={p.id} product={p} />)}
              </div>
            </div>
          )}

          {bTier.length > 0 && (
            <div>
              <SectionHeader>B級</SectionHeader>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {bTier.map((p) => <ProductCard key={p.id} product={p} />)}
              </div>
            </div>
          )}

          {makerTier.length > 0 && (
            <div>
              <SectionHeader>メーカー仕入</SectionHeader>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {makerTier.map((p) => <ProductCard key={p.id} product={p} />)}
              </div>
            </div>
          )}

          {/* ── Weekly Plan ── */}
          {plan.weeklyPlan && plan.weeklyPlan.length > 0 && (
            <div>
              <SectionHeader>週別ロールアウト</SectionHeader>
              <div className="overflow-x-auto -mx-2">
                <table className="w-full text-[14px]">
                  <thead>
                    <tr className="bg-base">
                      <th className="text-left px-3 py-3 font-semibold text-text-secondary rounded-l-lg">週</th>
                      <th className="text-left px-3 py-3 font-semibold text-text-secondary">タイミング</th>
                      <th className="text-left px-3 py-3 font-semibold text-text-secondary">投入商品</th>
                      <th className="text-left px-3 py-3 font-semibold text-text-secondary rounded-r-lg">施策</th>
                    </tr>
                  </thead>
                  <tbody>
                    {plan.weeklyPlan.map((w, i) => (
                      <tr key={w.week} className={i % 2 === 1 ? "bg-row-alt" : ""}>
                        <td className="px-3 py-3 font-bold text-brand whitespace-nowrap">{w.week}</td>
                        <td className="px-3 py-3 text-text-secondary whitespace-nowrap">{w.timing}</td>
                        <td className="px-3 py-3 text-text-primary font-medium">{w.launch}</td>
                        <td className="px-3 py-3 text-text-secondary">{w.coordination}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ── Budget ── */}
          {plan.budget && plan.budget.length > 0 && (
            <div className="rounded-xl bg-base p-5">
              <SectionHeader>仕入予算配分{plan.totalBudget ? `（合計 ${plan.totalBudget}）` : ""}</SectionHeader>
              <div className="space-y-3">
                {plan.budget.map((b, i) => (
                  <BudgetBar key={b.category} category={b.category} amount={b.amount} share={b.share} index={i} />
                ))}
              </div>
            </div>
          )}

          {/* ── Restock List with Images ── */}
          {plan.restockItems && plan.restockItems.length > 0 && (
            <div className="rounded-xl bg-base p-5">
              <SectionHeader>再入荷リスト</SectionHeader>
              <div className="space-y-3">
                {plan.restockItems.map((r) => {
                  const priorityColor = r.priority === "最優先" ? "bg-red-500 text-white"
                    : r.priority === "高" ? "bg-amber-500 text-white"
                    : r.priority === "中" ? "bg-blue-500 text-white"
                    : r.priority === "低" ? "bg-gray-300 text-gray-700"
                    : null;
                  const isNl = r.id.startsWith("nl");
                  return (
                    <div
                      key={r.id}
                      className="flex items-center gap-3 rounded-xl bg-white border border-gray-100 p-3 hover:shadow-sm transition-shadow"
                    >
                      {isNl && <RestockThumb id={r.id} />}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          {r.priority && priorityColor && (
                            <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold whitespace-nowrap ${priorityColor}`}>
                              {r.priority}
                            </span>
                          )}
                          <span className="font-mono text-brand-dark font-bold text-[14px]">{r.id}</span>
                          <span className="font-medium text-text-primary text-[14px] truncate">{r.name}</span>
                        </div>
                        <div className="flex items-center gap-3 flex-wrap">
                          <span className="text-[14px] text-text-heading font-bold tabular-nums">{r.sales}</span>
                          <span className="text-[13px] text-text-muted tabular-nums">残{r.currentStock}</span>
                          {r.stockMonths && <StockHealthBar stockMonths={r.stockMonths} />}
                          <span className="text-[13px] text-text-secondary">{r.action}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ── Market Reports (Accordion) ── */}
          {plan.marketReports && plan.marketReports.length > 0 && (
            <div>
              <SectionHeader>市場分析レポート</SectionHeader>
              <div className="space-y-2">
                {plan.marketReports.map((report) => {
                  const metrics = report.body.match(/\d[\d,]*(?:枚|件|%|万)/g)?.slice(0, 3) ?? [];
                  const dotColor = report.title.includes("ZOZO") ? "bg-gray-800"
                    : report.title.includes("楽天") ? "bg-red-500"
                    : report.title.includes("AW") || report.title.includes("トレンド") ? "bg-purple-500"
                    : "bg-brand";
                  return (
                    <details key={report.title} className="rounded-xl bg-base border border-brand/8 overflow-hidden group">
                      <summary className="px-4 py-3.5 cursor-pointer flex items-center gap-2 hover:bg-brand/5 transition-colors [&::-webkit-details-marker]:hidden list-none">
                        <span className={`w-3 h-3 rounded-full shrink-0 ${dotColor}`} />
                        <span className="text-[15px] font-bold text-text-heading flex-1">{report.title}</span>
                        {metrics.map((m) => (
                          <span key={m} className="px-2 py-0.5 rounded-full bg-brand/10 text-[12px] font-bold text-brand-dark tabular-nums hidden sm:inline-block">
                            {m}
                          </span>
                        ))}
                        <svg className="w-5 h-5 text-text-muted transition-transform group-open:rotate-180 shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>
                      </summary>
                      <div className="px-4 pb-4">
                        <p className="text-[14px] text-text-secondary leading-relaxed">{report.body}</p>
                        {report.noahlInsight && (
                          <div className="mt-3 border-l-2 border-brand pl-3">
                            <p className="text-[12px] font-bold text-brand uppercase tracking-wider mb-1">NOAHLへの示唆</p>
                            <p className="text-[14px] text-text-primary leading-relaxed font-medium">{report.noahlInsight}</p>
                          </div>
                        )}
                      </div>
                    </details>
                  );
                })}
              </div>
            </div>
          )}

          {/* ── Market Insights (simple) ── */}
          {plan.marketInsights && !plan.marketReports && (
            <div className="rounded-xl bg-base p-5">
              <SectionHeader>マーケット動向</SectionHeader>
              <div className="space-y-3">
                {plan.marketInsights.map((m) => (
                  <div key={m.source}>
                    <span className={`text-[13px] font-bold px-2.5 py-1 rounded ${m.source === "ZOZO" ? "bg-zozo text-white" : "bg-rakuten text-white"}`}>
                      {m.source}
                    </span>
                    <ul className="mt-2 space-y-2">
                      {m.insights.map((insight) => (
                        <li key={insight} className="text-[14px] text-text-secondary flex items-start gap-2">
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

          {/* ── Trends ── */}
          {plan.trends && (
            <div className="rounded-xl bg-base p-5">
              <SectionHeader>トレンド適合度</SectionHeader>
              <div className="space-y-3">
                {plan.trends.map((t) => (
                  <div key={t.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[15px] text-text-primary font-medium">{t.name}</span>
                      <span className="text-[16px] font-bold text-brand tabular-nums">{t.score}/10</span>
                    </div>
                    <div className="h-6 bg-brand/8 rounded-lg overflow-hidden relative">
                      <div
                        className="h-full bg-gradient-to-r from-brand to-brand-dark rounded-lg flex items-center justify-end pr-2"
                        style={{ width: `${t.score * 10}%` }}
                      >
                        {t.score >= 7 && <span className="text-[12px] text-white font-bold">{t.score}</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── OFF消化候補 with Images ── */}
          {plan.clearanceCandidates && plan.clearanceCandidates.length > 0 && (
            <div>
              <SectionHeader>OFF消化候補</SectionHeader>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {plan.clearanceCandidates.map((item) => {
                  const months = parseFloat(item.stockMonths) || 0;
                  const severity = months > 6 ? "text-red-600" : months > 1 ? "text-amber-600" : "text-emerald-600";
                  const isNl = item.id.startsWith("nl");
                  return (
                    <div key={item.id} className="rounded-xl border border-red-200 bg-red-50/50 p-4">
                      <div className="flex items-start gap-3 mb-3">
                        {isNl && (
                          <a href={getLink(item.id)} target="_blank" rel="noopener noreferrer" className="shrink-0">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={getImage(item.id)}
                              alt={item.id}
                              className="w-16 h-20 rounded-lg object-cover border border-red-200 hover:shadow-md transition-shadow"
                            />
                          </a>
                        )}
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <WarningIcon />
                            <span className="font-mono text-[15px] font-bold text-red-700">{item.id}</span>
                          </div>
                          <div className="flex items-baseline gap-2">
                            <span className={`text-[30px] font-extrabold tabular-nums leading-none ${severity}`}>
                              {item.stockMonths.replace("ヶ月", "")}
                            </span>
                            <span className="text-[14px] text-text-muted">ヶ月分在庫</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-3 text-[14px] text-text-muted mb-3">
                        <span>在庫 <strong className="text-text-heading">{item.stock}</strong></span>
                        <span>月販 <strong className="text-text-heading">{item.sales}</strong></span>
                      </div>
                      <p className="text-[14px] text-text-secondary leading-relaxed">{item.plan}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ── Success / Failure Patterns ── */}
          {(plan.successPatterns || plan.failurePatterns) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {plan.successPatterns && (
                <div className="rounded-xl bg-base p-5 border-l-4 border-emerald-400">
                  <SectionHeader>成功パターン</SectionHeader>
                  <div className="space-y-3">
                    {plan.successPatterns.map((s) => (
                      <div key={s} className="flex items-start gap-3">
                        <CheckIcon />
                        <p className="text-[14px] text-text-primary leading-relaxed">{s}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {plan.failurePatterns && (
                <div className="rounded-xl bg-base p-5 border-l-4 border-red-400">
                  <SectionHeader>失敗パターン</SectionHeader>
                  <div className="space-y-3">
                    {plan.failurePatterns.map((f) => (
                      <div key={f} className="flex items-start gap-3">
                        <XIcon />
                        <p className="text-[14px] text-text-primary leading-relaxed">{f}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ── Categories & Events ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl bg-base p-5">
              <SectionHeader>カテゴリ別展開</SectionHeader>
              <div className="space-y-3">
                {plan.categories.map((cat) => (
                  <div key={cat.name} className="flex items-start gap-2">
                    <span className="text-[14px] font-bold text-brand min-w-[80px] mt-0.5">
                      {cat.name}
                    </span>
                    <span className="text-[14px] text-text-primary leading-relaxed">
                      {cat.items.join(" / ")}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-base p-5">
              <SectionHeader>イベント・施策</SectionHeader>
              <div className="flex flex-wrap gap-2">
                {plan.events.map((ev) => (
                  <span
                    key={ev}
                    className="px-3 py-2 rounded-lg bg-brand/10 text-[14px] font-medium text-brand-dark"
                  >
                    {ev}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Notes ── */}
          {plan.notes.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-4 border-t border-brand/10">
              {plan.notes.map((note) => (
                <span
                  key={note}
                  className="inline-flex items-center gap-1.5 text-[14px] text-text-secondary bg-base px-3 py-2 rounded-lg"
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
      <p className="text-[13px] font-semibold text-text-muted uppercase tracking-wider">
        {label}
      </p>
      <p
        className={`mt-1 text-[26px] font-extrabold tabular-nums leading-tight ${
          accent ? "text-brand-dark" : "text-text-heading"
        }`}
      >
        {value}
      </p>
    </div>
  );
}
