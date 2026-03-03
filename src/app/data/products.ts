export interface Product {
  id: string;
  name: string;
  category: 'queijos' | 'doces';
  price: number;
  description: string;
  detailedDescription: string;
  image: string;
  images?: string[];
  ingredients: string[];
  benefits: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Queijo Gouda Artesanal',
    category: 'queijos',
    price: 45.90,
    description: 'Queijo artesanal maturado por 6 meses, sem conservantes',
    detailedDescription: 'Nosso Queijo Gouda é produzido artesanalmente com leite fresco de vacas criadas em pastagens naturais. Maturado por 6 meses em nossa queijaria, desenvolve um sabor suave e cremoso, perfeito para harmonizações.',
    image: 'https://images.unsplash.com/photo-1767489297193-f9f3b3da74db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuYWwlMjBjaGVlc2UlMjBnb3VkYXxlbnwxfHx8fDE3NzAzMDAyOTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1767489297193-f9f3b3da74db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuYWwlMjBjaGVlc2UlMjBnb3VkYXxlbnwxfHx8fDE3NzAzMDAyOTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1768140210087-4059e0b9efc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY2hlZXNlJTIwcGxhdHRlcnxlbnwxfHx8fDE3NzAyMTU3Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    ingredients: ['Leite integral pasteurizado', 'Coalho natural', 'Sal', 'Fermento lácteo'],
    benefits: ['Sem conservantes', 'Fonte de cálcio', 'Produção sustentável', 'Maturação natural'],
  },
  {
    id: '2',
    name: 'Doce de Leite Cremoso',
    category: 'doces',
    price: 28.50,
    description: 'Doce de leite caseiro feito com leite fresco, textura cremosa',
    detailedDescription: 'Nosso Doce de Leite é preparado artesanalmente com leite fresco da fazenda e açúcar mascavo. Cozido lentamente em tachos de cobre, resulta em uma textura cremosa e sabor inconfundível.',
    image: 'https://images.unsplash.com/photo-1605819511131-4e5aa440139b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lbWFkZSUyMGR1bGNlJTIwZGUlMjBsZWNoZXxlbnwxfHx8fDE3NzAzMDAzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1605819511131-4e5aa440139b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lbWFkZSUyMGR1bGNlJTIwZGUlMjBsZWNoZXxlbnwxfHx8fDE3NzAzMDAzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    ingredients: ['Leite integral', 'Açúcar mascavo', 'Bicarbonato de sódio'],
    benefits: ['100% natural', 'Sem corantes', 'Receita tradicional', 'Embalagem artesanal'],
  },
  {
    id: '3',
    name: 'Doce de Mamão',
    category: 'doces',
    price: 22.90,
    description: 'Doce de mamão em calda, feito com frutas frescas da região',
    detailedDescription: 'Selecionamos os melhores mamões da região para criar este doce tradicional. Cozido em ponto perfeito com açúcar e especiarias, mantém a textura firme e sabor marcante.',
    image: 'https://images.unsplash.com/photo-1698260627837-cec911b8aa8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXBheWElMjBqYW0lMjBwcmVzZXJ2ZXxlbnwxfHx8fDE3NzAzMDAzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1698260627837-cec911b8aa8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXBheWElMjBqYW0lMjBwcmVzZXJ2ZXxlbnwxfHx8fDE3NzAzMDAzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    ingredients: ['Mamão verde', 'Açúcar cristal', 'Cravo', 'Canela'],
    benefits: ['Frutas frescas', 'Sem aditivos', 'Tradicional', 'Rico em fibras'],
  },
  {
    id: '4',
    name: 'Queijo Cheddar Artesanal',
    category: 'queijos',
    price: 52.00,
    description: 'Cheddar maturado com sabor intenso e textura firme',
    detailedDescription: 'Nosso Cheddar artesanal é maturado por 8 meses, desenvolvendo um sabor intenso e marcante. Produzido com leite integral de alta qualidade, é perfeito para sanduíches gourmet e tábuas de queijos.',
    image: 'https://images.unsplash.com/photo-1762553338305-e98211acc0ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuYWwlMjBjaGVkZGFyJTIwY2hlZXNlfGVufDF8fHx8MTc3MDMwMDMwMXww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1762553338305-e98211acc0ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuYWwlMjBjaGVkZGFyJTIwY2hlZXNlfGVufDF8fHx8MTc3MDMwMDMwMXww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    ingredients: ['Leite integral pasteurizado', 'Coalho', 'Sal', 'Corante natural de urucum'],
    benefits: ['Maturação prolongada', 'Sabor intenso', 'Textura firme', 'Ideal para harmonizações'],
  },
  {
    id: '5',
    name: 'Queijo Parmesão',
    category: 'queijos',
    price: 65.00,
    description: 'Parmesão curado por 12 meses, sabor marcante e aroma único',
    detailedDescription: 'O Parmesão Direto do Campo é curado por 12 meses, desenvolvendo cristais de sabor e textura granulada característica. Ideal para ralar sobre massas ou consumir em lascas.',
    image: 'https://images.unsplash.com/photo-1582883044880-974679bc1f0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJtZXNhbiUyMGNoZWVzZSUyMHdlZGdlfGVufDF8fHx8MTc3MDMwMDMwMnww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1582883044880-974679bc1f0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJtZXNhbiUyMGNoZWVzZSUyMHdlZGdlfGVufDF8fHx8MTc3MDMwMDMwMnww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    ingredients: ['Leite integral', 'Coalho natural', 'Sal marinho'],
    benefits: ['Curado naturalmente', 'Rico em proteínas', 'Baixo teor de lactose', 'Sabor único'],
  },
  {
    id: '6',
    name: 'Doce de Goiaba',
    category: 'doces',
    price: 24.90,
    description: 'Goiabada cascão tradicional, feita com goiabas selecionadas',
    detailedDescription: 'Nossa goiabada é preparada com goiabas vermelhas maduras, colhidas no ponto ideal. Cozida lentamente, resulta em um doce firme e aromático, perfeito para acompanhar queijos.',
    image: 'https://images.unsplash.com/photo-1693399991519-bef70bed19a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWF2YSUyMGphbSUyMHByZXNlcnZlfGVufDF8fHx8MTc3MDMwMDMwMXww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1693399991519-bef70bed19a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWF2YSUyMGphbSUyMHByZXNlcnZlfGVufDF8fHx8MTc3MDMwMDMwMXww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    ingredients: ['Goiaba vermelha', 'Açúcar cristal'],
    benefits: ['Receita tradicional', 'Sem aditivos', 'Rico em vitamina C', 'Artesanal'],
  },
  {
    id: '7',
    name: 'Mozzarella Fresca',
    category: 'queijos',
    price: 38.00,
    description: 'Mozzarella artesanal fresca, textura macia e sabor suave',
    detailedDescription: 'Nossa Mozzarella é produzida diariamente com leite fresco, garantindo máxima frescura e sabor. Ideal para caprese, pizzas e saladas.',
    image: 'https://images.unsplash.com/photo-1650142700227-ebd74e00d84e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3p6YXJlbGxhJTIwY2hlZXNlJTIwZnJlc2h8ZW58MXx8fHwxNzcwMjUyMjcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1650142700227-ebd74e00d84e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3p6YXJlbGxhJTIwY2hlZXNlJTIwZnJlc2h8ZW58MXx8fHwxNzcwMjUyMjcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    ingredients: ['Leite fresco', 'Coalho', 'Sal', 'Ácido cítrico'],
    benefits: ['Produzida diariamente', 'Máximo frescor', 'Textura cremosa', 'Versátil'],
  },
  {
    id: '8',
    name: 'Geleia de Morango',
    category: 'doces',
    price: 26.50,
    description: 'Geleia artesanal de morango, textura suave e sabor intenso',
    detailedDescription: 'Preparada com morangos frescos colhidos na estação, nossa geleia tem textura suave e cor vibrante. Perfeita para pães, bolos e sobremesas.',
    image: 'https://images.unsplash.com/photo-1500912239908-4ee48acb3a7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhd2JlcnJ5JTIwamFtJTIwaG9tZW1hZGV8ZW58MXx8fHwxNzcwMzAwMzAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1500912239908-4ee48acb3a7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhd2JlcnJ5JTIwamFtJTIwaG9tZW1hZGV8ZW58MXx8fHwxNzcwMzAwMzAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    ingredients: ['Morango fresco', 'Açúcar cristal', 'Pectina natural', 'Suco de limão'],
    benefits: ['Frutas frescas', 'Cor natural', 'Textura ideal', 'Sabor autêntico'],
  },
  {
    id: '9',
    name: 'Mix de Geleias',
    category: 'doces',
    price: 32.00,
    description: 'Kit com 3 geleias artesanais: morango, framboesa e amora',
    detailedDescription: 'Nosso kit especial traz três sabores de geleias artesanais em porções individuais. Ideal para presentear ou experimentar diferentes sabores.',
    image: 'https://images.unsplash.com/photo-1637906324647-f723b8543aea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcnVpdCUyMHByZXNlcnZlcyUyMGphcnN8ZW58MXx8fHwxNzcwMzAwMzAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1637906324647-f723b8543aea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcnVpdCUyMHByZXNlcnZlcyUyMGphcnN8ZW58MXx8fHwxNzcwMzAwMzAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    ingredients: ['Frutas vermelhas frescas', 'Açúcar', 'Pectina'],
    benefits: ['Variedade de sabores', 'Embalagem presente', 'Produção artesanal', 'Ideal para presentear'],
  },
];

export const getFeaturedProducts = () => products.slice(0, 6);

export const getProductById = (id: string) => products.find(p => p.id === id);

export const getProductsByCategory = (category: 'queijos' | 'doces' | 'all') => {
  if (category === 'all') return products;
  return products.filter(p => p.category === category);
};

export const getRelatedProducts = (productId: string, limit = 3) => {
  const product = getProductById(productId);
  if (!product) return [];
  
  return products
    .filter(p => p.id !== productId && p.category === product.category)
    .slice(0, limit);
};
