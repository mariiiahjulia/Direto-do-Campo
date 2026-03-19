import { useState } from 'react';
import { Link } from 'react-router';
import { Search } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { SEO } from '../components/SEO';
import { products } from '../data/products';

const estimatedTitleLines = (name: string) => Math.ceil(name.length / 30);

const normalize = (str: string) =>
  str.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();

const categories = [
  { value: 'all', label: 'Todos' },
  { value: 'queijos', label: 'Queijos' },
  { value: 'doces', label: 'Doces' },
  { value: 'combos', label: 'Combos' },
];

export function Products() {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'queijos' | 'doces' | 'combos'>('all');

  const filteredAndSortedProducts = products
    .filter((product) => {
      const words = normalize(searchQuery).split(/\s+/).filter(Boolean);
      const matchesSearch =
        words.length === 0 ||
        words.every(
          (word) =>
            normalize(product.name).includes(word) ||
            normalize(product.description).includes(word)
        );
      const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => estimatedTitleLines(a.name) - estimatedTitleLines(b.name));

  return (
    <div className="min-h-screen pt-32 pb-16" style={{ backgroundColor: '#F7F3E9' }}>
      <SEO
        title="Produtos"
        description="Explore nossa linha completa de queijos e doces artesanais. Produtos frescos e naturais, feitos com amor."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <nav className="mb-8 text-xs" style={{ color: '#8a6a55' }}>
          <Link to="/" className="hover:underline" style={{ color: '#2F6F4F' }}>Home</Link>
          <span className="mx-2">/</span>
          <span>Produtos</span>
        </nav>

 
        <div className="mb-10">
          <p
            className="text-xs uppercase tracking-[0.2em] mb-2 font-medium"
            style={{ color: '#6FBF8A' }}
          >
            Feitos com amor na fazenda
          </p>
          <h1
            className="text-4xl md:text-5xl mb-3"
            style={{ fontFamily: "'Playfair Display', serif", color: '#4A2E1F' }}
          >
            Nossos Produtos
          </h1>
          <p className="text-base" style={{ color: '#7a5c48' }}>
            Explore nossa linha completa de queijos e doces artesanais
          </p>
        </div>

   
        <div
          className="bg-white rounded-2xl p-5 mb-8"
          style={{ boxShadow: '0 4px 16px rgba(74,46,31,0.07)' }}
        >
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
     
            <div className="relative flex-1 w-full">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2"
                size={18}
                style={{ color: '#a08060' }}
              />
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-[30px] text-sm outline-none"
                style={{
                  border: '1.5px solid #e8dece',
                  backgroundColor: '#F7F3E9',
                  color: '#4A2E1F',
                }}
              />
            </div>


            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setCategoryFilter(cat.value as typeof categoryFilter)}
                  className="px-4 py-2 rounded-[30px] text-xs font-medium transition-colors"
                  style={{
                    backgroundColor: categoryFilter === cat.value ? '#2F6F4F' : '#F7F3E9',
                    color: categoryFilter === cat.value ? '#ffffff' : '#4A2E1F',
                    border: '1.5px solid',
                    borderColor: categoryFilter === cat.value ? '#2F6F4F' : '#e8dece',
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

  
        <div className="mb-5 text-sm" style={{ color: '#8a6a55' }}>
          {filteredAndSortedProducts.length}{' '}
          {filteredAndSortedProducts.length === 1 ? 'produto encontrado' : 'produtos encontrados'}
        </div>


        {filteredAndSortedProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5">
            {filteredAndSortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-base mb-4" style={{ color: '#8a6a55' }}>Nenhum produto encontrado</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setCategoryFilter('all');
              }}
              className="text-sm font-medium hover:underline"
              style={{ color: '#2F6F4F' }}
            >
              Limpar filtros
            </button>
          </div>
        )}
      </div>
    </div>
  );
}