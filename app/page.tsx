import { Metadata } from "next";
import Disclaimer from "../components/Disclaimer";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Jumbotron from "../components/Jumbotron";
import Resources from "../components/Resources";
import Skills from "../components/Skills";

export const metadata: Metadata = {
  metadataBase: new URL("https://lennykioko.com"),
  title: "Lenny Kioko",
  description: "Algorithmic trader & Techie based in Nairobi, Kenya",
  keywords:
    "Trader, Algorithmic trader, ICT trader, Inner Circle Trader, Trading, Forex, Nasdaq, US100, US500, S&P500, GER40, FTSE, UK100, Futures, Stocks, Shares, Mentor, Coach, Consultant, Techie, Nairobi, Kenya",
  openGraph: {
    images: [
      {
        url: "/cityzen.jpg",
        width: 1024,
        height: 1024,
        alt: "Lenny Kioko Profile",
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-black">
      <Header />
      <main className="w-full flex flex-col">
        <Jumbotron />
        <Skills />
        <Resources />
      </main>
      <Disclaimer />
      <Footer />
    </div>
  );
}
