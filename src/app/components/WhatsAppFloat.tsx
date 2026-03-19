import { ArrowUp } from 'lucide-react';

export function WhatsAppFloat() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 bg-[#6FBF8A] text-white p-4 rounded-full shadow-lg hover:bg-[#5AA876] transition-all hover:scale-110 z-50 flex items-center justify-center group"
      aria-label="Voltar ao topo"
      title="Voltar ao topo"
    >
      <ArrowUp size={28} />
      <span className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Voltar ao topo
      </span>
    </button>
  );
}
