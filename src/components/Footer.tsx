import { Mail, Phone, MapPin } from 'lucide-react';
import { colors } from '../data/colors';

export default function Footer() {
  return (
    <footer id="contato" className="bg-[#001223] pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand Col */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <div className="flex items-end mr-2 relative h-8 w-6">
                <div className="absolute bottom-0 left-0 w-1.5 h-4 bg-white rounded-sm"></div>
                <div className="absolute bottom-0 right-0 w-3 h-6 bg-white rounded-bl-[12px] rounded-tr-sm"></div>
                <div className="absolute top-0 right-0 w-2.5 h-2.5 rounded-full" style={{ backgroundColor: colors.secondary }}></div>
              </div>
              <div className="flex flex-col ml-1">
                <span className="font-montserrat font-bold text-2xl text-white leading-none tracking-tight">OPEX</span>
                <span className="font-montserrat text-[0.5rem] text-white tracking-[0.2em] leading-none mt-1">CONTABILIDADE</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A OPEX é a autoridade confiável que simplifica a complexidade financeira, atuando como um guia estratégico e humano.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#66BB6A] transition-colors">
                <span className="font-bold text-sm">in</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#66BB6A] transition-colors">
                <span className="font-bold text-sm">ig</span>
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-montserrat font-bold text-white mb-6 uppercase tracking-wider text-sm" style={{ color: colors.accent }}>Navegação</h4>
            <ul className="space-y-4">
              <li><a href="#sobre" className="text-gray-400 hover:text-white transition-colors">Nossa Essência</a></li>
              <li><a href="#solucoes" className="text-gray-400 hover:text-white transition-colors">Soluções</a></li>
              <li><a href="#bpo" className="text-gray-400 hover:text-white transition-colors">BPO Financeiro</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Abertura de Empresa</a></li>
            </ul>
          </div>

          {/* Contato Direto */}
          <div className="md:col-span-2">
            <h4 className="font-montserrat font-bold text-white mb-6 uppercase tracking-wider text-sm" style={{ color: colors.accent }}>Fale Conosco</h4>
            <div className="space-y-4">
              <a href="mailto:contato@opexcontabilidade.com.br" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#66BB6A] transition-colors">
                  <Mail size={18} />
                </div>
                <span>contato@opexcontabilidade.com.br</span>
              </a>
              <a href="tel:+5547999091282" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#66BB6A] transition-colors">
                  <Phone size={18} />
                </div>
                <span>(47) 99909-1282 <span className="text-sm opacity-50 ml-2">(WhatsApp Business)</span></span>
              </a>
              <div className="flex items-center gap-4 text-gray-400">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <span>Rua Monte Bandeiras, 456 - Sala 09<br />Camboriú, SC - 88348-411</span>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} OPEX Contabilidade. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-sm">
            CNPJ: 64.351.255/0001-81 - CRC: SC-39060O8
          </p>
        </div>
      </div>
    </footer>
  );
}
