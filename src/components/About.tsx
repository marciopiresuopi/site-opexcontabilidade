import { ShieldCheck, TrendingUp, Users } from 'lucide-react';
import { colors } from '../data/colors';

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Segurança Sólida',
    text: 'Garantimos a conformidade legal e fiscal da sua empresa com precisão absoluta, trazendo tranquilidade para suas decisões.',
    bg: `${colors.primary}15`,
    color: colors.primary,
    accentBar: false,
  },
  {
    icon: TrendingUp,
    title: 'Visão Estratégica',
    text: 'Olhamos para os números projetando o seu crescimento. Transformamos dados complexos em clareza para o seu negócio.',
    bg: `${colors.secondary}20`,
    color: colors.secondary,
    accentBar: true,
  },
  {
    icon: Users,
    title: 'Proximidade Humana',
    text: 'Linguagem simples, atendimento empático e respostas rápidas. Sem robôs, apenas pessoas cuidando de pessoas.',
    bg: `${colors.accent}15`,
    color: colors.accent,
    accentBar: false,
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.primary }}>
            Olhando Sempre à Frente
          </h2>
          <div className="w-20 h-1 mx-auto mb-6 rounded-full" style={{ backgroundColor: colors.accent }}></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Na OPEX focamos em orientar você para o futuro, e não apenas nas obrigações do passado. Atuando sempre com uma estrutura sólida e qualidade na entrega dos resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pillars.map(({ icon: Icon, title, text, bg, color, accentBar }) => (
            <div key={title} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-shadow group relative overflow-hidden">
              {accentBar && (
                <div className="absolute top-0 right-0 w-2 h-full" style={{ backgroundColor: colors.secondary }}></div>
              )}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform"
                style={{ backgroundColor: bg, color }}
              >
                <Icon size={32} />
              </div>
              <h3 className="font-montserrat text-xl font-bold mb-3" style={{ color: colors.primary }}>{title}</h3>
              <p className="text-gray-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
