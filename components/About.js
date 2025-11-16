function About() {
  try {
    return (
      <section 
        id="about" 
        className="py-20 bg-white"
        data-name="about"
        data-file="components/About.js"
      >
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="section-title">About Me</h2>
          <div className="card">
            <p className="text-lg text-center text-[var(--text-light)] leading-relaxed mb-4">
              A passionate student in computer science, programming, and cybersecurity, seeking to develop technical and creative skills and contribute to innovative projects. Known for initiative, organization, and a strong commitment to continuous learning and achieving results.
            </p>
            <div className="flex items-center justify-center gap-3 mt-6 p-4 bg-[var(--accent-color)] rounded-lg">
              <div className="icon-award text-2xl text-[var(--primary-color)]"></div>
              <p className="text-lg font-semibold text-[var(--primary-color)]">
                Holds a Baccalaureate Certificate
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    return null;
  }
}