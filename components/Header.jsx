import { GrLinkedin, GrGithub, GrInstagram, GrYoutube } from 'react-icons/gr'
import { SiTelegram } from 'react-icons/si'
import { FaXTwitter } from 'react-icons/fa6'

function Header() {
  return (
    <header className="flex w-full items-center justify-between border border-b-2 border-amber-400 bg-slate-100">
      <div className="p-4 text-2xl">Lenny Kioko</div>
      <div className="mr-4 flex items-center justify-around space-x-4">
        <a
          target="_blank"
          href="https://www.youtube.com/@TradesbyLennyKioko/"
          rel="noreferrer"
          aria-label="YouTube"
        >
          <GrYoutube className="h-6 w-6" color="red" />
        </a>
        <a
          target="_blank"
          href="https://t.me/TradesbyLennyKioko/"
          rel="noreferrer"
          aria-label="Telegram"
        >
          <SiTelegram className="h-6 w-6" color="#24A1DE" />
        </a>
        <a
          target="_blank"
          href="https://x.com/lenny_kioko"
          rel="noreferrer"
          aria-label="TwitterX"
        >
          <FaXTwitter className="h-6 w-6" color="black" />
        </a>
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
