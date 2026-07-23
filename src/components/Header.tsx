import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { colors } from '../data/colors';
import { whatsappLink } from '../data/whatsapp';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo OPEX */}
        <div className="flex items-center cursor-pointer">
          <div className="flex items-end mr-2 relative h-10 w-8">
            <div className="absolute bottom-0 left-0 w-2 h-5 rounded-sm" style={{ backgroundColor: isScrolled ? colors.primary : '#fff' }}></div>
            <div className="absolute bottom-0 right-0 w-4 h-8 rounded-bl-[16px] rounded-tr-sm" style={{ backgroundColor: isScrolled ? colors.primary : '#fff' }}></div>
            <div className="absolute top-0 right-1 w-3.5 h-3.5 rounded-full" style={{ backgroundColor: colors.secondary }}></div>
          </div>
          <div className="flex flex-col ml-1">
            <span className={`font-montserrat font-bold text-3xl leading-none tracking-tight ${isScrolled ? 'text-[#003366]' : 'text-white'}`}>OPEX</span>
            <span className={`font-montserrat text-[0.6rem] tracking-[0.2em] leading-none mt-1 ${isScrolled ? 'text-[#003366]' : 'text-white'}`}>CONTABILIDADE</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#sobre" className={`font-bold text-sm hover:text-[#66BB6A] transition-colors ${isScrolled ? 'text-[#001223]' : 'text-white'}`}>Nossa Essência</a>
          <a href="#solucoes" className={`font-bold text-sm hover:text-[#66BB6A] transition-colors ${isScrolled ? 'text-[#001223]' : 'text-white'}`}>Soluções</a>
          <a href="#bpo" className={`font-bold text-sm hover:text-[#66BB6A] transition-colors ${isScrolled ? 'text-[#001223]' : 'text-white'}`}>BPO Financeiro</a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full font-bold text-white transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
            style={{ backgroundColor: colors.secondary }}
          >
            Falar com Especialista <ArrowRight size={16} />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ color: isScrolled ? colors.primary : '#fff' }}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col space-y-4 border-t border-gray-100">
          <a href="#sobre" className="text-lg font-bold text-[#001223]" onClick={() => setMobileMenuOpen(false)}>Nossa Essência</a>
          <a href="#solucoes" className="text-lg font-bold text-[#001223]" onClick={() => setMobileMenuOpen(false)}>Soluções</a>
          <a href="#bpo" className="text-lg font-bold text-[#001223]" onClick={() => setMobileMenuOpen(false)}>BPO Financeiro</a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-6 py-3 rounded-md font-bold text-white text-center transition-all"
            style={{ backgroundColor: colors.secondary }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Falar com Especialista
          </a>
        </div>
      )}
    </header>
  );
}
