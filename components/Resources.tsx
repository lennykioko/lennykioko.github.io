"use client";
import ProjectCard from "./ProjectCard";

const resourceSections = [
  {
    title: "Education",
    items: [
      {
        image: "/babypips.png",
        title: "BabyPips",
        website: "https://www.babypips.com/learn/forex",
      },
      {
        image: "/ict-mentorship.png",
        title: "ICT 2022 Mentorship",
        website:
          "https://www.youtube.com/watch?v=kt6V4ai60fI&list=PLVgHx4Z63paYiFGQ56PjTF1PGePL3r69s",
      },
    ],
  },
  {
    title: "Community",
    items: [
      {
        image: "/myTelegram.png",
        title: "Telegram Community",
        website: "https://t.me/TradesbyLennyKioko/",
      },
      {
        image: "/myYoutube.png",
        title: "Youtube Community",
        website: "https://www.youtube.com/@TradesbyLennyKioko/",
      },
    ],
  },
  {
    title: "TradingView",
    items: [
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
    ],
  },
  {
    title: "Brokers I've Used",
    items: [
      {
        image: "/pepperstone.png",
        title: "Pepperstone",
        website:
          "https://trk.pepperstonepartners.com/aff_c?offer_id=367&aff_id=41245/",
      },
      {
        image: "/HFM.png",
        title: "HFM",
        website: "https://www.hfm.com/ke/?refid=30473755",
      },
    ],
  },
  {
    title: "Trade Copiers",
    items: [
      {
        image: "/fxblue-copier-MT4.png",
        title: "FX Blue Copier MT4",
        website: "",
      },
      {
        image: "/fxblue-copier-MT5.png",
        title: "FX Blue Copier MT5",
        website: "",
      },
    ],
  },
  {
    title: "Metatrader 5 Scripts",
    items: [
      {
        image: "/MT5.png",
        title: "TradeExecutor",
        website: "",
      },
      {
        image: "/MT5.png",
        title: "RecreateSL",
        website: "",
      },
      {
        image: "/MT5.png",
        title: "RecreateSLTP",
        website: "",
      },
      {
        image: "/MT5.png",
        title: "TakePartialMoveSLToBE",
        website: "",
      },
      {
        image: "/MT5.png",
        title: "CloseAll",
        website: "",
      },
      {
        image: "/MT5.png",
        title: "DeleteAllObjects",
        website: "",
      },
    ],
  },
  {
    title: "MetaTrader 5 EAs",
    items: [
      {
        image: "/MT5.png",
        title: "TradeManager EA",
        website: "",
      },
    ],
  },
  {
    title: "MetaTrader Templates",
    items: [
      {
        image: "/MT4.png",
        title: "MT4 White Mode Template",
        website: "",
      },
      {
        image: "/MT5.png",
        title: "MT5 White Mode Template",
        website: "",
      },
      {
        image: "/MT4-Dark.png",
        title: "MT4 Dark Mode Template",
        website: "",
      },
      {
        image: "/MT5-Dark.png",
        title: "MT5 Dark Mode Template",
        website: "",
      },
    ],
  },
];

export default function Resources() {
  return (
    <section className="w-full border-b-2 border-amber-400 bg-slate-100 py-8">
      <div className="text-center text-2xl font-semibold mb-8">Resources</div>
      <div className="max-w-7xl mx-auto px-4">
        {resourceSections.map((section, sectionIdx) => (
          <div key={`section-${sectionIdx}`} className="mb-12">
            <h3 className="text-xl font-semibold text-center mb-6 text-gray-700">
              {section.title}
            </h3>
            {section.items.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.items.map((item, idx) => (
                  <ProjectCard
                    key={`${section.title}-${item.title}-${idx}`}
                    idx={idx}
                    {...item}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-500 italic">
                Coming soon...
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
