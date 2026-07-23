import { colors } from '../data/colors';

export default function Hero() {
  return (
    <section className="hero-gradient relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full border border-white"></div>
        <div className="absolute top-40 right-20 w-32 h-32 rounded-full border border-white"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white font-bold text-sm mb-6 border border-white/20 backdrop-blur-sm flex items-center w-fit">
            <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: colors.secondary }}></span>
            Contabilidade Humanizada
          </div>
          <h1 className="font-montserrat text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Clareza, Segurança e <span style={{ color: colors.secondary }}>Proximidade</span> para o seu negócio.
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed font-light max-w-2xl">
            Nós não vendemos apenas serviços contábeis. Atuamos como um guia estratégico e humano, cuidando da contabilidade para que você foque no que importa: <strong className="font-bold text-white">o seu crescimento.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contato"
              className="px-8 py-4 rounded-md font-bold text-white text-lg transition-all transform hover:-translate-y-1 shadow-xl flex items-center justify-center gap-2"
              style={{ backgroundColor: colors.secondary }}
            >
              Agende uma Consultoria
            </a>
            <a
              href="#sobre"
              className="px-8 py-4 rounded-md font-bold text-white text-lg transition-all border border-white/30 hover:bg-white/10 flex items-center justify-center gap-2"
            >
              Entenda nossa visão
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
