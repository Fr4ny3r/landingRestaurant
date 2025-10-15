function CartAside({ cart, removeFromCart, activeCart }) {


  return (
    <>
    {activeCart ? (

    <div className="fixed z-999 top-16 right-0 h-full w-4/6 md:h-fit md:w-80 bg-[var(--color-background)] md:bg-[var(--color-background)]/50 md:backdrop-blur-sm shadow-lg p-6 transform transition-transform duration-300 ease-in-out -transform-x-full">
      <h2 className="text-[var(--color-titles)] text-2xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-[var(--color-subtitles)]">Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="flex rounded border border-white/20 p-3 gap-2 justify-between items-center mb-4">
              <span>{item.name} - {item.price}</span>
              <button
                onClick={() => removeFromCart(index)}
                className="font-bold p-2 px-3 rounded bg-[var(--color-secondary)] hover:bg-[var(--color-primary)]"
              >
                X
              </button>
            </li>
          ))}
        </ul>
      )}
      {cart.length === 0 ? (
        <></>

        ) : (
        <button
          onClick={() => alert('Proceed to checkout!')} // Simple alert for demo
          className="mt-4 w-full bg-[var(--color-primary)] text-[var(--color-text)] py-2 rounded hover:cursor-pointer hover:bg-[var(--color-secondary)] transition"
        >
          Checkout
        </button>
        )}

    </div>


    ) : (<div></div>)}

    </>
  );
}

export default CartAside;