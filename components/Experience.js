function Experience() {
  try {
    const experiences = [
      'Organized and coordinated school activities and events, taking initiative in event management.',
      'Responsible for filming school events and celebrations, capturing important moments.',
      'Managed complete audio setup including microphones, speakers, and music coordination for events.',
      'Developed small personal projects in programming, utilizing various programming languages.',
      'Created design projects using Photoshop for image creation and photo editing.',
      'Produced video editing projects, demonstrating multimedia skills.'
    ];

    return (
      <section 
        id="experience" 
        className="py-20 bg-white relative"
        data-name="experience"
        data-file="components/Experience.js"
      >
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="section-title flex items-center justify-center gap-3">
            <div className="icon-briefcase text-4xl"></div>
            Experience
          </h2>
          <div className="card relative">
            <div className="absolute bottom-4 right-4 icon-award text-6xl text-[var(--accent-color)] opacity-20"></div>
            <ul className="space-y-4 relative z-10">
              {experiences.map((exp, index) => (
                <li key={index} className="flex items-start gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--secondary-color)] to-[var(--primary-color)] flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                    <div className="icon-check text-sm text-white"></div>
                  </div>
                  <p className="text-lg text-[var(--text-light)] group-hover:text-[var(--text-dark)] transition-colors">{exp}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Experience component error:', error);
    return null;
  }
}