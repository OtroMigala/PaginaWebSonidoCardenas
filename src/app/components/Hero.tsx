import { useEffect, useState } from 'react';
import { ChevronDown, MessageCircle, Mic, MapPin, Star } from 'lucide-react';
import heroBg from '../../media/photos/hero-fondo-festival.jpeg';
import logoSonido from '../../media/Logos/LogoSonido.png';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 sm:py-0">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover object-center" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/90 via-[#0D0D0D]/65 to-[#0D0D0D]/80" />
      </div>

      {/* Watermark - hidden on mobile to avoid content overlap */}
      <div className="hidden sm:block absolute top-16 right-10 opacity-10 select-none pointer-events-none">
        <img src={logoSonido} alt="" aria-hidden="true" className="h-72 w-auto object-contain" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`max-w-3xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Eyebrow */}
          <div className="mb-4 sm:mb-6">
            <span className="inline-block text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] bg-gradient-to-r from-[#F97316] to-[#FBBF24] bg-clip-text text-transparent" style={{ fontFamily: 'Inter' }}>
              ✦ SONIDO · LUCES · EVENTOS
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-[#F8FAFC] mb-4 sm:mb-6 leading-[1.1]" style={{ fontFamily: 'Bebas Neue' }}>
            HACEMOS QUE TU EVENTO SEA INOLVIDABLE
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[#9CA3AF] mb-6 sm:mb-10" style={{ fontFamily: 'Inter' }}>
            Amplificación profesional, luces, DJ, estructuras y organización integral de eventos en Popayán y Cali.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
            <a
              href="https://wa.me/573145483972?text=Hola%20Fabián,%20me%20interesa%20cotizar%20un%20evento"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#F97316] to-[#FBBF24] text-[#0D0D0D] px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:scale-105 transition-transform"
              style={{ fontFamily: 'Inter' }}
            >
              <MessageCircle className="w-5 h-5" /> Escribir por WhatsApp
            </a>
            <button
              onClick={scrollToServices}
              className="inline-flex items-center justify-center gap-2 border-2 border-[#FBBF24] text-[#F8FAFC] px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-[#FBBF24]/10 transition-colors"
              style={{ fontFamily: 'Inter' }}
            >
              Ver Nuestros Servicios
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-x-4 gap-y-2 sm:gap-6 text-xs sm:text-sm text-[#9CA3AF]" style={{ fontFamily: 'Inter' }}>
            <div className="flex items-center gap-2">
              <Mic className="w-4 h-4 text-[#F97316]" />
              <span>+500 Eventos realizados</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#F97316]" />
              <span>Popayán & Cali</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-[#F97316]" />
              <span>Calidad profesional</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
      >
        <ChevronDown className="w-8 h-8 text-[#F97316]" />
      </button>
    </section>
  );
}
