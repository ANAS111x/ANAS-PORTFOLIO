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

      <div className="max-w-4xl mx-auto bg-white shadow-lg my-8 p-12">
        <header className="border-b-4 border-[var(--primary-color)] pb-6 mb-6">
          <h1 className="text-5xl font-bold text-[var(--primary-color)] mb-2">ANAS ZOUZOU</h1>
          <p className="text-xl text-[var(--text-light)] mb-4">
            Computer Science Student | Programmer | Cybersecurity Enthusiast
          </p>
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

        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[var(--primary-color)] mb-3 border-b-2 border-[var(--accent-color)] pb-2">
            PROFESSIONAL SUMMARY
          </h2>
          <p className="text-[var(--text-dark)] leading-relaxed">
            A passionate student in computer science, programming, and cybersecurity, seeking to develop technical and creative skills and contribute to innovative projects. Known for initiative, organization, and a strong commitment to continuous learning and achieving results. Holds a Baccalaureate Certificate.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[var(--primary-color)] mb-3 border-b-2 border-[var(--accent-color)] pb-2">
            SKILLS
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold text-[var(--text-dark)] mb-2">Programming</h3>
              <p className="text-sm text-[var(--text-light)]">Knowledge of programming fundamentals, experience using AI tools for development, and strong self-learning abilities.</p>
            </div>
            <div>
              <h3 className="font-bold text-[var(--text-dark)] mb-2">Cybersecurity</h3>
              <p className="text-sm text-[var(--text-light)]">Familiarity with basic cybersecurity concepts and practical application of principles.</p>
            </div>
            <div>
              <h3 className="font-bold text-[var(--text-dark)] mb-2">Design & Editing</h3>
              <p className="text-sm text-[var(--text-light)]">Proficient in Photoshop for image design and editing, as well as audio and video editing.</p>
            </div>
            <div>
              <h3 className="font-bold text-[var(--text-dark)] mb-2">Soft Skills</h3>
              <p className="text-sm text-[var(--text-light)]">Organized, presentable, quick learner, versatile, ambitious, and intelligent.</p>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[var(--primary-color)] mb-3 border-b-2 border-[var(--accent-color)] pb-2">
            EXPERIENCE
          </h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-[var(--primary-color)] font-bold">•</span>
              <span className="text-[var(--text-dark)]">Assisted in organizing school activities and events.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--primary-color)] font-bold">•</span>
              <span className="text-[var(--text-dark)]">Managed photography and audio (microphones and music) during school events.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--primary-color)] font-bold">•</span>
              <span className="text-[var(--text-dark)]">Completed small personal projects in programming and design.</span>
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[var(--primary-color)] mb-3 border-b-2 border-[var(--accent-color)] pb-2">
            LANGUAGES
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="font-bold text-[var(--text-dark)]">Arabic</p>
              <p className="text-sm text-[var(--text-light)]">Excellent</p>
            </div>
            <div>
              <p className="font-bold text-[var(--text-dark)]">French</p>
              <p className="text-sm text-[var(--text-light)]">Intermediate</p>
            </div>
            <div>
              <p className="font-bold text-[var(--text-dark)]">English</p>
              <p className="text-sm text-[var(--text-light)]">Good</p>
            </div>
          </div>
        </section>

        <footer className="text-center text-sm text-[var(--text-light)] mt-8 pt-6 border-t border-gray-200">
          <p>© 2025 ANAS ZOUZOU. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CVApp />);