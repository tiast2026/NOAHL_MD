import type { MonthPlan, CompetitorProduct } from "@/data/types";
import { getImage, getLink } from "@/data/images";

/* ── TOC items ── */
const tocSections = [
  { id: "jul-summary", label: "KPI・サマリー", items: [
    { id: "jul-kpi", label: "KPI" },
    { id: "jul-cross", label: "今月やるべきこと" },
  ]},
  { id: "jul-measures", label: "施策", items: [
    { id: "jul-schedule", label: "週別スケジュール" },
    { id: "jul-events", label: "イベント" },
  ]},
  { id: "jul-procurement", label: "仕入予算配分", items: [
    { id: "jul-budget", label: "予算" },
    { id: "jul-products", label: "新作品番" },
    { id: "jul-restock", label: "再入荷" },
    { id: "jul-clearance", label: "OFF消化" },
  ]},
  { id: "jul-analysis", label: "分析", items: [
    { id: "jul-axis1", label: "軸①ZOZO" },
    { id: "jul-axis2", label: "軸②楽天" },
    { id: "jul-axis3", label: "軸③トレンド" },
    { id: "jul-axis4", label: "軸④自社実績" },
    { id: "jul-patterns", label: "成功/失敗" },
    { id: "jul-trends", label: "トレンド適合度" },
  ]},
  { id: "jul-competitors", label: "他社売れ筋ランキング", items: [] },
];

/* ── Season colors ── */
const seasonStrokeColors: Record<string, string> = {
  夏物: "#f97316", "夏物最終": "#fdba74", 秋物先行: "#fbbf24", 秋物: "#d97706",
};

/* ── Helpers ── */
function SectionHeader({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h3 id={id} className="text-[17px] font-bold text-text-heading tracking-wide flex items-center gap-2 mb-4 scroll-mt-24">
      <span className="w-1.5 h-6 bg-brand rounded-full" />
      {children}
    </h3>
  );
}

function KpiCard({ label, value, accent, sub }: { label: string; value: string; accent?: boolean; sub?: string }) {
  return (
    <div className={`rounded-xl px-4 py-3 border ${accent ? "bg-gradient-to-br from-brand/8 to-brand/3 border-brand/15" : "bg-base border-brand/5"}`}>
      <p className="text-[13px] font-semibold text-text-muted uppercase tracking-wider">{label}</p>
      <p className={`mt-1 text-[26px] font-extrabold tabular-nums leading-tight ${accent ? "text-brand-dark" : "text-text-heading"}`}>{value}</p>
      {sub && <p className="text-[12px] text-text-muted mt-0.5">{sub}</p>}
    </div>
  );
}

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
    <svg viewBox="0 0 36 36" className="w-20 h-20 shrink-0">
      {arcs.map((a) => (
        <circle key={a.label} cx="18" cy="18" r={R} fill="none" stroke={a.color} strokeWidth="3.5"
          strokeDasharray={`${a.pct} ${100 - a.pct}`} strokeDashoffset={`${-a.offset}`} strokeLinecap="round" />
      ))}
    </svg>
  );
}

function StockHealthBar({ stockMonths }: { stockMonths: string }) {
  const months = parseFloat(stockMonths) || 0;
  const color = months < 0.3 ? "bg-red-500" : months < 1 ? "bg-amber-500" : months <= 3 ? "bg-emerald-500" : "bg-gray-400";
  const width = months > 3 ? 100 : Math.max((months / 3) * 100, 4);
  return (
    <div className="flex items-center gap-2">
      <div className="w-16 h-2.5 bg-gray-100 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${width}%` }} />
      </div>
      <span className={`text-[12px] font-bold tabular-nums ${months < 0.3 ? "text-red-600" : months < 1 ? "text-amber-600" : "text-emerald-600"}`}>
        {stockMonths}
      </span>
    </div>
  );
}

function RestockThumb({ id }: { id: string }) {
  return (
    <a href={getLink(id)} target="_blank" rel="noopener noreferrer" className="shrink-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={getImage(id)} alt={id} className="w-12 h-12 rounded-lg object-cover border border-brand/10 hover:shadow-md transition-shadow" />
    </a>
  );
}

