import React from "react";
import { ButtonMenu } from "../componentes/ButtonMenu";

export const listItem = [
  { id: 1, text: "Início", href: "#hero" },
  { id: 2, text: "Sobre", href: "#about" },
  { id: 3, text: "Resultados", href: "#social-proof" },
  { id: 4, text: "Contato", href: "#contact" }
];


export const Header = () => {
  return (
    <header className="sticky top-0 bg-black-soft/80 px-12 pt-4 flex justify-between items-center backdrop-blur-sm z-75 md:">
      <ButtonMenu />
      <p className="bg-linear-to-r from-gold-300 via-gold-500 to-gold-700 bg-clip-text text-transparent text-[19px] font-bold  p-2 md:text-[24px]">
        Giovanna
      </p>

      <nav className="hidden md:flex md:gap-8">
        {listItem.map((item) => (
          <a href={item.href} key={item.id} className="text-white no-underline hover:text-gold-500 hover:underline hover:underline-offset-4 transition-colors">{item.text} </a>
        ))}

      </nav>
    </header>
  );
};
