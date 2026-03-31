import type { MonthPlan } from "../types";
export const january: MonthPlan = {
  month: 1, theme: "冬クリアランス＆初売り", salesTarget: "¥3,625万", salesRatio: "6.70%",
  seasonBreakdown: [{ label: "冬物", amount: "¥2,538万", ratio: "70%" }, { label: "春物先行", amount: "¥725万", ratio: "20%" }],
  categories: [{ name: "トップス", items: ["ニット", "裏起毛スウェット"] }, { name: "アウター", items: ["ダウン", "ウールコート"] }, { name: "ボトムス", items: ["コーデュロイパンツ", "裏起毛デニム"] }],
  events: ["初売りセール", "楽天スーパーSALE", "ZOZO新春SALE"],
  products: [
    { id: "nltp475", name: "カシミヤブレンドニット", imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2026/202601/nltp475-1r.jpg", link: "#", tier: "S", salesRecord: "冬物エース" },
    { id: "nlwp473", name: "ダウンロングコート", imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2026/202601/nlwp473-1r.jpg", link: "#", tier: "S" },
    { id: "nltp484", name: "裏起毛ワイドパンツ", imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2026/202601/nltp484-1r.jpg", link: "#", tier: "A" },
  ],
  inventory: { target: "¥3,200万", ratio: "0.88" },
  notes: ["冬物在庫30%OFF → 50%OFF段階値下げ", "春物先行予約スタート"],
};
