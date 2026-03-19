import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/produtos', label: 'Produtos' },
    { path: '/sobre', label: 'Sobre Nós' },
    { path: '/contato', label: 'Contato' },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white"
      style={{ borderBottom: '1px solid #e8dece', boxShadow: '0 2px 12px rgba(74,46,31,0.06)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <h1
              className="text-xl md:text-2xl"
              style={{ fontFamily: "'Playfair Display', serif", color: '#4A2E1F' }}
            >
              Direto do Campo
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm font-medium transition-colors relative pb-1"
                style={{
                  color: isActive(link.path) ? '#2F6F4F' : '#4A2E1F',
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                {link.label}
                {isActive(link.path) && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                    style={{ backgroundColor: '#C76A3A' }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 transition-colors"
            style={{ color: '#4A2E1F' }}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4" style={{ borderTop: '1px solid #e8dece' }}>
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm font-medium transition-colors"
                  style={{
                    color: isActive(link.path) ? '#2F6F4F' : '#4A2E1F',
                    backgroundColor: isActive(link.path) ? 'rgba(47,111,79,0.08)' : 'transparent',
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
