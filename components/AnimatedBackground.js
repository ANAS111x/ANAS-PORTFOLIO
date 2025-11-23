function AnimatedBackground() {
  try {
    const shapes = [
      { icon: 'code', top: '10%', left: '5%', size: '60px', delay: '0s', animation: 'float' },
      { icon: 'shield', top: '20%', right: '8%', size: '50px', delay: '1s', animation: 'float-reverse' },
      { icon: 'cpu', top: '35%', left: '10%', size: '45px', delay: '2s', animation: 'float' },
      { icon: 'trophy', top: '50%', right: '5%', size: '55px', delay: '0.5s', animation: 'float-reverse' },
      { icon: 'palette', top: '65%', left: '7%', size: '48px', delay: '1.5s', animation: 'float' },
      { icon: 'globe', top: '75%', right: '10%', size: '52px', delay: '2.5s', animation: 'float-reverse' },
      { icon: 'zap', top: '15%', left: '85%', size: '42px', delay: '3s', animation: 'float' },
      { icon: 'heart', top: '45%', left: '15%', size: '38px', delay: '1s', animation: 'pulse-slow' },
      { icon: 'star', top: '60%', right: '15%', size: '44px', delay: '2s', animation: 'pulse-slow' },
      { icon: 'sparkles', top: '30%', left: '50%', size: '40px', delay: '0s', animation: 'float' }
    ];

    return (
      <div 
        className="fixed inset-0 overflow-hidden pointer-events-none"
        data-name="animated-background"
        data-file="components/AnimatedBackground.js"
      >
        {shapes.map((shape, index) => (
          <div
            key={index}
            className={`absolute animate-${shape.animation}`}
            style={{
              top: shape.top,
              left: shape.left,
              right: shape.right,
              animationDelay: shape.delay
            }}
          >
            <div 
              className={`icon-${shape.icon} text-[var(--accent-color)] opacity-20`}
              style={{ fontSize: shape.size }}
            ></div>
          </div>
        ))}
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--primary-color)] opacity-5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[var(--secondary-color)] opacity-5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
    );
  } catch (error) {
    console.error('AnimatedBackground component error:', error);
    return null;
  }
}