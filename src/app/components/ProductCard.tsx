import { Link } from 'react-router';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
      style={{ boxShadow: '0 6px 20px rgba(74,46,31,0.09)' }}
    >
      <Link to={`/produto/${product.id}`} className="block overflow-hidden">
        <div className="aspect-square overflow-hidden" style={{ backgroundColor: '#F7F3E9' }}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/produto/${product.id}`}>
          <h3
            className="text-sm sm:text-base mb-1 hover:opacity-70 transition-opacity line-clamp-2 leading-snug h-10 sm:h-11 overflow-hidden"
            style={{ fontFamily: "'Playfair Display', serif", color: '#4A2E1F' }}
          >
            {product.name}
          </h3>
        </Link>

        <p className="text-xs sm:text-sm mb-3 line-clamp-2" style={{ color: '#8a6a55' }}>
          {product.description}
        </p>

        <Link
          to={`/produto/${product.id}`}
          className="block w-full bg-[#6FBF8A] hover:bg-[#5AA876] text-white text-center text-xs sm:text-sm px-3 py-2 rounded-[30px] transition-colors font-medium"
        >
          Ver Detalhes
        </Link>
      </div>
    </div>
  );
}