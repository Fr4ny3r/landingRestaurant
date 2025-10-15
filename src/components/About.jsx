
function About() {


  return (
    <section id="about" className="relative p-8 md:mb-50 z-100 max-h-[500px] container mx-auto text-center md:text-left">
        <span className='text-left left-10 p-5 px-8 rounded-xl text-4xl font-extrabold bg-[var(--color-secondary)]'>About</span>
        <div className=" flex flex-col lg:flex-row justify-center">
          <span className="hidden xl:block absolute bottom-0 opacity-50">12/08/2025</span>
          <p className=" m-5 p-9 text1xl md:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempora perferendis unde quos fugit cumque, eligendi quo et veritatis iure doloribus sit, optio harum sapiente accusantium dolores! Cumque, ipsa voluptatibus!  
          </p>
          <img src="./logo.png" alt="logo" className="rounded-xl"/>
        </div>
    </section>
  );
}

export default About;
