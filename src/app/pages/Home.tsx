import { Link } from 'react-router';
import { Leaf, Heart, Shield, Truck } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { SEO } from '../components/SEO';
import { getFeaturedProducts } from '../data/products';

export function Home() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen">
      <SEO 
        title="Home" 
        description="Queijos e doces artesanais frescos, feitos com amor e ingredientes naturais. Direto do Campo para sua casa."
      />
      {/* Hero Section */}
      <section 
        className="relative h-[70vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1752337160859-f9e188b5850d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VudHJ5c2lkZSUyMGdyZWVuJTIwcGFzdHVyZXxlbnwxfHx8fDE3NzAzMDAzMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#4ECDC4] mb-6 drop-shadow-lg">
            Direto do Campo para sua casa
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
            Queijos e doces artesanais frescos, feitos com amor e ingredientes naturais
          </p>
          <Link
            to="/produtos"
            className="inline-block bg-[#FF6B35] text-white px-8 py-4 rounded-lg text-lg hover:bg-[#e55a28] transition-colors shadow-lg"
          >
            Ver Produtos
          </Link>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#4ECDC4] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="text-white" size={32} />
              </div>
              <h3 className="text-lg mb-2">100% Natural</h3>
              <p className="text-gray-600 text-sm">Ingredientes frescos e naturais</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#4ECDC4] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-lg mb-2">Feito com Amor</h3>
              <p className="text-gray-600 text-sm">Produção artesanal e cuidadosa</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#4ECDC4] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-lg mb-2">Qualidade Garantida</h3>
              <p className="text-gray-600 text-sm">Rigoroso controle de qualidade</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#4ECDC4] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="text-white" size={32} />
              </div>
              <h3 className="text-lg mb-2">Entrega Rápida</h3>
              <p className="text-gray-600 text-sm">Produtos frescos na sua porta</p>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos em Destaque */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              Produtos em Destaque
            </h2>
            <p className="text-gray-600 text-lg">
              Conheça nossos produtos mais populares
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/produtos"
              className="inline-block bg-[#4ECDC4] text-white px-8 py-3 rounded-lg hover:bg-[#45b8b0] transition-colors"
            >
              Ver Todos os Produtos
            </Link>
          </div>
        </div>
      </section>

      {/* Sobre Nós Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">
                Nossa História
              </h2>
              <p className="text-gray-700 mb-4">
                A Direto do Campo nasceu do amor pela tradição e pela qualidade. Nossa família produz 
                queijos e doces artesanais há mais de três gerações, mantendo receitas tradicionais e 
                utilizando apenas ingredientes frescos e naturais.
              </p>
              <p className="text-gray-700 mb-6">
                Cada produto é feito com dedicação e carinho, desde a seleção das matérias-primas 
                até a embalagem final. Nosso compromisso é levar para sua mesa o melhor do campo, 
                com sabor autêntico e qualidade incomparável.
              </p>
              <Link
                to="/sobre"
                className="inline-block bg-[#FF6B35] text-white px-6 py-3 rounded-lg hover:bg-[#e55a28] transition-colors"
              >
                Conheça Nossa História
              </Link>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1688302450535-1978d99b1539?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VudHJ5c2lkZSUyMGZhcm0lMjBCcmF6aWx8ZW58MXx8fHwxNzcwMzAwMzAyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Nossa fazenda"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}