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
    description: `
      <p>The School of Pipsology by BabyPips is the internet’s most popular free course for learning how to trade the Forex market. It is designed to take you from a complete beginner to a knowledgeable trader, breaking down complex financial concepts into easy-to-understand lessons.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Key Features</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Comprehensive Curriculum:</strong> Covers everything from "What is Forex?" to advanced technical analysis, risk management, and trading psychology.</li>
        <li><strong>Beginner Friendly:</strong> Uses humor, fun analogies, and a lighthearted style to make learning trading less intimidating.</li>
        <li><strong>Structured Path:</strong> Follows a logical progression (Preschool to Graduation) so you build your knowledge base layer by layer.</li>
        <li><strong>Quiz & Progress:</strong> Includes quizzes at the end of sections to test your knowledge and ensure you are ready for the next level.</li>
      </ul>
    `,
  },
  ICT2022Mentorship: {
    category: "Education",
    title: "ICT 2022 Mentorship",
    subtitle: "Learn ICT Concepts (Intermediate & Advanced)",
    videoId: "kt6V4ai60fI",
    link: "https://www.youtube.com/watch?v=kt6V4ai60fI&list=PLVgHx4Z63paYiFGQ56PjTF1PGePL3r69s",
    description: `
      <p>The ICT 2022 Mentorship is a comprehensive, free educational series by Michael J. Huddleston (The Inner Circle Trader). It focuses on high-precision price action trading without indicators, teaching students how to read algorithmic market delivery. While the series uses Index Futures (ES and NQ) for examples, the concepts are universally applicable to Forex, Crypto, and Commodities.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Key Concepts Covered</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Market Structure Shift (MSS):</strong> Identifying the precise moment a trend reverses based on institutional order flow.</li>
        <li><strong>Fair Value Gaps (FVG):</strong> Understanding imbalances in price delivery to identify high-probability entry and exit points.</li>
        <li><strong>Liquidity Pools:</strong> Learning where "Buy Side" and "Sell Side" liquidity rests to anticipate where the market is drawn to.</li>
        <li><strong>Time & Price:</strong> Mastering the importance of time of day (Killzones) and how it influences price movement.</li>
        <li><strong>The "Silver Bullet":</strong> A specific, recurring time-based setup that forms daily in the London and New York sessions.</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-2">Why Watch This?</h3>
      <p>This mentorship is widely considered the "gold standard" for modern retail traders. It strips away retail logic (trendlines, support/resistance) and teaches you to view the market from the perspective of the algorithm effectively.</p>
    `,
  },

  // Community
  Telegram: {
    category: "Community",
    title: "Telegram Community",
    subtitle: "Join the Forex Trading Community on Telegram",
    videoId: "",
    link: "https://t.me/lennykioko",
    description: `
      <p>Join my official Telegram channel to stay connected with the trading community. This is the primary hub where I share real-time updates, market perspectives, and announcements regarding new tools or educational content.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Why Join?</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Real-Time Updates:</strong> Be the first to know about new indicator releases, EA updates, and YouTube uploads.</li>
        <li><strong>Market Insights:</strong> Receive occasional chart analysis, bias updates, and commentary on current market conditions.</li>
        <li><strong>Community Hub:</strong> A direct line to stay in the loop with the ecosystem I'm building for traders.</li>
      </ul>
    `,
  },
  Youtube: {
    category: "Community",
    title: "Youtube Community",
    subtitle: "Subscribe to the Channel on YouTube",
    videoId: "DmpgCg__VJM",
    link: "https://www.youtube.com/@lennykioko",
    description: `
      <p>Subscribe to the YouTube channel for visual learning and in-depth breakdowns. This is where I demonstrate how to use the resources provided on this site and share educational content to improve your trading.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Channel Content</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Tool Tutorials:</strong> Step-by-step guides on how to install, configure, and effectively use the Indicators and EAs I create.</li>
        <li><strong>Strategy Breakdowns:</strong> Detailed explanations of trading models, risk management strategies, and technical concepts.</li>
        <li><strong>Live Analysis:</strong> Occasional deep dives into market structure and live trading examples to support your learning.</li>
      </ul>
    `,
  },

  // TradingView
  DailyOpenPrice: {
    category: "TradingView",
    title: "Daily Open Price Indicator",
    subtitle: "Visualize Daily Open Prices",
    videoId: "",
    link: "https://www.tradingview.com/script/iOBABiLj-Daily-Open-Price-version-1-0/",
    description: `
      <p>The Daily Open Price indicator is a clean, minimal tool designed for day traders who use the daily opening price as a key reference level. It automatically plots a horizontal line across your chart to mark exactly where price opened for the current trading day.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Key Features</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Instant Reference:</strong> Automatically draws a line at the day's opening price, acting as a dynamic support/resistance level.</li>
        <li><strong>Bias Confirmation:</strong> Helps you instantly determine if you are bullish (above open) or bearish (below open) for the day.</li>
        <li><strong>Zero Clutter:</strong> A single, purposeful line that keeps your chart clean while providing essential context.</li>
        <li><strong>Multi-Timeframe Ready:</strong> Visible on lower timeframes (1m, 5m, 15m, etc.) to keep you aligned with the daily perspective.</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-2">How to Add</h3>
      <p>Log in to your TradingView account and visit the script page. Click "Add to Favorite Indicators" to save it. Then, open your chart, click "Indicators," go to "Favorites," and select "Daily Open Price" to add it to your workspace.</p>
    `,
  },
  ICTSessions: {
    category: "TradingView",
    title: "ICT Sessions Indicator",
    subtitle: "Visualize Market Sessions",
    videoId: "",
    link: "https://www.tradingview.com/script/0unDD4MW-ICT-Sessions-version-1-0/",
    description: `
      <p>The ICT Sessions indicator is a must-have for traders following Inner Circle Trader (ICT) concepts. It automatically visualizes the key trading sessions—Asia (Tokyo), London, and New York—by drawing clear boxes or vertical lines around their specific time windows.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Key Features</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Automated Session Boxes:</strong> clearly marks the High and Low of Tokyo, London, and New York sessions.</li>
        <li><strong>Killzone Alignment:</strong> Visualizes the critical overlaps and volatility windows essential for ICT setups.</li>
        <li><strong>Range Visualization:</strong> Helps you identify consolidation (Asia), manipulation (London), and distribution (New York) phases.</li>
        <li><strong>Customizable:</strong> Toggle specific sessions on or off to focus only on the timeframes you trade.</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-2">How to Add</h3>
      <p>Log in to your TradingView account and visit the script page. Click "Add to Favorite Indicators" to save it. Then, open your chart, click "Indicators," go to "Favorites," and select "ICT Sessions" to add it to your workspace.</p>
    `,
  },
  ICTSilverBulletSessions: {
    category: "TradingView",
    title: "ICT Silver Bullet Sessions Indicator",
    subtitle: "Visualize ICT Silver Bullet Sessions and Macros",
    videoId: "",
    link: "https://www.tradingview.com/script/hCC7WbWf-ICT-Silver-bullet-sessions-version-1-0/",
    description: `
      <p>The ICT Silver Bullet Sessions indicator takes the guesswork out of time-based trading by automatically highlighting the specific "Silver Bullet" windows. It visually marks the 3:00-4:00 AM, 10:00-11:00 AM, and 2:00-3:00 PM (NY Time) intervals directly on your chart.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Key Features</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Precise Time Windows:</strong> Highlights the exact 60-minute ICT Silver Bullet intervals for London and New York sessions.</li>
        <li><strong>Macro Tracking:</strong> Helps you anticipate algorithmic price delivery during these high-probability timeframes.</li>
        <li><strong>Visual Clarity:</strong> Uses distinct vertical zones to ensure you never miss a Silver Bullet setup entry.</li>
        <li><strong>Timezone Auto-Correction:</strong> Aligns perfectly with New York time logic regardless of your local time settings.</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-2">How to Add</h3>
      <p>Log in to your TradingView account and visit the script page. Click "Add to Favorite Indicators" to save it. Then, open your chart, click "Indicators," go to "Favorites," and select "ICT Silver Bullet Sessions" to add it to your workspace.</p>
    `,
  },
  FVGNephewSam: {
    category: "TradingView",
    title: "FVG (Nephew_Sam_)",
    subtitle: "Visualize Fair Value Gaps",
    videoId: "",
    link: "https://www.tradingview.com/script/G8b8t2er-FVG-Nephew-Sam/",
    description: `
      <p>The FVG (Nephew_Sam_) indicator is a highly popular tool for identifying Fair Value Gaps (Imbalances) on any chart. It automatically highlights inefficient price action, making it easier to spot potential entry, exit, and rebalancing areas.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Key Features</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Auto-Detection:</strong> Instantly finds and draws Bullish and Bearish Fair Value Gaps (FVG) across any timeframe.</li>
        <li><strong>Dynamic Filtering:</strong> Options to "Delete Lines" once price fills the gap, keeping your chart clean and relevant.</li>
        <li><strong>Multi-Timeframe (MTF) Support:</strong> View higher timeframe FVGs (e.g., Hourly or 4H) while trading on lower execution timeframes.</li>
        <li><strong>Customizable Style:</strong> Fully adjustable colors and box styles to differentiate between fresh and filled gaps.</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-2">How to Add</h3>
      <p>Log in to your TradingView account and visit the script page. Click "Add to Favorite Indicators" to save it. Then, open your chart, click "Indicators," go to "Favorites," and select "FVG (Nephew_Sam_)" to add it to your workspace.</p>
    `,
  },

  // Brokers I've Used
  Pepperstone: {
    category: "Brokers",
    title: "Pepperstone",
    subtitle: "Reliable Forex Broker",
    videoId: "",
    link: "https://trk.pepperstonepartners.com/aff_c?offer_id=367&aff_id=41245/",
    description: `
     <p>Pepperstone is a globally regulated broker known for its lightning-fast execution and raw spread pricing. It is an excellent choice for traders who use automated strategies (EAs) or scalping techniques where speed and low costs are critical.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Key Features</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>CMA Regulated:</strong> Fully licensed by the Capital Markets Authority in Kenya, ensuring local client protection.</li>
        <li><strong>Razor Sharp Spreads:</strong> Access institutional-grade spreads from 0.0 pips on the Razor account.</li>
        <li><strong>Fast Execution:</strong> Average order execution speed of ~30ms, ideal for high-frequency trading and EAs.</li>
        <li><strong>Local Funding:</strong> Supports convenient local funding methods including domestic bank transfers.</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-2">Platform Options</h3>
      <p>Trade on Industry-standard platforms including MetaTrader 4, MetaTrader 5, cTrader, and TradingView, all connected to Pepperstone's deep liquidity pool.</p>
    `,
  },
  HFM: {
    category: "Brokers",
    title: "HFM",
    subtitle: "Reliable Forex Broker",
    videoId: "",
    link: "https://www.hfm.com/ke/en/?refid=30473755",
    description: `
      <p>HFM is a versatile broker offering diverse account types tailored to different trading styles. With a strong local presence in Kenya, they provide seamless access to global markets with one of the most convenient funding methods available.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Key Features</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>MPESA Integration:</strong> Deposit and withdraw funds instantly using your mobile phone.</li>
        <li><strong>Flexible Account Types:</strong> Choose from Zero Spread, Premium, or Cent accounts to match your capital and strategy.</li>
        <li><strong>High Leverage:</strong> Offers flexible leverage options (up to 1:400 for CMA regulated accounts) to suit your risk appetite.</li>
        <li><strong>Bonus Offerings:</strong> Frequently offers trading credits and bonuses to boost your initial margin.</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-2">Why HFM?</h3>
      <p>If ease of transactions is your priority, HFM's direct mobile money integration makes it one of the most accessible brokers for traders in the region.</p>
    `,
  },

  // VPS
  ForexVPS: {
    category: "VPS",
    title: "ForexVPS",
    subtitle: "Low Latency Trading VPS",
    videoId: "",
    link: "https://portal.forexvps.net/raf.php?raf=35039",
    description: `
      <p>ForexVPS is my recommended Virtual Private Server provider for serious algorithmic trading. It offers ultra-low latency connections located directly next to major broker servers, ensuring your expert advisors run 24/7 with lightning-fast execution speeds and zero internet interruptions.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Key Features</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Ultra-Low Latency:</strong> Servers located in 22 key financial hubs to achieve execution speeds as fast as 1 millisecond.</li>
        <li><strong>100% Uptime Guarantee:</strong> Ensures your EAs never miss a trade due to power outages or internet disconnects at home.</li>
        <li><strong>optimized for MT4/MT5:</strong> Specifically configured to run MetaTrader platforms efficiently without resource lagging.</li>
        <li><strong>Access Anywhere:</strong> Monitor your trading accounts from any device (PC, Mac, iOS, Android) via their web-based control panel or Remote Desktop.</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-2">Why I Recommend It</h3>
      <p>Using a VPS is non-negotiable for running automated strategies. I rely on ForexVPS.net because they never overload their servers, meaning you get dedicated resources for your bots. This prevents "platform freezing" during high-impact news events—a common issue that can cause significant slippage on standard home computers.</p>
    `,
  },

  // Trade Copiers
  FXBlueCopierMT4: {
    category: "TradeCopiers",
    title: "FX Blue Copier MT4",
    subtitle: "Trade Copier for MT4",
    videoId: "",
    link: "https://drive.google.com/file/d/1crGpp9I_KhHz4AG7aQsCdjXTV4IU_YT2/view?usp=sharing",
    description: `
      <p>The FX Blue Personal Trade Copier is a widely used tool for mirroring trades between multiple MetaTrader accounts running on the same computer. It is designed for traders who manage multiple accounts and need fast, reliable execution without the latency of internet-based copiers.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Key Features</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Cross-Platform Copying:</strong> Seamlessly copy trades between MT4 and MT5 accounts in any combination (MT4 to MT5, MT5 to MT4).</li>
        <li><strong>Local Execution:</strong> Since it runs locally, trade copying is nearly instantaneous, minimizing slippage.</li>
        <li><strong>Flexible Risk Management:</strong> Adjust lot sizes automatically (e.g., copy risk based on equity, balance, or a fixed multiplier).</li>
        <li><strong>Advanced Filtering:</strong> Selectively copy trades based on specific pairs, magic numbers, or comments.</li>
        <li><strong>Inverse Copying:</strong> Ability to reverse trades (e.g., Buy on Sender becomes Sell on Receiver).</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-2">Why I Recommend It</h3>
      <p>It is free, reliable, and essential for traders managing funded accounts or personal portfolios across different brokers.</p>
    `,
  },
  FXBlueCopierMT5: {
    category: "TradeCopiers",
    title: "FX Blue Copier MT5",
    subtitle: "Trade Copier for MT5",
    videoId: "",
    link: "https://drive.google.com/file/d/1ZvIrzkSpkwsAUy-ZZ218p6elvmNDsf-l/view?usp=sharing",
    description: `
      <p>The FX Blue Personal Trade Copier is a widely used tool for mirroring trades between multiple MetaTrader accounts running on the same computer. It is designed for traders who manage multiple accounts and need fast, reliable execution without the latency of internet-based copiers.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Key Features</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Cross-Platform Copying:</strong> Seamlessly copy trades between MT4 and MT5 accounts in any combination (MT4 to MT5, MT5 to MT4).</li>
        <li><strong>Local Execution:</strong> Since it runs locally, trade copying is nearly instantaneous, minimizing slippage.</li>
        <li><strong>Flexible Risk Management:</strong> Adjust lot sizes automatically (e.g., copy risk based on equity, balance, or a fixed multiplier).</li>
        <li><strong>Advanced Filtering:</strong> Selectively copy trades based on specific pairs, magic numbers, or comments.</li>
        <li><strong>Inverse Copying:</strong> Ability to reverse trades (e.g., Buy on Sender becomes Sell on Receiver).</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-2">Why I Recommend It</h3>
      <p>It is free, reliable, and essential for traders managing funded accounts or personal portfolios across different brokers.</p>
    `,
  },

  // Metatrader 5 Scripts
  DeleteAllObjectsMT5: {
    category: "MT5",
    title: "DeleteAllObjects Script",
    subtitle: "Quickly delete all chart objects",
    videoId: "",
    link: "https://drive.google.com/file/d/1-aGAhdM3Xd0qHJVTVL8ygE9jOfD5H3tw/view?usp=sharing",
    description: `
      <p>The DeleteAllObjects Script is a simple but powerful workflow enhancer designed to clean up your charts instantly. With a single action, it wipes all lines, shapes, and analysis tools, giving you a fresh canvas immediately.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Key Features</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Instant Chart Cleaning:</strong> Removes every object (trendlines, boxes, arrows, text) from the chart in milliseconds.</li>
        <li><strong>Workflow Efficiency:</strong> Saves time compared to manually selecting and deleting old analysis tools one by one.</li>
        <li><strong>Zero Configuration:</strong> Runs immediately upon execution with no inputs required.</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-2">Installation Guide</h3>
      <p>Download the file and place it in your MetaTrader 5 <strong>'Scripts'</strong> folder (not Experts). Restart your terminal, and you will find it in the Navigator window under Scripts. Simply drag and drop it onto any chart to instantly clear it.</p>
    `,
  },

  // MetaTrader 5 EAs
  TradingPanelEA: {
    category: "MT5",
    isPaid: true,
    title: "TradingPanel EA",
    subtitle: "Advanced Trade Panel for MT5",
    videoId: "",
    link: "https://drive.google.com/file/d/1uKH_UdYjmMJ8JqyDPTzU6jEvAKFlVoca/view?usp=sharing",
    description: `
      <p>The TradingPanel EA is a comprehensive dashboard designed to streamline trade execution and professional risk management on MetaTrader 5. It replaces manual calculations with a visual, interactive interface that handles everything from lot sizing to complex trade management tasks like partial closes and break-even moves.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Key Features</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Visual Trade Planning:</strong> Drag and drop lines on the chart to set Stop Loss, Take Profit, and Pending Order levels visually before executing.</li>
        <li><strong>Auto-Risk Calculation:</strong> Automatically calculates the precise lot size based on your pre-set dollar risk ($) and Stop Loss distance.</li>
        <li><strong>Smart Order Execution:</strong> Detects whether to place a Market, Limit, or Stop order based on your line placements relative to current price.</li>
        <li><strong>Advanced Trade Management:</strong> Includes one-click buttons to move Stop Loss to Break Even or take Partial Profits (customizable %).</li>
        <li><strong>Reward:Risk Projections:</strong> Instantly project multiple Take Profit targets (TP1, TP2, TP3) on the chart based on your Risk:Reward ratios.</li>
        <li><strong>Bulk Position Control:</strong> Dedicated buttons to Close All, Close Pending, or Close Active positions instantly.</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-2">Installation Guide</h3>
      <p>Download the EA file and place it in your MetaTrader 5 'Experts' folder. Restart your terminal, and you will find the TradingPanel EA in the Navigator window under Expert Advisors. Drag and drop it onto your chart to get started. Ensure 'Algo Trading' is enabled in the toolbar.</p>
    `,
  },
  TradeManagerPanelEA: {
    category: "MT5",
    isPaid: true,
    title: "TradeManagerPanel EA",
    subtitle: "Advanced Trade Panel + Auto Trade Management for MT5",
    videoId: "",
    link: "https://drive.google.com/file/d/1TF--cp35anan4opILQa58bNkdK--B1I5/view?usp=sharing",
    description: `
      <p>The TradeManagerPanel EA combines the manual efficiency of the TradingPanel with advanced, automated trade management logic. It effectively "babysits" your trades for you—automatically moving stops to breakeven, taking partial profits, and even reducing risk dynamically as price moves in your favor.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Key Features</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Automated Break-Even:</strong> Automatically moves your Stop Loss to the entry price once your trade reaches a specific Risk:Reward (RR) ratio (e.g., 1:1).</li>
        <li><strong>Reduced Risk Mode:</strong> Active protection feature that uses a "Virtual Stop Loss" to drastically reduce exposure if the market hesitates after reaching a partial target (e.g., 0.5R).</li>
        <li><strong>Smart Partial Profits:</strong> Automatically closes a percentage of your position (Partial Close) when specific profit targets are met to bank money while leaving runners.</li>
        <li><strong>Daily Protection:</strong> Built-in equity protector that monitors Max Daily Loss and Daily Profit Targets to keep your psychology and account safe.</li>
        <li><strong>Advanced Dashboard:</strong> Displays real-time trade status, "R" multiples (0.5R, 1R, 2R), and live profit/loss info directly on the chart.</li>
        <li><strong>Structure Awareness:</strong> Tracks basic market structure (Swing Highs/Lows and Fair Value Gaps) to inform its management decisions.</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-2">Installation Guide</h3>
      <p>Download the EA file and place it in your MetaTrader 5 'Experts' folder. Restart your terminal, and you will find the TradeManagerPanel EA in the Navigator window. Requires 'Algo Trading' to be enabled to perform the automatic partial close and stop-loss modification functions.</p>
    `,
  },
  KeyLevelsFVGsManagerPanelEA: {
    category: "MT5",
    isPaid: true,
    title: "KeyLevelsFVGsManagerPanel EA",
    subtitle:
      "Advanced Trade Panel + Auto Trade Management + Key Levels & FVGs for MT5",
    videoId: "",
    link: "https://drive.google.com/file/d/1l0Yx9W0dH_BfFITFQpnxMumRKEpPZIRl/view?usp=sharing",
    description: `
      <p>The KeyLevelsFVGsManagerPanel is the ultimate all-in-one institutional trading suite. It integrates professional trade execution, automated position management, and deep technical analysis into a single powerhouse EA. It visualizes institutional reference points like Session Highs/Lows, Key Levels, and Higher Timeframe (HTF) structure automatically.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Key Features</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Institutional Key Levels:</strong> Automatically plots critical liquidity levels including Previous Day/Week Highs & Lows, and Session Ranges (Asian, London, NY).</li>
        <li><strong>Multi-Timeframe Structure:</strong> Analyzes and displays Market Structure Shifts (MSS) and Swing Points for both the current chart and Higher Timeframes simultaneously.</li>
        <li><strong>FVG Matrix:</strong> Detects and draws Fair Value Gaps (Imbalances) for both current and higher timeframes to help identifying draw-on-liquidity.</li>
        <li><strong>Liquidity Run Alerts:</strong> Tracks whether key liquidity pools (e.g., "Asian High" or "Previous Day Low") have been raided ("Taken") or are still intact.</li>
        <li><strong>Complete Trade Suite:</strong> Includes ALL features of the TradeManagerPanel—Manual Execution, Auto-Breakeven, Reduced Risk Logic, Partials, and Daily Loss Limits.</li>
        <li><strong>Session Timing:</strong> Visualizes specific kill-zones and session openings directly on the chart to align your entries with time-based volatility.</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-2">Installation Guide</h3>
      <p>Download the EA file and place it in your MetaTrader 5 'Experts' folder. Restart your terminal. When attaching to a chart, ensure you allow DLL imports if prompted (standard for complex panels) and enable 'Algo Trading'. Custom session times can be configured in the EA inputs to match your broker's server time.</p>
    `,
  },
  CheckNewsEA: {
    category: "MT5",
    title: "CheckNews EA",
    subtitle: "News Checker for MT5",
    videoId: "",
    link: "https://drive.google.com/file/d/1DvTQTC3N20tufY5Ay_VfBCXfQdd3gWc-/view?usp=sharing",
    description: `
      <p>The CheckNews EA acts as your automated economic calendar assistant directly on your MetaTrader 5 chart. It monitors upcoming high-impact financial news and holidays, ensuring you never get caught off-guard by market-moving events while you trade.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Key Features</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>High-Impact Filter:</strong> Automatically filters and displays only high-importance economic events and holidays relevant to your market.</li>
        <li><strong>Live Countdown:</strong> Monitors time continuously to show you exactly when events are approaching relative to server and local time.</li>
        <li><strong>Bank Holiday Detection:</strong> Specifically identifies Bank Holidays (e.g., US market holidays) and updates the display to warn you of low volatility conditions.</li>
        <li><strong>Clean Dashboard:</strong> Displays critical news info directly on the chart using a non-intrusive text overlay.</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-2">Installation Guide</h3>
      <p>Download the EA file and place it in your MetaTrader 5 'Experts' folder. Restart your terminal, and you will find the CheckNews EA in the Navigator window under Expert Advisors. Drag and drop it onto your chart to get started.</p>
    `,
  },
  TargetReacherEAMT5: {
    category: "MT5",
    title: "TargetReacher EA",
    subtitle: "Close all trades instantly when target equity reached for MT5",
    videoId: "",
    link: "https://drive.google.com/file/d/1zmtO01e6sBF1N_si7zy86RBPfHAZdhtD/view?usp=sharing",
    description: `
      <p>The TargetReacher EA is an essential utility for prop firm traders and disciplined investors. It actively monitors your account equity and automatically secures your profits the moment your specific financial target is hit.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Key Features</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Auto-Close on Target:</strong> Instantly closes all active positions and pending orders the moment your equity reaches your defined target amount.</li>
        <li><strong>Telegram Integration:</strong> Can send you an instant notification via Telegram when your target is hit (requires Chat ID & Bot Token).</li>
        <li><strong>Prop Firm Ready:</strong> Ideal for passing evaluation phases where hitting a specific equity target corresponds to passing the challenge.</li>
        <li><strong>Visual Status:</strong> Displays your current target goal clearly on the on-chart dashboard.</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-2">Installation Guide</h3>
      <p>Download the EA file and place it in your MetaTrader 5 'Experts' folder. Restart your terminal, and you will find the TargetReacher EA in the Navigator window under Expert Advisors. Drag and drop it onto your chart and set your Target Equity amount in the inputs.</p>
    `,
  },
  TickValueTimeEA: {
    category: "MT5",
    title: "TickValueTime EA",
    subtitle: "Display tick value & time",
    videoId: "",
    link: "https://drive.google.com/file/d/1o-n8wCRib4PW91UMzzeqRg7ruI4vIhXv/view?usp=sharing",
    description: `
      <p>The TickValueTime EA provides a real-time informational dashboard for any instrument you are trading. It instantly calculates and displays critical symbol details like Tick Value and Contract Size, helping you make informed risk calculations on the fly.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Key Features</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Real-Time Specs:</strong> Updates every second to show the most current symbol data for the chart you are on.</li>
        <li><strong>Risk Data:</strong> explicitly displays Tick Value, Tick Size, and Contract Size—essential for manual lot size calculations.</li>
        <li><strong>Live Quotes:</strong> Shows the current Bid, Ask, and Spread size directly on the dashboard.</li>
        <li><strong>Universal Compatibility:</strong> Works on any valid MT5 symbol, including Forex, Metals, Indices, and Crypto.</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-2">Installation Guide</h3>
      <p>Download the EA file and place it in your MetaTrader 5 'Experts' folder. Restart your terminal, and you will find the TickValueTime EA in the Navigator window under Expert Advisors. Drag and drop it onto your chart to display the info panel.</p>
    `,
  },

  // MetaTrader 4 Scripts
  CloseAll: {
    category: "MT4",
    title: "CloseAll Script",
    subtitle: "Close all positions instantly",
    videoId: "",
    link: "https://drive.google.com/file/d/10xGFL5fOR69kcUxahRuWOEllUkEQM7R9/view?usp=sharing",
    description: `
      <p>The CloseAll Script is a versatile order management tool designed to give you full control over closing positions on MetaTrader 4. With flexible filtering options, you can close specific groups of orders instantly with a single execution.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Key Features</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Multiple Close Modes:</strong> Choose from 6 different closing options: all orders, instant orders only, pending orders only, orders by comment, profitable orders only, or losing orders only.</li>
        <li><strong>Selective Closing:</strong> Filter orders by comment to close only specific strategies or setups.</li>
        <li><strong>Instant Execution:</strong> Closes all matching orders immediately with no manual clicks required.</li>
        <li><strong>Risk Management:</strong> Quickly exit all losing positions or secure all profitable trades in emergency situations.</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-2">Installation Guide</h3>
      <p>Download the file and place it in your MetaTrader 4 <strong>'Scripts'</strong> folder (not Experts). Restart your terminal, and you will find it in the Navigator window under Scripts. Drag and drop it onto any chart and select your preferred closing mode from the inputs before execution.</p>
    `,
  },
  DeleteAllObjectsMT4: {
    category: "MT4",
    title: "DeleteAllObjects Script",
    subtitle: "Quickly delete all chart objects",
    videoId: "",
    link: "https://drive.google.com/file/d/1x2-0JdPnBaJFueDbnbe1sv8YFzHQk9Oh/view?usp=sharing",
    description: `
      <p>The DeleteAllObjects Script is a simple but powerful workflow enhancer designed to clean up your charts instantly. With a single action, it wipes all lines, shapes, and analysis tools, giving you a fresh canvas immediately.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Key Features</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Instant Chart Cleaning:</strong> Removes every object (trendlines, boxes, arrows, text) from the chart in milliseconds.</li>
        <li><strong>Workflow Efficiency:</strong> Saves time compared to manually selecting and deleting old analysis tools one by one.</li>
        <li><strong>Zero Configuration:</strong> Runs immediately upon execution with no inputs required.</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-2">Installation Guide</h3>
      <p>Download the file and place it in your MetaTrader 4 <strong>'Scripts'</strong> folder (not Experts). Restart your terminal, and you will find it in the Navigator window under Scripts. Simply drag and drop it onto any chart to instantly clear it.</p>
    `,
  },
  TickValue: {
    category: "MT4",
    title: "TickValue Script",
    subtitle: "Display tick value",
    videoId: "",
    link: "https://drive.google.com/file/d/1rAYlrE1SCy0m9s4xeozHg7EYQaCc1nsJ/view?usp=sharing",
    description: `
      <p>The TickValue Script provides a real-time informational display for any instrument you are trading. It instantly calculates and shows critical symbol details like Tick Value and Spread, helping you make informed risk calculations on the fly.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Key Features</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Real-Time Updates:</strong> Continuously displays current Tick Value and Spread data for the active chart symbol.</li>
        <li><strong>Risk Calculation Aid:</strong> Shows the exact Tick Value needed for manual lot size and risk calculations.</li>
        <li><strong>Spread Monitoring:</strong> Displays current spread in points to help you avoid trading during high-spread conditions.</li>
        <li><strong>Universal Compatibility:</strong> Works on any valid MT4 symbol, including Forex pairs, Metals, and Indices.</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-2">Installation Guide</h3>
      <p>Download the file and place it in your MetaTrader 4 <strong>'Scripts'</strong> folder (not Experts). Restart your terminal, and you will find it in the Navigator window under Scripts. Drag and drop it onto your chart to display the information panel.</p>
    `,
  },

  // MetaTrader 4 EAs
  TargetReacherEAMT4: {
    category: "MT4",
    title: "TargetReacher EA",
    subtitle: "Close all trades instantly when target equity reached for MT4",
    videoId: "",
    link: "https://drive.google.com/file/d/1GVV1-_Ea75h6TcL-9nbvsdfEt23HdUfU/view?usp=sharing",
    description: `
      <p>The TargetReacher EA is an essential utility for prop firm traders and disciplined investors on MetaTrader 4. It actively monitors your account equity and automatically secures your profits instantly when your financial target is hit.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Key Features</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Auto-Close Execution:</strong> Instantly closes all active market positions and deletes pending orders the moment your equity reaches the defined target.</li>
        <li><strong>Mobile Alerts:</strong> Sends a Push Notification to your MetaTrader 4 mobile app immediately upon reaching your goal.</li>
        <li><strong>Desktop Alerts:</strong> Triggers a pop-up alert on your terminal screen to notify you of the success.</li>
        <li><strong>Prop Firm Ready:</strong> Perfect for passing evaluation phases where specific equity targets must be met without breaching rules.</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-2">Installation Guide</h3>
      <p>Download the EA file and place it in your MetaTrader 4 <strong>'Experts'</strong> folder. Restart your terminal, and you will find the TargetReacher EA in the Navigator window under Expert Advisors. Drag and drop it onto your chart and set your <strong>Target Equity</strong> amount in the inputs tab.</p>
    `,
  },

  // MetaTrader Templates
  MT5LightMode: {
    category: "Templates",
    title: "MT5 Light Mode Template",
    subtitle: "Clean light theme for MT5",
    videoId: "",
    link: "https://drive.google.com/file/d/1qPu0qYJq0siqwPBqe0nsGk1TclH4tsD_/view?usp=sharing",
    description: `
      <p>The LightTemplateMT5 is a professionally designed chart template with a bright color scheme optimized for daylight trading conditions on MetaTrader 5. It provides crisp, clear visuals that remain easy to read in well-lit environments or outdoor settings.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Key Features</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Daylight Optimized:</strong> Bright background with dark text ensures excellent visibility in well-lit rooms.</li>
        <li><strong>Clean Aesthetics:</strong> Professional color palette that maintains clarity without overwhelming visual noise.</li>
        <li><strong>Print-Friendly:</strong> Light theme is ideal for taking screenshots, sharing setups, or printing charts for analysis.</li>
        <li><strong>Instant Setup:</strong> Apply the template to any chart and have your preferred color scheme instantly loaded.</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-2">Installation Guide</h3>
      <p>Download the template file. In MetaTrader 5, go to <strong>File > Open Data Folder</strong>, then navigate to <strong>Profiles > Templates</strong>. Paste the file there. Right-click on any chart, select "Templates," and choose "LightTemplateMT5" to apply it.</p>
    `,
  },
  MT4LightMode: {
    category: "Templates",
    title: "MT4 Light Mode Template",
    subtitle: "Clean light theme for MT4",
    videoId: "",
    link: "https://drive.google.com/file/d/1rWeACEEqnIQLbbhopucUArY_P7hBeNTt/view?usp=sharing",
    description: `
      <p>The LightTemplateMT4 is a professionally designed chart template with a bright color scheme optimized for daylight trading conditions. It provides crisp, clear visuals that remain easy to read in well-lit environments or outdoor settings.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Key Features</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Daylight Optimized:</strong> Bright background with dark text ensures excellent visibility in well-lit rooms or outdoor trading.</li>
        <li><strong>Clean Aesthetics:</strong> Professional color palette that maintains clarity without overwhelming visual noise.</li>
        <li><strong>Print-Friendly:</strong> Light theme is ideal for taking screenshots or printing charts for analysis reviews.</li>
        <li><strong>Instant Setup:</strong> Apply the template to any chart and have your preferred color scheme instantly loaded.</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-2">Installation Guide</h3>
      <p>Download the template file and place it in your MetaTrader 4 <strong>'templates'</strong> folder. Restart your terminal, right-click on any chart, select "Template," and choose "LightTemplateMT4" to apply it. You can also set it as your default template in the settings.</p>
    `,
  },
  MT5DarkMode: {
    category: "Templates",
    title: "MT5 Dark Mode Template",
    subtitle: "Professional dark theme for MT5",
    videoId: "",
    link: "https://drive.google.com/file/d/1t6wh3UXGRi0BZS17QRPrtIOgcGUaTQo7/view?usp=sharing",
    description: `
      <p>The DarkTemplateMT5 is a professionally designed chart template with a dark color scheme optimized for reduced eye strain during extended trading sessions on MetaTrader 5. It provides clean visuals with high contrast elements that make price action and analysis tools stand out clearly.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Key Features</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Eye-Friendly Design:</strong> Dark background reduces screen glare and eye fatigue during long trading hours.</li>
        <li><strong>High Contrast Colors:</strong> Carefully selected colors for candles, grids, and text ensure maximum readability.</li>
        <li><strong>Professional Appearance:</strong> Clean, distraction-free layout that keeps your focus strictly on price action.</li>
        <li><strong>Instant Setup:</strong> Apply the template to any chart and have your preferred color scheme instantly loaded.</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-2">Installation Guide</h3>
      <p>Download the template file. In MetaTrader 5, go to <strong>File > Open Data Folder</strong>, then navigate to <strong>Profiles > Templates</strong>. Paste the file there. Right-click on any chart, select "Templates," and choose "DarkTemplateMT5" to apply it.</p>
    `,
  },
  MT4DarkMode: {
    category: "Templates",
    title: "MT4 Dark Mode Template",
    subtitle: "Professional dark theme for MT4",
    videoId: "",
    link: "https://drive.google.com/file/d/17o4M0lmOVYUwYiN8_mp2glCnUMk73FCj/view?usp=sharing",
    description: `
      <p>The DarkTemplateMT4 is a professionally designed chart template with a dark color scheme optimized for reduced eye strain during extended trading sessions. It provides clean visuals with high contrast elements that make price action and analysis tools stand out clearly.</p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Key Features</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Eye-Friendly Design:</strong> Dark background reduces screen glare and eye fatigue during long trading hours.</li>
        <li><strong>High Contrast Colors:</strong> Carefully selected colors for candles, grids, and text ensure maximum readability.</li>
        <li><strong>Professional Appearance:</strong> Clean, distraction-free layout that keeps focus on price action.</li>
        <li><strong>Instant Setup:</strong> Apply the template to any chart and have your preferred color scheme instantly loaded.</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-2">Installation Guide</h3>
      <p>Download the template file and place it in your MetaTrader 4 <strong>'templates'</strong> folder. Restart your terminal, right-click on any chart, select "Template," and choose "DarkTemplateMT4" to apply it. You can also set it as your default template in the settings.</p>
    `,
  },
};
