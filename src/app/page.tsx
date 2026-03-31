import { mdPlan } from "@/data/md-plan";
import MonthNav from "@/components/MonthNav";
import MonthSection from "@/components/MonthSection";

export default function Home() {
  const totalSales = "¥54,400万";

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <header className="bg-gradient-to-b from-base-header to-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-brand flex items-center justify-center">
              <span className="text-white font-bold text-[15px]">N</span>
            </div>
            <h1 className="text-[22px] font-bold text-text-heading tracking-tight">
              NOAHL 2026 MD Plan
            </h1>
          </div>
          <p className="text-[14px] text-text-secondary mt-1">
            年間マーチャンダイジングスケジュール
          </p>

          {/* Annual KPI Summary */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <SummaryCard label="年間売上目標" value={totalSales} />
            <SummaryCard label="月間平均" value="¥4,533万" />
            <SummaryCard label="最大月" value="11月 ¥5,500万" />
            <SummaryCard label="商品展開" value="12ヶ月 / 60型" />
          </div>
        </div>
      </header>

      {/* Month Navigation */}
      <MonthNav />

      {/* Month Sections */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {mdPlan.map((plan) => (
          <MonthSection key={plan.month} plan={plan} />
        ))}
      </main>

      {/* Footer */}
      <footer className="border-t border-brand/10 py-6 text-center">
        <p className="text-[12px] text-text-muted">
          NOAHL 2026 MD Plan &mdash; Last updated: 2026-03
        </p>
      </footer>
    </div>
  );
}

function SummaryCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-base-card border border-brand/10 px-4 py-3 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
      <p className="text-[11px] font-medium text-text-muted uppercase tracking-wider">
        {label}
      </p>
      <p className="mt-1 text-[18px] font-bold text-text-heading tabular-nums">
        {value}
      </p>
    </div>
  );
}
