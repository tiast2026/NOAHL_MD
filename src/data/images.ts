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
  nlc076:  "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2024/202404/nlc076-1.jpg",
  nl0193:  "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2024/2402/nl0193-1.jpg",
  nlwp230: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202501/nlwp230-1r.jpg",
  nlwp282: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202505/nlwp282-1.jpg",
  nlwp280: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202507/nlwp314-1r.jpg", // placeholder
  nlwp314: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202507/nlwp314-1r.jpg",
  nlwp315: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202505/nlwp315-1r.jpg",
  nlpt320: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202504/nlpt320-1r.jpg",
  nlpt379: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202508/nlpt379-1r.jpg",
  nlpt185: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202507/nlpt185-1r.jpg",
  nlpt438: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202510/nlpt438-1r.jpg",
  nlpt495: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2026/202603/nlpt495-1r.jpg",
  nlpt504: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2026/202602/nlpt504-1r.jpg",
  nlda342068: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2023/202306/nlda342068-1.jpg",
  nlda162502: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2023/202308/nlda162502-1.jpg",
  nlim003: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202502/nlim003-1-2.jpg",
  nlsk200: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2024/2409/nlsk200-1r.jpg",
  nlsk235: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202502/nlsk235-1r.jpg",
  nlsk389: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202508/nlsk389-1r.jpg",
  nlot443: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202512/nlot443-1r.jpg",
  // 秋冬 主力
  nltp361: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202508/nltp361-1r.jpg",
  nltp370: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202508/nltp370-1r.jpg",
  nltp390: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202508/nltp390-1r.jpg",
  nltp393: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202510/nltp393-1r.jpg",
  nltp402: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202509/nltp402-1r.jpg",
  nltp406: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202510/nltp406-1r.jpg",
  nltp413: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202510/nltp413-1r.jpg",
  nltp418: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202509/nltp418-1r.jpg",
  nltp431: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202509/nltp431-1r.jpg",
  nltp434: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202509/nltp434-1r.jpg",
  nltp444: "https://thumbnail.image.rakuten.co.jp/@0_mall/noahl/cabinet/shohin/2025/202512/nltp444-1r.jpg",
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
};

/** 品番から画像URLを返す。マッピングになければプレースホルダー */
export function getImage(productId: string): string {
  // "nltp500-2602" → "nltp500" のように末尾の -XXXX を除去
  const base = productId.replace(/-\d{4}.*$/, "").replace(/-\d+[a-z]+.*$/i, "").toLowerCase();
  return productImages[base]
    ?? productImages[productId]
    ?? `https://placehold.co/400x500/F8F6F3/C4A882?text=${encodeURIComponent(base)}`;
}
