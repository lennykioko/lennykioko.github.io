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
      {
        image: "/fvg-nephew-sam.png",
        title: "FVG (Nephew_Sam_)",
        website: "https://www.tradingview.com/script/G8b8t2er-FVG-Nephew-Sam/",
      },
    ],
  },
  {
    title: "Brokers I've Used",
    items: [
      {
        image: "/pepperstone-new.png",
        title: "Pepperstone",
        website:
          "https://trk.pepperstonepartners.com/aff_c?offer_id=367&aff_id=41245/",
      },
      {
        image: "/HFM.png",
        title: "HFM",
        website: "https://www.hfm.com/ke/en/?refid=30473755",
      },
    ],
  },
  {
    title: "VPS",
    items: [
      {
        image: "/forexvps.png",
        title: "ForexVPS",
        website: " https://portal.forexvps.net/raf.php?raf=35039",
      },
    ],
  },
  {
    title: "Trade Copiers",
    items: [
      {
        image: "/fxblue-copier-MT4.png",
        title: "FX Blue Copier MT4",
        website:
          "https://drive.google.com/file/d/1crGpp9I_KhHz4AG7aQsCdjXTV4IU_YT2/view?usp=sharing",
      },
      {
        image: "/fxblue-copier-MT5.png",
        title: "FX Blue Copier MT5",
        website:
          "https://drive.google.com/file/d/1ZvIrzkSpkwsAUy-ZZ218p6elvmNDsf-l/view?usp=sharing",
      },
    ],
  },
  {
    title: "Metatrader 5 Scripts",
    items: [
      {
        image: "/MT5.png",
        title: "TradeExecutor",
        website:
          "https://drive.google.com/file/d/18l0AhVg-g8CZy5rfVwjVneimzUyhwUTh/view?usp=sharing",
      },
      {
        image: "/MT5.png",
        title: "RecreateSL",
        website:
          "https://drive.google.com/file/d/1d9bs2NpJVhpgJmdktA5s_a4ffeOst6sc/view?usp=sharing",
      },
      {
        image: "/MT5.png",
        title: "RecreateSLTP",
        website:
          "https://drive.google.com/file/d/1AGQT_SU4XxxNWoe7EPejRNc-_Msu0exl/view?usp=sharing",
      },
      {
        image: "/MT5.png",
        title: "TakePartialMoveSLToBE",
        website:
          "https://drive.google.com/file/d/1nmlu6r2PZzthqZjL1zgaMy1hDXXKdu5U/view?usp=sharing",
      },
      {
        image: "/MT5.png",
        title: "CloseAll",
        website:
          "https://drive.google.com/file/d/14S2BhdEo6PEfI8c_iwHyMn_CsB9Y3nt-/view?usp=sharing",
      },
      {
        image: "/MT5.png",
        title: "DeleteAllObjects",
        website:
          "https://drive.google.com/file/d/1-aGAhdM3Xd0qHJVTVL8ygE9jOfD5H3tw/view?usp=sharing",
      },
    ],
  },
  {
    title: "MetaTrader 5 EAs",
    items: [
      {
        image: "/MT5.png",
        title: "TradeManager EA",
        website:
          "https://drive.google.com/file/d/1V1K6bMxa7I4uu7nyBvwNdyWAO8Rke3TF/view?usp=sharing",
      },
      {
        image: "/MT5.png",
        title: "KeyLevelsAndFVGs EA",
        website:
          "https://drive.google.com/file/d/1dnMF4gBtJuEEqujFonWyHuAGt2uXbzD1/view?usp=sharing",
      },
      {
        image: "/MT5.png",
        title: "CheckNews EA",
        website:
          "https://drive.google.com/file/d/1DvTQTC3N20tufY5Ay_VfBCXfQdd3gWc-/view?usp=sharing",
      },
      {
        image: "/MT5.png",
        title: "CheckTime EA",
        website:
          "https://drive.google.com/file/d/1KD_t9e0xosxkqRMQZjv9uU9MR7vifVu9/view?usp=sharing",
      },
      {
        image: "/MT5.png",
        title: "TargetReacher EA",
        website:
          "https://drive.google.com/file/d/1zmtO01e6sBF1N_si7zy86RBPfHAZdhtD/view?usp=sharing",
      },
      {
        image: "/MT5.png",
        title: "TickValue EA",
        website:
          "https://drive.google.com/file/d/1c3_PZi5uUth4nylHGfb7tOPZ_05u1RSK/view?usp=sharing",
      },
    ],
  },
  {
    title: "MetaTrader 4 Scripts",
    items: [
      {
        image: "/MT4.png",
        title: "TradeExecutor",
        website:
          "https://drive.google.com/file/d/1QekLIMoBisDsUrkHSnuHWJP-vyODVKmQ/view?usp=sharing",
      },
      {
        image: "/MT4.png",
        title: "CloseAll",
        website:
          "https://drive.google.com/file/d/10xGFL5fOR69kcUxahRuWOEllUkEQM7R9/view?usp=sharing",
      },
      {
        image: "/MT4.png",
        title: "DeleteAllObjects",
        website:
          "https://drive.google.com/file/d/1x2-0JdPnBaJFueDbnbe1sv8YFzHQk9Oh/view?usp=sharing",
      },
      {
        image: "/MT4.png",
        title: "TickValue",
        website:
          "https://drive.google.com/file/d/1rAYlrE1SCy0m9s4xeozHg7EYQaCc1nsJ/view?usp=sharing",
      },
    ],
  },
  {
    title: "MetaTrader 4 EAs",
    items: [
      {
        image: "/MT4.png",
        title: "TargetReacher EA",
        website:
          "https://drive.google.com/file/d/1GVV1-_Ea75h6TcL-9nbvsdfEt23HdUfU/view?usp=sharing",
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
