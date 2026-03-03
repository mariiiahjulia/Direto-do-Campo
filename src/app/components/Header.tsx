import { Link, useLocation } from 'react-router';
import { Menu, X, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/produtos', label: 'Produtos' },
    { path: '/sobre', label: 'Sobre Nós' },
    { path: '/contato', label: 'Contato' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl md:text-3xl text-[#FF6B35]">
              Direto do Campo
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors ${
                  isActive(link.path)
                    ? 'text-[#4ECDC4]'
                    : 'text-gray-700 hover:text-[#4ECDC4]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg hover:bg-[#20BD5A] transition-colors"
            >
              <MessageCircle size={20} />
              <span className="hidden lg:inline">WhatsApp</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-[#4ECDC4] transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-2 rounded transition-colors ${
                    isActive(link.path)
                      ? 'text-[#4ECDC4] bg-[#4ECDC4]/10'
                      : 'text-gray-700 hover:text-[#4ECDC4] hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-lg hover:bg-[#20BD5A] transition-colors mx-4"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
