function Sports() {
  try {
    const achievements = [
      {
        icon: 'trophy',
        title: 'National School Championship 2022',
        sport: 'Handball',
        description: 'Won the national school championship with my school handball team.'
      },
      {
        icon: 'dribbble',
        title: 'Club Player',
        sport: 'Handball',
        description: 'Active player with Ittihad Fkih Ben Saleh Handball Club.'
      },
      {
        icon: 'bike',
        title: 'Cycling',
        sport: 'Cycling',
        description: 'Practice cycling regularly as part of athletic training.'
      }
    ];

    return (
      <section 
        id="sports" 
        className="py-20 bg-white"
        data-name="sports"
        data-file="components/Sports.js"
      >
        <div className="container mx-auto px-6">
          <h2 className="section-title flex items-center justify-center gap-3">
            <div className="icon-trophy text-4xl"></div>
            Sports & Athletics
          </h2>
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-lg text-center text-[var(--text-light)] leading-relaxed">
              I am passionate about sports and maintain an active athletic lifestyle, competing at both school and club levels.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="card text-center group hover:scale-105 transition-transform">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br from-[var(--secondary-color)] to-[var(--primary-color)] mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                  <div className={`icon-${achievement.icon} text-3xl text-white`}></div>
                </div>
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-sm text-[var(--secondary-color)] font-semibold mb-2">{achievement.sport}</p>
                <p className="text-[var(--text-light)]">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Sports component error:', error);
    return null;
  }
}