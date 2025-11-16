function Skills() {
  try {
    const skills = [
      {
        icon: 'code',
        title: 'Programming',
        description: 'Knowledge of programming fundamentals, experience using AI tools for development, and strong self-learning abilities.'
      },
      {
        icon: 'shield',
        title: 'Cybersecurity',
        description: 'Familiarity with basic cybersecurity concepts and practical application of principles.'
      },
      {
        icon: 'palette',
        title: 'Design & Editing',
        description: 'Proficient in Photoshop for image design and editing, as well as audio and video editing.'
      },
      {
        icon: 'brain',
        title: 'Soft Skills',
        description: 'Organized, presentable, quick learner, versatile, ambitious, and intelligent.'
      }
    ];

    return (
      <section 
        id="skills" 
        className="py-20 bg-[var(--bg-light)]"
        data-name="skills"
        data-file="components/Skills.js"
      >
        <div className="container mx-auto px-6">
          <h2 className="section-title">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="card">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-[var(--accent-color)] flex-shrink-0">
                    <div className={`icon-${skill.icon} text-2xl text-[var(--primary-color)]`}></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                    <p className="text-[var(--text-light)]">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Skills component error:', error);
    return null;
  }
}