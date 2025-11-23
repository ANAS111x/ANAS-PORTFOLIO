function CVApp() {
  const handlePrint = () => {
    window.print();
  };

  const handleBackToPortfolio = () => {
    window.location.href = 'index.html';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="no-print fixed top-4 right-4 flex gap-2 z-50">
        <button
          onClick={handleBackToPortfolio}
          className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
        >
          <div className="icon-arrow-left text-lg"></div>
          Back to Portfolio
        </button>
        <button
          onClick={handlePrint}
          className="bg-[var(--primary-color)] text-white px-6 py-2 rounded-lg hover:bg-[var(--secondary-color)] transition-colors flex items-center gap-2"
        >
          <div className="icon-printer text-lg"></div>
          Print / Save as PDF
        </button>
      </div>

      <div className="max-w-4xl mx-auto bg-white shadow-lg my-4 p-6">
        <header className="border-b-2 border-[var(--primary-color)] pb-2 mb-3">
          <div className="flex items-start gap-4 mb-3">
            <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg flex-shrink-0 border-4 border-[var(--primary-color)]">
              <img 
                src="https://app.trickle.so/storage/public/images/usr_17c5c46f60000001/6f370d3b-c622-4d56-a54d-bf205724699e.jpeg" 
                alt="Anas Zouzou"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-[var(--primary-color)] mb-1">ANAS ZOUZOU</h1>
              <p className="text-base text-[var(--text-light)] mb-2">
                Interested in Computer Science | Athlete | Organizer
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm text-[var(--text-dark)]">
            <div className="flex items-center gap-2">
              <div className="icon-phone text-base"></div>
              <span>+212 609855983</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="icon-mail text-base"></div>
              <span>anaszouzou2020@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="icon-map-pin text-base"></div>
              <span>TETOUAN, Morocco</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="icon-cake text-base"></div>
              <span>25/07/2007</span>
            </div>
          </div>
        </header>

        <section className="mb-3">
          <h2 className="text-lg font-bold text-[var(--primary-color)] mb-1.5 border-b border-[var(--accent-color)] pb-1">
            PROFESSIONAL SUMMARY
          </h2>
          <p className="text-sm text-[var(--text-dark)] leading-relaxed">
            A passionate computer science student from Tetouan, Recently obtained Baccalaureate Certificate in 2025. Known for being organized, well-presented, intelligent, and ambitious. Continuously developing technical skills through AI tools and tutorials. Athletic background with national championship achievement. Always seeking knowledge across different fields with a proven track record of achieving set goals.
          </p>
        </section>

        <section className="mb-3">
          <h2 className="text-lg font-bold text-[var(--primary-color)] mb-1.5 border-b border-[var(--accent-color)] pb-1">
            SKILLS
          </h2>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <h3 className="font-bold text-[var(--text-dark)] mb-1 text-sm">Programming</h3>
              <p className="text-xs text-[var(--text-light)]">Knowledge of several programming languages with hands-on coding experience. Leveraging AI tools and tutorials for development.</p>
            </div>
            <div>
              <h3 className="font-bold text-[var(--text-dark)] mb-1 text-sm">Cybersecurity</h3>
              <p className="text-xs text-[var(--text-light)]">Strong interest and practical knowledge in cybersecurity concepts with continuous skill improvement.</p>
            </div>
            <div>
              <h3 className="font-bold text-[var(--text-dark)] mb-1 text-sm">Design & Editing</h3>
              <p className="text-xs text-[var(--text-light)]">Proficient in Photoshop for design and photo editing. Experienced in video editing with completed projects.</p>
            </div>
            <div>
              <h3 className="font-bold text-[var(--text-dark)] mb-1 text-sm">Audio Engineering</h3>
              <p className="text-xs text-[var(--text-light)]">Skilled in sound setup including microphones, speakers, and music coordination for events.</p>
            </div>
            <div>
              <h3 className="font-bold text-[var(--text-dark)] mb-1 text-sm">Soft Skills</h3>
              <p className="text-xs text-[var(--text-light)]">Organized, well-presented, Athletic, Quick learner, Versatile, Ambitious, And Intelligent.</p>
            </div>
          </div>
        </section>

        <section className="mb-3">
          <h2 className="text-lg font-bold text-[var(--primary-color)] mb-1.5 border-b border-[var(--accent-color)] pb-1">
            EXPERIENCE
          </h2>
          <ul className="space-y-0.5">
            <li className="flex items-start gap-2">
              <span className="text-[var(--primary-color)] font-bold">•</span>
              <span className="text-sm text-[var(--text-dark)]">Organized and coordinated school activities and events, taking initiative in event management.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--primary-color)] font-bold">•</span>
              <span className="text-sm text-[var(--text-dark)]">Filmed school events and celebrations, capturing important moments.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--primary-color)] font-bold">•</span>
              <span className="text-sm text-[var(--text-dark)]">Managed complete audio setup including microphones, speakers, and music coordination.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--primary-color)] font-bold">•</span>
              <span className="text-sm text-[var(--text-dark)]">Developed personal projects in programming and design using various technologies.</span>
            </li>
          </ul>
        </section>

        <section className="mb-3">
          <h2 className="text-lg font-bold text-[var(--primary-color)] mb-1.5 border-b border-[var(--accent-color)] pb-1">
            SPORTS & ATHLETICS
          </h2>
          <ul className="space-y-0.5 mb-3">
            <li className="flex items-start gap-2">
              <span className="text-[var(--primary-color)] font-bold">•</span>
              <span className="text-sm text-[var(--text-dark)]"><strong>Handball:</strong> National School Championship Winner 2022, Active player with Ittihad Fkih Ben Saleh Handball Club</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--primary-color)] font-bold">•</span>
              <span className="text-sm text-[var(--text-dark)]"><strong>Cycling:</strong> Regular practice as part of athletic training</span>
            </li>
          </ul>
        </section>

        <section className="mb-3">
          <h2 className="text-lg font-bold text-[var(--primary-color)] mb-1.5 border-b border-[var(--accent-color)] pb-1">
            LANGUAGES
          </h2>
          <div className="grid grid-cols-3 gap-2">
            <div>
              <p className="font-bold text-[var(--text-dark)] text-sm">Arabic</p>
              <p className="text-xs text-[var(--text-light)]">Excellent</p>
            </div>
            <div>
              <p className="font-bold text-[var(--text-dark)] text-sm">French</p>
              <p className="text-xs text-[var(--text-light)]">Intermediate</p>
            </div>
            <div>
              <p className="font-bold text-[var(--text-dark)] text-sm">English</p>
              <p className="text-xs text-[var(--text-light)]">Good</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CVApp />);