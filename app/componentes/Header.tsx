import React from "react";

export const Header = () => {
  return <header className="sticky top-0 bg-black-soft/80 px-16 py-4 flex justify-between items-center backdrop-blur-sm">
    <p className="bg-linear-to-r from-gold-300 via-gold-500 to-gold-700 bg-clip-text text-transparent text-lg font-bold uppercase p-2 ">Lays Giovanna</p>
    
    <div className="flex gap-4 ">
      <a href="#hero">Início</a>
      <a href="#about">Sobre</a>
      <a href="#social-proof">Resultados</a>
      <a href="#contact">Contato</a>
    </div>
  </header>;
};
