
function Footer() {


  return (
    <footer id="footer" className="bg-[var(--color-primary)]/60 p-4 xl:p-8 md:mt-50 z-100 max-h-[300px]  text-center md:text-left">
<div class="footer-container bg-[var(--color-background)] xl:justify-around justify-center items-center text-white xl:flex grid grid-cols-2 grid-rows-2 p-10 rounded-xl">
    <div class="footer-section">
        <h3>Delicious Eats</h3>
        <p>Your destination for the best food.</p>
    </div>

    <div class="footer-section">
        <h3>Contact</h3>
        <p>Address: #### #### 123, Ciudad</p>
        <p>Phone: +123 456 7890</p>
        <p>Email: info@deliciouseats.com</p>
    </div>

    <div class="footer-section hidden xl:block">
        <h3>Enlaces Rápidos</h3>
        <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </div>

    <div class="footer-bottom col-span-2 mt-4 text-center">
        <p>&copy; 2025 Delicious Eats. Todos los derechos reservados.</p>
        </div>
</div>
    </footer>
  );
}

export default Footer;
