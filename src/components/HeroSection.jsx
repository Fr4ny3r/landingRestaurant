function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden z-100 h-[80dvh] flex flex-col md:flex-row justify-around items-center container mx-auto text-center">
      <img src="./restCover.png" alt="restCover" className="h-full  md:h-fit opacity-85 dark:opacity-35 absolute"/>
      <span id="coverHero"></span>
      <div className="z-100 md:text-left">

        <h2 className="text-[var(--color-titles)] text-xl font-extrabold">Welcome to</h2>
        <h1 className="text-[var(--color-titles)] text-5xl font-extrabold mb-4">Delicious <span className="bg-[var(--color-secondary)] -ml-2 text-3xl px-3 py-2 rounded rounded-xl">Eats</span></h1>
        <p className="text-[var(--color-subtitles)] text-lg mb-8">Experience the finest cuisine with fresh ingredients and exceptional service.</p>
        <button className="font-semibold bg-[var(--color-primary)] text-[var(--color-text)] px-6 py-2 rounded hover:bg-[var(--color-secondary)] hover:cursor-pointer transition ">
          <a href="#menu">View Our Menu</a>
        </button>  
      </div>
      <div id="imgCover" className="z-100 max-w-90 relative hidden md:block">
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="-rotate-40 icon icon-tabler icons-tabler-outline icon-tabler-fish"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16.69 7.44a6.973 6.973 0 0 0 -1.69 4.56c0 1.747 .64 3.345 1.699 4.571" /><path d="M2 9.504c7.715 8.647 14.75 10.265 20 2.498c-5.25 -7.761 -12.285 -6.142 -20 2.504" /><path d="M18 11v.01" /><path d="M11.5 10.5c-.667 1 -.667 2 0 3" /></svg>
      </div>
    </section>
  );
}

export default HeroSection;