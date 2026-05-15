import { MapPin } from 'lucide-react';

const locations = [
  {
    city: 'Popayán',
    region: 'Cauca',
    description: 'Disponibles para toda la región'
  },
  {
    city: 'Cali',
    region: 'Valle del Cauca',
    description: 'Disponibles para toda la región'
  }
];

export default function Locations() {
  return (
    <section className="py-20 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {locations.map((location, index) => (
            <div key={index} className="bg-[#1A1A1A] p-8 rounded-lg border border-[#2A2A2A] text-center">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#F97316] to-[#FBBF24] flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-[#0D0D0D]" />
                </div>
              </div>
              <h3 className="text-4xl mb-2 bg-gradient-to-r from-[#F97316] to-[#FBBF24] bg-clip-text text-transparent" style={{ fontFamily: 'Bebas Neue' }}>
                {location.city}
              </h3>
              <p className="text-xl text-[#9CA3AF] mb-4" style={{ fontFamily: 'Inter' }}>
                {location.region}
              </p>
              <p className="text-[#F8FAFC]" style={{ fontFamily: 'Inter' }}>
                {location.description}
              </p>
            </div>
          ))}
        </div>

        {/* Map Placeholder */}
        <div className="bg-[#1A1A1A] rounded-lg border border-[#2A2A2A] h-[220px] sm:h-[320px] md:h-[400px] flex items-center justify-center">
          <div className="text-center text-[#2A2A2A]">
            <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <p className="text-sm">MAPA_EMBED_AQUÍ</p>
            <p className="text-xs mt-2">Iframe para Google Maps</p>
          </div>
        </div>
      </div>
    </section>
  );
}
