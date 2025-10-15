import React from 'react';
import { motion } from 'framer-motion';

function Featured({ menuItems }) {

    const slideUp = {
    // Estado inicial (fuera de la pantalla, transparente)
    initial: { opacity: 0, y: 50 }, 
    // Estado cuando está visible
    whileInView: { opacity: 1, y: 0 },
    // Opciones de transición
    transition: { duration: 0.8, ease: "ease" },
  };

  const featuredProduct = menuItems.filter(p => p.new);

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
            className=" grid grid-cols-2 items-center p-4 transition"
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
      </motion.div>

    </section>
  );
}

export default Featured;
