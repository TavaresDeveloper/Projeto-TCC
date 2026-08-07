export function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-amber-50 to-yellow-100 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-amber-900 mb-6">
            Produtos Apícolas Naturais
          </h2>
          <p className="text-xl text-amber-800 mb-8">
            Mel puro, própolis, geleia real e muito mais, direto do apiário para sua casa
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#produtos"
              className="bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors font-semibold"
            >
              Ver Produtos
            </a>
            <a
              href="#sobre"
              className="bg-white text-amber-600 px-8 py-3 rounded-lg hover:bg-amber-50 transition-colors font-semibold border-2 border-amber-600"
            >
              Saiba Mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
