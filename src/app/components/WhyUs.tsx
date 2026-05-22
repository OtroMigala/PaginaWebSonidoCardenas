import { Star, MapPin, SlidersHorizontal, User } from 'lucide-react';
import equiposImg from '../../media/photos/whyus-consola.jpeg';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Star,
    title: 'Experiencia comprobada',
    description: '+10 años en el sector de eventos y producciones'
  },
  {
    icon: MapPin,
    title: 'Cobertura regional',
    description: 'Popayán, Cali y todos los alrededores'
  },
  {
    icon: SlidersHorizontal,
    title: 'Equipos profesionales',
    description: 'Tecnología de última generación en sonido y luces'
  },
  {
    icon: User,
    title: 'Atención personalizada',
    description: 'Fabián Cárdenas te asesora directamente'
  }
];

export default function WhyUs() {
  return (
    <section className="py-20 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="rounded-lg overflow-hidden h-[280px] sm:h-[400px] lg:h-[500px]">
            <img
              src={equiposImg}
              alt="Consola de audio profesional Sonido Cárdenas"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-[#F97316] to-[#FBBF24] bg-clip-text text-transparent uppercase" style={{ fontFamily: 'Bebas Neue' }}>
              Por qué elegirnos
            </h2>
            <p className="text-lg text-[#9CA3AF] mb-10" style={{ fontFamily: 'Inter' }}>
              No somos solo un proveedor de servicios, somos tu aliado para crear experiencias memorables.
            </p>

            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#F97316] to-[#FBBF24] flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-[#0D0D0D]" />
                  </div>
                  <div>
                    <h3 className="text-xl text-[#F8FAFC] mb-1" style={{ fontFamily: 'Bebas Neue' }}>
                      {feature.title}
                    </h3>
                    <p className="text-[#9CA3AF]" style={{ fontFamily: 'Inter' }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="bg-[#1A1A1A] border-l-4 border-[#FBBF24] p-6 rounded-r-lg">
              <p className="italic text-[#FBBF24] text-lg mb-2" style={{ fontFamily: 'Inter' }}>
                "Trabajar con Sonido Cárdenas fue la mejor decisión para nuestro evento. Profesionalismo y calidad garantizada."
              </p>
              <p className="text-[#9CA3AF] text-sm" style={{ fontFamily: 'Inter' }}>
                — Cliente satisfecho, Popayán
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
