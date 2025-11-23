function Footer() {
  try {
    return (
      <footer 
        className="bg-[var(--primary-color)] text-white py-8"
        data-name="footer"
        data-file="components/Footer.js"
      >
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg">© 2025 ANAS ZOUZOU. All rights reserved.</p>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}