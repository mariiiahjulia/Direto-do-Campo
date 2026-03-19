import { Link } from 'react-router';
import { SEO } from '../components/SEO';

export function About() {
  return (
    <div className="min-h-screen pt-32 pb-16" style={{ backgroundColor: '#F7F3E9' }}>
      <SEO
        title="Sobre Nós"
        description="Conheça a história da Direto do Campo. Produzimos queijos e doces artesanais com amor e qualidade."
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-10 text-xs" style={{ color: '#8a6a55' }}>
          <Link to="/" className="hover:underline" style={{ color: '#2F6F4F' }}>Início</Link>
          <span className="mx-2">/</span>
          <span>Sobre Nós</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs uppercase tracking-[0.2em] mb-3 font-medium"
            style={{ color: '#6FBF8A' }}
          >
            Nossa Trajetória
          </p>
          <h1
            className="text-4xl md:text-5xl mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: '#4A2E1F' }}
          >
            Nossa História
          </h1>
          <p className="text-lg italic" style={{ color: '#C76A3A' }}>
            Direto do Campo para sua casa!
          </p>
        </div>

        {/* Story */}
        <section className="flex flex-col sm:flex-row gap-10 items-center mb-20">
          <div className="rounded-2xl overflow-hidden shadow-xl sm:w-2/5 flex-shrink-0">
            <img
              src={new URL('../../imagens/NeiaFoto.jpg', import.meta.url).href}
              alt="Claudineia - Direto do Campo"
              className="w-full h-64 sm:h-80 object-cover"
            />
          </div>
          <div>
            <h2
              className="text-2xl md:text-3xl mb-5"
              style={{ fontFamily: "'Playfair Display', serif", color: '#4A2E1F' }}
            >
              Quem Somos
            </h2>
            <p className="mb-4 leading-relaxed" style={{ color: '#6b4f3a' }}>
              A Direto do Campo é feita com amor pela Claudineia Elias e sua família. Ela vive em uma linda fazenda com seu marido e seus três filhos, onde tudo começou.
            </p>
            <p className="mb-4 leading-relaxed" style={{ color: '#6b4f3a' }}>
              Todos os ingredientes vêm da própria fazenda. As frutas e verduras são colhidas sem agrotóxicos, com muito cuidado e atenção. Tudo é feito com as mãos, com a dedicação que Deus coloca no coração de quem ama o que faz.
            </p>
            <p className="leading-relaxed" style={{ color: '#6b4f3a' }}>
              Aqui na fazenda, o respeito pela natureza e pela vida é tudo. Cada produto que sai da nossa cozinha carrega esse amor e essa benção.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section
          className="rounded-2xl p-8 md:p-12 mb-16 text-center"
          style={{ backgroundColor: '#EDE6D6' }}
        >
          <p
            className="text-xs uppercase tracking-[0.2em] mb-3 font-medium"
            style={{ color: '#6FBF8A' }}
          >
            O que nos move
          </p>
          <h2
            className="text-2xl md:text-3xl mb-5"
            style={{ fontFamily: "'Playfair Display', serif", color: '#4A2E1F' }}
          >
            Nossa Missão
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#6b4f3a' }}>
            Fazer alimentos artesanais com qualidade e carinho, respeitando a natureza e
            agradecendo a Deus por tudo o que Ele nos permite produzir.
            Queremos levar sabor simples, caseiro e verdadeiro para a mesa das famílias.
          </p>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2
            className="text-2xl md:text-3xl mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: '#4A2E1F' }}
          >
            Conheça Nossos Produtos!
          </h2>
          <p className="mb-8 max-w-xl mx-auto" style={{ color: '#7a5c48' }}>
            Experimente a qualidade e o sabor autêntico dos nossos queijos e doces artesanais.
          </p>
          <Link
            to="/produtos"
            className="inline-block bg-[#2F6F4F] hover:bg-[#245a3f] text-white px-8 py-3 rounded-[30px] transition-colors font-semibold"
          >
            Ver Produtos
          </Link>
        </section>
      </div>
    </div>
  );
}