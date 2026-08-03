import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export function Header({ cartItemsCount, onCartClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-amber-600 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🐝</span>
            <h1 className="text-2xl font-bold">ApiMel</h1>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="hover:text-amber-200 transition-colors">Início</a>
            <a href="#produtos" className="hover:text-amber-200 transition-colors">Produtos</a>
            <a href="#sobre" className="hover:text-amber-200 transition-colors">Sobre</a>
            <a href="#contato" className="hover:text-amber-200 transition-colors">Contato</a>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={onCartClick}
              className="relative hover:text-amber-200 transition-colors"
              aria-label="Carrinho de compras"
            >
              <ShoppingCart size={24} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden hover:text-amber-200 transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-3 pb-2">
            <a href="#home" className="hover:text-amber-200 transition-colors" onClick={() => setMobileMenuOpen(false)}>Início</a>
            <a href="#produtos" className="hover:text-amber-200 transition-colors" onClick={() => setMobileMenuOpen(false)}>Produtos</a>
            <a href="#sobre" className="hover:text-amber-200 transition-colors" onClick={() => setMobileMenuOpen(false)}>Sobre</a>
            <a href="#contato" className="hover:text-amber-200 transition-colors" onClick={() => setMobileMenuOpen(false)}>Contato</a>
          </nav>
        )}
      </div>
    </header>
  );
}
