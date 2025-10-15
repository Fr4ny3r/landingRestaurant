import { useState } from "react";

function MenuSection({ addToCart, setActiveCart, menuItems }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(menuItems.length / itemsPerPage);

  const handleCart = (item) => {
    setActiveCart(true);
    addToCart(item);
  };

  // Calcular los items a mostrar en la página actual
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentItems = menuItems.slice(startIdx, startIdx + itemsPerPage);

  return (
    <section id="menu" className="container mx-auto py-16">
      <h2 className="text-[var(--color-titles)] text-3xl font-bold text-center mb-8">Our Menu</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 px-10">
        {currentItems.map((item) => (
          <div
            key={item.id}
            className="border border-3 grid grid-cols-2 items-center border-[var(--color-subtitles)]/20 p-4 rounded rounded-xl bg-[var(--color-card-background)] shadow hover:shadow-lg transition"
          >
            <div>
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
            <div className="max-h-full rounded-xl overflow-hidden flex justify-center items-center">
              <img src={item.img} alt={item.name} className="rounded-xl" />
            </div>
          </div>
        ))}
      </div>
      {/* Botones de paginación */}
      <div className="flex justify-center mt-8 gap-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded bg-[var(--color-secondary)] text-white font-semibold disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2 font-bold text-[var(--color-titles)]">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded bg-[var(--color-secondary)] text-white font-semibold disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default MenuSection;