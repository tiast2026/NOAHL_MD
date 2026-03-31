"use client";

import { useState, useEffect } from "react";

const months = Array.from({ length: 12 }, (_, i) => i + 1);

export default function MonthNav() {
  const [active, setActive] = useState(1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const month = Number(entry.target.id.replace("month-", ""));
            if (!isNaN(month)) setActive(month);
          }
        }
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    for (const m of months) {
      const el = document.getElementById(`month-${m}`);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-base-header/95 backdrop-blur-sm border-b border-brand/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-1 py-2 overflow-x-auto scrollbar-none">
          {months.map((m) => (
            <a
              key={m}
              href={`#month-${m}`}
              onClick={() => setActive(m)}
              className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-[13px] font-semibold transition-all duration-200 ${
                active === m
                  ? "bg-brand text-white shadow-sm"
                  : "text-text-secondary hover:bg-brand/10 hover:text-brand-dark"
              }`}
            >
              {m}月
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
