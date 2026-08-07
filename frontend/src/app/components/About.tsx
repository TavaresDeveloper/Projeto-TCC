export function About() {
  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">
          Sobre Nossa Apicultura
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-5xl mb-4">🌸</div>
            <h3 className="text-xl font-bold text-amber-800 mb-2">100% Natural</h3>
            <p className="text-gray-600">
              Produtos puros, sem aditivos ou conservantes, direto da colmeia
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">🍯</div>
            <h3 className="text-xl font-bold text-amber-800 mb-2">Qualidade Premium</h3>
            <p className="text-gray-600">
              Processos artesanais que preservam todas as propriedades nutricionais
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">🌱</div>
            <h3 className="text-xl font-bold text-amber-800 mb-2">Sustentável</h3>
            <p className="text-gray-600">
              Práticas responsáveis que protegem as abelhas e o meio ambiente
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
