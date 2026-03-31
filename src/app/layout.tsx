import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NOAHL 2026 MD Plan",
  description: "NOAHL 2026年間MDスケジュール ランディングページ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-base text-text-primary font-sans">{children}</body>
    </html>
  );
}
