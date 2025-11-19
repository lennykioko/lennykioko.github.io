import { GrLinkedin, GrGithub, GrInstagram, GrYoutube } from "react-icons/gr";
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
];

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between border-b-2 border-amber-400 bg-slate-100">
      <div className="p-4 text-2xl font-bold">Lenny Kioko</div>
      <nav className="mr-4 flex items-center justify-around space-x-4">
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
    </header>
  );
}
