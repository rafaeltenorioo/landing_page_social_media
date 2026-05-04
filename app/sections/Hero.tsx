"use client";
import { FaWhatsapp } from "react-icons/fa6";
import { lora } from "../utils/fonts";
import { BtToWhatsApp } from "../componentes/BtToWhatsApp";
import { motion } from "motion/react";

export const Hero = () => {
  return (
    <section
      className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden py-20 px-6 md:px-12"
      id="hero"
    >
      {/* Estilo de fundo */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gold-700/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-125 h-125 bg-gold-900/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Texto da Hero */}
        <motion.div
          className="flex flex-col gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className={`text-gold-500 font-semibold tracking-widest text-xs md:text-sm uppercase ${lora.className}`}
          >
            Gestão de Tráfego Profissional
          </motion.span>

          <motion.h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1]">
            Pare de queimar dinheiro e comece a{" "}
            <span className="text-gold-500 relative md:whitespace-nowrap">
              vender todos os dias

            </span>
          </motion.h1>

          <motion.p className="text-lg md:text-xl font-light max-w-lg leading-relaxed mt-2">
            Estratégias personalizadas de anúncios online para escalar o
            faturamento do seu negócio com inteligência e previsibilidade
          </motion.p>

          <motion.div className="flex flex-wrap gap-4 mt-6">
            <BtToWhatsApp className="bg-gold-700 hover:bg-gold-500 font-bold text-lg rounded-xl px-8 py-5 transition-all duration-300 flex items-center gap-3 hover:translate-y-1">Entre em contato
              <FaWhatsapp size={24} className="animate-pulse" />
            </BtToWhatsApp>
          </motion.div>

        </motion.div>

        
      </div>
      
    </section>
  );
};
