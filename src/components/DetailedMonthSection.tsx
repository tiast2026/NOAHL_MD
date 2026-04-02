import type { MonthPlan, CompetitorProduct } from "@/data/types";
import { getImage, getLink } from "@/data/images";

/* ── TOC items (dynamic prefix) ── */
function buildTocSections(p: string) {
  return [
    { id: `${p}-summary`, label: "KPI・サマリー", items: [
      { id: `${p}-kpi`, label: "KPI" },
      { id: `${p}-cross`, label: "今月やるべきこと" },
    ]},
    { id: `${p}-measures`, label: "施策", items: [
      { id: `${p}-schedule`, label: "週別スケジュール" },
      { id: `${p}-events`, label: "イベント" },
    ]},
    { id: `${p}-procurement`, label: "仕入予算配分", items: [
      { id: `${p}-budget`, label: "予算" },
      { id: `${p}-products`, label: "新作品番" },
      { id: `${p}-restock`, label: "再入荷" },
      { id: `${p}-clearance`, label: "OFF消化" },
    ]},
    { id: `${p}-analysis`, label: "分析", items: [
      { id: `${p}-axis1`, label: "軸①ZOZO" },
      { id: `${p}-axis2`, label: "軸②楽天" },
      { id: `${p}-axis3`, label: "軸③トレンド" },
      { id: `${p}-axis4`, label: "軸④自社実績" },
      { id: `${p}-patterns`, label: "成功/失敗" },
    ]},
    { id: `${p}-competitors`, label: "他社売れ筋ランキング", items: [] },
  ];
}

/* ── Season colors ── */
const seasonStrokeColors: Record<string, string> = {
  夏物: "#f97316", "夏物最終": "#fdba74", 秋物先行: "#fbbf24", 秋物: "#d97706",
};

/* ── Helpers ── */
function SectionHeader({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h3 id={id} className="text-[18px] font-bold text-text-heading tracking-wide flex items-center gap-2 mb-4 scroll-mt-24">
      <span className="w-1.5 h-6 bg-brand rounded-full" />
      {children}
    </h3>
  );
}

function KpiCard({ label, value, accent, sub }: { label: string; value: string; accent?: boolean; sub?: string }) {
  return (
    <div className={`rounded-xl px-5 py-4 border ${accent ? "bg-gradient-to-br from-brand/8 to-brand/3 border-brand/15" : "bg-base border-brand/5"}`}>
      <p className="text-[13px] font-semibold text-text-muted uppercase tracking-wider">{label}</p>
      <p className={`mt-1 text-[28px] font-extrabold tabular-nums leading-tight ${accent ? "text-brand-dark" : "text-text-heading"}`}>{value}</p>
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

/** Parse text: split on 。 for line breaks, render nl* codes as linked thumbnails */
function RichText({ text, className }: { text: string; className?: string }) {
  // First split by 。 to create sentence blocks
  const sentences = text.split(/(?<=。)/);

  function renderWithProducts(str: string) {
    const parts = str.split(/(nl[a-z]{1,4}\d{2,})/gi);
    return parts.map((part, i) => {
      if (/^nl[a-z]{1,4}\d{2,}$/i.test(part)) {
        const id = part.toLowerCase();
        return (
          <a key={i} href={getLink(id)} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1 mx-0.5 align-middle group/code">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={getImage(id)} alt={id}
              className="w-5 h-5 rounded object-cover border border-brand/15 inline-block align-middle" />
            <span className="font-mono font-bold text-brand-dark underline decoration-brand/30 group-hover/code:decoration-brand">{part}</span>
          </a>
        );
      }
      return <span key={i}>{part}</span>;
    });
  }

  if (sentences.length <= 1 && !text.match(/nl[a-z]{1,4}\d{2,}/i)) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className}>
      {sentences.map((sentence, i) => (
        <span key={i}>
          {i > 0 && sentence.trim() && <br />}
          {renderWithProducts(sentence)}
        </span>
      ))}
    </span>
  );
}

const budgetColors = ["bg-brand", "bg-blue-500", "bg-emerald-500", "bg-amber-400"];

/* ══════════════════════════════════════════
   Detailed Month Section — Generic for all months
   ══════════════════════════════════════════ */

