import type { MonthPlan } from "../types";
export const april: MonthPlan = {
  month: 4, theme: "春本番＆GW準備", salesTarget: "¥4,500万", salesRatio: "8.30%",
  seasonBreakdown: [{ label: "春物", amount: "¥3,375万", ratio: "75%" }, { label: "初夏物", amount: "¥1,125万", ratio: "25%" }],
  categories: [{ name: "トップス", items: ["リネンシャツ", "ボーダーカットソー"] }, { name: "ボトムス", items: ["カラーパンツ", "デニムショート"] }, { name: "ワンピース", items: ["リネンワンピース"] }],
  events: ["楽天お買い物マラソン", "GW直前セール"],
  products: [
    { id: "nltp031", name: "シアーシャツ（春再販）", imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2024/2402/nltp031-1.jpg", link: "#", tier: "S", salesRecord: "春ベースアイテム" },
    { id: "nlpt320", name: "リネンセットアップパンツ", imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202504/nlpt320-1r.jpg", link: "#", tier: "S", salesRecord: "ボトムス突破品番" },
    { id: "nlbi004", name: "レースドッキングインナー", imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2024/2402/nlbi004-1.jpg", link: "#", tier: "A", salesRecord: "セット購入促進" },
  ],
  inventory: { target: "¥4,000万", ratio: "0.89" },
  notes: ["GW需要取り込み", "初夏物先行投入"],
};
