
function Comments() {


  return (
    <section id="comments" className="relative font-bold p-8 z-100 mt-0 md:mt-80 container mx-auto text-center md:text-left">
      <div className='mt-10 w-full rounded-xl overflow-hidden'>
          <div className='w-full h-full py-10 rounded-xl overflow-hidden shadow-lg bg-[var(--color-card-background)] flex gap-5 md:gap-0 flex-rows flex-wrap justify-around mt-9 text-[var(--color-title)] italic text-sm p-4'>
            <span className='relative bg-[var(--color-secondary)] max-w-80 h-50 p-4 rounded-md text-center items-center flex md:flex-row flex-col justify-center'>
              "A delightful surprise! The Vegan Burger is a must-try for everyone."
              <span className='flex pl-1 -mb-1 text-[var(--color-titles)]/80 relative md:bottom-5 md:absolute'>⭐⭐⭐☆☆</span>
            </span>      
            <span className='relative bg-[var(--color-secondary)] max-w-80 h-50 p-4 rounded-md text-center items-center flex md:flex-row flex-col justify-center'>
              "The freshest ingredients and bold flavors make every bite memorable."
              <span className='flex pl-1 -mb-1 text-[var(--color-titles)]/80 relative md:bottom-5 md:absolute'>⭐⭐⭐⭐⭐</span>
            </span>       
            <span className='relative bg-[var(--color-secondary)] max-w-80 h-50 p-4 md:mt-5 xl:mt-0 rounded-md text-center items-center flex md:flex-row flex-col justify-center'>
              "Exceptional service and a cozy atmosphere. Highly recommend!"  
              <span className='flex pl-1 -mb-1 text-[var(--color-titles)]/80 relative md:bottom-5 md:absolute'>⭐⭐⭐⭐☆</span>
            </span>                             
          </div>
      </div>
    </section>
  );
}

export default Comments;
