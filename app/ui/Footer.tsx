import { AiOutlineMail } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import { RxLinkedinLogo } from "react-icons/rx";

interface ContactItem {
  id: string;
  icon: React.ReactNode;
  text: string;
}

interface SocialItem {
  id: string;
  icon: React.ReactNode;
  href: string;
  ariaLabel: string;
}

const infoContact: ContactItem[] = [
  {
    id: "email",
    icon: <AiOutlineMail size={28} />,
    text: "laysgio2002@gmail.com",
  },
  {
    id: "location",
    icon: <IoLocationSharp size={28} />,
    text: "La Plata, Buenos Aires",
  },
  {
    id: "phone",
    icon: <MdPhone size={28} />,
    text: "+54 9 221 511 9151",
  },
];

const socialLinks: SocialItem[] = [
  {
    id: "instagram",
    icon: <FaInstagram size={28} />,
    href: "https://www.instagram.com/",
    ariaLabel: "Link para o Instagram",
  },
  {
    id: "linkedin",
    icon: <RxLinkedinLogo size={28} />,
    href: "https://www.linkedin.com/",
    ariaLabel: "Link para o LinkedIn",
  },
];

export const Footer = () => {
  const curretnYear = new Date().getFullYear();
  return (
    <footer className="bg-gold-900 text-white rounded-t-2xl gap-16 flex flex-col justify-between p-4 md:px-16 md:pt-12 md:pb-8 md:flex-row">
      {/* Coluna de contatos */}
      <div className="flex flex-col gap-5 items-center">
        {infoContact.map((item) => (
          <div key={item.id} className="flex items-center gap-4 group">
            {item.icon}
            <span className="text-white/80 group-hover:text-white text-sm md:text-base">
              {item.text}
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-5 justify-end items-center md:items-end">
        <div className="flex">
          {socialLinks.map((item) => (
            <a
              key={item.id}
              href={item.href}
              aria-label={item.ariaLabel}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <span className="text-xs font-light md:text-sm">{`Copyright © ${curretnYear}. Todos os direitos reservados.`}</span>
      </div>
    </footer>
  );
};
