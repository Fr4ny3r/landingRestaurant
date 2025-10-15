import { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MenuSection from './components/MenuSection';
import Featured from './components/Featured';
import CartAside from './components/CartAside';
import Location from './components/Location';
import Comments from './components/Comments';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [activeCart, setActiveCart] = useState(false);
  const [cart, setCart] = useState([]); // State to hold cart items

const menuItems = [
  { featured: false, id: 1, name: 'Grilled Chicken Salad', price: '$12.99', description: 'Fresh greens with grilled chicken and vinaigrette.', img: './food1.png' },
  { featured: false, id: 2, name: 'Spaghetti Bolognese', price: '$14.99', description: 'Classic Italian pasta with rich meat sauce.', img: './food2.png' },
  { featured: true, id: 3, name: 'Vegan Burger', price: '$11.99', description: 'Plant-based patty with fresh veggies and special sauce.', img: './food3.png' },
  { featured: false, id: 4, name: 'Ribeye Steak', price: '$25.99', description: 'Aged ribeye, perfectly grilled, served with asparagus.', img: './food2.png' },
  { featured: false, id: 5, name: 'Truffle Fries', price: '$8.50', description: 'Crispy fries tossed in truffle oil and Parmesan cheese.', img: './food2.png' },
  { featured: false, id: 6, name: 'Mushroom Risotto', price: '$16.99', description: 'Creamy Arborio rice with assorted wild mushrooms.', img: './food1.png' },
  { featured: false, id: 7, name: 'Seafood Paella', price: '$22.50', description: 'Saffron rice with shrimp, mussels, clams, and chorizo.', img: './food2.png' },
  { featured: false, id: 8, name: 'Ahi Tuna Poke Bowl', price: '$18.99', description: 'Fresh tuna, avocado, rice, and soy-sesame dressing.', img: './food2.png' },
  { featured: false, id: 9, name: 'Classic Margherita Pizza', price: '$13.99', description: 'Tomato sauce, fresh mozzarella, and basil.', img: './food3.png' },
  { featured: false, id: 10, name: 'French Onion Soup', price: '$9.50', description: 'Caramelized onions in beef broth topped with crouton and melted cheese.', img: './food1.png' },
  { featured: false, id: 11, name: 'Lamb Shank', price: '$24.99', description: 'Slow-braised lamb shank with root vegetables.', img: './food3.png' },
  { featured: false, id: 12, name: 'Spicy Tuna Roll', price: '$15.00', description: 'Fresh tuna, sriracha, and tempura flakes.', img: './food1.png' },
  { featured: false, id: 13, name: 'Chicken Enchiladas', price: '$15.50', description: 'Corn tortillas filled with chicken and covered in red sauce and cheese.', img: './food2.png' },
  { featured: false, id: 14, name: 'Chocolate Lava Cake', price: '$9.99', description: 'Warm cake with a molten chocolate center, served with ice cream.', img: './food1.png' },
  { featured: false, id: 15, name: 'NY Cheesecake', price: '$8.99', description: 'Classic New York style cheesecake with a berry topping.', img: './food3.png' },
  { featured: false, id: 16, name: 'Artisanal Cheese Board', price: '$17.99', description: 'Selection of three cheeses, seasonal fruits, and crackers.', img: './food2.png' },
  { featured: false, id: 17, name: 'Black Bean Soup', price: '$7.50', description: 'Hearty black bean soup garnished with cilantro and sour cream.', img: './food3.png' },
  { featured: false, id: 18, name: 'Pork Belly Sliders', price: '$10.99', description: 'Slow-cooked pork belly with a sweet glaze on mini buns.', img: './food1.png' },
  { featured: false, id: 19, name: 'Lemon Herb Salmon', price: '$19.50', description: 'Baked salmon fillet with lemon butter and fresh herbs.', img: './food2.png' },
  { featured: false, id: 20, name: 'Garlic Bread Sticks', price: '$6.00', description: 'Warm bread sticks brushed with garlic butter and Parmesan.', img: './food3.png' },
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
      <Featured addToCart={addToCart} menuItems={menuItems} activeCart={activeCart} setActiveCart={setActiveCart} />
      <MenuSection addToCart={addToCart} setActiveCart={setActiveCart} menuItems={menuItems}/>
      <CartAside cart={cart} removeFromCart={removeFromCart} activeCart={activeCart}/>
      <Location />
      <Comments />
      <About />
      <Contact />
    </>
  );
}

export default App;