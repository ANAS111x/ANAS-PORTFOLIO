function About() {
  try {
    return (
      <section 
        id="about" 
        className="py-20 bg-white relative"
        data-name="about"
        data-file="components/About.js"
      >
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="section-title flex items-center justify-center gap-3">
            <div className="icon-user text-4xl"></div>
            About Me
          </h2>
          <div className="card relative overflow-hidden">
            <div className="absolute top-4 right-4 icon-sparkles text-6xl text-[var(--accent-color)] opacity-30"></div>
            <p className="text-lg text-center text-[var(--text-light)] leading-relaxed mb-4">
              A passionate computer science student from Tetouan, I have just obtained my baccalaureate in 2025 and continuously work on improving my technical skills. Known for being organized, well-presented, intelligent, and ambitious. I love learning new things and expanding my knowledge across different fields. My family says when I set a goal, I always achieve it.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="flex items-center gap-3 p-4 bg-[var(--accent-color)] rounded-lg">
                <div className="icon-award text-2xl text-[var(--primary-color)]"></div>
                <p className="text-base font-semibold text-[var(--primary-color)]">
                  Baccalaureate Certificate 2025
                </p>
              </div>
              <div className="flex items-center gap-3 p-4 bg-[var(--accent-color)] rounded-lg">
                <div className="icon-trophy text-2xl text-[var(--primary-color)]"></div>
                <p className="text-base font-semibold text-[var(--primary-color)]">
                  National School Champion 2022
                </p>
              </div>
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