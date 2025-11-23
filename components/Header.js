function Header() {
  try {
    return (
      <header 
        className="relative bg-gradient-to-br from-[var(--primary-color)] via-[var(--secondary-color)] to-[var(--primary-color)] text-white py-20 overflow-hidden"
        data-name="header"
        data-file="components/Header.js"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="absolute top-10 left-10 w-20 h-20 border-4 border-white opacity-20 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border-4 border-white opacity-20 rotate-45 animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white opacity-10 rounded-lg animate-pulse-slow"></div>
        <div className="absolute top-1/4 right-1/3 w-8 h-8 bg-white opacity-10 rounded-full animate-float"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="mb-6 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 bg-white opacity-20 rounded-full animate-pulse-slow"></div>
            </div>
            <div className="relative w-32 h-32 mx-auto bg-white rounded-full overflow-hidden shadow-2xl ring-4 ring-white ring-opacity-30">
              <img 
                src="https://app.trickle.so/storage/public/images/usr_17c5c46f60000001/6f370d3b-c622-4d56-a54d-bf205724699e.jpeg" 
                alt="Anas Zouzou"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">ANAS ZOUZOU</h1>
          <p className="text-xl md:text-2xl text-[var(--accent-color)] mb-8 font-medium">
            Interested in Computer Science | Athlete | Organizer
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="#contact" className="btn-primary inline-flex items-center gap-2">
              <div className="icon-mail text-lg"></div>
              Get In Touch
            </a>
            <a href="cv.html" className="bg-white text-[var(--primary-color)] px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg inline-flex items-center gap-2">
              <div className="icon-file-text text-lg"></div>
              View CV
            </a>
          </div>
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}