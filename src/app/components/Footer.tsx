import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#4ECDC4] text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sobre */}
          <div>
            <h3 className="text-xl mb-4">Direto do Campo</h3>
            <p className="text-white/90 mb-4">
              Queijos e doces artesanais frescos, feitos com amor e ingredientes naturais.
            </p>
            <p className="text-lg italic">
              Direto do Campo para sua casa
            </p>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl mb-4">Contato</h3>
            <div className="space-y-3 text-white/90">
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Estrada do Campo, 123 - Interior, SP</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <a href="tel:+5511999999999" className="hover:text-white transition-colors">
                  (11) 99999-9999
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:contato@diretodocampo.com.br" className="hover:text-white transition-colors">
                  contato@diretodocampo.com.br
                </a>
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-xl mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-sm text-white/80">
                Horário de atendimento:<br />
                Segunda a Sexta: 8h às 18h<br />
                Sábado: 8h às 12h
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/80">
          <p>&copy; {new Date().getFullYear()} Direto do Campo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
