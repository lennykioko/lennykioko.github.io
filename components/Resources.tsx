"use client";
import ProjectCard from "./ProjectCard";

const resourceSections = [
  {
    title: "Education",
    items: [
      {
        image: "/babypips.png",
        title: "BabyPips",
        url: "/resources/Education/BabyPips",
      },
      {
        image: "/ict-mentorship.png",
        title: "ICT 2022 Mentorship",
        url: "/resources/Education/ICT2022Mentorship",
      },
    ],
  },
  {
    title: "Community",
    items: [
      {
        image: "/myTelegram.png",
        title: "Telegram Community",
        url: "/resources/Community/Telegram",
      },
      {
        image: "/myYoutube.png",
        title: "Youtube Community",
        url: "/resources/Community/Youtube",
      },
    ],
  },
  {
    title: "TradingView",
    items: [
      {
        image: "/Daily-open-price.png",
        title: "Daily Open Price Indicator",
        url: "/resources/TradingView/DailyOpenPrice",
      },
      {
        image: "/ICT-sessions.png",
        title: "ICT Sessions Indicator",
        url: "/resources/TradingView/ICTSessions",
      },
      {
        image: "/ICT-silver-bullet-sessions.png",
        title: "ICT Silver Bullet Sessions Indicator",
        url: "/resources/TradingView/ICTSilverBulletSessions",
      },
      {
        image: "/fvg-nephew-sam.png",
        title: "FVG (Nephew_Sam_)",
        url: "/resources/TradingView/FVGNephewSam",
      },
    ],
  },
  {
    title: "Brokers I've Used",
    items: [
      {
        image: "/pepperstone-new.png",
        title: "Pepperstone",
        url: "/resources/Brokers/Pepperstone",
      },
      {
        image: "/HFM.png",
        title: "HFM",
        url: "/resources/Brokers/HFM",
      },
    ],
  },
  {
    title: "VPS",
    items: [
      {
        image: "/forexvps.png",
        title: "ForexVPS",
        url: "/resources/VPS/ForexVPS",
      },
    ],
  },
  {
    title: "Trade Copiers",
    items: [
      {
        image: "/fxblue-copier-MT4.png",
        title: "FX Blue Copier MT4",
        url: "/resources/TradeCopiers/FXBlueCopierMT4",
      },
      {
        image: "/fxblue-copier-MT5.png",
        title: "FX Blue Copier MT5",
        url: "/resources/TradeCopiers/FXBlueCopierMT5",
      },
    ],
  },
  {
    title: "Metatrader 5 Scripts",
    items: [
      {
        image: "/MT5.png",
        title: "DeleteAllObjects",
        url: "/resources/MT5/DeleteAllObjectsMT5",
      },
    ],
  },
  {
    title: "MetaTrader 5 EAs",
    items: [
      {
        image: "/MT5.png",
        title: "TradingPanel EA",
        url: "/resources/MT5/TradingPanelEA",
      },
      {
        image: "/MT5.png",
        title: "TradeManagerPanel EA",
        url: "/resources/MT5/TradeManagerPanelEA",
      },
      {
        image: "/MT5.png",
        title: "KeyLevelsFVGsManagerPanel EA",
        url: "/resources/MT5/KeyLevelsFVGsManagerPanelEA",
      },
      {
        image: "/MT5.png",
        title: "CheckNews EA",
        url: "/resources/MT5/CheckNewsEA",
      },
      {
        image: "/MT5.png",
        title: "TargetReacher EA",
        url: "/resources/MT5/TargetReacherEAMT5",
      },
      {
        image: "/MT5.png",
        title: "TickValueTime EA",
        url: "/resources/MT5/TickValueTimeEA",
      },
    ],
  },
  {
    title: "MetaTrader 4 Scripts",
    items: [
      {
        image: "/MT4.png",
        title: "CloseAll",
        url: "/resources/MT4/CloseAll",
      },
      {
        image: "/MT4.png",
        title: "DeleteAllObjects",
        url: "/resources/MT4/DeleteAllObjectsMT4",
      },
      {
        image: "/MT4.png",
        title: "TickValue",
        url: "/resources/MT4/TickValue",
      },
    ],
  },
  {
    title: "MetaTrader 4 EAs",
    items: [
      {
        image: "/MT4.png",
        title: "TargetReacher EA",
        url: "/resources/MT4/TargetReacherEAMT4",
      },
    ],
  },
  {
    title: "MetaTrader Templates",
    items: [
      {
        image: "/MT4.png",
        title: "MT4 Light Mode Template",
        url: "/resources/Templates/MT4LightMode",
      },
      {
        image: "/MT5.png",
        title: "MT5 Light Mode Template",
        url: "/resources/Templates/MT5LightMode",
      },
      {
        image: "/MT4-Dark.png",
        title: "MT4 Dark Mode Template",
        url: "/resources/Templates/MT4DarkMode",
      },
      {
        image: "/MT5-Dark.png",
        title: "MT5 Dark Mode Template",
        url: "/resources/Templates/MT5DarkMode",
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
                {section.items.map((item, idx) => {
                  return (
                    <ProjectCard
                      key={`${section.title}-${item.title}-${idx}`}
                      idx={idx}
                      {...item}
                      url={item.url}
                    />
                  );
                })}
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
