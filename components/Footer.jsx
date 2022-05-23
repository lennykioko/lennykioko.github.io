import { GrLinkedin, GrGithub, GrInstagram, GrMailOption } from 'react-icons/gr'

function Footer() {
  return (
    <footer className="w-full flex-col items-center justify-center bg-slate-100 p-4">
      <div className="text-center">Lenny Kioko</div>
      <div className="text-center text-xs text-gray-600">
        Excellence - Passion - Integrity - Collaboration
      </div>

      <div className="m-4 flex items-center justify-around">
        <div></div>
        <div className="flex items-center justify-around space-x-4">
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
          <a
            target="_blank"
            href="mailto:lennykmutua@gmail.com"
            rel="noreferrer"
            aria-label="Mail"
          >
            <GrMailOption className="h-6 w-6" color="black" />
          </a>
        </div>
        <div></div>
      </div>
      <div></div>
      <div className="m-4 text-center text-sm text-gray-600">
        Copyright &copy; 2022
      </div>
    </footer>
  )
}

export default Footer
