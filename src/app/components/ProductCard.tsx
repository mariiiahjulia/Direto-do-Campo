import { Link } from 'react-router';
import { MessageCircle } from 'lucide-react';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const whatsappMessage = `Oi, gostaria de encomendar: ${product.name}`;
  const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group animate-in fade-in slide-in-from-bottom-4" style={{ animationDuration: '500ms' }}>
      <Link to={`/produto/${product.id}`} className="block">
        <div className="aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      
      <div className="p-5">
        <Link to={`/produto/${product.id}`}>
          <h3 className="text-xl mb-2 text-gray-900 hover:text-[#4ECDC4] transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl text-[#FF6B35]">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </span>
          <span className="text-xs text-gray-500 uppercase bg-gray-100 px-2 py-1 rounded">
            {product.category}
          </span>
        </div>
        
        <div className="flex gap-2">
          <Link
            to={`/produto/${product.id}`}
            className="flex-1 bg-[#4ECDC4] text-white px-4 py-2 rounded-lg hover:bg-[#45b8b0] transition-colors text-center"
          >
            Ver Detalhes
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white px-4 py-2 rounded-lg hover:bg-[#20BD5A] transition-colors flex items-center justify-center"
            title="Encomendar via WhatsApp"
          >
            <MessageCircle size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}