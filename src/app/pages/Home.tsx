import { Link } from 'react-router';
import { ProductCard } from '../components/ProductCard';
import { SEO } from '../components/SEO';
import { getFeaturedProducts } from '../data/products';

export function Home() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F7F3E9' }}>
      <SEO
        title="Home"
        description="Queijos e doces artesanais frescos, feitos com amor e ingredientes naturais. Direto do Campo para sua casa."
      />

      {/* Hero Section */}
      <section
        className="relative h-[85vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${new URL('../../imagens/Banner3.jpg', import.meta.url).href})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(30,18,6,0.58)' }} />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p
            className="text-xs uppercase tracking-[0.25em] mb-4 font-medium"
            style={{ color: '#6FBF8A' }}
          >
            Produtos Artesanais da Fazenda
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Direto do Campo<br />para sua casa
          </h1>
          <p
            className="text-base md:text-lg mb-10 max-w-lg mx-auto leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.85)' }}
          >
            Queijos e doces artesanais frescos, feitos com amor e ingredientes naturais
          </p>
          <Link
            to="/produtos"
            className="inline-block bg-[#C76A3A] hover:bg-[#A9542C] text-white px-8 py-4 rounded-[30px] text-base font-semibold transition-colors shadow-lg"
          >
            Ver Produtos
          </Link>
        </div>
      </section>

      {/* Produtos em Destaque */}
      <section className="py-20" style={{ backgroundColor: '#F7F3E9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p
              className="text-xs uppercase tracking-[0.2em] mb-3 font-medium"
              style={{ color: '#6FBF8A' }}
            >
              Nossos Favoritos
            </p>
            <h2
              className="text-3xl md:text-4xl mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: '#4A2E1F' }}
            >
              Produtos em Destaque
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: '#7a5c48' }}>
              Conheça nossos produtos mais populares, feitos com ingredientes selecionados e muito amor.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/produtos"
              className="inline-block bg-[#2F6F4F] hover:bg-[#245a3f] text-white px-8 py-3 rounded-[30px] transition-colors font-semibold"
            >
              Ver Todos os Produtos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}