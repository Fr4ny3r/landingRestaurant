
function Location() {


  return (
    <section id="location" className="relative p-8 z-100 h-[80dvh] container mx-auto text-center md:text-left">
        <span className='text-left left-10 p-5 px-8 rounded-xl text-4xl font-extrabold bg-[var(--color-secondary)]'>Location</span>
        <div className='mt-10 w-full h-[60dvh] md:h-[500px] lg:h-[700px] rounded-xl overflow-hidden shadow-lg'>
            <iframe 
                title="locationMap"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153169!3d-37.81720997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d6fb5e8b5e7a!2sEnvato%20HQ!5e0!3m2!1sen!2sus!4v1614031234567!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                className='rounded-xl'
            ></iframe>
        </div>
    </section>
  );
}

export default Location;
