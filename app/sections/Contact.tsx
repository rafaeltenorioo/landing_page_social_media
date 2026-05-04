"use client";
import { BtToWhatsApp } from "../componentes/BtToWhatsApp";
import { FaWhatsapp } from "react-icons/fa6";
import { motion } from "motion/react";

const steps = [
  {
    id: 1,
    title: "Diagnóstico",
    text: "Analisamos o seu cenário atual, seu público-alvo e onde estão as oportunidades ocultas do seu negócio.",
  },
  {
    id: 2,
    title: "Estratégia",
    text: "Desenhamos a estrutura das campanhas, definimos orçamentos e criamos uma estratégia sob medida para o seu objetivo.",
  },
  {
    id: 3,
    title: "Execução e Escala",
    text: "Colocamos as campanhas no ar, monitoramos os dados diariamente e otimizamos os anúncios para maximizar o seu lucro.",
  },
];

export const Contact = () => {
  return (
    <section
      className="min-h-screen flex flex-col items-center text-center py-24 px-6 gap-4 md:px-12"
      id="contact"
    >
      {/* Título */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-4"
      >
        <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
          O passo a passo para{" "}
          <span className="text-gold-500">escalar suas vendas </span>
        </h1>
        <h2 className="text-base font-light md:text-lg">
          Um processo validado, focado 100% no retorno sobre o seu investimento
          (ROI).
        </h2>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-8 w-full max-w-6xl md:grid-cols-3">
        {steps.map((step) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: step.id * 0.2 }}
            className="bg-gold-900 border border-gold-500/20 backdrop-blur-sm rounded-2xl p-8 flex flex-col items-start text-left transition-colors duration-300 relative overflow-hidden group hover:bg-gold-500/60"
          >
            <span className="absolute -top-6 -right-2 text-8xl font-black text-white/5 pointer-events-none group-hover:text-gold-500/10 transition-colors duration-500">
              {step.id}
            </span>

            <div className="flex flex-col gap-4 relative z-10">
              <span className="text-gold-500 font-bold text-xl">
                {step.id}. {step.title}
              </span>
              <p className="font-light leading-relaxed">{step.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <BtToWhatsApp className="rounded-xl py-5 px-8 bg-gold-900 hover:bg-gold-500 font-bold text-lg md:text-xl transition-all duration-300 cursor-pointer flex items-center gap-3 hover:translate-y-1">
         Quero Agendar Meu Diagnóstico
          <span>
            <FaWhatsapp size={28} className="animate-pulse" />
          </span>
        </BtToWhatsApp>
      </motion.div>
    </section>
  );
};
