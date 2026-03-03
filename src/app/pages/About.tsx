import { Link } from 'react-router';
import { Heart, Leaf, Award, Users } from 'lucide-react';
import { SEO } from '../components/SEO';

export function About() {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <SEO 
        title="Sobre Nós" 
        description="Conheça a história da Direto do Campo. Produzimos queijos e doces artesanais há mais de três gerações com amor e qualidade."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <Link to="/" className="text-[#4ECDC4] hover:underline">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">Sobre Nós</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Nossa História
          </h1>
          <p className="text-xl text-[#4ECDC4] italic">
            Direto do Campo para sua casa
          </p>
        </div>

        {/* Story */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1688302450535-1978d99b1539?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VudHJ5c2lkZSUyMGZhcm0lMjBCcmF6aWx8ZW58MXx8fHwxNzcwMzAwMzAyfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Nossa fazenda"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl text-gray-900 mb-6">
              Tradição e Qualidade há Gerações
            </h2>
            <p className="text-gray-700 mb-4">
              A Direto do Campo nasceu do amor pela tradição e pela qualidade. Nossa família 
              produz queijos e doces artesanais há mais de três gerações, mantendo receitas 
              tradicionais e utilizando apenas ingredientes frescos e naturais.
            </p>
            <p className="text-gray-700 mb-4">
              Localizada no coração do interior de São Paulo, nossa fazenda é cercada por 
              pastagens verdejantes onde nossas vacas são criadas livres, alimentadas com 
              capim fresco e sem o uso de hormônios ou antibióticos. Essa dedicação ao 
              bem-estar animal se reflete na qualidade excepcional do nosso leite.
            </p>
            <p className="text-gray-700">
              Cada produto é feito com dedicação e carinho, desde a seleção das matérias-primas 
              até a embalagem final. Nosso compromisso é levar para sua mesa o melhor do campo, 
              com sabor autêntico e qualidade incomparável.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="bg-[#4ECDC4]/10 rounded-xl p-8 md:p-12 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl text-gray-900 mb-6">Nossa Missão</h2>
            <p className="text-gray-700 text-lg">
              Proporcionar aos nossos clientes produtos artesanais de altíssima qualidade, 
              produzidos de forma sustentável e com respeito à natureza. Queremos que cada 
              mordida seja uma experiência autêntica do campo, levando tradição e sabor para 
              todas as mesas.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-3xl text-gray-900 mb-12 text-center">Nossos Valores</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#4ECDC4] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-white" size={40} />
              </div>
              <h3 className="text-xl mb-3">Paixão</h3>
              <p className="text-gray-600">
                Fazemos cada produto com amor e dedicação, como se fosse para nossa própria família
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#4ECDC4] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="text-white" size={40} />
              </div>
              <h3 className="text-xl mb-3">Sustentabilidade</h3>
              <p className="text-gray-600">
                Respeitamos a natureza e produzimos de forma consciente e sustentável
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#4ECDC4] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={40} />
              </div>
              <h3 className="text-xl mb-3">Qualidade</h3>
              <p className="text-gray-600">
                Selecionamos apenas os melhores ingredientes e mantemos rigoroso controle de qualidade
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#4ECDC4] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={40} />
              </div>
              <h3 className="text-xl mb-3">Tradição</h3>
              <p className="text-gray-600">
                Preservamos receitas e técnicas passadas de geração em geração
              </p>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="bg-gray-50 rounded-xl p-8 md:p-12">
          <h2 className="text-3xl text-gray-900 mb-8 text-center">Certificações e Qualidade</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl text-[#FF6B35] mb-2">Inspeção Sanitária</h3>
                <p className="text-gray-700">
                  Todos os nossos produtos são inspecionados e aprovados pelos órgãos sanitários 
                  competentes, garantindo máxima segurança alimentar.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl text-[#FF6B35] mb-2">Produção Artesanal Certificada</h3>
                <p className="text-gray-700">
                  Somos certificados como produtores artesanais, mantendo os mais altos padrões 
                  de qualidade em cada etapa do processo.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl text-[#FF6B35] mb-2">Práticas Sustentáveis</h3>
                <p className="text-gray-700">
                  Comprometidos com o meio ambiente, utilizamos práticas sustentáveis em toda 
                  nossa cadeia de produção, desde a criação dos animais até a embalagem final.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 text-center">
          <h2 className="text-3xl text-gray-900 mb-6">
            Conheça Nossos Produtos
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Experimente a qualidade e o sabor autêntico dos nossos queijos e doces artesanais. 
            Faça seu pedido pelo WhatsApp e receba em casa!
          </p>
          <Link
            to="/produtos"
            className="inline-block bg-[#FF6B35] text-white px-8 py-4 rounded-lg hover:bg-[#e55a28] transition-colors text-lg"
          >
            Ver Produtos
          </Link>
        </section>
      </div>
    </div>
  );
}