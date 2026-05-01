import { lora } from "../utils/fonts";

export const Hero = () => {
  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden pt-20"
      id="hero"
    >


      {/* Lado esquerdo com texto */}
      <div className="flex flex-col gap-6">
        <span className={`text-gold-500 text-sm uppercase ${lora.className}`}>
          Gestão de Tráfego Profissional
        </span>

        <h1 className="text-4xl md:text-6xl ">
          Pare de queimar dinheiro e comece a{" "}
          <span className="text-gold-500">vender todos os dias</span>
        </h1>

        <p className="text-zinc-400 text-lg md:text-xl max-w-lg">
          Estratégias personalizadas de anúncios online para escalar seu
          faturamento com inteligência e previsibilidade.
        </p>

        <div className="flex flex-wrap gap-4 mt-4">
          
          {/* Botao de WhatsApp */}
          <button className="bg-gold-500 rounded-2xl px-6 py-4 cursor-pointer text-xl">
            Entre em contato
          </button>
        </div>
      </div>
    </section>
  );
};
