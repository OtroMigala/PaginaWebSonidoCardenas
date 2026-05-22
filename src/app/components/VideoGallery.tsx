import { useState } from 'react';
import { X } from 'lucide-react';
import videoConcierto from '../../media/videos/video-concierto-grande.mp4';
import videoBandaRock from '../../media/videos/video-banda-rock.mp4';
import videoFestival from '../../media/videos/video-festival-ron-caldas.mp4';
import videoReciente from '../../media/videos/video-evento-reciente.mp4';
import posterConcierto from '../../media/photos/video-poster-concierto-grande.jpeg';
import posterBandaRock from '../../media/photos/video-poster-banda-rock.jpeg';
import posterFestival from '../../media/photos/video-poster-festival-caldas.jpeg';
import posterMasivo from '../../media/photos/video-poster-evento-masivo.jpeg';

const videos = [
  { title: 'Gran Concierto en Vivo', src: videoConcierto, poster: posterConcierto },
  { title: 'Banda Sonido Cárdenas', src: videoBandaRock, poster: posterBandaRock },
  { title: 'Festival Ron Viejo de Caldas', src: videoFestival, poster: posterFestival },
  { title: 'Evento Masivo — En Carpa', src: videoReciente, poster: posterMasivo },
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
              onClick={() => setSelectedVideo(video.src)}
              className="relative rounded-lg overflow-hidden aspect-video cursor-pointer group border border-[#2A2A2A] hover:border-[#F97316] transition-all"
            >
              <img
                src={video.poster}
                alt={video.title}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#F97316] to-[#FBBF24] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <svg className="w-10 h-10 text-[#0D0D0D] ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-[#F8FAFC] text-lg drop-shadow-md" style={{ fontFamily: 'Bebas Neue' }}>{video.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-[#0D0D0D] rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-2 right-2 sm:-top-12 sm:right-0 z-10 w-8 h-8 sm:w-auto sm:h-auto bg-black/60 sm:bg-transparent rounded-full flex items-center justify-center text-white hover:text-[#F97316] transition-colors"
            >
              <X size={32} />
            </button>
            <video
              key={selectedVideo}
              src={selectedVideo}
              controls
              autoPlay
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
