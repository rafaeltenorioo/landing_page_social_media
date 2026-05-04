import React from 'react'

export const BtToWhatsApp = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <a
          href="https://wa.me/5492215119951/?text=Olá, gostaria de saber mais sobre seus serviços!"
          target="_blank"
          className={className}
          aria-label="Fale comigo pelo WhatsApp"
        >
          {children}
        </a>
  )
}
