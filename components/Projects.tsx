"use client";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { useSearchParams } from "next/navigation";

const projects = [
  {
    image: "/myYoutube.png",
    title: "Youtube Channel",
    website: "https://www.youtube.com/@TradesbyLennyKioko/",
    code: "https://www.youtube.com/@TradesbyLennyKioko",
  },
  {
    image: "/Silver-Bullet-profile.png",
    title: "Copy Trading (Pepperstone MT5)",
    website:
      "https://trk.pepperstonepartners.com/aff_c?offer_id=367&aff_id=41245/",
    code: "https://trk.pepperstonepartners.com/aff_c?offer_id=367&aff_id=41245",
  },
  {
    image: "/Silver-Bullet-profile.png",
    title: "Copy Trading (HFM MT4)",
    website:
      "https://my.hfm.com/en/copy-trading/provider-details?provider=69188145&refid=30473755/",
    code: "https://my.hfm.com/en/copy-trading/provider-details?provider=69188145&refid=30473755",
  },
  {
    image: "/Daily-open-price.png",
    title: "Daily Open Price Indicator",
    website:
      "https://www.tradingview.com/script/iOBABiLj-Daily-Open-Price-version-1-0/",
    code: "https://github.com/lennykioko/ICT/blob/main/Old/Lenny/PineScript/Daily-Open-Price.pine",
  },
  {
    image: "/ICT-sessions.png",
    title: "ICT Sessions Indicator",
    website:
      "https://www.tradingview.com/script/0unDD4MW-ICT-Sessions-version-1-0/",
    code: "https://github.com/lennykioko/ICT/blob/main/Old/Lenny/PineScript/ICT-Sessions.pine",
  },
  {
    image: "/ICT-silver-bullet-sessions.png",
    title: "ICT Silver Bullet Sessions Indicator",
    website:
      "https://www.tradingview.com/script/hCC7WbWf-ICT-Silver-bullet-sessions-version-1-0/",
    code: "https://github.com/lennykioko/ICT/blob/main/Old/Lenny/PineScript/ICT-Silver-Bullet.pine",
  },
];

export default function Projects() {




  return (
    <section className="w-full border-b-2 border-amber-400 bg-slate-100 py-8">
      <div className="text-center text-2xl font-semibold mb-8">Projects</div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard
              key={`${project.title}-${idx}`}
              idx={idx}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
