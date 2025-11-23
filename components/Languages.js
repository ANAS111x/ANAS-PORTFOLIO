function Languages() {
  try {
    const languages = [
      { name: 'Arabic', level: 'Excellent', percentage: 100 },
      { name: 'French', level: 'Intermediate', percentage: 70 },
      { name: 'English', level: 'Good', percentage: 80 }
    ];

    return (
      <section 
        id="languages" 
        className="py-20 bg-[var(--bg-light)]"
        data-name="languages"
        data-file="components/Languages.js"
      >
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="section-title flex items-center justify-center gap-3">
            <div className="icon-globe text-4xl"></div>
            Languages
          </h2>
          <div className="card">
            <div className="space-y-6">
              {languages.map((lang, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-bold text-lg">{lang.name}</span>
                    <span className="text-[var(--text-light)]">{lang.level}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-[var(--primary-color)] h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${lang.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Languages component error:', error);
    return null;
  }
}