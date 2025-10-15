function Header({ activeCart, setActiveCart }) {
  return (
    <header className="z-1000 bg-[var(--color-primary)] text-[var(--color-titles)] sticky min-w-screen top-0 px-3 sm:px-10 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="absolute -left-1000 sm:left-0 sm:relative text-[var(--color-text)] text-2xl font-extrabold">Delicious <span className="font-bold bg-[var(--color-secondary)] px-2 py-1 rounded rounded-xl">Eats</span></h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a title="home" href="#hero" className="text-[var(--color-text)] gap-1 text-sm flex flex-col justify-center items-center hover:text-[var(--color-secondary)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-home"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>
              {/*home*/}
            </a></li>
            <li><a title="menu" href="#menu" className="text-[var(--color-text)] gap-1 text-sm flex flex-col justify-center items-center hover:text-[var(--color-secondary)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-tools-kitchen-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 3v12h-5c-.023 -3.681 .184 -7.406 5 -12zm0 12v6h-1v-3m-10 -14v17m-3 -17v3a3 3 0 1 0 6 0v-3" /></svg>
              {/*menu*/}
            </a></li>
            <li><a
                  title="cart"
                  href=""
                  onClick={()=>{setActiveCart(!activeCart)}}
                  className="text-[var(--color-text)] gap-1 text-sm flex flex-col justify-center items-center hover:text-[var(--color-secondary)]"
                >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>
              {/*cart*/}
            </a></li>
            <li><a title="location" href="#location" className="text-[var(--color-text)] gap-1 text-sm flex flex-col justify-center items-center hover:text-[var(--color-secondary)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" /></svg>
              {/*location*/}
            </a></li>
            <li><a title="contact" href="#contact" className="text-[var(--color-text)] gap-1 text-sm flex flex-col justify-center items-center hover:text-[var(--color-secondary)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-phone"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
              {/*contact*/}
            </a></li>

          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;