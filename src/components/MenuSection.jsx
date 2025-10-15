const menuItems = [
  { id: 1, name: 'Grilled Chicken Salad', price: '$12.99', description: 'Fresh greens with grilled chicken and vinaigrette.', img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880' },
  { id: 2, name: 'Spaghetti Bolognese', price: '$14.99', description: 'Classic Italian pasta with meat sauce.', img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880' },
  { id: 3, name: 'Vegan Burger', price: '$11.99', description: 'Plant-based patty with fresh veggies.', img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880'},
];

function MenuSection({ addToCart, setActiveCart }) {

  const handleCart = (item)=>{
    
    setActiveCart(true)
    addToCart(item)

  }

  return (
    <section id="menu" className="container mx-auto py-16">
      <h2 className="text-[var(--color-titles)] text-3xl font-bold text-center mb-8">Our Menu</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 px-10">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="border border-3 grid grid-cols-2 items-center border-[var(--color-subtitles)]/20 p-4 rounded rounded-xl bg-[var(--color-card-background)] shadow hover:shadow-lg transition"
          >  
            <div className="">
              <h3 className="text-[var(--color-titles)] text-xl font-semibold">{item.name}</h3>
              <p className="text-[var(--color-subtitles)] mb-2">{item.description}</p>
              <p className="text-[var(--color-primary)] font-bold">{item.price}</p>
              <button
                onClick={() => handleCart(item)}
                className="font-semibold mt-4 bg-[var(--color-primary)] text-[var(--color-text)] px-4 py-2 rounded hover:bg-[var(--color-secondary)] hover:cursor-pointer transition"
              >
                Add to Cart
              </button>
            </div>
            <div className="max-h-full ">
              <img src={item.img} alt={item.name} className=""/>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MenuSection;