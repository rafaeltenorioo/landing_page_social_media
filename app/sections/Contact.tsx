import React from "react";

export const Contact = () => {
  return (
    <section className="h-screen flex items-center justify-center" id="contact">
      <button>
        <a
          href="https://wa.me/5492215119951/?text=Olá, gostaria de saber mais sobre seus serviços!"
          target="_blank"
          className="rounded-lg p-4 m-4 bg-gold-700 cursor-pointer"
          aria-label="Fale comigo pelo WhatsApp"
        >
          Fale comigo pelo WhatsApp
        </a>
      </button>
    </section>
  );
};
