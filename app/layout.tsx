import type { Metadata, Viewport } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lenny Kioko - Software Engineer | Financial Technology",
  description:
    "Software Engineer & Financial Technology specialist based in Nairobi, Kenya",
  keywords:
    "Software Engineer, Financial Technology, FinTech, React, Next.js, React Native, TypeScript, Python, Pine Script, MetaTrader, TradingView, Stocks, Shares, Mentor, Coach, Consultant, Techie, Nairobi, Kenya",
  authors: [{ name: "Lenny Kioko" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={quicksand.variable + " antialiased"}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
