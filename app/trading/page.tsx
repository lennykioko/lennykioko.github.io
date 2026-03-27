import { Metadata } from "next";
import Disclaimer from "../../components/Disclaimer";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Jumbotron from "../../components/Jumbotron";
import TradingResources from "../../components/TradingResources";
import Skills from "../../components/Skills";

export const metadata: Metadata = {
  metadataBase: new URL("https://lennykioko.com"),
  title: "Lenny Kioko | Trading",
  description:
    "Software Engineer & Financial Technology specialist based in Nairobi, Kenya",
  keywords:
    "Software Engineer, Financial Technology, FinTech, Pine Script, MetaTrader, TradingView, Stocks, Shares, Trading, Forex, Nairobi, Kenya",
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

export default function Trading() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-black">
      <Header />
      <main className="w-full flex flex-col">
        <Jumbotron />
        <Skills />
        <TradingResources />
      </main>
      <Disclaimer />
      <Footer />
    </div>
  );
}
