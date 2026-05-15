import { useEffect, useRef } from 'react';

const eventImages = [
  { type: 'Boda', label: 'Evento — Boda' },
  { type: 'Concierto', label: 'Evento — Concierto' },
  { type: 'Corporativo', label: 'Evento — Corporativo' },
  { type: 'Fiesta', label: 'Evento — Fiesta' },
  { type: 'Quinceañero', label: 'Evento — Quinceañero' },
  { type: 'Festival', label: 'Evento — Festival' },
  { type: 'Boda', label: 'Evento — Boda' },
  { type: 'Concierto', label: 'Evento — Concierto' }
];

const eventCategories = [
  'Bodas',
  'Quinceañeros',
  'Conciertos',
  'Eventos Corporativos',
  'Fiestas privadas',
  'Asambleas',
  'Festivales',
  'Eventos virtuales'
];

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let intervalId: ReturnType<typeof setInterval>;

    const startScroll = () => {
      intervalId = setInterval(() => {
        scrollContainer.scrollLeft += 1;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }, 20);
    };

    const stopScroll = () => clearInterval(intervalId);

    startScroll();
    scrollContainer.addEventListener('mouseenter', stopScroll);
    scrollContainer.addEventListener('mouseleave', startScroll);

    return () => {
      stopScroll();
      scrollContainer.removeEventListener('mouseenter', stopScroll);
      scrollContainer.removeEventListener('mouseleave', startScroll);
    };
  }, []);

  return (
    <section id="gallery" className="py-20 bg-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-[#F97316] to-[#FBBF24] bg-clip-text text-transparent uppercase" style={{ fontFamily: 'Bebas Neue' }}>
            Eventos que hemos hecho realidad
          </h2>
          <p className="text-xl text-[#9CA3AF]" style={{ fontFamily: 'Inter' }}>
            Cada evento es una historia única
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div ref={scrollRef} className="overflow-x-hidden mb-12">
        <div className="flex gap-6 px-4" style={{ width: 'max-content' }}>
          {[...eventImages, ...eventImages].map((event, index) => (
            <div
              key={index}
              className="w-[400px] h-[250px] bg-[#1A1A1A] rounded-lg border border-[#2A2A2A] overflow-hidden group cursor-pointer flex-shrink-0"
            >
              <div className="w-full h-full flex flex-col items-center justify-center text-[#2A2A2A] relative">
                <svg className="w-16 h-16 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-sm">{event.label}</p>
                <div className="absolute inset-0 bg-gradient-to-t from-[#F97316]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <p className="text-white text-xl" style={{ fontFamily: 'Bebas Neue' }}>{event.type}</p>
                    <p className="text-[#FBBF24] text-sm" style={{ fontFamily: 'Inter' }}>Ver detalles</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Event Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {eventCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] border border-[#2A2A2A] px-4 py-3 rounded-lg text-center text-[#F8FAFC] hover:border-[#F97316] hover:bg-[#F97316]/10 transition-all cursor-pointer"
              style={{ fontFamily: 'Inter' }}
            >
              {category}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
