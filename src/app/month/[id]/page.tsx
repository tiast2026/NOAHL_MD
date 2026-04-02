import { notFound } from "next/navigation";
import Link from "next/link";
import { mdPlan } from "@/data/md-plan";
import MonthSection from "@/components/MonthSection";
import DetailedMonthSection from "@/components/DetailedMonthSection";

const MONTH_NAMES = ["", "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];

export function generateStaticParams() {
  return Array.from({ length: 12 }, (_, i) => ({ id: String(i + 1) }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const month = parseInt(id, 10);
  const plan = mdPlan.find((p) => p.month === month);
  if (!plan) return { title: "NOAHL MD Plan" };
  return {
    title: `${MONTH_NAMES[month]} MD計画 | NOAHL 2026`,
    description: plan.theme,
  };
}

export default async function MonthPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const month = parseInt(id, 10);
  if (isNaN(month) || month < 1 || month > 12) notFound();

  const plan = mdPlan.find((p) => p.month === month);
  if (!plan) notFound();

  const prevMonth = month > 1 ? month - 1 : null;
  const nextMonth = month < 12 ? month + 1 : null;

  return (
    <div className="min-h-screen bg-base">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 bg-base-header/95 backdrop-blur-sm border-b border-brand/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-[13px] font-semibold text-text-secondary hover:text-brand-dark transition-colors"
          >
            <span className="text-brand">←</span>
            <span>概要に戻る</span>
          </Link>

          <div className="flex items-center gap-1 overflow-x-auto scrollbar-none">
            {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
              <Link
                key={m}
                href={`/month/${m}`}
                className={`flex-shrink-0 px-3 py-1 rounded-full text-[12px] font-semibold transition-all duration-150 ${
                  m === month
                    ? "bg-brand text-white shadow-sm"
                    : "text-text-secondary hover:bg-brand/10 hover:text-brand-dark"
                }`}
              >
                {m}月
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {prevMonth && (
              <Link
                href={`/month/${prevMonth}`}
                className="text-[12px] font-semibold text-text-secondary hover:text-brand-dark transition-colors whitespace-nowrap"
              >
                ← {prevMonth}月
              </Link>
            )}
            {nextMonth && (
              <Link
                href={`/month/${nextMonth}`}
                className="text-[12px] font-semibold text-text-secondary hover:text-brand-dark transition-colors whitespace-nowrap"
              >
                {nextMonth}月 →
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 pt-5 pb-1">
        <nav className="flex items-center gap-2 text-[11px] text-text-muted">
          <Link href="/" className="hover:text-brand-dark transition-colors">NOAHL 2026 MD Plan</Link>
          <span>/</span>
          <span className="text-text-secondary font-medium">{MONTH_NAMES[month]} MD計画</span>
        </nav>
      </div>

      {/* Main Content */}
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 py-4 pb-16">
        {plan.productGroups ? <DetailedMonthSection plan={plan} /> : <MonthSection plan={plan} />}
      </main>

      {/* Bottom navigation */}
      <div className="border-t border-brand/10 bg-base-card">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          {prevMonth ? (
            <Link
              href={`/month/${prevMonth}`}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-base border border-brand/10 text-[13px] font-semibold text-text-secondary hover:border-brand/30 hover:text-brand-dark transition-all"
            >
              <span>←</span>
              <span>{prevMonth}月 {mdPlan.find(p => p.month === prevMonth)?.salesTarget}</span>
            </Link>
          ) : <div />}
          <Link
            href="/"
            className="text-[12px] font-semibold text-text-muted hover:text-brand-dark transition-colors"
          >
            年間概要
          </Link>
          {nextMonth ? (
            <Link
              href={`/month/${nextMonth}`}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-base border border-brand/10 text-[13px] font-semibold text-text-secondary hover:border-brand/30 hover:text-brand-dark transition-all"
            >
              <span>{nextMonth}月 {mdPlan.find(p => p.month === nextMonth)?.salesTarget}</span>
              <span>→</span>
            </Link>
          ) : <div />}
        </div>
      </div>

      <footer className="border-t border-brand/10 py-4 text-center">
        <p className="text-[11px] text-text-muted">
          NOAHL 2026 MD Plan &mdash; Last updated: 2026-03
        </p>
      </footer>
    </div>
  );
}