const budgetColors = ["bg-brand", "bg-blue-500", "bg-emerald-500", "bg-amber-400"];

/* ══════════════════════════════════════════
   July Section — Action Dashboard + Market Data
   ══════════════════════════════════════════ */

export default function JulySection({ plan }: { plan: MonthPlan }) {

  return (
    <section className="scroll-mt-20">
      <div className="bg-base-card rounded-2xl border border-brand/10 shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden">

        {/* ── Header ── */}
        <div className="relative bg-gradient-to-r from-brand/12 via-brand/5 to-transparent px-6 py-6 border-b border-brand/10">
          <div className="flex items-end gap-3 mb-1">
            <span className="text-[52px] font-extrabold text-brand leading-none tabular-nums">7</span>
            <span className="text-[18px] text-text-muted font-medium mb-1">月</span>
            <div className="ml-1 mb-1">
              <h2 className="text-[22px] font-bold text-text-heading leading-tight">{plan.theme}</h2>
              {plan.subTheme && <p className="text-[15px] text-text-secondary mt-0.5">{plan.subTheme}</p>}
            </div>
          </div>
        </div>

        {/* ── TOC ── */}
        <nav className="px-6 py-3 border-b border-brand/5 bg-base/50">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
            {tocSections.map((sec) => {
              const sectionColor = sec.id === "jul-summary" ? "bg-brand/15 text-brand-dark border-brand/20"
                : sec.id === "jul-measures" ? "bg-blue-50 text-blue-700 border-blue-200"
                : sec.id === "jul-procurement" ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                : sec.id === "jul-analysis" ? "bg-purple-50 text-purple-700 border-purple-200"
                : "bg-gray-100 text-gray-700 border-gray-200";
              return (
                <a key={sec.id} href={`#${sec.id}`}
                  className={`shrink-0 px-3 py-1.5 rounded-lg text-[13px] font-bold border ${sectionColor} hover:shadow-sm transition-all`}>
                  {sec.label}
                </a>
              );
            })}
          </div>
        </nav>

        <div className="p-6 space-y-8">

          {/* ════════════════════════════════════════
             ◆ KPI・サマリー
             ════════════════════════════════════════ */}
          <div id="jul-summary" className="rounded-xl bg-gradient-to-r from-brand/10 to-brand/3 border border-brand/15 px-5 py-3 mb-2 scroll-mt-24">
            <p className="text-[15px] font-bold text-brand-dark tracking-wider">◆ KPI・サマリー</p>
          </div>

          {/* ── KPI ── */}
          <div id="jul-kpi">
            <SectionHeader id="jul-kpi-h">KPI</SectionHeader>
            <div className="grid grid-cols-3 gap-3 mb-4">
              <KpiCard label="売上目標" value={plan.salesTarget} accent />
              <KpiCard label="仕入予算" value={plan.totalBudget ?? "—"} />
              <KpiCard label="在庫目標" value={plan.inventory.target} />
            </div>

            {/* Season breakdown inline */}
            <div className="flex items-center gap-4 flex-wrap">
              <DonutChart segments={plan.seasonBreakdown} />
              <div className="flex flex-col gap-1.5">
                {plan.seasonBreakdown.map((s) => (
                  <div key={s.label} className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-sm shrink-0" style={{ backgroundColor: seasonStrokeColors[s.label] ?? "#9ca3af" }} />
                    <span className="text-[14px] font-semibold text-text-primary">{s.label}</span>
                    <span className="text-[14px] text-text-muted">{s.amount}（{s.ratio}）</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Cross Analysis (moved here under KPI) ── */}
          {plan.crossAnalysis && plan.crossAnalysis.length > 0 && (
            <div id="jul-cross">
              <SectionHeader id="jul-cross-h">今月やるべき3つのこと</SectionHeader>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {plan.crossAnalysis.map((item, i) => {
                  const nums = ["①", "②", "③"];
                  const titleText = item.title.replace(/^[①②③④⑤]\s*/, "");
                  const axisPills = item.axes.split("×").map((a) => a.trim());
                  return (
                    <div key={item.title} className="rounded-xl border border-brand/15 bg-gradient-to-br from-brand/5 to-transparent p-5 flex flex-col">
                      <div className="flex items-start gap-3 mb-3">
                        <span className="w-11 h-11 rounded-full bg-gradient-to-br from-brand to-brand-dark text-white text-[20px] font-bold flex items-center justify-center shrink-0">
                          {nums[i] ?? String(i + 1)}
                        </span>
                        <h4 className="text-[16px] font-bold text-text-heading leading-snug pt-2">{titleText}</h4>
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
                      <p className="text-[13px] text-text-secondary leading-relaxed flex-1">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ════════════════════════════════════════
             ◆ 施策
             ════════════════════════════════════════ */}
          <div id="jul-measures" className="rounded-xl bg-gradient-to-r from-blue-50 to-blue-50/30 border border-blue-200 px-5 py-3 mb-2 scroll-mt-24">
            <p className="text-[15px] font-bold text-blue-700 tracking-wider">◆ 施策</p>
          </div>

          {/* ── Weekly Schedule ── */}
          {plan.weeklyPlan && plan.weeklyPlan.length > 0 && (
            <div id="jul-schedule">
              <SectionHeader id="jul-schedule-h">週別スケジュール</SectionHeader>
              <div className="overflow-x-auto -mx-2">
                <table className="w-full text-[14px]">
                  <thead>
                    <tr className="bg-base">
                      <th className="text-left px-3 py-3 font-semibold text-text-secondary rounded-l-lg">週</th>
                      <th className="text-left px-3 py-3 font-semibold text-text-secondary">期間</th>
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

          {/* ── Restock (prominent, with larger images) ── */}
          {plan.restockItems && plan.restockItems.length > 0 && (
            <div id="jul-restock">
              <SectionHeader id="jul-restock-h">再入荷リスト（夏¥700万＋秋¥200万）</SectionHeader>
              <div className="space-y-2">
                {plan.restockItems.map((r) => {
                  const priorityColor = r.priority === "最優先" ? "bg-red-500 text-white"
                    : r.priority === "高" ? "bg-amber-500 text-white"
                    : r.priority === "中" ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-700";
                  const urgentBorder = r.priority === "最優先" ? "border-red-300 bg-red-50/30" : "border-gray-100";
                  const isNl = r.id.startsWith("nl");
                  return (
                    <div key={r.id} className={`flex items-center gap-4 rounded-xl border ${urgentBorder} p-3 hover:shadow-sm transition-shadow`}>
                      {isNl && (
                        <a href={getLink(r.id)} target="_blank" rel="noopener noreferrer" className="shrink-0">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={getImage(r.id)} alt={r.id}
                            className="w-16 h-16 rounded-xl object-cover border border-brand/10 hover:shadow-md transition-shadow" />
                        </a>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          {r.priority && (
                            <span className={`px-2.5 py-1 rounded-full text-[12px] font-bold ${priorityColor}`}>{r.priority}</span>
                          )}
                          <span className="font-mono text-brand-dark font-bold text-[15px]">{r.id}</span>
                          <span className="font-medium text-text-primary text-[15px]">{r.name}</span>
                        </div>
                        <div className="flex items-center gap-4 flex-wrap">
                          <span className="text-[15px] text-text-heading font-bold tabular-nums">{r.sales}</span>
                          <span className="text-[14px] text-text-muted tabular-nums">残 {r.currentStock}</span>
                          {r.stockMonths && <StockHealthBar stockMonths={r.stockMonths} />}
                          <span className="text-[14px] text-text-secondary font-medium">{r.action}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ── Clearance ── */}
          {plan.clearanceCandidates && plan.clearanceCandidates.length > 0 && (
            <div id="jul-clearance">
              <SectionHeader id="jul-clearance-h">OFF消化候補</SectionHeader>
              <div className="overflow-x-auto">
                <table className="w-full text-[13px]">
                  <thead>
                    <tr className="bg-red-50">
                      <th className="text-left px-3 py-2 font-semibold text-red-700 rounded-l-lg">品番</th>
                      <th className="text-right px-3 py-2 font-semibold text-red-700">在庫</th>
                      <th className="text-right px-3 py-2 font-semibold text-red-700">月販</th>
                      <th className="text-right px-3 py-2 font-semibold text-red-700">在庫月数</th>
                      <th className="text-left px-3 py-2 font-semibold text-red-700 rounded-r-lg">消化プラン</th>
                    </tr>
                  </thead>
                  <tbody>
                    {plan.clearanceCandidates.map((item, i) => {
                      const months = parseFloat(item.stockMonths) || 0;
                      const severity = months > 6 ? "text-red-600 font-extrabold" : months > 1 ? "text-amber-600 font-bold" : "text-emerald-600";
                      const isNl = item.id.startsWith("nl");
                      return (
                        <tr key={item.id} className={i % 2 === 1 ? "bg-red-50/30" : ""}>
                          <td className="px-3 py-2">
                            <div className="flex items-center gap-2">
                              {isNl && (
                                <a href={getLink(item.id)} target="_blank" rel="noopener noreferrer" className="shrink-0">
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img src={getImage(item.id)} alt={item.id} className="w-10 h-10 rounded-lg object-cover border border-red-200" />
                                </a>
                              )}
                              <span className="font-mono font-bold text-red-700">{item.id}</span>
                            </div>
                          </td>
                          <td className="px-3 py-2 text-right tabular-nums font-bold">{item.stock}</td>
                          <td className="px-3 py-2 text-right tabular-nums">{item.sales}</td>
                          <td className={`px-3 py-2 text-right tabular-nums ${severity}`}>{item.stockMonths}</td>
                          <td className="px-3 py-2 text-text-secondary">{item.plan}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ── Products (compact table) ── */}
          <div id="jul-products">
            <SectionHeader id="jul-products-h">新作品番設計（{plan.products.length}型）</SectionHeader>
            <div className="overflow-x-auto">
              <table className="w-full text-[14px]">
                <thead>
                  <tr className="bg-base">
                    <th className="text-left px-3 py-3 font-semibold text-text-secondary rounded-l-lg w-12">ランク</th>
                    <th className="text-left px-3 py-3 font-semibold text-text-secondary">企画コード</th>
                    <th className="text-left px-3 py-3 font-semibold text-text-secondary">商品名</th>
                    <th className="text-right px-3 py-3 font-semibold text-text-secondary">価格</th>
                    <th className="text-right px-3 py-3 font-semibold text-text-secondary">SKU</th>
                    <th className="text-right px-3 py-3 font-semibold text-text-secondary">仕入額</th>
                    <th className="text-center px-2 py-3 font-semibold text-text-secondary">ZOZO</th>
                    <th className="text-center px-2 py-3 font-semibold text-text-secondary">楽天</th>
                    <th className="text-center px-2 py-3 font-semibold text-text-secondary">トレンド</th>
                    <th className="text-center px-2 py-3 font-semibold text-text-secondary rounded-r-lg">自社</th>
                  </tr>
                </thead>
                <tbody>
                  {plan.products.map((p, i) => {
                    const tierStyle = p.tier === "S" ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white"
                      : p.tier === "A" ? "bg-gradient-to-r from-brand to-brand-dark text-white"
                      : "bg-text-secondary text-white";
                    const axisColor = (v: string) => v === "◎" ? "text-emerald-600 font-bold" : v === "○" ? "text-brand" : "text-text-muted";
                    return (
                      <tr key={p.id} className={`${i % 2 === 1 ? "bg-row-alt" : ""} hover:bg-brand/5 transition-colors`}>
                        <td className="px-3 py-3">
                          <span className={`px-2.5 py-1 rounded text-[12px] font-bold ${tierStyle}`}>{p.tier}</span>
                        </td>
                        <td className="px-3 py-3 font-mono font-bold text-brand-dark text-[15px] whitespace-nowrap">{p.id}</td>
                        <td className="px-3 py-3 text-text-primary font-medium max-w-[280px]">
                          <span className="line-clamp-1">{p.name}</span>
                        </td>
                        <td className="px-3 py-3 text-right font-bold text-text-heading tabular-nums whitespace-nowrap">{p.price ?? "—"}</td>
                        <td className="px-3 py-3 text-right tabular-nums text-text-muted whitespace-nowrap">
                          {p.colors && p.units ? `${p.colors}色×${Math.round(p.units / p.colors)}=${p.units}枚` : p.units ? `${p.units}枚` : "—"}
                        </td>
                        <td className="px-3 py-3 text-right tabular-nums text-text-secondary whitespace-nowrap">{p.cost ?? "—"}</td>
                        {p.fourAxis ? (
                          <>
                            <td className={`px-2 py-3 text-center text-[16px] ${axisColor(p.fourAxis.zozo)}`}>{p.fourAxis.zozo}</td>
                            <td className={`px-2 py-3 text-center text-[16px] ${axisColor(p.fourAxis.rakuten)}`}>{p.fourAxis.rakuten}</td>
                            <td className={`px-2 py-3 text-center text-[16px] ${axisColor(p.fourAxis.trend)}`}>{p.fourAxis.trend}</td>
                            <td className={`px-2 py-3 text-center text-[16px] ${axisColor(p.fourAxis.internal)}`}>{p.fourAxis.internal}</td>
                          </>
                        ) : (
                          <td colSpan={4} className="px-2 py-3 text-center text-text-muted">—</td>
                        )}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* ── Budget ── */}
          {plan.budget && plan.budget.length > 0 && (
            <div id="jul-budget" className="rounded-xl bg-base p-5">
              <SectionHeader id="jul-budget-h">仕入予算配分{plan.totalBudget ? `（合計 ${plan.totalBudget}）` : ""}</SectionHeader>
              <div className="space-y-3">
                {plan.budget.map((b, i) => {
                  const pct = parseFloat(b.share) || 0;
                  return (
                    <div key={b.category} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[15px] text-text-primary font-medium">{b.category}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-[16px] font-bold text-text-heading tabular-nums">{b.amount}</span>
                          <span className="text-[14px] text-text-muted tabular-nums w-12 text-right">{b.share}</span>
                        </div>
                      </div>
                      <div className="h-6 bg-brand/8 rounded-lg overflow-hidden">
                        <div className={`h-full rounded-lg ${budgetColors[i % budgetColors.length]} flex items-center justify-end pr-2`}
                          style={{ width: `${Math.max(pct, 8)}%` }}>
                          {pct >= 15 && <span className="text-[12px] text-white font-bold">{b.share}</span>}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ── Events ── */}
          <div id="jul-events" className="rounded-xl bg-base p-5">
            <SectionHeader id="jul-events-h">イベント・施策</SectionHeader>
            <div className="flex flex-wrap gap-2">
              {plan.events.map((ev) => (
                <span key={ev} className="px-3 py-2 rounded-lg bg-brand/10 text-[14px] font-medium text-brand-dark">{ev}</span>
              ))}
            </div>
          </div>

          {/* ════════════════════════════════════════
             BLOCK 2: MARKET DATA & REASONING
             ════════════════════════════════════════ */}
          <div className="rounded-xl bg-gradient-to-r from-purple-500/5 to-transparent border border-purple-500/10 px-5 py-3 mt-4">
            <p className="text-[14px] font-bold text-purple-700 tracking-wider uppercase">Market Data — なぜこの計画なのか</p>
          </div>

          {/* ── Cross Analysis ── */}
          {plan.crossAnalysis && plan.crossAnalysis.length > 0 && (
            <div id="jul-cross">
              <SectionHeader id="jul-cross-h">4軸クロス総評：今月やるべきこと</SectionHeader>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {plan.crossAnalysis.map((item, i) => {
                  const nums = ["①", "②", "③"];
                  const titleText = item.title.replace(/^[①②③④⑤]\s*/, "");
                  const axisPills = item.axes.split("×").map((a) => a.trim());
                  return (
                    <div key={item.title} className="rounded-xl border border-brand/15 bg-gradient-to-br from-brand/5 to-transparent p-5 flex flex-col">
                      <div className="flex items-start gap-3 mb-3">
                        <span className="w-11 h-11 rounded-full bg-gradient-to-br from-brand to-brand-dark text-white text-[20px] font-bold flex items-center justify-center shrink-0">
                          {nums[i] ?? String(i + 1)}
                        </span>
                        <h4 className="text-[16px] font-bold text-text-heading leading-snug pt-2">{titleText}</h4>
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
                      <p className="text-[13px] text-text-secondary leading-relaxed flex-1">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ── 軸① ZOZO市場分析 ── */}
          {plan.marketReports && (() => {
            const zozoReports = plan.marketReports.filter(r => r.title.includes("ZOZO"));
            const rakutenReports = plan.marketReports.filter(r => r.title.includes("楽天"));
            const trendReports = plan.marketReports.filter(r => r.title.includes("AW") || r.title.includes("トレンド"));
            const selfReports = plan.marketReports.filter(r => r.title.includes("自社"));
            const axisGroups = [
              { id: "jul-axis1", num: "①", title: "ZOZO市場分析", color: "bg-gray-800", reports: zozoReports },
              { id: "jul-axis2", num: "②", title: "楽天市場分析", color: "bg-red-500", reports: rakutenReports },
              { id: "jul-axis3", num: "③", title: "2026トレンド分析", color: "bg-purple-500", reports: trendReports },
              { id: "jul-axis4", num: "④", title: "自社実績分析", color: "bg-brand", reports: selfReports },
            ];
            return axisGroups.map((axis) => axis.reports.length > 0 && (
              <div key={axis.id} id={axis.id}>
                <SectionHeader id={`${axis.id}-h`}>
                  <span className={`${axis.color} text-white px-2.5 py-1 rounded-lg text-[13px] font-bold mr-1`}>軸{axis.num}</span>
                  {axis.title}
                </SectionHeader>
                <div className="space-y-2">
                  {axis.reports.map((report) => (
                    <details key={report.title} className="rounded-xl bg-base border border-brand/8 overflow-hidden group" open={axis.reports.length === 1}>
                      <summary className="px-5 py-4 cursor-pointer flex items-center gap-3 hover:bg-brand/5 transition-colors [&::-webkit-details-marker]:hidden list-none">
                        <span className={`w-3 h-3 rounded-full shrink-0 ${axis.color}`} />
                        <span className="text-[16px] font-bold text-text-heading flex-1">{report.title}</span>
                        <svg className="w-5 h-5 text-text-muted transition-transform group-open:rotate-180 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                      </summary>
                      <div className="px-5 pb-5">
                        <p className="text-[15px] text-text-secondary leading-relaxed">{report.body}</p>
                        {report.noahlInsight && (
                          <div className="mt-4 border-l-3 border-brand pl-4 py-2 bg-brand/5 rounded-r-lg">
                            <p className="text-[12px] font-bold text-brand uppercase tracking-wider mb-1">NOAHLへの示唆</p>
                            <p className="text-[15px] text-text-primary leading-relaxed font-medium">{report.noahlInsight}</p>
                          </div>
                        )}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ));
          })()}

          {/* ── Success / Failure ── */}
          {(plan.successPatterns || plan.failurePatterns) && (
            <div id="jul-patterns" className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {plan.successPatterns && (
                <div className="rounded-xl bg-base p-5 border-l-4 border-emerald-400">
                  <SectionHeader id="jul-success-h">成功パターン</SectionHeader>
                  <div className="space-y-3">
                    {plan.successPatterns.map((s) => (
                      <div key={s} className="flex items-start gap-3">
                        <span className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shrink-0">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <p className="text-[15px] text-text-primary leading-relaxed">{s}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {plan.failurePatterns && (
                <div className="rounded-xl bg-base p-5 border-l-4 border-red-400">
                  <SectionHeader id="jul-failure-h">失敗パターン</SectionHeader>
                  <div className="space-y-3">
                    {plan.failurePatterns.map((f) => (
                      <div key={f} className="flex items-start gap-3">
                        <span className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shrink-0">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </span>
                        <p className="text-[15px] text-text-primary leading-relaxed">{f}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ── Trends ── */}
          {plan.trends && (
            <div id="jul-trends" className="rounded-xl bg-base p-5">
              <SectionHeader id="jul-trends-h">トレンド適合度</SectionHeader>
              <div className="space-y-3">
                {plan.trends.map((t) => (
                  <div key={t.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[16px] text-text-primary font-medium">{t.name}</span>
                      <span className="text-[17px] font-bold text-brand tabular-nums">{t.score}/10</span>
                    </div>
                    <div className="h-7 bg-brand/8 rounded-lg overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-brand to-brand-dark rounded-lg flex items-center justify-end pr-2"
                        style={{ width: `${t.score * 10}%` }}>
                        {t.score >= 7 && <span className="text-[13px] text-white font-bold">{t.score}</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── Competitors ── */}
          {plan.competitorProducts && plan.competitorProducts.length > 0 && (
            <div id="jul-competitors">
              <SectionHeader id="jul-competitors-h">他社売れ筋ランキング</SectionHeader>
              {(["ZOZO", "楽天"] as const).map((src) => {
                const items = plan.competitorProducts!.filter((c) => c.source === src);
                if (items.length === 0) return null;
                return (
                  <details key={src} className="mb-3 rounded-xl border border-brand/10 overflow-hidden group">
                    <summary className="px-5 py-4 cursor-pointer flex items-center gap-3 bg-base hover:bg-brand/5 transition-colors [&::-webkit-details-marker]:hidden list-none">
                      <span className={`px-3 py-1 rounded-lg text-[14px] font-bold ${src === "ZOZO" ? "bg-gray-800 text-white" : "bg-red-600 text-white"}`}>{src}</span>
                      <span className="text-[16px] font-bold text-text-heading flex-1">{src === "ZOZO" ? "ZOZOTOWNランキング" : "楽天市場ランキング"}</span>
                      <span className="text-[14px] text-text-muted">{items.length}件</span>
                      <svg className="w-5 h-5 text-text-muted transition-transform group-open:rotate-180 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                      </svg>
                    </summary>
                    <div className="divide-y divide-brand/5">
                      {items.map((item, i) => (
                        <CompetitorRow key={`${item.source}-${i}`} item={item} rank={i + 1} />
                      ))}
                    </div>
                  </details>
                );
              })}
            </div>
          )}

          {/* ── Categories ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl bg-base p-5">
              <SectionHeader id="jul-cat-h">カテゴリ別展開</SectionHeader>
              <div className="space-y-3">
                {plan.categories.map((cat) => (
                  <div key={cat.name} className="flex items-start gap-2">
                    <span className="text-[14px] font-bold text-brand min-w-[80px] mt-0.5">{cat.name}</span>
                    <span className="text-[14px] text-text-primary leading-relaxed">{cat.items.join(" / ")}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl bg-base p-5">
              <SectionHeader id="jul-notes-h">備考</SectionHeader>
              <div className="space-y-2">
                {plan.notes.map((note) => (
                  <div key={note} className="flex items-start gap-2 text-[14px] text-text-secondary">
                    <span className="text-brand mt-0.5">&#9679;</span>
                    {note}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ── Competitor Row ── */
function CompetitorRow({ item, rank }: { item: CompetitorProduct; rank: number }) {
  return (
    <a href={item.link} target="_blank" rel="noopener noreferrer"
      className="flex items-center gap-3 px-4 py-3 hover:bg-brand/5 transition-colors">
      <span className="text-[14px] font-bold text-text-muted tabular-nums w-7 text-right shrink-0">{rank}</span>
      <span className={`px-2 py-0.5 rounded text-[11px] font-bold shrink-0 ${item.source === "ZOZO" ? "bg-gray-100 text-gray-700" : "bg-red-50 text-red-700"}`}>{item.brand}</span>
      <span className="text-[14px] text-text-primary flex-1 min-w-0 truncate">{item.name}</span>
      {item.price !== "-" && <span className="text-[14px] font-bold text-text-heading tabular-nums whitespace-nowrap">{item.price}</span>}
      <span className="text-[14px] font-bold text-brand tabular-nums whitespace-nowrap">{item.sales}</span>
      <svg className="w-4 h-4 text-text-muted shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
      </svg>
    </a>
  );
}
