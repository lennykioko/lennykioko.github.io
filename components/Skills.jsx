const arrayOne = [
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

const arrayTwo = [
  'Solidity',
  'NodeJS',
  'ExpressJS',
  'REST APIs',
  'GraphQL',
  'SQL',
  'PostgreSQL',
  'MongoDB',
  'Firebase',
  'Python',
  'Django & DRF',
  'Flask',
]

const arrayThree = [
  'Hardhat',
  'Git & Github',
  'Docker',
  'VsCode',
  'Selenium',
  'MQL4',
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
