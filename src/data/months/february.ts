import type { MonthPlan } from "../types";
export const february: MonthPlan = {
  month: 2, theme: "春物立ち上げ＆バレンタイン", salesTarget: "¥3,150万", salesRatio: "5.80%",
  seasonBreakdown: [{ label: "冬物最終", amount: "¥945万", ratio: "30%" }, { label: "春物", amount: "¥2,205万", ratio: "70%" }],
  categories: [{ name: "トップス", items: ["春ニット", "シャツブラウス"] }, { name: "アウター", items: ["スプリングコート", "ライトジャケット"] }, { name: "ワンピース", items: ["シャツワンピース"] }],
  events: ["バレンタイン企画", "楽天お買い物マラソン"],
  products: [
    { id: "nltp488", name: "スプリングトレンチ", imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2026/202602/nltp488-1r.jpg", link: "https://item.rakuten.co.jp/noahl/nltp488-2601/", tier: "S" },
    { id: "nltp492", name: "春色カーディガン", imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2026/202603/nltp492-1r.jpg", link: "https://item.rakuten.co.jp/noahl/nltp492-2602/", tier: "A" },
    { id: "nltp244", name: "フレアロングスカート", imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202502/nltp244-1r.jpg", link: "https://item.rakuten.co.jp/noahl/nltp244-2502/", tier: "A", salesRecord: "前年コラボ4,077枚実績" },
  ],
  inventory: { target: "¥3,500万", ratio: "1.11" },
  notes: ["冬物最終クリアランス", "春物本格投入"],
};
