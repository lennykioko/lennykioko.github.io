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
  title: "Lenny Kioko - Algorithmic Trader & Techie",
  description: "Algorithmic trader and Techie based in Nairobi, Kenya",
  keywords:
    "Trader, Algorithmic trader, ICT trader, Inner Circle Trader, Trading, Forex, Nasdaq, US100, US500, S&P500, GER40, FTSE, UK100, Futures, Stocks, Shares, Mentor, Coach, Consultant, Techie, Nairobi, Kenya",
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
