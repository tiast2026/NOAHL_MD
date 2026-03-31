export type Product = {
  id: string;
  name: string;
  imageUrl: string;
  link: string;
  tag: "ace" | "repush" | "limited" | "new";
};

export type MonthPlan = {
  month: number;
  theme: string;
  salesTarget: string;
  salesRatio: string;
  seasonBreakdown: { label: string; amount: string; ratio: string }[];
  categories: { name: string; items: string[] }[];
  events: string[];
  products: Product[];
  inventory: { target: string; ratio: string };
  notes: string[];
};

export const mdPlan: MonthPlan[] = [
  {
    month: 1,
    theme: "冬クリアランス＆初売り",
    salesTarget: "¥3,625万",
    salesRatio: "6.70%",
    seasonBreakdown: [
      { label: "冬物", amount: "¥2,538万", ratio: "70%" },
      { label: "春物先行", amount: "¥725万", ratio: "20%" },
    ],
    categories: [
      { name: "トップス", items: ["ニット", "裏起毛スウェット"] },
      { name: "アウター", items: ["ダウン", "ウールコート"] },
      { name: "ボトムス", items: ["コーデュロイパンツ", "裏起毛デニム"] },
    ],
    events: ["初売りセール", "楽天スーパーSALE", "ZOZO新春SALE"],
    products: [
      { id: "nlpt301", name: "カシミヤブレンドニット", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt301", link: "#", tag: "ace" },
      { id: "nlpt302", name: "ダウンロングコート", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt302", link: "#", tag: "ace" },
      { id: "nlpt303", name: "裏起毛ワイドパンツ", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt303", link: "#", tag: "ace" },
      { id: "nlpt304", name: "チェックウールスカート", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt304", link: "#", tag: "repush" },
      { id: "nlpt305", name: "春先取りシアーブラウス", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt305", link: "#", tag: "new" },
    ],
    inventory: { target: "¥3,200万", ratio: "0.88" },
    notes: ["冬物在庫30%OFF → 50%OFF段階値下げ", "春物先行予約スタート"],
  },
  {
    month: 2,
    theme: "春物立ち上げ＆バレンタイン",
    salesTarget: "¥3,150万",
    salesRatio: "5.80%",
    seasonBreakdown: [
      { label: "冬物最終", amount: "¥945万", ratio: "30%" },
      { label: "春物", amount: "¥2,205万", ratio: "70%" },
    ],
    categories: [
      { name: "トップス", items: ["春ニット", "シャツブラウス"] },
      { name: "アウター", items: ["スプリングコート", "ライトジャケット"] },
      { name: "ワンピース", items: ["シャツワンピース"] },
    ],
    events: ["バレンタイン企画", "楽天お買い物マラソン"],
    products: [
      { id: "nlpt311", name: "スプリングトレンチ", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt311", link: "#", tag: "ace" },
      { id: "nlpt312", name: "春色カーディガン", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt312", link: "#", tag: "ace" },
      { id: "nlpt313", name: "フレアロングスカート", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt313", link: "#", tag: "ace" },
      { id: "nlpt314", name: "バレンタイン限定セット", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt314", link: "#", tag: "limited" },
      { id: "nlpt315", name: "冬物最終セールニット", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt315", link: "#", tag: "repush" },
    ],
    inventory: { target: "¥3,500万", ratio: "1.11" },
    notes: ["冬物最終クリアランス", "春物本格投入"],
  },
  {
    month: 3,
    theme: "春の立ち上がり",
    salesTarget: "¥4,957万",
    salesRatio: "9.10%",
    seasonBreakdown: [
      { label: "春物", amount: "¥4,213万", ratio: "85%" },
      { label: "初夏先行", amount: "¥744万", ratio: "15%" },
    ],
    categories: [
      { name: "トップス", items: ["春ブラウス", "シアーシャツ"] },
      { name: "ボトムス", items: ["春カラーパンツ", "ワイドデニム"] },
      { name: "ワンピース", items: ["セレモニードレス"] },
    ],
    events: ["楽天スーパーSALE", "ZOZO春セール", "卒入学シーズン"],
    products: [
      { id: "nlpt232", name: "シアーブラウス", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt232", link: "#", tag: "ace" },
      { id: "nlpt233", name: "ハイウエストワイドデニム", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt233", link: "#", tag: "ace" },
      { id: "nlpt234", name: "セレモニーセットアップ", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt234", link: "#", tag: "ace" },
      { id: "nlpt235", name: "プリーツロングスカート", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt235", link: "#", tag: "repush" },
      { id: "nlpt236", name: "春限定カラーバッグ", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt236", link: "#", tag: "limited" },
    ],
    inventory: { target: "¥4,203万", ratio: "0.85" },
    notes: ["卒入学需要に対応", "セレモニー系強化"],
  },
  {
    month: 4,
    theme: "春本番＆GW準備",
    salesTarget: "¥4,500万",
    salesRatio: "8.30%",
    seasonBreakdown: [
      { label: "春物", amount: "¥3,375万", ratio: "75%" },
      { label: "初夏物", amount: "¥1,125万", ratio: "25%" },
    ],
    categories: [
      { name: "トップス", items: ["リネンシャツ", "ボーダーカットソー"] },
      { name: "ボトムス", items: ["カラーパンツ", "デニムショート"] },
      { name: "ワンピース", items: ["リネンワンピース"] },
    ],
    events: ["楽天お買い物マラソン", "GW直前セール"],
    products: [
      { id: "nlpt321", name: "リネンオーバーシャツ", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt321", link: "#", tag: "ace" },
      { id: "nlpt322", name: "リネンセットアップ", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt322", link: "#", tag: "ace" },
      { id: "nlpt323", name: "ストレッチテーパードパンツ", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt323", link: "#", tag: "ace" },
      { id: "nlpt324", name: "GW限定ノベルティ付き", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt324", link: "#", tag: "limited" },
      { id: "nlpt325", name: "春ブラウス再プッシュ", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt325", link: "#", tag: "repush" },
    ],
    inventory: { target: "¥4,000万", ratio: "0.89" },
    notes: ["GW需要取り込み", "初夏物先行投入"],
  },
  {
    month: 5,
    theme: "初夏＆母の日",
    salesTarget: "¥4,800万",
    salesRatio: "8.80%",
    seasonBreakdown: [
      { label: "春物最終", amount: "¥960万", ratio: "20%" },
      { label: "初夏物", amount: "¥3,840万", ratio: "80%" },
    ],
    categories: [
      { name: "トップス", items: ["ノースリーブブラウス", "Tシャツ"] },
      { name: "ボトムス", items: ["リネンパンツ", "ショートパンツ"] },
      { name: "ワンピース", items: ["リゾートワンピース"] },
    ],
    events: ["母の日ギフト企画", "楽天スーパーSALE", "ZOZO初夏セール"],
    products: [
      { id: "nlpt331", name: "リゾートマキシワンピ", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt331", link: "#", tag: "ace" },
      { id: "nlpt332", name: "ノースリーブブラウス", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt332", link: "#", tag: "ace" },
      { id: "nlpt333", name: "リネンワイドパンツ", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt333", link: "#", tag: "ace" },
      { id: "nlpt334", name: "母の日ギフトセット", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt334", link: "#", tag: "limited" },
      { id: "nlpt335", name: "リネンセットアップ再販", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt335", link: "#", tag: "repush" },
    ],
    inventory: { target: "¥4,300万", ratio: "0.90" },
    notes: ["母の日ギフト需要", "春物段階値下げ"],
  },
  {
    month: 6,
    theme: "夏物本格投入＆梅雨対策",
    salesTarget: "¥4,200万",
    salesRatio: "7.70%",
    seasonBreakdown: [
      { label: "夏物", amount: "¥3,780万", ratio: "90%" },
      { label: "梅雨対策", amount: "¥420万", ratio: "10%" },
    ],
    categories: [
      { name: "トップス", items: ["サマーニット", "バンドカラーシャツ"] },
      { name: "ボトムス", items: ["夏デニム", "イージーパンツ"] },
      { name: "アウター", items: ["撥水ライトアウター", "UVカーディガン"] },
    ],
    events: ["楽天お買い物マラソン", "ZOZO夏先取りセール"],
    products: [
      { id: "nlpt341", name: "撥水マウンテンパーカー", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt341", link: "#", tag: "ace" },
      { id: "nlpt342", name: "接触冷感Tシャツ", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt342", link: "#", tag: "ace" },
      { id: "nlpt343", name: "UVカットカーディガン", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt343", link: "#", tag: "ace" },
      { id: "nlpt344", name: "撥水トートバッグ", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt344", link: "#", tag: "new" },
      { id: "nlpt345", name: "リゾートワンピ再販", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt345", link: "#", tag: "repush" },
    ],
    inventory: { target: "¥3,800万", ratio: "0.90" },
    notes: ["梅雨対策アイテム強化", "撥水・UV機能訴求"],
  },
  {
    month: 7,
    theme: "盛夏＆サマーセール",
    salesTarget: "¥5,200万",
    salesRatio: "9.60%",
    seasonBreakdown: [
      { label: "夏物", amount: "¥4,680万", ratio: "90%" },
      { label: "秋物先行", amount: "¥520万", ratio: "10%" },
    ],
    categories: [
      { name: "トップス", items: ["リゾートシャツ", "クロップドトップ"] },
      { name: "ボトムス", items: ["ショートパンツ", "マキシスカート"] },
      { name: "水着・リゾート", items: ["ビーチウェア", "カバーアップ"] },
    ],
    events: ["楽天スーパーSALE", "ZOZOサマーセール", "Amazon Prime Day"],
    products: [
      { id: "nlpt351", name: "リゾートプリントシャツ", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt351", link: "#", tag: "ace" },
      { id: "nlpt352", name: "冷感リブタンクトップ", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt352", link: "#", tag: "ace" },
      { id: "nlpt353", name: "マキシプリーツスカート", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt353", link: "#", tag: "ace" },
      { id: "nlpt354", name: "サマー限定カラーセット", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt354", link: "#", tag: "limited" },
      { id: "nlpt355", name: "接触冷感Tシャツ再販", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt355", link: "#", tag: "repush" },
    ],
    inventory: { target: "¥4,500万", ratio: "0.87" },
    notes: ["夏セール最大30%OFF", "秋物先行予約開始"],
  },
  {
    month: 8,
    theme: "晩夏＆秋物先行",
    salesTarget: "¥3,800万",
    salesRatio: "7.00%",
    seasonBreakdown: [
      { label: "夏物最終", amount: "¥1,520万", ratio: "40%" },
      { label: "秋物", amount: "¥2,280万", ratio: "60%" },
    ],
    categories: [
      { name: "トップス", items: ["秋色ブラウス", "薄手ニット"] },
      { name: "アウター", items: ["ライトジャケット"] },
      { name: "ボトムス", items: ["秋カラーパンツ"] },
    ],
    events: ["楽天お買い物マラソン", "お盆セール"],
    products: [
      { id: "nlpt361", name: "秋色シアーニット", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt361", link: "#", tag: "ace" },
      { id: "nlpt362", name: "ライトトレンチコート", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt362", link: "#", tag: "ace" },
      { id: "nlpt363", name: "テーパードチノパンツ", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt363", link: "#", tag: "ace" },
      { id: "nlpt364", name: "夏物最終クリアランス", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt364", link: "#", tag: "repush" },
      { id: "nlpt365", name: "秋先行限定セット", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt365", link: "#", tag: "limited" },
    ],
    inventory: { target: "¥3,600万", ratio: "0.95" },
    notes: ["夏物50%OFF最終処分", "秋物本格投入準備"],
  },
  {
    month: 9,
    theme: "秋本番スタート",
    salesTarget: "¥5,100万",
    salesRatio: "9.40%",
    seasonBreakdown: [
      { label: "秋物", amount: "¥4,590万", ratio: "90%" },
      { label: "冬物先行", amount: "¥510万", ratio: "10%" },
    ],
    categories: [
      { name: "トップス", items: ["秋ニット", "ブラウス"] },
      { name: "アウター", items: ["ジャケット", "トレンチコート"] },
      { name: "ボトムス", items: ["コーデュロイ", "チェックパンツ"] },
    ],
    events: ["楽天スーパーSALE", "ZOZO秋セール"],
    products: [
      { id: "nlpt371", name: "ケーブルニットベスト", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt371", link: "#", tag: "ace" },
      { id: "nlpt372", name: "クラシックトレンチ", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt372", link: "#", tag: "ace" },
      { id: "nlpt373", name: "チェックワイドパンツ", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt373", link: "#", tag: "ace" },
      { id: "nlpt374", name: "秋カラーワンピース", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt374", link: "#", tag: "new" },
      { id: "nlpt375", name: "人気ニット再販", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt375", link: "#", tag: "repush" },
    ],
    inventory: { target: "¥4,600万", ratio: "0.90" },
    notes: ["秋物メイン展開", "トレンチコート強化月間"],
  },
  {
    month: 10,
    theme: "秋冬切替＆ハロウィン",
    salesTarget: "¥4,700万",
    salesRatio: "8.60%",
    seasonBreakdown: [
      { label: "秋物", amount: "¥2,820万", ratio: "60%" },
      { label: "冬物", amount: "¥1,880万", ratio: "40%" },
    ],
    categories: [
      { name: "トップス", items: ["厚手ニット", "タートルネック"] },
      { name: "アウター", items: ["ウールコート", "ダウンベスト"] },
      { name: "ボトムス", items: ["ウールパンツ", "ロングスカート"] },
    ],
    events: ["楽天お買い物マラソン", "ハロウィン企画"],
    products: [
      { id: "nlpt381", name: "オーバーサイズウールコート", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt381", link: "#", tag: "ace" },
      { id: "nlpt382", name: "カシミヤタートルニット", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt382", link: "#", tag: "ace" },
      { id: "nlpt383", name: "ウールワイドパンツ", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt383", link: "#", tag: "ace" },
      { id: "nlpt384", name: "ハロウィン限定アイテム", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt384", link: "#", tag: "limited" },
      { id: "nlpt385", name: "トレンチコート再販", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt385", link: "#", tag: "repush" },
    ],
    inventory: { target: "¥4,800万", ratio: "1.02" },
    notes: ["冬物立ち上げ", "秋物段階値下げ開始"],
  },
  {
    month: 11,
    theme: "冬物本番＆ブラックフライデー",
    salesTarget: "¥5,500万",
    salesRatio: "10.10%",
    seasonBreakdown: [
      { label: "冬物", amount: "¥4,950万", ratio: "90%" },
      { label: "秋物最終", amount: "¥550万", ratio: "10%" },
    ],
    categories: [
      { name: "トップス", items: ["カシミヤニット", "モヘアニット"] },
      { name: "アウター", items: ["ダウンジャケット", "ファーコート"] },
      { name: "ボトムス", items: ["裏起毛パンツ", "ニットスカート"] },
    ],
    events: ["楽天スーパーSALE", "ブラックフライデー", "ZOZO冬セール"],
    products: [
      { id: "nlpt391", name: "プレミアムダウンコート", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt391", link: "#", tag: "ace" },
      { id: "nlpt392", name: "カシミヤ100%ニット", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt392", link: "#", tag: "ace" },
      { id: "nlpt393", name: "裏起毛スリムパンツ", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt393", link: "#", tag: "ace" },
      { id: "nlpt394", name: "BF限定セット", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt394", link: "#", tag: "limited" },
      { id: "nlpt395", name: "ウールコート再販", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt395", link: "#", tag: "repush" },
    ],
    inventory: { target: "¥5,200万", ratio: "0.95" },
    notes: ["BFセール最大40%OFF", "年間最大売上月"],
  },
  {
    month: 12,
    theme: "ホリデー＆年末セール",
    salesTarget: "¥4,870万",
    salesRatio: "8.90%",
    seasonBreakdown: [
      { label: "冬物", amount: "¥4,383万", ratio: "90%" },
      { label: "ギフト", amount: "¥487万", ratio: "10%" },
    ],
    categories: [
      { name: "トップス", items: ["パーティーニット", "ラメトップス"] },
      { name: "ワンピース", items: ["パーティードレス", "ニットワンピース"] },
      { name: "ギフト", items: ["ギフトセット", "アクセサリー"] },
    ],
    events: ["クリスマス企画", "楽天大感謝祭", "年末セール"],
    products: [
      { id: "nlpt401", name: "パーティーシアードレス", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt401", link: "#", tag: "ace" },
      { id: "nlpt402", name: "ラメニットトップス", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt402", link: "#", tag: "ace" },
      { id: "nlpt403", name: "カシミヤストール", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt403", link: "#", tag: "ace" },
      { id: "nlpt404", name: "Xmas限定ギフトBOX", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt404", link: "#", tag: "limited" },
      { id: "nlpt405", name: "ダウンコート再販", imageUrl: "https://placehold.co/400x500/F8F6F3/C4A882?text=nlpt405", link: "#", tag: "repush" },
    ],
    inventory: { target: "¥4,500万", ratio: "0.92" },
    notes: ["クリスマスギフト需要", "年末在庫調整セール"],
  },
];
