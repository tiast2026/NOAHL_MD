import Link from "next/link";
import { mdPlan } from "@/data/md-plan";
import type { MonthPlan } from "@/data/types";

const MONTH_NAMES = ["", "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
const MONTH_EN = ["", "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

/* Sales targets sorted to find peak month */
const peakMonth = mdPlan.reduce((a, b) => {
  const av = parseInt(a.salesTarget.replace(/[^0-9]/g, ""), 10);
  const bv = parseInt(b.salesTarget.replace(/[^0-9]/g, ""), 10);
  return bv > av ? b : a;
});

export default function Home() {
  const annualSales = "¥54,400万";

  return (
    <div className="min-h-screen bg-base">
      {/* ── Hero ── */}
      <header className="bg-gradient-to-b from-base-header to-base border-b border-brand/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
          <div className="flex items-center gap-3.5 mb-6">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand to-brand-dark flex items-center justify-center shadow-sm">
              <span className="text-white font-extrabold text-[16px] tracking-tight">N</span>
            </div>
            <div>
              <h1 className="text-[24px] font-extrabold text-text-heading tracking-tight leading-tight">
                NOAHL 2026 MD Plan
              </h1>
              <p className="text-[13px] text-text-secondary">
                年間マーチャンダイジングスケジュール
              </p>
            </div>
          </div>

          {/* Annual KPI Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <KpiCard label="年間売上目標" value={annualSales} highlight />
            <KpiCard label="月間平均" value="¥4,533万" />
            <KpiCard label="年間最高売上" value="11月" sub="¥5,500万" />
            <KpiCard label="年間最大仕入月" value="9月" sub="¥3,000万" />
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center gap-3 mt-5">
            <span className="text-[10px] text-text-muted font-semibold uppercase tracking-wider">Tier:</span>
            <TierBadge label="S級" color="bg-gradient-to-r from-amber-500 to-amber-600 text-white" />
            <TierBadge label="A級" color="bg-gradient-to-r from-brand to-brand-dark text-white" />
            <TierBadge label="B級" color="bg-text-secondary text-white" />
            <TierBadge label="再入荷" color="bg-emerald-600 text-white" />
            <TierBadge label="仕入" color="bg-blue-600 text-white" />
            <span className="text-[10px] text-text-muted ml-2">
              4軸: Z=ZOZO R=楽天 T=トレンド 内=内部 ◎=高 ○=中 △=低
            </span>
          </div>
        </div>
      </header>

      {/* ── Month Grid ── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {mdPlan.map((plan) => (
            <MonthCard key={plan.month} plan={plan} isPeak={plan.month === peakMonth.month} />
          ))}
        </div>
      </main>

      {/* ── Annual Sales Chart (simple bar) ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-10">
        <div className="bg-base-card rounded-2xl border border-brand/10 p-6">
          <h2 className="text-[15px] font-bold text-text-heading mb-4">月別売上目標</h2>
          <div className="flex items-end gap-2 h-32">
            {mdPlan.map((plan) => {
              const val = parseInt(plan.salesTarget.replace(/[^0-9]/g, ""), 10);
              const max = 5500;
              const heightPct = Math.round((val / max) * 100);
              const isPeak = plan.month === peakMonth.month;
              return (
                <Link
                  key={plan.month}
                  href={`/month/${plan.month}`}
                  className="flex-1 flex flex-col items-center gap-1 group"
                >
                  <span className="text-[9px] font-bold text-text-muted tabular-nums opacity-0 group-hover:opacity-100 transition-opacity">
                    {plan.salesTarget}
                  </span>
                  <div
                    className={`w-full rounded-t-sm transition-all duration-200 group-hover:opacity-80 ${
                      isPeak
                        ? "bg-gradient-to-t from-brand-dark to-brand"
                        : "bg-brand/30 group-hover:bg-brand/50"
                    }`}
                    style={{ height: `${heightPct}%` }}
                  />
                  <span className={`text-[10px] font-semibold ${isPeak ? "text-brand-dark" : "text-text-muted"}`}>
                    {plan.month}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="border-t border-brand/10 py-6 text-center">
        <p className="text-[11px] text-text-muted">
          NOAHL 2026 MD Plan &mdash; Last updated: 2026-03
        </p>
      </footer>
    </div>
  );
}

/* ── Month Card ── */
function MonthCard({ plan, isPeak }: { plan: MonthPlan; isPeak: boolean }) {
  const sProducts = plan.products.filter((p) => p.tier === "S");
  const hasDetail = (plan.weeklyPlan?.length ?? 0) > 0 || (plan.budget?.length ?? 0) > 0;

  return (
    <Link
      href={`/month/${plan.month}`}
      className={`group relative block rounded-2xl border overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(196,168,130,0.15)] ${
        isPeak
          ? "border-brand/30 bg-gradient-to-br from-brand/8 to-base-card shadow-sm"
          : "border-brand/10 bg-base-card hover:border-brand/20"
      }`}
    >
      {isPeak && (
        <div className="absolute top-2 right-2 z-10">
          <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-gradient-to-r from-brand to-brand-dark text-white shadow-sm">
            年間最高
          </span>
        </div>
      )}

      {/* Header */}
      <div className="px-4 pt-4 pb-3 border-b border-brand/8">
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-[11px] font-bold text-brand/60 tracking-widest">
            {MONTH_EN[plan.month]}
          </span>
          <span className="text-[28px] font-extrabold text-brand leading-none tabular-nums">
            {plan.month}
          </span>
          <span className="text-[13px] text-text-muted font-medium">月</span>
        </div>
        <h3 className="text-[13px] font-bold text-text-heading leading-snug line-clamp-2">
          {plan.theme}
        </h3>
        {plan.subTheme && (
          <p className="text-[10px] text-text-secondary mt-0.5 line-clamp-1">{plan.subTheme}</p>
        )}
      </div>

      {/* KPIs */}
      <div className="px-4 py-3 flex items-center justify-between gap-3">
        <div>
          <p className="text-[9px] font-semibold text-text-muted uppercase tracking-wider">売上目標</p>
          <p className="text-[18px] font-extrabold text-text-heading tabular-nums leading-tight">
            {plan.salesTarget}
          </p>
        </div>
        <div className="text-right">
          <p className="text-[9px] font-semibold text-text-muted uppercase tracking-wider">構成比</p>
          <p className="text-[16px] font-bold text-brand tabular-nums leading-tight">
            {plan.salesRatio}
          </p>
        </div>
      </div>

      {/* Season Breakdown */}
      <div className="px-4 pb-3 flex flex-wrap gap-1">
        {plan.seasonBreakdown.map((s) => (
          <span
            key={s.label}
            className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-brand/8 text-brand-dark"
          >
            {s.label} {s.ratio}
          </span>
        ))}
      </div>

      {/* S-tier products preview */}
      {sProducts.length > 0 && (
        <div className="px-4 pb-3">
          <p className="text-[9px] font-bold text-text-muted uppercase tracking-wider mb-1.5">S級商品</p>
          <div className="flex gap-1.5">
            {sProducts.slice(0, 3).map((p) => (
              <div
                key={p.id}
                className="flex-1 aspect-square rounded-lg overflow-hidden bg-base border border-brand/5"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.imageUrl}
                  alt={p.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Key events */}
      <div className="px-4 pb-3">
        <div className="flex flex-wrap gap-1">
          {plan.events.slice(0, 2).map((ev) => (
            <span
              key={ev}
              className="text-[9px] px-2 py-0.5 rounded bg-brand/8 text-brand-dark font-medium truncate max-w-[140px]"
            >
              {ev}
            </span>
          ))}
          {plan.events.length > 2 && (
            <span className="text-[9px] text-text-muted">+{plan.events.length - 2}</span>
          )}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="px-4 py-2.5 bg-base border-t border-brand/8 flex items-center justify-between">
        <span className="text-[10px] text-text-muted">
          {plan.products.length}品番
          {hasDetail && " · 詳細あり"}
        </span>
        <span className="text-[11px] font-semibold text-brand group-hover:text-brand-dark transition-colors">
          詳細を見る →
        </span>
      </div>
    </Link>
  );
}

/* ── KPI Card ── */
function KpiCard({
  label, value, sub, highlight,
}: {
  label: string; value: string; sub?: string; highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border px-4 py-3 ${
        highlight
          ? "bg-gradient-to-br from-brand/10 to-brand/3 border-brand/15 shadow-sm"
          : "bg-base-card border-brand/10"
      }`}
    >
      <p className="text-[10px] font-semibold text-text-muted uppercase tracking-wider">{label}</p>
      <p className={`mt-1 text-[18px] font-extrabold tabular-nums leading-tight ${highlight ? "text-brand-dark" : "text-text-heading"}`}>
        {value}
      </p>
      {sub && <p className="text-[11px] text-text-secondary mt-0.5">{sub}</p>}
    </div>
  );
}

/* ── Tier Badge ── */
function TierBadge({ label, color }: { label: string; color: string }) {
  return (
    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${color}`}>
      {label}
    </span>
  );
}
