export function Footer() {
  return (
    <footer className="bg-amber-900 text-amber-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🐝</span>
              <h3 className="text-xl font-bold">ApiMel</h3>
            </div>
            <p className="text-amber-200">
              Produtos apícolas naturais de alta qualidade, produzidos com carinho e dedicação.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-amber-200 hover:text-white transition-colors">Início</a></li>
              <li><a href="#produtos" className="text-amber-200 hover:text-white transition-colors">Produtos</a></li>
              <li><a href="#sobre" className="text-amber-200 hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#contato" className="text-amber-200 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Produtos</h4>
            <ul className="space-y-2 text-amber-200">
              <li>Mel Puro</li>
              <li>Própolis</li>
              <li>Geleia Real</li>
              <li>Pólen</li>
              <li>Cera de Abelha</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-amber-700 pt-6 text-center text-amber-200">
          <p>&copy; 2026 ApiMel. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
