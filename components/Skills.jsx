const arrayOne = [
  'ICT Concepts',
  'SMC Concepts',
  'TradingView',
  'cTrader',
  'MetaTrader 4 & 5',
  'Pine Script',
  'MQL5',
  'Python',
  'Git & Github',
  'Docker',
  'VsCode',
]

const arrayTwo = [
  'NextJS',
  'ReactJS',
  'JavaScript',
  'TypeScript',
  'TailwindCSS',
  'HTML',
  'CSS',
  'ChakraUI',
  'Styled Components',
  'Figma',
]

const arrayThree = [
  'Solidity',
  'NodeJS',
  'ExpressJS',
  'REST APIs',
  'GraphQL',
  'SQL',
  'KQL',
  'PostgreSQL',
  'MongoDB',
  'Firebase',
  'Django & DRF',
  'Flask',
]

function Skills() {
  return (
    <section className="w-full flex-col items-center justify-center border-b-2 border-amber-400 bg-slate-100">
      <div className="p-4 text-center text-xl font-bold">Skills</div>
      <div className="wrap flex items-start justify-around p-4">
        <div className="p-4">
          {arrayOne && arrayOne.map((item, idx) => <p key={idx}>{item}</p>)}
        </div>
        <div className="p-4">
          {arrayTwo && arrayTwo.map((item, idx) => <p key={idx}>{item}</p>)}
        </div>
        <div className="p-4">
          {arrayThree && arrayThree.map((item, idx) => <p key={idx}>{item}</p>)}
        </div>
      </div>
    </section>
  )
}

export default Skills
