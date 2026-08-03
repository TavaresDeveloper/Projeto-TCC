import { ShoppingCart } from 'lucide-react';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  unit: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="h-48 bg-gradient-to-br from-amber-100 to-yellow-200 flex items-center justify-center text-6xl">
        {product.image}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-amber-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-amber-600">
              R$ {product.price.toFixed(2)}
            </span>
            <span className="text-gray-500 text-sm ml-1">/{product.unit}</span>
          </div>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors flex items-center gap-2"
          >
            <ShoppingCart size={18} />
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}
