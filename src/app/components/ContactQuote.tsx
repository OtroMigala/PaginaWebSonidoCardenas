import { useState } from 'react';
import { Smartphone, User, MessageCircle, Loader2 } from 'lucide-react';

const socialLinks = {
  facebook: 'FACEBOOK_URL',
  instagram: 'INSTAGRAM_URL',
  tiktok: 'TIKTOK_URL'
};

const EVENT_TYPE_LABELS: Record<string, string> = {
  boda: 'Boda',
  quinceanero: 'Quinceañero',
  corporativo: 'Evento corporativo',
  concierto: 'Concierto',
  fiesta: 'Fiesta privada',
  festival: 'Festival',
  otro: 'Otro',
};

const CITY_LABELS: Record<string, string> = {
  popayan: 'Popayán',
  cali: 'Cali',
  otra: 'Otra',
};

export default function ContactQuote() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    city: '',
    description: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = async () => {
    const newErrors: string[] = [];
    if (!formData.name) newErrors.push('name');
    if (!formData.email) newErrors.push('email');
    if (!formData.phone) newErrors.push('phone');
    if (!formData.eventType) newErrors.push('eventType');
    if (!formData.description) newErrors.push('description');

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors([]);
    setStatus('loading');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: `Cotización de evento — ${EVENT_TYPE_LABELS[formData.eventType] ?? formData.eventType}`,
          from_name: formData.name,
          Nombre: formData.name,
          Empresa: formData.company || '—',
          Email: formData.email,
          Teléfono: formData.phone,
          'Tipo de evento': EVENT_TYPE_LABELS[formData.eventType] || formData.eventType,
          'Fecha aproximada': formData.eventDate || '—',
          Ciudad: CITY_LABELS[formData.city] || formData.city || '—',
          Descripción: formData.description,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => prev.filter(e => e !== field));
  };

  return (
    <section id="contact" className="py-20 bg-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-[#F97316] to-[#FBBF24] bg-clip-text text-transparent uppercase" style={{ fontFamily: 'Bebas Neue' }}>
            Hagamos tu evento realidad
          </h2>
          <p className="text-xl text-[#9CA3AF]" style={{ fontFamily: 'Inter' }}>
            Contáctanos por el canal que prefieras
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: WhatsApp Contact */}
          <div className="bg-[#1A1A1A] p-8 rounded-lg border-t-4 border-[#25D366]">
            <h3 className="text-2xl text-[#F8FAFC] mb-4" style={{ fontFamily: 'Bebas Neue' }}>
              Consulta Rápida
            </h3>
            <p className="text-[#9CA3AF] mb-6" style={{ fontFamily: 'Inter' }}>
              ¿Tienes una pregunta o quieres una cotización express? Escríbele directamente a Fabián.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-[#F8FAFC]">
                <div className="w-10 h-10 rounded-lg bg-[#2A2A2A] flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-5 h-5 text-[#F97316]" />
                </div>
                <div>
                  <p className="text-sm text-[#9CA3AF]" style={{ fontFamily: 'Inter' }}>WhatsApp</p>
                  <p className="text-lg" style={{ fontFamily: 'Inter' }}>3145483972</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-[#F8FAFC]">
                <div className="w-10 h-10 rounded-lg bg-[#2A2A2A] flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-[#F97316]" />
                </div>
                <div>
                  <p className="text-sm text-[#9CA3AF]" style={{ fontFamily: 'Inter' }}>Contacto</p>
                  <p className="text-lg" style={{ fontFamily: 'Inter' }}>Fabián Cárdenas</p>
                </div>
              </div>
            </div>

            <a
              href="https://api.whatsapp.com/send?phone=573145483972&text=Hola%20Fabián,%20me%20interesa%20cotizar%20un%20evento"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white text-center py-4 rounded-lg font-semibold hover:bg-[#20BD5A] transition-all hover:scale-105 mb-8"
              style={{ fontFamily: 'Inter' }}
            >
              <MessageCircle className="w-5 h-5" /> Abrir WhatsApp
            </a>

            {/* Social Icons */}
            <div className="border-t border-[#2A2A2A] pt-6">
              <p className="text-[#9CA3AF] mb-4 text-sm" style={{ fontFamily: 'Inter' }}>Síguenos en redes sociales:</p>
              <div className="flex gap-4">
                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#2A2A2A] rounded-full flex items-center justify-center hover:bg-[#F97316] transition-colors">
                  <svg className="w-6 h-6 text-[#F8FAFC]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#2A2A2A] rounded-full flex items-center justify-center hover:bg-[#F97316] transition-colors">
                  <svg className="w-6 h-6 text-[#F8FAFC]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#2A2A2A] rounded-full flex items-center justify-center hover:bg-[#F97316] transition-colors">
                  <svg className="w-6 h-6 text-[#F8FAFC]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Quote Form */}
          <div className="bg-[#1A1A1A] p-8 rounded-lg border-t-4 border-[#F97316]">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gradient-to-br from-[#F97316] to-[#FBBF24] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-[#0D0D0D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl text-[#F8FAFC] mb-3" style={{ fontFamily: 'Bebas Neue' }}>
                  ¡Solicitud enviada!
                </h3>
                <p className="text-[#9CA3AF] text-lg" style={{ fontFamily: 'Inter' }}>
                  Fabián revisará tu cotización y te contactará pronto.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl text-[#F8FAFC] mb-2" style={{ fontFamily: 'Bebas Neue' }}>
                  Cotización Empresarial
                </h3>
                <p className="text-[#9CA3AF] mb-6 text-sm" style={{ fontFamily: 'Inter' }}>
                  Para eventos corporativos y producciones grandes
                </p>

                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Nombre completo *"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className={`w-full bg-[#0D0D0D] text-[#F8FAFC] px-4 py-3 rounded-lg border ${errors.includes('name') ? 'border-[#F97316]' : 'border-[#2A2A2A]'} focus:border-[#F97316] outline-none`}
                    style={{ fontFamily: 'Inter' }}
                  />
                  <input
                    type="text"
                    placeholder="Empresa / Organización"
                    value={formData.company}
                    onChange={(e) => handleChange('company', e.target.value)}
                    className="w-full bg-[#0D0D0D] text-[#F8FAFC] px-4 py-3 rounded-lg border border-[#2A2A2A] focus:border-[#F97316] outline-none"
                    style={{ fontFamily: 'Inter' }}
                  />
                  <input
                    type="email"
                    placeholder="Correo electrónico *"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={`w-full bg-[#0D0D0D] text-[#F8FAFC] px-4 py-3 rounded-lg border ${errors.includes('email') ? 'border-[#F97316]' : 'border-[#2A2A2A]'} focus:border-[#F97316] outline-none`}
                    style={{ fontFamily: 'Inter' }}
                  />
                  <input
                    type="tel"
                    placeholder="Teléfono *"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className={`w-full bg-[#0D0D0D] text-[#F8FAFC] px-4 py-3 rounded-lg border ${errors.includes('phone') ? 'border-[#F97316]' : 'border-[#2A2A2A]'} focus:border-[#F97316] outline-none`}
                    style={{ fontFamily: 'Inter' }}
                  />
                  <select
                    value={formData.eventType}
                    onChange={(e) => handleChange('eventType', e.target.value)}
                    className={`w-full bg-[#0D0D0D] text-[#F8FAFC] px-4 py-3 rounded-lg border ${errors.includes('eventType') ? 'border-[#F97316]' : 'border-[#2A2A2A]'} focus:border-[#F97316] outline-none`}
                    style={{ fontFamily: 'Inter' }}
                  >
                    <option value="">Tipo de evento *</option>
                    <option value="boda">Boda</option>
                    <option value="quinceanero">Quinceañero</option>
                    <option value="corporativo">Evento corporativo</option>
                    <option value="concierto">Concierto</option>
                    <option value="fiesta">Fiesta privada</option>
                    <option value="festival">Festival</option>
                    <option value="otro">Otro</option>
                  </select>
                  <input
                    type="month"
                    placeholder="Fecha aproximada del evento"
                    value={formData.eventDate}
                    onChange={(e) => handleChange('eventDate', e.target.value)}
                    className="w-full bg-[#0D0D0D] text-[#F8FAFC] px-4 py-3 rounded-lg border border-[#2A2A2A] focus:border-[#F97316] outline-none"
                    style={{ fontFamily: 'Inter' }}
                  />
                  <select
                    value={formData.city}
                    onChange={(e) => handleChange('city', e.target.value)}
                    className="w-full bg-[#0D0D0D] text-[#F8FAFC] px-4 py-3 rounded-lg border border-[#2A2A2A] focus:border-[#F97316] outline-none"
                    style={{ fontFamily: 'Inter' }}
                  >
                    <option value="">Ciudad</option>
                    <option value="popayan">Popayán</option>
                    <option value="cali">Cali</option>
                    <option value="otra">Otra</option>
                  </select>
                  <textarea
                    placeholder="Descripción del evento y servicios requeridos *"
                    rows={4}
                    value={formData.description}
                    onChange={(e) => handleChange('description', e.target.value)}
                    className={`w-full bg-[#0D0D0D] text-[#F8FAFC] px-4 py-3 rounded-lg border ${errors.includes('description') ? 'border-[#F97316]' : 'border-[#2A2A2A]'} focus:border-[#F97316] outline-none resize-none`}
                    style={{ fontFamily: 'Inter' }}
                  />

                  {status === 'error' && (
                    <p className="text-[#F97316] text-sm text-center" style={{ fontFamily: 'Inter' }}>
                      Hubo un error al enviar. Intenta de nuevo o contáctanos por WhatsApp.
                    </p>
                  )}

                  <button
                    onClick={handleSubmit}
                    disabled={status === 'loading'}
                    className="w-full bg-gradient-to-r from-[#F97316] to-[#FBBF24] text-[#0D0D0D] py-4 rounded-lg font-semibold hover:scale-105 transition-transform disabled:opacity-70 disabled:scale-100 flex items-center justify-center gap-2"
                    style={{ fontFamily: 'Inter' }}
                  >
                    {status === 'loading' ? (
                      <><Loader2 className="w-5 h-5 animate-spin" /> Enviando...</>
                    ) : (
                      'Enviar Solicitud de Cotización'
                    )}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
