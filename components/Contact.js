function Contact() {
  try {
    const contactInfo = [
      { icon: 'user', label: 'Name', value: 'ANAS ZOUZOU' },
      { icon: 'cake', label: 'Date of Birth', value: '25/07/2007' },
      { icon: 'map-pin', label: 'City', value: 'TETOUAN, Morocco' },
      { icon: 'phone', label: 'Phone', value: '+212 609855983', link: 'tel:+212609855983' },
      { icon: 'mail', label: 'Email', value: 'anaszouzou2020@gmail.com', link: 'mailto:anaszouzou2020@gmail.com' }
    ];

    return (
      <section 
        id="contact" 
        className="py-20 bg-white"
        data-name="contact"
        data-file="components/Contact.js"
      >
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="section-title flex items-center justify-center gap-3">
            <div className="icon-mail text-4xl"></div>
            Contact
          </h2>
          <div className="card relative overflow-hidden">
            <div className="absolute top-4 right-4 icon-send text-6xl text-[var(--accent-color)] opacity-20"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-[var(--secondary-color)] to-[var(--primary-color)] flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                    <div className={`icon-${info.icon} text-xl text-white`}></div>
                  </div>
                  <div>
                    <p className="text-sm text-[var(--text-light)]">{info.label}</p>
                    {info.link ? (
                      <a href={info.link} className="font-medium text-[var(--primary-color)] hover:text-[var(--secondary-color)]">
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Contact component error:', error);
    return null;
  }
}