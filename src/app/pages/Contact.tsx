import { useState } from 'react';
import { Link } from 'react-router';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import { SEO } from '../components/SEO';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simula envio - apenas visual, sem backend real
    const whatsappMessage = `Olá! Meu nome é ${formData.name}.\n\nEmail: ${formData.email}\n\nMensagem: ${formData.message}`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    // Limpa o formulário
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen pt-32 pb-16">
      <SEO 
        title="Contato" 
        description="Entre em contato com a Direto do Campo. Estamos aqui para ajudar com pedidos, dúvidas e informações sobre nossos produtos."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <Link to="/" className="text-[#4ECDC4] hover:underline">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">Contato</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Entre em Contato
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Estamos aqui para ajudar! Entre em contato conosco para tirar dúvidas, 
            fazer encomendas ou conhecer mais sobre nossos produtos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl text-gray-900 mb-6">Informações de Contato</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-[#4ECDC4] p-3 rounded-full flex-shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg mb-1">Endereço</h3>
                  <p className="text-gray-600">
                    Estrada do Campo, 123<br />
                    Zona Rural - Interior, SP<br />
                    CEP: 12345-678
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#4ECDC4] p-3 rounded-full flex-shrink-0">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg mb-1">Telefone</h3>
                  <a href="tel:+5511999999999" className="text-gray-600 hover:text-[#4ECDC4] transition-colors">
                    (11) 99999-9999
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#4ECDC4] p-3 rounded-full flex-shrink-0">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg mb-1">Email</h3>
                  <a href="mailto:contato@diretodocampo.com.br" className="text-gray-600 hover:text-[#4ECDC4] transition-colors">
                    contato@diretodocampo.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#4ECDC4] p-3 rounded-full flex-shrink-0">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg mb-1">Horário de Atendimento</h3>
                  <p className="text-gray-600">
                    Segunda a Sexta: 8h às 18h<br />
                    Sábado: 8h às 12h<br />
                    Domingo: Fechado
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-[#25D366]/10 rounded-xl p-6 border-2 border-[#25D366]/20">
              <div className="flex items-start gap-4 mb-4">
                <MessageCircle className="text-[#25D366]" size={32} />
                <div>
                  <h3 className="text-lg mb-2">Atendimento via WhatsApp</h3>
                  <p className="text-gray-600 mb-4">
                    Fale conosco diretamente pelo WhatsApp para fazer pedidos ou tirar dúvidas rapidamente!
                  </p>
                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg hover:bg-[#20BD5A] transition-colors"
                  >
                    <MessageCircle size={20} />
                    Abrir WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl text-gray-900 mb-6">Envie uma Mensagem</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ECDC4] focus:border-transparent"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ECDC4] focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ECDC4] focus:border-transparent resize-none"
                    placeholder="Digite sua mensagem aqui..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FF6B35] text-white px-6 py-4 rounded-lg hover:bg-[#e55a28] transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Enviar Mensagem via WhatsApp
                </button>

                <p className="text-sm text-gray-500 text-center">
                  Ao clicar em enviar, você será redirecionado para o WhatsApp com sua mensagem preenchida.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="bg-gray-200 rounded-xl overflow-hidden h-96 flex items-center justify-center">
          <div className="text-center text-gray-600">
            <MapPin size={48} className="mx-auto mb-4" />
            <p className="text-lg">Mapa de Localização</p>
            <p className="text-sm">Estrada do Campo, 123 - Interior, SP</p>
          </div>
        </div>
      </div>
    </div>
  );
}