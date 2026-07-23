import { colors } from '../data/colors';
import { whatsappLink } from '../data/whatsapp';

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0" style={{ backgroundColor: colors.primary }}>
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <h2 className="font-montserrat text-3xl md:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight">
          Pare de olhar apenas para o retrovisor financeiro.
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-light">
          Deixe as burocracias com a equipe OPEX e ganhe clareza para acelerar os resultados da sua empresa hoje.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 rounded-md font-bold text-[#003366] text-lg transition-transform transform hover:scale-105 shadow-2xl"
            style={{ backgroundColor: colors.secondary }}
          >
            Falar com um Especialista
          </a>
          <span className="text-white opacity-60 text-sm mt-4 sm:mt-0 sm:ml-4">
            Atendimento ágil pelo WhatsApp
          </span>
        </div>
      </div>
    </section>
  );
}
