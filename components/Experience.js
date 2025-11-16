function Experience() {
  try {
    const experiences = [
      'Assisted in organizing school activities and events.',
      'Managed photography and audio (microphones and music) during school events.',
      'Completed small personal projects in programming and design.'
    ];

    return (
      <section 
        id="experience" 
        className="py-20 bg-white"
        data-name="experience"
        data-file="components/Experience.js"
      >
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="section-title">Experience</h2>
          <div className="card">
            <ul className="space-y-4">
              {experiences.map((exp, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-[var(--primary-color)] mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-[var(--text-light)]">{exp}</p>
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