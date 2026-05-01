"use client";

import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MenuItems } from "./Menu";

export const ButtonMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
    // Pega todas as suas seções pelos IDs
    const sections = ["hero", "about", "social-proof", "contact"];
    
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        // Se o topo da seção estiver perto do topo da tela
        if (rect.top >= -100 && rect.top <= 300) {
          setActiveSection(section);
          break;
        }
      }
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("Menu toggled. Current state:", !isOpen ? "Open" : "Closed");
  };
  return (
    <>
    <button className="md:hidden cursor-pointer z-60" onClick={toggleMenu} aria-label={isOpen ? "Fechar menu" : "Abrir menu"}>
      {isOpen ? <AiOutlineClose size={24} /> : <Menu size={24} />}
    </button>

    {//  Aqui colocarei o menu que aparecerá, quando isOpen for true. No inicio ele estará apenas escondido. 
    }
    
    <MenuItems isOpen={isOpen} toggleMenu={toggleMenu} activeSection={activeSection} />
    </>
  );
};
