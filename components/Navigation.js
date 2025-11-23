function Navigation() {
  try {
    const [activeSection, setActiveSection] = React.useState('about');

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
      }
    };

    const handleNavClick = (item) => {
      if (item.isExternal) {
        window.location.href = 'cv.html';
      } else {
        scrollToSection(item.id);
      }
    };

    const navItems = [
      { id: 'about', label: 'About Me', icon: 'user' },
      { id: 'skills', label: 'Skills', icon: 'code' },
      { id: 'experience', label: 'Experience', icon: 'briefcase' },
      { id: 'sports', label: 'Sports', icon: 'trophy' },
      { id: 'languages', label: 'Languages', icon: 'globe' },
      { id: 'contact', label: 'Contact', icon: 'mail' },
      { id: 'cv', label: 'View CV', icon: 'file-text', isExternal: true }
    ];

    return (
      <nav 
        className="sticky top-0 bg-[var(--primary-color)] shadow-lg z-50"
        data-name="navigation"
        data-file="components/Navigation.js"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center py-4 gap-2">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'bg-white text-[var(--primary-color)]' 
                    : 'text-white hover:bg-[var(--secondary-color)]'
                }`}
              >
                <div className={`icon-${item.icon} text-lg`}></div>
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    );
  } catch (error) {
    console.error('Navigation component error:', error);
    return null;
  }
}