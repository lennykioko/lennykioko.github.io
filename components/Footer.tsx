import {
  GrLinkedin,
  GrGithub,
  GrInstagram,
  GrMailOption,
  GrYoutube,
} from "react-icons/gr";
import { SiTelegram } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  {
    href: "https://www.youtube.com/@TradesbyLennyKioko/",
    icon: GrYoutube,
    label: "YouTube",
    color: "text-red-600",
  },
  {
    href: "https://t.me/TradesbyLennyKioko/",
    icon: SiTelegram,
    label: "Telegram",
    color: "text-blue-500",
  },
  {
    href: "https://x.com/lenny_kioko",
    icon: FaXTwitter,
    label: "Twitter/X",
    color: "text-black",
  },
  {
    href: "https://www.linkedin.com/in/lennykioko/",
    icon: GrLinkedin,
    label: "LinkedIn",
    color: "text-blue-700",
  },
  {
    href: "https://github.com/lennykioko",
    icon: GrGithub,
    label: "GitHub",
    color: "text-gray-800",
  },
  {
    href: "https://www.instagram.com/lenny_kioko/",
    icon: GrInstagram,
    label: "Instagram",
    color: "text-pink-500",
  },
  {
    href: "mailto:pacentaconsultancy@gmail.com",
    icon: GrMailOption,
    label: "Email",
    color: "text-gray-600",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full flex-col items-center justify-center bg-slate-100 p-8">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Lenny Kioko</h3>
          <p className="text-sm text-gray-600">
            Excellence - Passion - Integrity - Collaboration
          </p>
        </div>

        <nav className="flex items-center justify-center space-x-6">
          {socialLinks.map(({ href, icon: Icon, label, color }) => (
            <a
              key={label}
              target="_blank"
              href={href}
              rel="noreferrer"
              aria-label={label}
              className={`transition-transform hover:scale-110 ${color}`}
            >
              <Icon className="h-6 w-6" />
            </a>
          ))}
        </nav>

        <div className="pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Copyright &copy; {currentYear} Lenny Kioko. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
