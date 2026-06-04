import { useEffect, useRef, useState } from 'react';
import { Volume2, CalendarDays, Music, ClipboardList, Guitar, Lightbulb, Headphones, Tv } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Volume2,
    title: 'Amplificación para Orquestas',
    description: 'Equipos de alta potencia para orquestas y bandas en vivo'
  },
  {
    icon: CalendarDays,
    title: 'Amplificación para Eventos',
    description: 'Cobertura de sonido profesional para cualquier tipo de evento'
  },
  {
    icon: Music,
    title: 'Animación de Fiestas',
    description: 'Animadores y música para que tu fiesta no pare'
  },
  {
    icon: ClipboardList,
    title: 'Organización de Eventos',
    description: 'Coordinación integral desde la planeación hasta el cierre'
  },
  {
    icon: Guitar,
    title: 'Amplificación para Músicos',
    description: 'Backline y monitoreo profesional para artistas y grupos'
  },
  {
    icon: Lightbulb,
    title: 'Luces y Efectos Especiales',
    description: 'Estructuras de luces, humo, lasers y efectos escénicos'
  },
  {
    icon: Headphones,
    title: 'DJ Profesional',
    description: 'Sets musicales para todo tipo de eventos y audiencias'
  },
  {
    icon: Tv,
    title: 'Pantallas LED y Estructuras',
    description: 'Pantallas LED, tarimas y estructuras para grandes producciones'
  }
];

export default function Services() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(services.length).fill(false));
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardsRef.current.map((card, index) => {
      if (!card) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards(prev => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
            }, index * 100);
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(card);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section id="services" className="py-20 bg-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-[#F97316] to-[#FBBF24] bg-clip-text text-transparent uppercase" style={{ fontFamily: 'Bebas Neue' }}>
            Nuestros Servicios
          </h2>
          <p className="text-xl text-[#9CA3AF]" style={{ fontFamily: 'Inter' }}>
            Soluciones completas para cada tipo de evento
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className={`bg-[#1A1A1A] p-6 rounded-lg border border-[#2A2A2A] hover:border-[#F97316] hover:shadow-lg hover:shadow-[#F97316]/20 hover:-translate-y-1 transition-all duration-300 ${
                visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="mb-4 w-14 h-14 rounded-lg bg-gradient-to-br from-[#F97316] to-[#FBBF24] flex items-center justify-center">
                <service.icon className="w-7 h-7 text-[#0D0D0D]" />
              </div>
              <h3 className="text-xl text-[#F8FAFC] mb-3" style={{ fontFamily: 'Bebas Neue' }}>
                {service.title}
              </h3>
              <p className="text-[#9CA3AF]" style={{ fontFamily: 'Inter' }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-[#1A1A1A] to-[#0D0D0D] p-8 rounded-lg border border-[#2A2A2A] flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xl text-[#F8FAFC]" style={{ fontFamily: 'Inter' }}>
            ¿Necesitas varios servicios para tu evento?
          </p>
          <a
            href="https://wa.me/573183151724?text=Hola%20Fabián,%20necesito%20un%20paquete%20personalizado%20para%20mi%20evento"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#F97316] to-[#FBBF24] text-[#0D0D0D] px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform whitespace-nowrap"
            style={{ fontFamily: 'Inter' }}
          >
            Solicitar Paquete Personalizado
          </a>
        </div>
      </div>
    </section>
  );
}
