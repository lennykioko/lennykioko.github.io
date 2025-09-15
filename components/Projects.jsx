import { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import { useRouter } from 'next/router'

const projects = [
  {
    image: '/myYoutube.png',
    title: 'Youtube Channel',
    website: 'https://www.youtube.com/@TradesbyLennyKioko/',
    code: 'https://www.youtube.com/@TradesbyLennyKioko',
  },
  {
    image: '/Daily-open-price.png',
    title: 'Daily Open Price Indicator',
    website:
      'https://www.tradingview.com/script/iOBABiLj-Daily-Open-Price-version-1-0/',
    code: 'https://github.com/lennykioko/ICT/blob/main/Old/Lenny/PineScript/Daily-Open-Price.pine',
  },
  {
    image: '/ICT-sessions.png',
    title: 'ICT Sessions Indicator',
    website:
      'https://www.tradingview.com/script/0unDD4MW-ICT-Sessions-version-1-0/',
    code: 'https://github.com/lennykioko/ICT/blob/main/Old/Lenny/PineScript/ICT-Sessions.pine',
  },
  {
    image: '/ICT-silver-bullet-sessions.png',
    title: 'ICT Silver Bullet Sessions Indicator',
    website:
      'https://www.tradingview.com/script/hCC7WbWf-ICT-Silver-bullet-sessions-version-1-0/',
    code: 'https://github.com/lennykioko/ICT/blob/main/Old/Lenny/PineScript/ICT-Silver-Bullet.pine',
  },
]

function Projects() {
  const [showCode, setShowCode] = useState(false)
  const router = useRouter()

  useEffect(() => {
    router?.query?.demo ? setShowCode(true) : setShowCode(false)
  }, [router?.query?.demo])

  return (
    <section className="flex-col items-center justify-center border-b-2 border-amber-400 bg-slate-100 p-4">
      <div className="p-4 text-center text-xl font-bold">Projects</div>
      <div className="flex flex-wrap items-start justify-between space-y-8 p-4">
        {projects &&
          projects.map((project, idx) => (
            <ProjectCard key={idx} idx={idx} {...project} showCode={showCode} />
          ))}
      </div>
    </section>
  )
}

export default Projects
