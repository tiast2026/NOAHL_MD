import type { MonthPlan } from "../types";

export const august: MonthPlan = {
  month: 8,
  theme: "晩夏クリアランス × 秋物本格立ち上げ",
  subTheme: "夏物最終処分 + 秋AW2026テクスチャーリッチ投入",
  salesTarget: "¥3,800万",
  salesRatio: "7.00%",
  totalBudget: "¥1,550万",
  seasonBreakdown: [
    { label: "夏物最終", amount: "¥1,520万", ratio: "40%" },
    { label: "秋物", amount: "¥2,280万", ratio: "60%" },
  ],
  categories: [
    { name: "トップス", items: ["accoコラボ 秋ニット（夏コラボ継続）", "フリルカラーブラウス"] },
    { name: "ボトムス", items: ["カーブシルエットパンツ（秋色）"] },
    { name: "ワンピース", items: ["ファンネルネックニットWP"] },
    { name: "インナー", items: ["レースドッキング 秋カラーキャミ（インナー最盛期：TOP30に4品）"] },
  ],
  events: [
    "楽天お買い物マラソン（8月2回）",
    "お盆セール",
    "夏物TikTok LIVE 最終消化",
    "ZOZO秋先取りSALE",
  ],
  products: [
    {
      id: "nltp431", name: "acco コラボ 秋ニット",
      imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202509/nltp431-1r.jpg",
      link: "https://item.rakuten.co.jp/noahl/nltp431-2509/", tier: "S",
      price: "¥6,980", colors: 3, units: 360, cost: "¥50.4万",
      salesRecord: "春コラボ nltp244 実績再現狙い",
      fourAxis: { zozo: "◎", rakuten: "◎", trend: "◎", internal: "◎" },
    },
    {
      id: "nltp368", name: "ファンネルネックニットWP",
      imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202509/nltp368-1r.jpg",
      link: "https://item.rakuten.co.jp/noahl/nltp368-2509/", tier: "S",
      price: "¥7,980〜8,980", colors: 3, units: 240, cost: "¥38.4万",
      fourAxis: { zozo: "◎", rakuten: "◎", trend: "◎", internal: "◎" },
    },
    {
      id: "nlpt379", name: "カーブシルエットパンツ（秋色）",
      imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202508/nlpt379-1r.jpg",
      link: "https://item.rakuten.co.jp/noahl/nlpt379-2509/", tier: "S",
      price: "¥6,980", colors: 1, units: 420, cost: "¥58.8万",
      fourAxis: { zozo: "◎", rakuten: "◎", trend: "◎", internal: "◎" },
    },
    {
      id: "nltp406", name: "フリルカラーブラウス",
      imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202510/nltp406-1r.jpg",
      link: "https://item.rakuten.co.jp/noahl/nltp406-2510/", tier: "A",
      units: 240, cost: "¥28.8万",
      fourAxis: { zozo: "○", rakuten: "○", trend: "◎", internal: "○" },
    },
    {
      id: "nlbi004", name: "レースドッキング 秋カラーキャミ",
      imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2024/2402/nlbi004-1.jpg",
      link: "https://item.rakuten.co.jp/noahl/nlbi004-30y16-210906/", tier: "A",
      units: 200, cost: "¥20万",
      fourAxis: { zozo: "○", rakuten: "○", trend: "◎", internal: "◎" },
    },
    {
      id: "nlsk389", name: "ニットロングスカート",
      imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202508/nlsk389-1r.jpg",
      link: "https://item.rakuten.co.jp/noahl/nlsk389-2508/", tier: "A",
      units: 150, cost: "¥19.5万",
      fourAxis: { zozo: "○", rakuten: "○", trend: "◎", internal: "○" },
    },
    {
      id: "nltp444", name: "フランネルチェックシャツ",
      imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202512/nltp444-1r.jpg",
      link: "https://item.rakuten.co.jp/noahl/nltp444-2511/", tier: "B",
      units: 120, cost: "¥13.2万",
    },
    {
      id: "nltp393", name: "ストライプニットベスト",
      imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202510/nltp393-1r.jpg",
      link: "https://item.rakuten.co.jp/noahl/nltp393-2510/", tier: "B",
      units: 100, cost: "¥12万",
    },
  ],
  budget: [
    { category: "秋物新作OEM（夏含む）", amount: "¥600万", share: "39%" },
    { category: "秋物再入荷", amount: "¥550万", share: "35%" },
    { category: "夏物再入荷（最終）", amount: "¥400万", share: "26%" },
  ],
  restockItems: [
    { id: "nlwp280", name: "ハイプライスWP（死亡在庫）", sales: "49枚", currentStock: "1,058", action: "40〜60%OFF処分", budget: "ラッキーバッグ活用" },
    { id: "nltp031", name: "シアーシャツ（減速）", sales: "897→減速", currentStock: "1,568", action: "20〜40%OFF値下げ", budget: "8月末完了目標" },
    { id: "nlwp345", name: "WP（評価3.25）", sales: "低迷", currentStock: "-", action: "即時処分", budget: "評価3.5以下は廃番" },
  ],
  marketInsights: [
    { source: "ZOZO", insights: [
      "シャツ：29→22件（減少）。T-シャツ分岐",
      "2WAYキーワード：1→4件 急増",
      "パンツ：36→45件 爆発",
      "オーバーオール：25→28件（ピーク）",
    ]},
    { source: "楽天", insights: [
      "パンツが最大カテゴリ",
      "体型カバー：37件（圧倒的）",
      "8月はマラソンのみ（イベント谷間）",
    ]},
  ],
  trends: [
    { name: "テクスチャーリッチ（重要度9）", score: 9 },
    { name: "ハイネック × エレガンス（重要度9）", score: 9 },
    { name: "ロングスカートリバイバル（重要度8）", score: 8 },
    { name: "グランジ × フェミニン（重要度7）", score: 7 },
  ],
  inventory: { target: "¥3,600万", ratio: "0.95" },
  successPatterns: [
    "インナーウェア最盛期：TOP30に4品（史上最多）。nlbi019, nlbi016等",
    "ベスト5: nlda342068(788枚), nl0197(763), nlbi019(590), nlpt320(506), nltp031(409)",
  ],
  failurePatterns: [
    "nlwp280: 在庫1,058枚の死亡在庫。最安値 × ラッキーバッグで急処分",
    "評価3.5以下（nlwp345/3.25）は即廃番シグナル",
    "高額コラボのメール便包装 → 顧客失望（¥9,880をメール便は不可）",
  ],
  notes: [
    "Pantone AW2026: ミュートクレイ、フェスティバルフューシャ、アースブラウン",
    "秋物仕入 ¥600万 = 年間H2の起点",
    "コラボ品翌月90%以上急落（Mayoコラボパターン）に注意",
  ],
};
