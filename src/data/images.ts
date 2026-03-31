/**
 * 品番 → 楽天画像URL マッピング
 * B列の品番（例: nltp500-2602 → nltp500）からA列の画像URLを引く
 */
export const productImages: Record<string, string> = {
  // 春夏 主力
  nltp244: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202502/nltp244-1r.jpg",
  nltp031: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2024/2402/nltp031-1.jpg",
  nl0197:  "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2023/202306/nl0197-1.jpg",
  nlbi004: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2024/2402/nlbi004-1.jpg",
  nlbi016: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2023/202306/nlbi016-1.jpg",
  nlbi022: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2024/202404/nlbi022-1.jpg",
  nlc076:  "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2024/202404/nlc076-1.jpg",
  nl0193:  "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2024/2402/nl0193-1.jpg",
  nlwp230: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202501/nlwp230-1r.jpg",
  nlwp276: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202504/nlwp276-1r.jpg",
  nlwp280: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202507/nlwp280-1r.jpg",
  nlwp282: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202505/nlwp282-1.jpg",
  nlwp314: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202507/nlwp314-1r.jpg",
  nlwp315: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202505/nlwp315-1r.jpg",
  nlwp345: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202508/nlwp345-1r.jpg",
  nlpt185: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202507/nlpt185-1r.jpg",
  nlpt320: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202504/nlpt320-1r.jpg",
  nlpt329: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202507/nlpt329-1r.jpg",
  nlpt379: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202508/nlpt379-1r.jpg",
  nlpt438: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202510/nlpt438-1r.jpg",
  nlpt454: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202510/nlpt454-1r.jpg",
  nlpt495: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2026/202603/nlpt495-1r.jpg",
  nlpt504: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2026/202602/nlpt504-1r.jpg",
  nlda342068: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2023/202306/nlda342068-1.jpg",
  nlda162502: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2023/202308/nlda162502-1.jpg",
  nlim003: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202502/nlim003-1-2.jpg",
  nlsk200: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2024/2409/nlsk200-1r.jpg",
  nlsk235: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202502/nlsk235-1r.jpg",
  nlsk389: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202508/nlsk389-1r.jpg",
  nlot428: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202510/nlot428-1r.jpg",
  nlot443: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202512/nlot443-1r.jpg",
  // 秋冬 主力
  nltp281: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202504/nltp281-1r.jpg",
  nltp288: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202504/nltp288-1r.jpg",
  nltp300: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202505/nltp300-1r.jpg",
  nltp339: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202507/nltp339-1r.jpg",
  nltp361: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202508/nltp361-1r.jpg",
  nltp368: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202509/nltp368-1r.jpg",
  nltp370: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202508/nltp370-1r.jpg",
  nltp390: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202508/nltp390-1r.jpg",
  nltp393: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202510/nltp393-1r.jpg",
  nltp400: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202509/nltp400-1r.jpg",
  nltp402: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202509/nltp402-1r.jpg",
  nltp406: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202510/nltp406-1r.jpg",
  nltp413: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202510/nltp413-1r.jpg",
  nltp418: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202509/nltp418-1r.jpg",
  nltp431: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202509/nltp431-1r.jpg",
  nltp434: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202509/nltp434-1r.jpg",
  nltp444: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202512/nltp444-1r.jpg",
  nltp453: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202510/nltp453-1r.jpg",
  nltp464: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2026/202602/nltp464-1r.jpg",
  nltp472: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2026/202602/nltp472-1r.jpg",
  nltp475: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2026/202601/nltp475-1r.jpg",
  nltp483: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2026/202601/nltp483-1r.jpg",
  nltp484: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2026/202601/nltp484-1r.jpg",
  nltp488: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2026/202602/nltp488-1r.jpg",
  nltp492: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2026/202603/nltp492-1r.jpg",
  nltp497: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2026/202603/nltp497-1r.jpg",
  nltp500: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2026/202603/nltp500-1r.jpg",
  nltp506: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2026/202603/nltp506-1r.jpg",
  nltp507: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2026/202603/nltp507-1r.jpg",
  nltp513: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2026/202602/nltp513-1r.jpg",
  nltp516: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2026/202602/nltp516-1r.jpg",
  nlwp473: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2026/202601/nlwp473-1r.jpg",
  nlxn30705: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202509/nlxn30705-1r.jpg",
  nlxn30722: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202510/nlxn30722-1r.jpg",
};

/**
 * 品番 → 楽天商品ページリンク マッピング
 * スプレッドシートB列のフルコードをそのまま使用
 */
