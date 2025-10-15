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
          View Our Menu
        </button>  
      </div>
      <div id="imgCover" className="z-100 max-w-120 hidden">
        <img src="./imgCover.png" alt=""/>
      </div>
    </section>
  );
}

export default HeroSection;