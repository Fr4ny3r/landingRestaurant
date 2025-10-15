import { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MenuSection from './components/MenuSection';
import CartAside from './components/CartAside';

function App() {
  const [activeCart, setActiveCart] = useState(false);
  const [cart, setCart] = useState([]); // State to hold cart items

  const addToCart = (item) => {
    setCart([...cart, item]); // Add item to cart
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart); // Remove item from cart
  };

  return (
    <>    
      <Header activeCart={activeCart} setActiveCart={setActiveCart}/>
      <HeroSection />
      <MenuSection addToCart={addToCart} setActiveCart={setActiveCart} />
      <CartAside cart={cart} removeFromCart={removeFromCart} activeCart={activeCart}/>
    </>
  );
}

export default App;