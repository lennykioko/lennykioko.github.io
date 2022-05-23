import { GrLinkedin, GrGithub, GrInstagram } from 'react-icons/gr'

function Header() {
  return (
    <header className="flex w-full items-center justify-between border border-b-2 border-amber-400 bg-slate-100">
      <div className="p-4 text-2xl">Lenny Kioko</div>
      <div className="mr-4 flex items-center justify-around space-x-4">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/lennykioko/"
          rel="noreferrer"
          aria-label="Linkedin"
        >
          <GrLinkedin className="h-6 w-6" color="darkblue" />
        </a>
        <a
          target="_blank"
          href="https://github.com/lennykioko"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <GrGithub className="h-6 w-6" />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/lenny_kioko/"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <GrInstagram className="h-6 w-6" color="red" />
        </a>
      </div>
    </header>
  )
}

export default Header
