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
  const svgStarFill = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" /></svg>
  const handleCart = (item)=>{
    
    setActiveCart(true)
    addToCart(item)

  }


  return (
    <section id="featured" className="relative p-8 mb-20 md:mb-0 z-100 h-[80dvh] md:h-[500px] lg:h-[800px] flex flex-col md:flex-row justify-around items-center container mx-auto text-center">

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
            className=" grid grid-cols-1 md:grid-cols-2 items-center justify-between md:p-4 transition"
          >  
            <div className="relative mx-9 text-left rounded-md md:p-4 grid gap-2 h-full my-0 md:bg-[var(--color-primary)]">
                <span className='absolute bg-[var(--color-secondary)] hidden md:block p-2 px-5 font-bold rounded-b-xl right-10 text-2xl'>featured</span>
              <div className=' p-6 md:shadow-lg rounded-md bg-[var(--color-background)]'>
                <h3 className="text-[var(--color-titles)] text-2xl md:text-4xl font-semibold mb-2">{item.name}</h3>
                <p className="text-[var(--color-subtitles)] mb-2 text-lg md:text-1xl">{item.description}</p>
                <p className="text-[var(--color-primary)] font-bold text-3xl">{item.price}</p>
                <button
                  onClick={() => handleCart(item)}
                  className="font-semibold mt-4 bg-[var(--color-primary)] text-lg text-[var(--color-text)] px-4 py-2 rounded hover:bg-[var(--color-secondary)] hover:cursor-pointer transition"
                >
                  Add to Cart
                </button>
              </div>
              <div id='featuredComment' className='absolute lg:relative lg:left-0 -left-1000 text-black text-left flex flex-wrap gap-1 xl:gap-6 justify-around mt-2 text-[var(--color-subtitles)] italic text-sm'>
                <span className='bg-[var(--color-secondary)] mb-3 p-4 rounded-md min-w-1/1'>
                  "A delightful surprise! The Vegan Burger is a must-try for everyone."
                  <span className='flex pl-1 -mb-1 text-[var(--color-titles)]/80'>{svgStarFill}{svgStarFill}{svgStarFill}{svgStar}{svgStar}</span>
                </span>      
                <span className='bg-[var(--color-secondary)]  mb-3 p-4 rounded-md min-w-1/1'>
                  "The freshest ingredients and bold flavors make every bite memorable."
                  <span className='flex pl-1 -mb-1 text-[var(--color-titles)]/80'>{svgStarFill}{svgStarFill}{svgStarFill}{svgStarFill}{svgStarFill}</span>
                </span>       
                <span className='bg-[var(--color-secondary)] mb-3 p-4 rounded-md min-w-1/1'>
                  "Exceptional service and a cozy atmosphere. Highly recommend!"  
                  <span className='flex pl-1 -mb-1 text-[var(--color-titles)]/80'>{svgStarFill}{svgStarFill}{svgStarFill}{svgStarFill}{svgStar}</span>
                </span>                          
              </div>
            </div>
            <div className="max-h-full flex justify-center items-center  md:max-h-[500px] lg:max-h-[600px] xl:max-h-[700px] 2xl:max-h-[800px]">
              <img id="imgFeatured" src={item.img} alt={item.name} className='max-w-8/12 md:max-w-full'/>
            </div>
          </div>
        ))}
      </motion.div>

    </section>
  );
}

export default Featured;
