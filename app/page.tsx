import { Metadata } from "next";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Jumbotron from "../components/Jumbotron";
import ProjectsWrapper from "../components/ProjectsWrapper";
import HobbyProjectsWrapper from "../components/HobbyProjectsWrapper";
import Skills from "../components/Skills";
import Volunteer from "../components/Volunteer";

export const metadata: Metadata = {
  metadataBase: new URL("https://lennykioko.com"),
  title: "Lenny Kioko",
  description: "Algorithmic trader based in Nairobi, Kenya",
  keywords:
    "Trader, Algorithmic trader, Trading, Forex trading, Nasdaq, US100, Futures, Stocks, Shares, Software, Engineer, Programmer, Coder, Remote, Mentor, Consultant, Developer, Web, Web3, Blockchain, Frontend, Nairobi, Kenya",
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
    <div className="min-w-screen min-h-screen flex flex-col items-center justify-center bg-slate-50 text-black">
      <Header />
      <main className="w-full flex flex-col items-center justify-center">
        <Jumbotron />
        <Skills />
        <Experience />
        <Volunteer />
        <ProjectsWrapper />
        <HobbyProjectsWrapper />
      </main>
      <Footer />
    </div>
  );
}