export const productLinks: Record<string, string> = {
  nltp500: "https://item.rakuten.co.jp/noahl/nltp500-2602/",
  nltp244: "https://item.rakuten.co.jp/noahl/nltp244-2502/",
  nlbi004: "https://item.rakuten.co.jp/noahl/nlbi004-30y16-210906/",
  nl0197:  "https://item.rakuten.co.jp/noahl/nl0197-00y11-220217/",
  nltp031: "https://item.rakuten.co.jp/noahl/nltp031-2307/",
  nltp431: "https://item.rakuten.co.jp/noahl/nltp431-2509/",
  nlbi016: "https://item.rakuten.co.jp/noahl/nlbi016-18s14-220409/",
  nlbi022: "https://item.rakuten.co.jp/noahl/nlbi022-2404/",
  nltp370: "https://item.rakuten.co.jp/noahl/nltp370-2507/",
  nlc076:  "https://item.rakuten.co.jp/noahl/nlc076-2404/",
  nltp497: "https://item.rakuten.co.jp/noahl/nltp497-2602/",
  nl0193:  "https://item.rakuten.co.jp/noahl/nl0193-50y15-211101/",
  nlpt504: "https://item.rakuten.co.jp/noahl/nlpt504-2602/",
  nltp472: "https://item.rakuten.co.jp/noahl/nltp472-2601/",
  nltp475: "https://item.rakuten.co.jp/noahl/nltp475-2602/",
  nlpt185: "https://item.rakuten.co.jp/noahl/nlpt185-2408/",
  nlpt320: "https://item.rakuten.co.jp/noahl/nlpt320-2504/",
  nltp484: "https://item.rakuten.co.jp/noahl/nltp484-2601/",
  nlpt438: "https://item.rakuten.co.jp/noahl/nlpt438-2510/",
  nltp393: "https://item.rakuten.co.jp/noahl/nltp393-2510/",
  nltp488: "https://item.rakuten.co.jp/noahl/nltp488-2601/",
  nltp513: "https://item.rakuten.co.jp/noahl/nltp513-2602/",
  nltp507: "https://item.rakuten.co.jp/noahl/nltp507-2602/",
  nlwp282: "https://item.rakuten.co.jp/noahl/nlwp282-2505/",
  nlwp230: "https://item.rakuten.co.jp/noahl/nlwp230-2501/",
  nlda342068: "https://item.rakuten.co.jp/noahl/nlda342068-65y06-210524/",
  nlda162502: "https://item.rakuten.co.jp/noahl/nlda162502-65s13-210312/",
  nlim003: "https://item.rakuten.co.jp/noahl/nlim003-00s49-230120/",
  nlpt379: "https://item.rakuten.co.jp/noahl/nlpt379-2509/",
  nltp361: "https://item.rakuten.co.jp/noahl/nltp361-2507/",
  nltp492: "https://item.rakuten.co.jp/noahl/nltp492-2602/",
  nltp506: "https://item.rakuten.co.jp/noahl/nltp506-2602/",
  nltp516: "https://item.rakuten.co.jp/noahl/nltp516-2602/",
  nlwp473: "https://item.rakuten.co.jp/noahl/nlwp473-2512/",
  nlot443: "https://item.rakuten.co.jp/noahl/nlot443-2511/",
  nlpt495: "https://item.rakuten.co.jp/noahl/nlpt495-2602/",
  nlsk200: "https://item.rakuten.co.jp/noahl/nlsk200-2409/",
  nlsk235: "https://item.rakuten.co.jp/noahl/nlsk235-2501/",
  nlsk389: "https://item.rakuten.co.jp/noahl/nlsk389-2508/",
  nltp368: "https://item.rakuten.co.jp/noahl/nltp368-2509/",
  nltp390: "https://item.rakuten.co.jp/noahl/nltp390-2508/",
  nltp402: "https://item.rakuten.co.jp/noahl/nltp402-2509/",
  nltp406: "https://item.rakuten.co.jp/noahl/nltp406-2510/",
  nltp413: "https://item.rakuten.co.jp/noahl/nltp413-2509/",
  nltp418: "https://item.rakuten.co.jp/noahl/nltp418-2509/",
  nltp434: "https://item.rakuten.co.jp/noahl/nltp434-2509/",
  nltp444: "https://item.rakuten.co.jp/noahl/nltp444-2511/",
  nltp464: "https://item.rakuten.co.jp/noahl/nltp464-2601/",
  nltp483: "https://item.rakuten.co.jp/noahl/nltp483-2601/",
  nlwp314: "https://item.rakuten.co.jp/noahl/nlwp314-2506/",
  nlwp315: "https://item.rakuten.co.jp/noahl/nlwp315-2505/",
  nlxn30705: "https://item.rakuten.co.jp/noahl/nlxn30705-50a17-220825/",
  // 推定リンク（スプレッドシート未掲載）
  nlpt329: "https://item.rakuten.co.jp/noahl/nlpt329-2507/",
  nlpt454: "https://item.rakuten.co.jp/noahl/nlpt454-2510/",
  nltp281: "https://item.rakuten.co.jp/noahl/nltp281-2504/",
  nltp288: "https://item.rakuten.co.jp/noahl/nltp288-2504/",
  nltp300: "https://item.rakuten.co.jp/noahl/nltp300-2505/",
  nltp339: "https://item.rakuten.co.jp/noahl/nltp339-2507/",
  nltp400: "https://item.rakuten.co.jp/noahl/nltp400-2509/",
  nltp453: "https://item.rakuten.co.jp/noahl/nltp453-2510/",
  nlwp276: "https://item.rakuten.co.jp/noahl/nlwp276-2504/",
  nlwp280: "https://item.rakuten.co.jp/noahl/nlwp280-2507/",
  nlwp345: "https://item.rakuten.co.jp/noahl/nlwp345-2508/",
  nlot428: "https://item.rakuten.co.jp/noahl/nlot428-2510/",
  nlxn30722: "https://item.rakuten.co.jp/noahl/nlxn30722-2510/",
};

/** 品番から画像URLを返す。マッピングになければプレースホルダー */
export function getImage(productId: string): string {
  const base = productId.replace(/-\d{4}.*$/, "").replace(/-\d+[a-z]+.*$/i, "").replace(/-set$/, "").toLowerCase();
  return productImages[base]
    ?? productImages[productId]
    ?? `https://placehold.co/400x500/F8F6F3/C4A882?text=${encodeURIComponent(base)}`;
}

/** 品番から楽天商品ページURLを返す */
export function getLink(productId: string): string {
  const base = productId.replace(/-\d{4}.*$/, "").replace(/-\d+[a-z]+.*$/i, "").replace(/-set$/, "").toLowerCase();
  return productLinks[base]
    ?? productLinks[productId]
    ?? `https://item.rakuten.co.jp/noahl/${base}/`;
}
