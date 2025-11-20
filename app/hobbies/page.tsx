import { Metadata } from "next";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Jumbotron from "../../components/Jumbotron";
import HobbyProjects from "../../components/HobbyProjects";
import Skills from "../../components/Skills";
import Volunteer from "../../components/Volunteer";

export const metadata: Metadata = {
  metadataBase: new URL("https://lennykioko.com"),
  title: "Personal - Lenny Kioko",
  description:
    "Personal projects, volunteer work and hobbies of Lenny Kioko - Algorithmic trader & Techie based in Nairobi, Kenya",
  keywords:
    "Personal, Volunteer, Hobby, Projects, Community, Open Source, Trader, Algorithmic trader, ICT trader, Trading, Forex, Nasdaq, US100, US500, S&P500, GER40, FTSE, UK100, Futures, Stocks, Shares, Mentor, Coach, Consultant, Techie, Nairobi, Kenya",
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

export default function Personal() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-black">
      <Header />
      <main className="w-full flex flex-col">
        <Jumbotron />
        <Skills />
        <Volunteer />
        <HobbyProjects />
      </main>
      <Footer />
    </div>
  );
}
