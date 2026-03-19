import { Link } from 'react-router';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { SEO } from '../components/SEO';

export function Contact() {
  return (
    <div className="min-h-screen pt-32 pb-16" style={{ backgroundColor: '#F7F3E9' }}>
      <SEO
        title="Contato"
        description="Entre em contato com a Direto do Campo. Estamos aqui para ajudar com pedidos, dúvidas e informações sobre nossos produtos."
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-10 text-xs" style={{ color: '#8a6a55' }}>
          <Link to="/" className="hover:underline" style={{ color: '#2F6F4F' }}>Home</Link>
          <span className="mx-2">/</span>
          <span>Contato</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-xs uppercase tracking-[0.2em] mb-3 font-medium"
            style={{ color: '#6FBF8A' }}
          >
            Fale Conosco
          </p>
          <h1
            className="text-4xl md:text-5xl mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: '#4A2E1F' }}
          >
            Entre em Contato
          </h1>
          <p className="max-w-xl mx-auto leading-relaxed" style={{ color: '#7a5c48' }}>
            Estamos aqui para ajudar! Entre em contato conosco para tirar dúvidas,
            fazer encomendas ou conhecer mais sobre nossos produtos.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          <div
            className="bg-white rounded-2xl p-6 text-center"
            style={{ boxShadow: '0 4px 16px rgba(74,46,31,0.07)' }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
              style={{ backgroundColor: 'rgba(47,111,79,0.1)' }}
            >
              <MapPin size={22} style={{ color: '#2F6F4F' }} />
            </div>
            <h3
              className="font-semibold mb-1"
              style={{ color: '#4A2E1F', fontFamily: "'Playfair Display', serif" }}
            >
              Endereço
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: '#8a6a55' }}>
              Fazenda Ouro Verde<br />Guairaçá - PR
            </p>
          </div>

          <div
            className="bg-white rounded-2xl p-6 text-center"
            style={{ boxShadow: '0 4px 16px rgba(74,46,31,0.07)' }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
              style={{ backgroundColor: 'rgba(47,111,79,0.1)' }}
            >
              <Phone size={22} style={{ color: '#2F6F4F' }} />
            </div>
            <h3
              className="font-semibold mb-1"
              style={{ color: '#4A2E1F', fontFamily: "'Playfair Display', serif" }}
            >
              Telefone
            </h3>
            <a
              href="tel:+5544999763686"
              className="text-sm hover:underline"
              style={{ color: '#2F6F4F' }}
            >
              (44) 99976-3686
            </a>
          </div>

          <div
            className="bg-white rounded-2xl p-6 text-center"
            style={{ boxShadow: '0 4px 16px rgba(74,46,31,0.07)' }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
              style={{ backgroundColor: 'rgba(47,111,79,0.1)' }}
            >
              <Clock size={22} style={{ color: '#2F6F4F' }} />
            </div>
            <h3
              className="font-semibold mb-1"
              style={{ color: '#4A2E1F', fontFamily: "'Playfair Display', serif" }}
            >
              Atendimento
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: '#8a6a55' }}>
              Seg–Sex: 8h às 18h<br />Sábado: 8h às 12h
            </p>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div
          className="rounded-2xl p-8 text-center"
          style={{ backgroundColor: '#C76A3A' }}
        >
          <MessageCircle size={36} className="mx-auto mb-4 text-white opacity-90" />
          <h2
            className="text-2xl mb-3 text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Atendimento via WhatsApp
          </h2>
          <p className="mb-6 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Fale conosco diretamente pelo WhatsApp para fazer pedidos ou tirar dúvidas rapidamente!
          </p>
          <a
            href="https://wa.me/5544999763686"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white px-8 py-3 rounded-[30px] font-semibold transition-colors hover:bg-[#F7F3E9]"
            style={{ color: '#C76A3A' }}
          >
            <MessageCircle size={18} />
            Abrir WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}