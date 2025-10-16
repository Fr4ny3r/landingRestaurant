
function Contact() {


  return (
    <section id="contact" className="relative rounded-none md:rounded-xl p-10 pt-20 md:p-20 bg-[var(--color-card-background)] md:mb-50 z-100 max-h-[600px] container mx-auto text-left">
      <div className=" w-full h-full flex flex-col md:flex-row justify-around items-center">  
        <span className='text-left absolute top-0 left-0 m-5 mx-8 my-8 p-5 px-8 rounded-xl md:rounded-b-xl -translate-y-1/2 md:-translate-y-1/2 lg:translate-y-0 text-2xl md:text-4xl font-extrabold bg-[var(--color-secondary)]'>Contact</span>
        <form id="form" className="relative w-1/2 flex flex-col w-full md:max-w-[500px] items-start" action="https://formspree.io/f/mayvlrpg" method="POST">
          <div className="flex flex-col md:flex-row items-center w-full px-3 gap-3">
            <input type="text" placeholder="Your Name" className=" p-3 rounded border border-gray-300 w-full md:w-1/2"/>
            <input type="email" placeholder="Your Email" className=" p-3 rounded border border-gray-300 w-full md:w-1/2"/>
          </div>
          <div className="flex flex-col items-center w-full px-3">
            <textarea placeholder="Your Message" className="resize-none p-3 w-full m-2 mx-3 mt-5 md:mt-2 rounded border border-gray-300 w-1/2"></textarea>
            <button type="submit" className="m-2 p-3 rounded bg-blue-500 text-white w-2/4">Send</button>
          </div>
        </form>
            <div className="max-h-full hidden md:block -translate-y-10 flex justify-center items-center rounded-xl  md:max-h-[500px] lg:max-h-[600px] xl:max-h-[700px] 2xl:max-h-[800px]">
              <img id="" src="./contact.png" alt="logo" className='max-w-8/12 md:max-w-full rounded-xl'/>
            </div>
      </div>
    </section>
  );
}

export default Contact;
