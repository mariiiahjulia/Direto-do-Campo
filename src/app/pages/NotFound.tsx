import { Link } from 'react-router';
import { Home } from 'lucide-react';
import { SEO } from '../components/SEO';

export function NotFound() {
  return (
    <div className="min-h-screen pt-32 pb-16 flex items-center justify-center">
      <SEO title="Página não encontrada" />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-9xl text-[#4ECDC4] mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">
          Página não encontrada
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Desculpe, não conseguimos encontrar a página que você está procurando.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#FF6B35] text-white px-8 py-4 rounded-lg hover:bg-[#e55a28] transition-colors text-lg"
        >
          <Home size={24} />
          Voltar para Home
        </Link>
      </div>
    </div>
  );
}