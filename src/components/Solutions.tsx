import { BarChart3, CheckCircle2, ArrowRight, ChevronRight, Briefcase, MapPin } from 'lucide-react';
import { colors } from '../data/colors';

const bpoItems = [
  'Controle de Contas a Pagar e Receber',
  'Conciliação Bancária Diária',
  'Relatórios Gerenciais Claros',
];

const otherServices = [
  {
    icon: Briefcase,
    title: 'Contabilidade Consultiva',
    text: 'Rotina fiscal, tributária e contábil tratada de forma proativa. Explicamos o "porquê" de cada ação e guia gerada.',
    color: colors.primary,
    hoverBorder: '#66BB6A',
  },
  {
    icon: MapPin,
    title: 'Abertura de Empresas',
    text: 'Comece com o pé direito. Planejamento tributário ideal desde o primeiro dia de operação do seu novo CNPJ.',
    color: colors.accent,
    hoverBorder: '#B8860B',
  },
];

export default function Solutions() {
  return (
    <section id="solucoes" className="py-20" style={{ backgroundColor: colors.lightBg }}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.primary }}>
              Soluções para o seu momento
            </h2>
            <p className="text-lg text-gray-600">
              Seja para abrir sua primeira empresa ou para delegar totalmente o seu financeiro, temos o plano de ação ideal.
            </p>
          </div>
          <a href="#contato" className="font-bold flex items-center gap-2 hover:underline" style={{ color: colors.primary }}>
            Ver todas as soluções <ChevronRight size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* BPO Financeiro Highlight */}
          <div id="bpo" className="rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row bg-white">
            <div className="md:w-2/5 p-8 flex flex-col justify-center" style={{ backgroundColor: colors.primary }}>
              <BarChart3 size={48} className="text-white mb-6" />
              <h3 className="font-montserrat text-2xl font-bold text-white mb-2">BPO Financeiro</h3>
              <p className="text-blue-100 text-sm">Terceirização completa e inteligente</p>
            </div>
            <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
              <p className="text-gray-600 mb-6 text-lg italic">
                "Seu tempo vale ouro. Pare de gerenciar boletos e comece a gerenciar estratégias."
              </p>
              <ul className="space-y-3 mb-8">
                {bpoItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 flex-shrink-0" size={20} style={{ color: colors.secondary }} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#contato" className="font-bold inline-flex items-center gap-2" style={{ color: colors.secondary }}>
                Delegar meu financeiro <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {otherServices.map(({ icon: Icon, title, text, color, hoverBorder }) => (
              <div
                key={title}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6 items-start transition-colors"
                style={{ borderColor: undefined }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = hoverBorder)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = '')}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${color}10`, color }}>
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="font-montserrat text-xl font-bold mb-2" style={{ color: colors.primary }}>{title}</h3>
                  <p className="text-gray-600 mb-4">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
