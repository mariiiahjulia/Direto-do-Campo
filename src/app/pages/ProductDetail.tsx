import { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router';
import { MessageCircle, Check, ArrowLeft } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { SEO } from '../components/SEO';
import { getProductById, getRelatedProducts } from '../data/products';

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : null;
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return <Navigate to="/produtos" replace />;
  }

  const relatedProducts = getRelatedProducts(product.id)
    .sort((a, b) => Math.ceil(a.name.length / 30) - Math.ceil(b.name.length / 30));
  const images = product.images || [product.image];
  const whatsappMessage = `Oi, gostaria de encomendar: ${product.name}`;
  const whatsappUrl = `https://wa.me/5544999763686?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen pt-32 pb-16" style={{ backgroundColor: '#F7F3E9' }}>
      <SEO
        title={product.name}
        description={product.description}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-xs" style={{ color: '#8a6a55' }}>
          <Link to="/" className="hover:underline" style={{ color: '#2F6F4F' }}>Home</Link>
          <span className="mx-2">/</span>
          <Link to="/produtos" className="hover:underline" style={{ color: '#2F6F4F' }}>Produtos</Link>
          <span className="mx-2">/</span>
          <span>{product.name}</span>
        </nav>

        {/* Back Button */}
        <Link
          to="/produtos"
          className="inline-flex items-center gap-2 mb-8 font-medium text-sm transition-colors hover:underline"
          style={{ color: '#2F6F4F' }}
        >
          <ArrowLeft size={18} />
          Voltar para Produtos
        </Link>

        {/* Product Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Images */}
          <div className="lg:max-w-xs mx-auto w-4/5 sm:w-3/5 lg:w-full">
            <div className="aspect-square bg-[#EDE6D6] rounded-2xl overflow-hidden mb-4">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square bg-[#EDE6D6] rounded-xl overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-[#2F6F4F]' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <div className="mb-4">
              <span
                className="inline-block text-xs uppercase px-3 py-1 rounded-[30px] font-medium"
                style={{ backgroundColor: 'rgba(47,111,79,0.1)', color: '#2F6F4F' }}
              >
                {product.category}
              </span>
            </div>

            <h1
              className="text-3xl md:text-4xl mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: '#4A2E1F' }}
            >
              {product.name}
            </h1>

            <p className="text-base mb-6 leading-relaxed" style={{ color: '#6b4f3a' }}>
              {product.detailedDescription}
            </p>

            <div
              className="rounded-xl p-5 mb-6 text-sm"
              style={{ backgroundColor: '#EDE6D6', color: '#8a6a55' }}
            >
              Produto artesanal | Consulte o valor no WhatsApp.
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20BD5A] text-white px-8 py-4 rounded-[30px] transition-colors text-base font-semibold mb-8"
            >
              <MessageCircle size={22} />
              Encomendar via WhatsApp
            </a>

            {/* Benefits */}
            <div>
              <h2
                className="text-xl mb-3"
                style={{ fontFamily: "'Playfair Display', serif", color: '#4A2E1F' }}
              >
                Por que escolher?
              </h2>
              <ul className="space-y-2">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2" style={{ color: '#6b4f3a' }}>
                    <Check className="mt-0.5 flex-shrink-0" size={18} style={{ color: '#2F6F4F' }} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2
              className="text-2xl md:text-3xl mb-8"
              style={{ fontFamily: "'Playfair Display', serif", color: '#4A2E1F' }}
            >
              Produtos Relacionados
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}