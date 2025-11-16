function Header() {
  try {
    return (
      <header 
        className="relative bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] text-white py-20 overflow-hidden"
        data-name="header"
        data-file="components/Header.js"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto bg-white rounded-full overflow-hidden shadow-2xl">
              <img 
                src="https://app.trickle.so/storage/public/images/usr_17c5c46f60000001/6f370d3b-c622-4d56-a54d-bf205724699e.jpeg" 
                alt="Anas Zouzou"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">ANAS ZOUZOU</h1>
          <p className="text-xl md:text-2xl text-[var(--accent-color)] mb-8">
            Computer Science Student | Programmer | Cybersecurity Enthusiast
          </p>
          <div className="flex justify-center gap-4">
            <a href="#contact" className="btn-primary">Get In Touch</a>
          </div>
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}