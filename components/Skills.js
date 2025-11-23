function Skills() {
  try {
    const skills = [
      {
        icon: 'code',
        title: 'Programming',
        description: 'Knowledge of several programming languages with hands-on coding experience. Leveraging AI tools and tutorials for continuous learning and development of personal projects.'
      },
      {
        icon: 'shield',
        title: 'Cybersecurity',
        description: 'Strong interest and practical knowledge in cybersecurity concepts, with continuous skill improvement in security principles and practices.'
      },
      {
        icon: 'palette',
        title: 'Design & Editing',
        description: 'Proficient in Photoshop for creating designs and photo editing. Experienced in video editing with completed personal projects.'
      },
      {
        icon: 'mic',
        title: 'Audio Engineering',
        description: 'Skilled in sound engineering including microphone setup, speaker management, and music coordination for events.'
      },
      {
        icon: 'brain',
        title: 'Soft Skills',
        description: 'Organized, well-presented, Athletic, quick learner, versatile, ambitious, and intelligent. Always seeking knowledge in diverse fields.'
      }
    ];

    return (
      <section 
        id="skills" 
        className="py-20 bg-[var(--bg-light)] relative"
        data-name="skills"
        data-file="components/Skills.js"
      >
        <div className="container mx-auto px-6">
          <h2 className="section-title flex items-center justify-center gap-3">
            <div className="icon-zap text-4xl"></div>
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="card relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-color)] to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl"></div>
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-[var(--secondary-color)] to-[var(--primary-color)] flex-shrink-0 shadow-md">
                    <div className={`icon-${skill.icon} text-2xl text-white`}></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                      {skill.title}
                      <div className="icon-chevron-right text-sm text-[var(--secondary-color)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </h3>
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