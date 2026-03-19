import { Instagram, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-20" style={{ backgroundColor: '#4A2E1F', color: '#F7F3E9' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Direto do Campo
            </h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(247,243,233,0.75)' }}>
              Queijos e doces artesanais frescos, feitos com amor e ingredientes naturais.
            </p>
            <p className="text-sm italic" style={{ color: '#C76A3A' }}>
              "Direto do Campo para sua casa"
            </p>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg mb-4 font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
              Contato
            </h3>
            <div className="space-y-3 text-sm" style={{ color: 'rgba(247,243,233,0.75)' }}>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" style={{ color: '#6FBF8A' }} />
                <span>Fazenda Ouro Verde, Guairaçá - PR</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} style={{ color: '#6FBF8A' }} />
                <a href="tel:+5544999763686" className="hover:text-white transition-colors">
                  (44) 99976-3686
                </a>
              </div>
            </div>
          </div>

          {/* Social + Horário */}
          <div>
            <h3 className="text-lg mb-4 font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
              Redes Sociais
            </h3>
            <div className="flex gap-3 mb-6">
              <a
                href="https://instagram.com/direto_do_campo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full transition-colors hover:opacity-80"
                style={{ backgroundColor: 'rgba(247,243,233,0.1)' }}
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>

          </div>
        </div>

        <div
          className="mt-10 pt-8 text-center text-xs"
          style={{ borderTop: '1px solid rgba(247,243,233,0.1)', color: 'rgba(247,243,233,0.4)' }}
        >
          <p>&copy; {new Date().getFullYear()} Direto do Campo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
