import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCard, Product } from './components/ProductCard';
import { Cart, CartItem } from './components/Cart';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Mel Puro Silvestre',
    description: 'Mel 100% natural de flores silvestres, rico em nutrientes',
    price: 35.00,
    image: '🍯',
    unit: 'kg'
  },
  {
    id: 2,
    name: 'Própolis Verde',
    description: 'Extrato de própolis com alta concentração de flavonoides',
    price: 45.00,
    image: '💧',
    unit: '30ml'
  },
  {
    id: 3,
    name: 'Geleia Real',
    description: 'Geleia real fresca, fonte de vitaminas do complexo B',
    price: 65.00,
    image: '👑',
    unit: '10g'
  },
  {
    id: 4,
    name: 'Pólen Apícola',
    description: 'Pólen desidratado, rico em proteínas e aminoácidos',
    price: 28.00,
    image: '🌼',
    unit: '250g'
  },
  {
    id: 5,
    name: 'Cera de Abelha',
    description: 'Cera pura para cosméticos e artesanato',
    price: 22.00,
    image: '🕯️',
    unit: '500g'
  },
  {
    id: 6,
    name: 'Mel de Laranjeira',
    description: 'Mel aromático de flores de laranjeira, sabor suave',
    price: 38.00,
    image: '🍊',
    unit: 'kg'
  }
];

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const handleCheckout = () => {
    // Aqui você integrará com sua API Java/MySQL para processar o pedido
    console.log('Pedido:', cartItems);
    alert('Pedido enviado! Em breve entraremos em contato para confirmar.');
    setCartItems([]);
    setCartOpen(false);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white">
      <Header
        cartItemsCount={totalItems}
        onCartClick={() => setCartOpen(true)}
      />

      <Hero />

      <section id="produtos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">
            Nossos Produtos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {PRODUCTS.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      </section>

      <About />
      <Contact />
      <Footer />

      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />
    </div>
  );
}