import { useState } from 'react';
import { X } from 'lucide-react';

const videos = [
  {
    title: 'Evento en vivo - Concierto',
    url: 'VIDEO_URL_AQUÍ_1'
  },
  {
    title: 'Evento corporativo - Montaje',
    url: 'VIDEO_URL_AQUÍ_2'
  }
];

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className="py-20 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-[#F97316] to-[#FBBF24] bg-clip-text text-transparent uppercase" style={{ fontFamily: 'Bebas Neue' }}>
            Míranos en acción
          </h2>
          <p className="text-xl text-[#9CA3AF]" style={{ fontFamily: 'Inter' }}>
            Así se vive un evento con Sonido Cárdenas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              onClick={() => setSelectedVideo(video.url)}
              className="relative bg-[#1A1A1A] rounded-lg overflow-hidden aspect-video cursor-pointer group border border-[#2A2A2A] hover:border-[#F97316] transition-all"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#F97316] to-[#FBBF24] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-[#0D0D0D] ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-[#F8FAFC] text-lg mb-2" style={{ fontFamily: 'Bebas Neue' }}>{video.title}</p>
                <p className="text-[#9CA3AF] text-sm" style={{ fontFamily: 'Inter' }}>{video.url}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedVideo(null)}>
          <div className="relative w-full max-w-4xl aspect-video bg-[#1A1A1A] rounded-lg" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-[#F97316] transition-colors"
            >
              <X size={32} />
            </button>
            <div className="w-full h-full flex items-center justify-center text-[#9CA3AF]">
              <div className="text-center">
                <p className="text-sm mb-2">Iframe para YouTube embed:</p>
                <p className="text-xs">{selectedVideo}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