export default function DetailedMonthSection({ plan }: { plan: MonthPlan }) {
  const p = `m${plan.month}`;
  const tocSections = buildTocSections(p);

  return (
    <section className="scroll-mt-20">
      <div className="bg-base-card rounded-2xl border border-brand/10 shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden">

        {/* ── Header ── */}
        <div className="relative bg-gradient-to-r from-brand/12 via-brand/5 to-transparent px-6 py-6 border-b border-brand/10">
          <div className="flex items-end gap-3 mb-1">
            <span className="text-[52px] font-extrabold text-brand leading-none tabular-nums">{plan.month}</span>
            <span className="text-[18px] text-text-muted font-medium mb-1">月</span>
            <div className="ml-1 mb-1">
              <h2 className="text-[22px] font-bold text-text-heading leading-tight">{plan.theme}</h2>
              {plan.subTheme && <p className="text-[15px] text-text-secondary mt-0.5">{plan.subTheme}</p>}
            </div>
          </div>
        </div>

        {/* ── TOC ── */}
        <nav className="px-6 py-4 border-b-2 border-brand/10 bg-gradient-to-b from-base-card to-base/80">
          <p className="text-[11px] font-bold text-text-muted uppercase tracking-widest mb-2">目次</p>
          <div className="flex items-center gap-2.5 overflow-x-auto scrollbar-none">
            {tocSections.map((sec) => {
              const sectionColor = sec.id === `${p}-summary` ? "bg-brand/15 text-brand-dark border-brand/30 hover:bg-brand/25"
                : sec.id === `${p}-measures` ? "bg-blue-50 text-blue-700 border-blue-300 hover:bg-blue-100"
                : sec.id === `${p}-procurement` ? "bg-emerald-50 text-emerald-700 border-emerald-300 hover:bg-emerald-100"
                : sec.id === `${p}-analysis` ? "bg-purple-50 text-purple-700 border-purple-300 hover:bg-purple-100"
                : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200";
              return (
                <a key={sec.id} href={`#${sec.id}`}
                  className={`shrink-0 px-4 py-2 rounded-xl text-[14px] font-bold border-2 shadow-sm ${sectionColor} hover:shadow-md transition-all`}>
                  {sec.label}
                </a>
              );
            })}
          </div>
        </nav>

        <div className="p-6 space-y-10">

          {/* ════════════════════════════════════════
             ◆ KPI・サマリー
             ════════════════════════════════════════ */}
          <div id={`${p}-summary`} className="rounded-2xl bg-brand/15 border-l-4 border-brand px-6 py-5 mb-4 scroll-mt-24">
            <p className="text-[22px] font-extrabold text-brand-dark tracking-wider">KPI・サマリー</p>
            <p className="text-[13px] text-text-muted mt-1">売上目標・予算・在庫・今月の重点アクション</p>
          </div>

          {/* ── KPI ── */}
          <div id={`${p}-kpi`}>
            <SectionHeader id={`${p}-kpi-h`}>KPI</SectionHeader>
            <div className="grid grid-cols-3 gap-3 mb-5">
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
            <div id={`${p}-cross`}>
              <SectionHeader id={`${p}-cross-h`}>今月やるべき3つのこと</SectionHeader>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
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
                      <p className="text-[13px] text-text-secondary leading-relaxed flex-1"><RichText text={item.description} /></p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ════════════════════════════════════════
             ◆ 施策
             ════════════════════════════════════════ */}
          <div id={`${p}-measures`} className="rounded-2xl bg-blue-100 border-l-4 border-blue-500 px-6 py-5 mb-4 scroll-mt-24">
            <p className="text-[22px] font-extrabold text-blue-800 tracking-wider">施策</p>
            <p className="text-[13px] text-blue-600/70 mt-1">週別スケジュール・イベント</p>
          </div>

          {/* ── Weekly Schedule ── */}
          {plan.weeklyPlan && plan.weeklyPlan.length > 0 && (
            <div id={`${p}-schedule`}>
              <SectionHeader id={`${p}-schedule-h`}>週別スケジュール</SectionHeader>
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

          {/* ── Events (under 施策) ── */}
          <div id={`${p}-events`} className="rounded-xl bg-base p-5">
            <SectionHeader id={`${p}-events-h`}>イベント・施策</SectionHeader>
            <div className="flex flex-wrap gap-2">
              {plan.events.map((ev) => (
                <span key={ev} className="px-3 py-2 rounded-lg bg-blue-50 text-[14px] font-medium text-blue-700 border border-blue-200">{ev}</span>
              ))}
            </div>
          </div>

          {/* ════════════════════════════════════════
             ◆ 仕入予算配分
             ════════════════════════════════════════ */}
          <div id={`${p}-procurement`} className="rounded-2xl bg-emerald-100 border-l-4 border-emerald-500 px-6 py-5 mb-4 scroll-mt-24">
            <p className="text-[22px] font-extrabold text-emerald-800 tracking-wider">仕入予算配分</p>
            <p className="text-[13px] text-emerald-600/70 mt-1">予算・新作品番・再入荷・OFF消化</p>
          </div>

          {/* ── Budget Detail Table ── */}
          <div id={`${p}-budget`}>
            <SectionHeader id={`${p}-budget-h`}>予算検算{plan.totalBudget ? `（合計 ${plan.totalBudget}）` : ""}</SectionHeader>
            {plan.budgetDetail ? (() => {
              // Determine summer vs autumn season per row
              let currentSeason: "summer" | "autumn" | "total" = "summer";
              const rows = plan.budgetDetail.map((row) => {
                if (row.isTotal) currentSeason = "total";
                else if (row.category.startsWith("秋")) currentSeason = "autumn";
                return { ...row, season: currentSeason };
              });
              return (
                <div className="overflow-x-auto">
                  <table className="w-full text-[14px] border-collapse">
                    <thead>
                      <tr>
                        <th className="text-left px-4 py-3 font-semibold text-emerald-800 bg-emerald-50 border-b-2 border-emerald-200 rounded-tl-lg">区分</th>
                        <th className="text-right px-4 py-3 font-semibold text-emerald-800 bg-emerald-50 border-b-2 border-emerald-200 w-32">金額</th>
                        <th className="text-left px-4 py-3 font-semibold text-emerald-800 bg-emerald-50 border-b-2 border-emerald-200 rounded-tr-lg">備考</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((row) => {
                        const seasonBg = row.season === "summer"
                          ? (row.isSubtotal ? "bg-orange-100/70" : "bg-orange-50/40")
                          : row.season === "autumn"
                          ? (row.isSubtotal ? "bg-amber-100/70" : "bg-amber-50/40")
                          : "bg-emerald-100/80";
                        const seasonBorder = row.season === "summer" ? "border-l-4 border-l-orange-400"
                          : row.season === "autumn" ? "border-l-4 border-l-amber-500"
                          : "border-l-4 border-l-emerald-500";
                        return (
                          <tr key={row.category} className={`${seasonBg} ${seasonBorder} ${!row.isTotal && !row.isSubtotal ? "border-b border-brand/5" : ""}`}>
                            <td className={`px-4 py-3 ${
                              row.isTotal ? "font-extrabold text-emerald-800 text-[16px] border-t-2 border-emerald-300"
                              : row.isSubtotal ? "font-bold border-t border-emerald-200"
                              : "text-text-primary pl-6"
                            } ${row.isSubtotal && row.season === "summer" ? "text-orange-700" : row.isSubtotal && row.season === "autumn" ? "text-amber-700" : ""}`}>
                              {row.isSubtotal ? `── ${row.category}` : row.category}
                            </td>
                            <td className={`px-4 py-3 text-right tabular-nums ${
                              row.isTotal ? "font-extrabold text-emerald-800 text-[16px] border-t-2 border-emerald-300"
                              : row.isSubtotal ? `font-bold border-t border-emerald-200 ${row.season === "summer" ? "text-orange-700" : "text-amber-700"}`
                              : "font-bold text-text-heading"
                            }`}>
                              {row.amount}
                            </td>
                            <td className={`px-4 py-3 text-[13px] ${
                              row.isTotal ? "border-t-2 border-emerald-300 text-emerald-700"
                              : row.isSubtotal ? "border-t border-emerald-200 text-text-muted"
                              : "text-text-muted"
                            }`}>{row.note ?? ""}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <div className="flex items-center gap-4 mt-2 px-2 text-[12px] text-text-muted">
                    <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-orange-400" />夏物</span>
                    <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-amber-500" />秋物</span>
                  </div>
                </div>
              );
            })() : plan.budget && (
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
            )}
          </div>

          {/* ── Products with details (grouped by budget category) ── */}
          <div id={`${p}-products`}>
            <SectionHeader id={`${p}-products-h`}>新作品番設計（{plan.products.length}型）</SectionHeader>
            {(() => {
              const groups = plan.productGroups ?? [];
              const axisColor = (v: string) => v === "◎" ? "text-emerald-600 font-bold" : v === "○" ? "text-brand" : "text-text-muted";
              return (
                <div className="space-y-6">
                  {groups.map((g) => {
                    const products = g.ids.map(id => plan.products.find(p => p.id === id)).filter(Boolean);
                    if (products.length === 0) return null;
                    const seasonColor = g.season === "summer"
                      ? "border-l-orange-400 bg-orange-50/30"
                      : "border-l-amber-500 bg-amber-50/30";
                    const labelColor = g.season === "summer" ? "text-orange-700" : "text-amber-700";
                    return (
                      <div key={g.label} className={`border-l-4 ${seasonColor} rounded-r-xl pl-4 py-3`}>
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`text-[15px] font-bold ${labelColor}`}>{g.label}</span>
                          <span className="text-[13px] text-text-muted tabular-nums">予算 {g.budget}</span>
                        </div>
                        <div className="space-y-3">
                          {products.map((p) => {
                            if (!p) return null;
                            const tierStyle = p.tier === "S" ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white"
                              : p.tier === "A" ? "bg-gradient-to-r from-brand to-brand-dark text-white"
                              : "bg-text-secondary text-white";
                            return (
                              <details key={p.id} id={`product-${p.id}`} className="rounded-xl border border-brand/10 overflow-hidden group scroll-mt-24 bg-base-card">
                    <summary className="px-4 py-3 cursor-pointer flex items-center gap-3 hover:bg-brand/5 transition-colors [&::-webkit-details-marker]:hidden list-none">
                      <span className={`px-2.5 py-1 rounded text-[12px] font-bold shrink-0 ${tierStyle}`}>{p.tier}</span>
                      <span className="font-mono font-bold text-brand-dark text-[15px] shrink-0">{p.id}</span>
                      <span className="text-[15px] text-text-primary font-medium flex-1 min-w-0 truncate">{p.name}</span>
                      {p.price && (
                        <span className="shrink-0 text-[13px]">
                          <span className="text-text-muted">価格</span>
                          <span className="text-[15px] font-bold text-text-heading tabular-nums ml-1">{p.price}</span>
                        </span>
                      )}
                      {p.cost && (
                        <span className="shrink-0 text-[13px]">
                          <span className="text-text-muted">仕入</span>
                          <span className="font-bold text-text-secondary tabular-nums ml-1">{p.cost}</span>
                        </span>
                      )}
                      <svg className="w-5 h-5 text-text-muted transition-transform group-open:rotate-180 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                      </svg>
                    </summary>
                    <div className="px-4 pb-4 pt-2 space-y-3 bg-base/50">
                      {/* Specs */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[13px]">
                        {p.category && <div><span className="text-text-muted">カテゴリ</span> <span className="font-medium text-text-primary ml-1">{p.category}</span></div>}
                        {p.unitCost && <div><span className="text-text-muted">下代</span> <span className="font-medium text-text-primary ml-1">{p.unitCost}</span></div>}
                        <div><span className="text-text-muted">SKU</span> <span className="font-medium text-text-primary ml-1">{p.colors && p.units ? `${p.colors}色×${Math.round(p.units / p.colors)}枚=${p.units}枚` : p.units ? `${p.units}枚` : "—"}</span></div>
                        {p.cost && <div><span className="text-text-muted">仕入額</span> <span className="font-bold text-text-heading ml-1">{p.cost}</span></div>}
                      </div>
                      {/* 4-Axis Detail */}
                      {p.fourAxisDetail && (
                        <div className="space-y-1.5">
                          {[
                            { label: "ZOZO", value: p.fourAxis?.zozo ?? "—", detail: p.fourAxisDetail.zozo },
                            { label: "楽天", value: p.fourAxis?.rakuten ?? "—", detail: p.fourAxisDetail.rakuten },
                            { label: "トレンド", value: p.fourAxis?.trend ?? "—", detail: p.fourAxisDetail.trend },
                            { label: "自社", value: p.fourAxis?.internal ?? "—", detail: p.fourAxisDetail.internal },
                          ].filter(a => a.detail !== "—").map((a) => (
                            <div key={a.label} className="flex items-start gap-2 text-[13px]">
                              <span className={`shrink-0 font-bold ${axisColor(a.value)} min-w-[20px]`}>{a.value}</span>
                              <span className="text-text-muted font-bold shrink-0 min-w-[48px]">{a.label}</span>
                              <RichText text={a.detail} className="text-text-secondary" />
                            </div>
                          ))}
                        </div>
                      )}
                      {/* Rationale */}
                      {p.rationale && (
                        <div className="border-l-2 border-brand pl-3 py-1">
                          <p className="text-[12px] font-bold text-brand uppercase tracking-wider mb-0.5">提案根拠</p>
                          <p className="text-[13px] text-text-secondary leading-relaxed"><RichText text={p.rationale} /></p>
                        </div>
                      )}
                    </div>
                  </details>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })()}
          </div>

          {/* ── Restock (compact table) ── */}
          {plan.restockItems && plan.restockItems.length > 0 && (
            <div id={`${p}-restock`}>
              <SectionHeader id={`${p}-restock-h`}>{plan.restockLabel ?? "再入荷リスト"}</SectionHeader>
              <div className="overflow-x-auto">
                <table className="w-full text-[14px]">
                  <thead>
                    <tr className="bg-base">
                      <th className="text-left px-3 py-2.5 font-semibold text-text-secondary rounded-l-lg">優先度</th>
                      <th className="text-left px-3 py-2.5 font-semibold text-text-secondary">商品</th>
                      <th className="text-right px-3 py-2.5 font-semibold text-text-secondary">月販</th>
                      <th className="text-right px-3 py-2.5 font-semibold text-text-secondary">在庫</th>
                      <th className="text-left px-3 py-2.5 font-semibold text-text-secondary">在庫月数</th>
                      <th className="text-left px-3 py-2.5 font-semibold text-text-secondary rounded-r-lg">アクション</th>
                    </tr>
                  </thead>
                  <tbody>
                    {plan.restockItems.map((r, i) => {
                      const priorityColor = r.priority === "最優先" ? "bg-red-500 text-white"
                        : r.priority === "高" ? "bg-amber-500 text-white"
                        : r.priority === "中" ? "bg-blue-500 text-white"
                        : "bg-gray-300 text-gray-700";
                      const isNl = r.id.startsWith("nl");
                      return (
                        <tr key={r.id} className={`${r.priority === "最優先" ? "bg-red-50/40" : i % 2 === 1 ? "bg-row-alt" : ""}`}>
                          <td className="px-3 py-2">
                            {r.priority && <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${priorityColor}`}>{r.priority}</span>}
                          </td>
                          <td className="px-3 py-2">
                            <div className="flex items-center gap-2">
                              {isNl && <RestockThumb id={r.id} />}
                              <div>
                                <span className="font-mono text-brand-dark font-bold text-[14px]">{r.id}</span>
                                <span className="text-text-primary ml-1.5 text-[14px]">{r.name}</span>
                              </div>
                            </div>
                          </td>
                          <td className="px-3 py-2 text-right font-bold text-text-heading tabular-nums">{r.sales}</td>
                          <td className="px-3 py-2 text-right tabular-nums text-text-muted">{r.currentStock}</td>
                          <td className="px-3 py-2">{r.stockMonths && <StockHealthBar stockMonths={r.stockMonths} />}</td>
                          <td className="px-3 py-2 text-text-secondary text-[13px]">{r.action}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ── Clearance ── */}
          {plan.clearanceCandidates && plan.clearanceCandidates.length > 0 && (
            <div id={`${p}-clearance`}>
              <SectionHeader id={`${p}-clearance-h`}>OFF消化候補</SectionHeader>
              <div className="overflow-x-auto">
                <table className="w-full text-[14px]">
                  <thead>
                    <tr className="bg-red-50">
                      <th className="text-left px-3 py-2.5 font-semibold text-red-700 rounded-l-lg">品番</th>
                      <th className="text-right px-3 py-2.5 font-semibold text-red-700">在庫</th>
                      <th className="text-right px-3 py-2.5 font-semibold text-red-700">月販</th>
                      <th className="text-right px-3 py-2.5 font-semibold text-red-700">在庫月数</th>
                      <th className="text-left px-3 py-2.5 font-semibold text-red-700 rounded-r-lg">消化プラン</th>
                    </tr>
                  </thead>
                  <tbody>
                    {plan.clearanceCandidates.map((item, i) => {
                      const months = parseFloat(item.stockMonths) || 0;
                      const severity = months > 6 ? "text-red-600 font-extrabold" : months > 1 ? "text-amber-600 font-bold" : "text-emerald-600";
                      const isNl = item.id.startsWith("nl");
                      return (
                        <tr key={item.id} className={i % 2 === 1 ? "bg-red-50/30" : ""}>
                          <td className="px-3 py-2.5">
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
                          <td className="px-3 py-2.5 text-right tabular-nums font-bold">{item.stock}</td>
                          <td className="px-3 py-2.5 text-right tabular-nums">{item.sales}</td>
                          <td className={`px-3 py-2.5 text-right tabular-nums ${severity}`}>{item.stockMonths}</td>
                          <td className="px-3 py-2.5 text-text-secondary">{item.plan}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ════════════════════════════════════════
             ◆ 分析
             ════════════════════════════════════════ */}
          <div id={`${p}-analysis`} className="rounded-2xl bg-purple-100 border-l-4 border-purple-500 px-6 py-5 mb-4 scroll-mt-24">
            <p className="text-[22px] font-extrabold text-purple-800 tracking-wider">分析</p>
            <p className="text-[13px] text-purple-600/70 mt-1">ZOZO・楽天・トレンド・自社実績</p>
          </div>

          {/* ── 軸①〜④ ── */}
          {plan.marketReports && (() => {
            const zozoReports = plan.marketReports.filter(r => r.title.includes("ZOZO"));
            const rakutenReports = plan.marketReports.filter(r => r.title.includes("楽天"));
            const trendReports = plan.marketReports.filter(r => r.title.includes("AW") || r.title.includes("トレンド"));
            const selfReports = plan.marketReports.filter(r => r.title.includes("自社"));
            const axisGroups = [
              { id: `${p}-axis1`, num: "①", title: "ZOZO市場分析", color: "bg-gray-800", reports: zozoReports },
              { id: `${p}-axis2`, num: "②", title: "楽天市場分析", color: "bg-red-500", reports: rakutenReports },
              { id: `${p}-axis3`, num: "③", title: "2026トレンド分析", color: "bg-purple-500", reports: trendReports },
              { id: `${p}-axis4`, num: "④", title: "自社実績分析", color: "bg-brand", reports: selfReports },
            ];
            return axisGroups.map((axis) => axis.reports.length > 0 && (
              <div key={axis.id} id={axis.id}>
                <SectionHeader id={`${axis.id}-h`}>
                  <span className={`${axis.color} text-white px-2.5 py-1 rounded-lg text-[13px] font-bold mr-1`}>軸{axis.num}</span>
                  {axis.title}
                </SectionHeader>
                <div className="space-y-2">
                  {axis.reports.map((report) => (
                    <details key={report.title} className="rounded-xl bg-base border border-brand/8 overflow-hidden group" open>
                      <summary className="px-5 py-4 cursor-pointer flex items-center gap-3 hover:bg-brand/5 transition-colors [&::-webkit-details-marker]:hidden list-none">
                        <span className={`w-3 h-3 rounded-full shrink-0 ${axis.color}`} />
                        <span className="text-[16px] font-bold text-text-heading flex-1">{report.title}</span>
                        <svg className="w-5 h-5 text-text-muted transition-transform group-open:rotate-180 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                      </summary>
                      <div className="px-5 pb-5">
                        <p className="text-[15px] text-text-secondary leading-relaxed"><RichText text={report.body} /></p>
                        {report.noahlInsight && (
                          <div className="mt-4 border-l-3 border-brand pl-4 py-2 bg-brand/5 rounded-r-lg">
                            <p className="text-[12px] font-bold text-brand uppercase tracking-wider mb-1">NOAHLへの示唆</p>
                            <p className="text-[15px] text-text-primary leading-relaxed font-medium"><RichText text={report.noahlInsight} /></p>
                          </div>
                        )}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ));
          })()}

          {/* ── marketInsights fallback (for months without marketReports) ── */}
          {!plan.marketReports && plan.marketInsights && plan.marketInsights.length > 0 && (
            <div id={`${p}-axis1`}>
              <SectionHeader id={`${p}-insights-h`}>市場インサイト</SectionHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {plan.marketInsights.map((mi) => (
                  <div key={mi.source} className="rounded-xl bg-base border border-brand/8 p-5">
                    <span className={`px-3 py-1 rounded-lg text-[14px] font-bold ${mi.source === "ZOZO" ? "bg-gray-800 text-white" : "bg-red-500 text-white"}`}>{mi.source}</span>
                    <ul className="mt-3 space-y-1.5">
                      {mi.insights.map((ins) => (
                        <li key={ins} className="text-[14px] text-text-secondary flex items-start gap-2">
                          <span className="text-brand mt-1 shrink-0">&#9679;</span>
                          <span>{ins}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── Trends fallback ── */}
          {plan.trends && plan.trends.length > 0 && (
            <div id={`${p}-axis3`}>
              <SectionHeader id={`${p}-trends-h`}>トレンド</SectionHeader>
              <div className="space-y-2">
                {plan.trends.map((t) => (
                  <div key={t.name} className="flex items-center gap-3">
                    <div className="w-32 h-3 bg-purple-100 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500 rounded-full" style={{ width: `${t.score * 10}%` }} />
                    </div>
                    <span className="text-[14px] font-bold text-purple-700 tabular-nums w-6">{t.score}</span>
                    <span className="text-[14px] text-text-primary">{t.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── Success / Failure ── */}
          {(plan.successPatterns || plan.failurePatterns) && (
            <div id={`${p}-patterns`} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {plan.successPatterns && (
                <div className="rounded-xl bg-base p-5 border-l-4 border-emerald-400">
                  <SectionHeader id={`${p}-success-h`}>成功パターン</SectionHeader>
                  <div className="space-y-3">
                    {plan.successPatterns.map((s) => (
                      <div key={s} className="flex items-start gap-3">
                        <span className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shrink-0">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <p className="text-[15px] text-text-primary leading-relaxed"><RichText text={s} /></p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {plan.failurePatterns && (
                <div className="rounded-xl bg-base p-5 border-l-4 border-red-400">
                  <SectionHeader id={`${p}-failure-h`}>失敗パターン</SectionHeader>
                  <div className="space-y-3">
                    {plan.failurePatterns.map((f) => (
                      <div key={f} className="flex items-start gap-3">
                        <span className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shrink-0">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </span>
                        <p className="text-[15px] text-text-primary leading-relaxed"><RichText text={f} /></p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}


          {/* ════════════════════════════════════════
             ◆ 他社売れ筋ランキング
             ════════════════════════════════════════ */}
          {plan.competitorProducts && plan.competitorProducts.length > 0 && (<>
            <div id={`${p}-competitors`} className="rounded-2xl bg-gray-200 border-l-4 border-gray-500 px-6 py-5 mb-4 scroll-mt-24">
              <p className="text-[22px] font-extrabold text-gray-800 tracking-wider">他社売れ筋ランキング</p>
              <p className="text-[13px] text-gray-500 mt-1">ZOZO・楽天 TOP売上商品</p>
            </div>
            <div>
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
          </>)}

          {/* ── Notes ── */}
          {plan.notes.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-4 border-t border-brand/10">
              {plan.notes.map((note) => (
                <span key={note} className="inline-flex items-center gap-1.5 text-[14px] text-text-secondary bg-base px-3 py-2 rounded-lg">
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
