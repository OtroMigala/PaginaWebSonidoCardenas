import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Gallery from './components/Gallery';
import VideoGallery from './components/VideoGallery';
import ContactQuote from './components/ContactQuote';
import Locations from './components/Locations';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F8FAFC] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Gallery />
      <VideoGallery />
      <ContactQuote />
      <Locations />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}