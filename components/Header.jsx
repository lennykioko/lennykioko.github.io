import Link from 'next/link'
import { GrLinkedin, GrGithub, GrInstagram } from 'react-icons/gr'

function Header() {
  return (
    <div className="sticky top-0 z-10 flex w-full items-center justify-between border-b-2 border-dotted border-amber-400 bg-slate-100">
      <div className="p-4 text-2xl">Lenny Kioko</div>
      <div className="mr-4 flex items-center justify-around space-x-2">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/lennykioko/"
          rel="noreferrer"
        >
          <GrLinkedin className="h-6 w-6" color="darkblue" />
        </a>
        <a
          target="_blank"
          href="https://github.com/lennykioko"
          rel="noreferrer"
        >
          <GrGithub className="h-6 w-6" />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/lenny_kioko/"
          rel="noreferrer"
        >
          <GrInstagram className="h-6 w-6" color="red" />
        </a>
      </div>
    </div>
  )
}

export default Header
