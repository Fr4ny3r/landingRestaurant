import { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MenuSection from './components/MenuSection';
import Featured from './components/Featured';
import CartAside from './components/CartAside';

function App() {
  const [activeCart, setActiveCart] = useState(false);
  const [cart, setCart] = useState([]); // State to hold cart items

  const menuItems = [
  { new: false, id: 1, name: 'Grilled Chicken Salad', price: '$12.99', description: 'Fresh greens with grilled chicken and vinaigrette.', img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880' },
  { new: false, id: 2, name: 'Spagh etti Bolognese', price: '$14.99', description: 'Classic Italian pasta with meat sauce.', img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880' },
  { new: true, id: 3, name: 'Vegan Burger', price: '$11.99', description: 'Plant-based patty with fresh veggies.', img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880'},
  ];


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
      <Featured menuItems={menuItems} />
      <MenuSection addToCart={addToCart} setActiveCart={setActiveCart} menuItems={menuItems}/>
      <CartAside cart={cart} removeFromCart={removeFromCart} activeCart={activeCart}/>
    </>
  );
}

export default App;