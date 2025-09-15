import { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import { useRouter } from 'next/router'

const projects = [
  {
    image: '/bible.png',
    title: 'Bible In a Year',
    website: 'https://bible-in-a-year.vercel.app/',
    code: 'https://github.com/lennykioko/bible-in-a-year',
  },
]

function HobbyProjects() {
  const [showCode, setShowCode] = useState(false)
  const router = useRouter()

  useEffect(() => {
    router?.query?.demo ? setShowCode(true) : setShowCode(false)
  }, [router?.query?.demo])

  return (
    <section className="flex-col items-center justify-center border-b-2 border-amber-400 bg-slate-100 p-4">
      <div className="p-4 text-center text-xl font-bold">Hobby Projects</div>
      <div className="flex flex-wrap items-start justify-between space-y-8 p-4">
        {projects &&
          projects.map((project, idx) => (
            <ProjectCard key={idx} idx={idx} {...project} showCode={showCode} />
          ))}
      </div>
    </section>
  )
}

export default HobbyProjects
