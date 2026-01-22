export interface ResourceContent {
  category: string;
  isPaid?: boolean;
  title: string;
  subtitle: string;
  videoId: string;
  link: string;
  description: string;
}

export const resourcesData: Record<string, ResourceContent> = {
  // Education
  BabyPips: {
    category: "Education",
    title: "BabyPips",
    subtitle: "Learn Forex Trading for Beginners",
    videoId: "",
    link: "https://www.babypips.com/learn/forex",
    description: "<p>Description coming soon.</p>",
  },
  ICT2022Mentorship: {
    category: "Education",
    title: "ICT 2022 Mentorship",
    subtitle: "Learn ICT Concepts (Intermediate & Advanced)",
    videoId: "kt6V4ai60fI",
    link: "https://www.youtube.com/watch?v=kt6V4ai60fI&list=PLVgHx4Z63paYiFGQ56PjTF1PGePL3r69s",
    description: "<p>Description coming soon.</p>",
  },

  // Community
  Telegram: {
    category: "Community",
    title: "Telegram Community",
    subtitle: "Join the Forex Trading Community on Telegram",
    videoId: "",
    link: "https://t.me/lennykioko",
    description: "<p>Description coming soon.</p>",
  },
  Youtube: {
    category: "Community",
    title: "Youtube Community",
    subtitle: "Subscribe to the Channel on YouTube",
    videoId: "DmpgCg__VJM",
    link: "https://www.youtube.com/@lennykioko",
    description: "<p>Description coming soon.</p>",
  },

  // TradingView
  DailyOpenPrice: {
    category: "TradingView",
    title: "Daily Open Price Indicator",
    subtitle: "Visualize Daily Open Prices",
    videoId: "",
    link: "https://www.tradingview.com/script/iOBABiLj-Daily-Open-Price-version-1-0/",
    description: "<p>Description coming soon.</p>",
  },
  ICTSessions: {
    category: "TradingView",
    title: "ICT Sessions Indicator",
    subtitle: "Visualize Market Sessions",
    videoId: "",
    link: "https://www.tradingview.com/script/0unDD4MW-ICT-Sessions-version-1-0/",
    description: "<p>Description coming soon.</p>",
  },
  ICTSilverBulletSessions: {
    category: "TradingView",
    title: "ICT Silver Bullet Sessions Indicator",
    subtitle: "Visualize ICT Silver Bullet Sessions and Macros",
    videoId: "",
    link: "https://www.tradingview.com/script/hCC7WbWf-ICT-Silver-bullet-sessions-version-1-0/",
    description: "<p>Description coming soon.</p>",
  },
  FVGNephewSam: {
    category: "TradingView",
    title: "FVG (Nephew_Sam_)",
    subtitle: "Visualize Fair Value Gaps",
    videoId: "",
    link: "https://www.tradingview.com/script/G8b8t2er-FVG-Nephew-Sam/",
    description: "<p>Description coming soon.</p>",
  },

  // Brokers I've Used
  Pepperstone: {
    category: "Brokers",
    title: "Pepperstone",
    subtitle: "Reliable Forex Broker",
    videoId: "",
    link: "https://trk.pepperstonepartners.com/aff_c?offer_id=367&aff_id=41245/",
    description: "<p>Description coming soon.</p>",
  },
  HFM: {
    category: "Brokers",
    title: "HFM",
    subtitle: "Reliable Forex Broker",
    videoId: "",
    link: "https://www.hfm.com/ke/en/?refid=30473755",
    description: "<p>Description coming soon.</p>",
  },

  // VPS
  ForexVPS: {
    category: "VPS",
    title: "ForexVPS",
    subtitle: "Low Latency Trading VPS",
    videoId: "",
    link: "https://portal.forexvps.net/raf.php?raf=35039",
    description: "<p>Description coming soon.</p>",
  },

  // Trade Copiers
  FXBlueCopierMT4: {
    category: "TradeCopiers",
    title: "FX Blue Copier MT4",
    subtitle: "Trade Copier for MT4",
    videoId: "",
    link: "https://drive.google.com/file/d/1crGpp9I_KhHz4AG7aQsCdjXTV4IU_YT2/view?usp=sharing",
    description: "<p>Description coming soon.</p>",
  },
  FXBlueCopierMT5: {
    category: "TradeCopiers",
    title: "FX Blue Copier MT5",
    subtitle: "Trade Copier for MT5",
    videoId: "",
    link: "https://drive.google.com/file/d/1ZvIrzkSpkwsAUy-ZZ218p6elvmNDsf-l/view?usp=sharing",
    description: "<p>Description coming soon.</p>",
  },

  // Metatrader 5 Scripts
  DeleteAllObjectsMT5: {
    category: "MT5",
    title: "DeleteAllObjects Script",
    subtitle: "Quickly delete all chart objects",
    videoId: "",
    link: "https://drive.google.com/file/d/1-aGAhdM3Xd0qHJVTVL8ygE9jOfD5H3tw/view?usp=sharing",
    description: "<p>Description coming soon.</p>",
  },

  // MetaTrader 5 EAs
  TradingPanelEA: {
    category: "MT5",
    isPaid: true,
    title: "TradingPanel EA",
    subtitle: "Advanced Trade Panel for MT5",
    videoId: "tG44ucTW9XQ",
    link: "https://drive.google.com/file/d/1uKH_UdYjmMJ8JqyDPTzU6jEvAKFlVoca/view?usp=sharing",
    description: `
      <p>The TradingPanel EA is a comprehensive tool designed to simplify trade execution and management on MetaTrader 5. It provides a user-friendly interface for calculating lot sizes, setting stop losses and take profits, and managing open positions with ease.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Key Features</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li>One-click trading with automatic lot size calculation based on risk percentage.</li>
        <li>Visual lines for Stop Loss and Take Profit levels that can be dragged on the chart.</li>
        <li>Partial close functionality to secure profits at specific levels.</li>
        <li>Breakeven settings to automatically move stop loss to entry price.</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-2">Installation Guide</h3>
      <p>Download the EA file and place it in your MetaTrader 5 'Experts' folder. Restart your terminal, and you will find the TradingPanel EA in the Navigator window under Expert Advisors. Drag and drop it onto your chart to get started.</p>
    `,
  },
  TradeManagerPanelEA: {
    category: "MT5",
    isPaid: true,
    title: "TradeManagerPanel EA",
    subtitle: "Advanced Trade Panel + Auto Trade Management for MT5",
    videoId: "",
    link: "https://drive.google.com/file/d/1TF--cp35anan4opILQa58bNkdK--B1I5/view?usp=sharing",
    description: "<p>Description coming soon.</p>",
  },
  KeyLevelsFVGsManagerPanelEA: {
    category: "MT5",
    isPaid: true,
    title: "KeyLevelsFVGsManagerPanel EA",
    subtitle:
      "Advanced Trade Panel + Auto Trade Management + Key Levels & FVGs for MT5",
    videoId: "",
    link: "https://drive.google.com/file/d/1l0Yx9W0dH_BfFITFQpnxMumRKEpPZIRl/view?usp=sharing",
    description: "<p>Description coming soon.</p>",
  },
  CheckNewsEA: {
    category: "MT5",
    title: "CheckNews EA",
    subtitle: "News Checker for MT5",
    videoId: "",
    link: "https://drive.google.com/file/d/1DvTQTC3N20tufY5Ay_VfBCXfQdd3gWc-/view?usp=sharing",
    description: "<p>Description coming soon.</p>",
  },
  TargetReacherEAMT5: {
    category: "MT5",
    title: "TargetReacher EA",
    subtitle: "Close all trades instantly when target equity reached for MT5",
    videoId: "",
    link: "https://drive.google.com/file/d/1zmtO01e6sBF1N_si7zy86RBPfHAZdhtD/view?usp=sharing",
    description: "<p>Description coming soon.</p>",
  },
  TickValueTimeEA: {
    category: "MT5",
    title: "TickValueTime EA",
    subtitle: "Display tick value & time",
    videoId: "",
    link: "https://drive.google.com/file/d/1o-n8wCRib4PW91UMzzeqRg7ruI4vIhXv/view?usp=sharing",
    description: "<p>Description coming soon.</p>",
  },

  // MetaTrader 4 Scripts
  CloseAll: {
    category: "MT4",
    title: "CloseAll Script",
    subtitle: "Close all positions instantly",
    videoId: "",
    link: "https://drive.google.com/file/d/10xGFL5fOR69kcUxahRuWOEllUkEQM7R9/view?usp=sharing",
    description: "<p>Description coming soon.</p>",
  },
  DeleteAllObjectsMT4: {
    category: "MT4",
    title: "DeleteAllObjects Script",
    subtitle: "Quickly delete all chart objects",
    videoId: "",
    link: "https://drive.google.com/file/d/1x2-0JdPnBaJFueDbnbe1sv8YFzHQk9Oh/view?usp=sharing",
    description: "<p>Description coming soon.</p>",
  },
  TickValue: {
    category: "MT4",
    title: "TickValue Script",
    subtitle: "Display tick value",
    videoId: "",
    link: "https://drive.google.com/file/d/1rAYlrE1SCy0m9s4xeozHg7EYQaCc1nsJ/view?usp=sharing",
    description: "<p>Description coming soon.</p>",
  },

  // MetaTrader 4 EAs
  TargetReacherEAMT4: {
    category: "MT4",
    title: "TargetReacher EA",
    subtitle: "Close all trades instantly when target equity reached for MT4",
    videoId: "",
    link: "https://drive.google.com/file/d/1GVV1-_Ea75h6TcL-9nbvsdfEt23HdUfU/view?usp=sharing",
    description: "<p>Description coming soon.</p>",
  },

  // MetaTrader Templates
  MT4LightMode: {
    category: "Templates",
    title: "MT4 Light Mode Template",
    subtitle: "Clean light theme for MT4",
    videoId: "",
    link: "https://drive.google.com/file/d/1rWeACEEqnIQLbbhopucUArY_P7hBeNTt/view?usp=sharing",
    description: "<p>Description coming soon.</p>",
  },
  MT5LightMode: {
    category: "Templates",
    title: "MT5 Light Mode Template",
    subtitle: "Clean light theme for MT5",
    videoId: "",
    link: "https://drive.google.com/file/d/1qPu0qYJq0siqwPBqe0nsGk1TclH4tsD_/view?usp=sharing",
    description: "<p>Description coming soon.</p>",
  },
  MT4DarkMode: {
    category: "Templates",
    title: "MT4 Dark Mode Template",
    subtitle: "Professional dark theme for MT4",
    videoId: "",
    link: "https://drive.google.com/file/d/17o4M0lmOVYUwYiN8_mp2glCnUMk73FCj/view?usp=sharing",
    description: "<p>Description coming soon.</p>",
  },
  MT5DarkMode: {
    category: "Templates",
    title: "MT5 Dark Mode Template",
    subtitle: "Professional dark theme for MT5",
    videoId: "",
    link: "https://drive.google.com/file/d/1t6wh3UXGRi0BZS17QRPrtIOgcGUaTQo7/view?usp=sharing",
    description: "<p>Description coming soon.</p>",
  },
};
