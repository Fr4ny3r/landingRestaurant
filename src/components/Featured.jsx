import { delay, motion } from 'framer-motion';

function Featured({ menuItems, setActiveCart, activeCart, addToCart }) {

    const slideUp = {
    // Estado inicial (fuera de la pantalla, transparente)
    initial: { opacity: 0, y: 50 }, 
    // Estado cuando está visible
    whileInView: { opacity: 1, y: 0 },
    // Opciones de transición
    transition: { duration: 2.7, ease: "easeOut", delay: 7 },
  };

  const featuredProduct = menuItems.filter(p => p.featured);

  const svgStar = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>

  const handleCart = (item)=>{
    
    setActiveCart(true)
    addToCart(item)

  }


  return (
    <section id="featured" className="relative p-8 overflow-hidden z-100 h-[80dvh] flex flex-col md:flex-row justify-around items-center container mx-auto text-center">

      <motion.div
        // Aplica las variantes de animación
        variants={slideUp}
        initial="initial" // Inicia en el estado 'initial'
        whileInView="whileInView" // Pasa a 'whileInView' cuando es visible
        viewport={{ once: true, amount: 0.1 }} // Opciones del Intersection Observer: Animación única, 10% de visibilidad
      >
        {featuredProduct.map((item) => (
          <div
            key={item.id}
            className=" grid grid-cols-1 md:grid-cols-2 items-center justify-between p-4 transition"
          >  
            <div className="relative mx-9 text-left rounded-md p-4 grid gap-2 h-full my-0 bg-[var(--color-primary)]">
                <span className='absolute bg-[var(--color-secondary)] p-2 px-5 font-bold rounded-b-xl right-10 text-2xl'>featured</span>
              <div className=' p-6 shadow-lg rounded-md bg-[var(--color-background)]'>
                <h3 className="text-[var(--color-titles)] text-4xl font-semibold mb-2">{item.name}</h3>
                <p className="text-[var(--color-subtitles)] mb-2 text-1xl">{item.description}</p>
                <p className="text-[var(--color-primary)] font-bold text-3xl">{item.price}</p>
                <button
                  onClick={() => handleCart(item)}
                  className="font-semibold mt-4 bg-[var(--color-primary)] text-lg text-[var(--color-text)] px-4 py-2 rounded hover:bg-[var(--color-secondary)] hover:cursor-pointer transition"
                >
                  Add to Cart
                </button>
              </div>
              <div id='featuredComment' className='absolute lg:relative lg:left-0 -left-1000 text-black text-left flex flex-wrap gap-6 justify-around mt-2 text-[var(--color-subtitles)] italic text-sm'>
                <span className='bg-[var(--color-secondary)] mb-3 p-4 rounded-md min-w-1/1'>
                  "A delightful surprise! The Vegan Burger is a must-try for everyone."
                  <span className='flex pl-1 -mb-1 text-[var(--color-titles)]/80'>{svgStar}{svgStar}{svgStar}{svgStar}{svgStar}</span>
                </span>      
                <span className='bg-[var(--color-secondary)] mb-3 p-4 rounded-md min-w-1/1'>
                  "The freshest ingredients and bold flavors make every bite memorable."
                  <span className='flex pl-1 -mb-1 text-[var(--color-titles)]/80'>{svgStar}{svgStar}{svgStar}{svgStar}{svgStar}</span>
                </span>       
                <span className='bg-[var(--color-secondary)] mb-3 p-4 rounded-md min-w-1/1'>
                  "Exceptional service and a cozy atmosphere. Highly recommend!"  
                  <span className='flex pl-1 -mb-1 text-[var(--color-titles)]/80'>{svgStar}{svgStar}{svgStar}{svgStar}{svgStar}</span>
                </span>                          
              </div>
            </div>
            <div className="max-h-full ">
              <img id="imgFeatured" src={item.img} alt={item.name} />
            </div>
          </div>
        ))}
      </motion.div>

    </section>
  );
}

export default Featured;
