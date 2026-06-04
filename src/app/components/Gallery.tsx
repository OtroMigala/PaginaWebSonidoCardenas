import { useEffect, useRef } from 'react';
import imgBodaSalon from '../../media/photos/galeria-boda-salon.jpeg';
import imgConciertoTeatro from '../../media/photos/galeria-concierto-teatro.jpeg';
import imgCorporativo from '../../media/photos/galeria-corporativo.jpeg';
import imgFiestaBalile from '../../media/photos/galeria-fiesta-baile.jpeg';
import imgQuinceanero from '../../media/photos/galeria-quinceanero-prom.jpeg';
import imgFestivalBanda from '../../media/photos/galeria-festival-banda.jpeg';
import imgBodaSetup from '../../media/photos/galeria-boda-setup.jpeg';
import imgConciertoLed from '../../media/photos/galeria-concierto-led.jpeg';

const eventImages = [
  { type: 'Boda',        label: 'Amplificación y DJ para boda en salón — Sonido Cárdenas Popayán',              src: imgBodaSalon },
  { type: 'Concierto',   label: 'Sonido profesional para concierto en teatro — Popayán, Cauca',                 src: imgConciertoTeatro },
  { type: 'Corporativo', label: 'Producción audiovisual para evento corporativo — Sonido Cárdenas Popayán',     src: imgCorporativo },
  { type: 'Fiesta',      label: 'DJ y sonido para fiesta privada en Popayán — Sonido Cárdenas',                 src: imgFiestaBalile },
  { type: 'Quinceañero', label: 'Luces LED y DJ para quinceañero en Popayán — Sonido Cárdenas',                 src: imgQuinceanero },
  { type: 'Festival',    label: 'Amplificación para festival con banda en vivo — Cauca, Colombia',              src: imgFestivalBanda },
  { type: 'Boda',        label: 'Setup de sonido para boda en Cali — Sonido Cárdenas Producciones',             src: imgBodaSetup },
  { type: 'Concierto',   label: 'Pantalla LED y amplificación para concierto — Sonido Cárdenas Popayán',        src: imgConciertoLed },
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
              className="w-[400px] h-[250px] rounded-lg border border-[#2A2A2A] overflow-hidden group cursor-pointer flex-shrink-0 relative"
            >
              <img
                src={event.src}
                alt={event.label}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/80 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F97316]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <p className="text-white text-xl" style={{ fontFamily: 'Bebas Neue' }}>{event.type}</p>
                  <p className="text-[#FBBF24] text-sm" style={{ fontFamily: 'Inter' }}>Ver detalles</p>
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
