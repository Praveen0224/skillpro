import React, { useEffect, useRef } from 'react';

export default function BackgroundFX() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle constellation
    const particleCount = Math.min(width > 1200 ? 55 : 30, 60);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 1.8 + 0.6,
      alpha: Math.random() * 0.6 + 0.2,
      color: Math.random() > 0.6 ? '#00f0ff' : Math.random() > 0.3 ? '#8b5cf6' : '#0066ff'
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 240, 255, ${0.12 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1.0;
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#030712]">
      {/* Dynamic gradient orbs */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[130px] animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute top-1/3 -right-40 w-[650px] h-[650px] rounded-full bg-purple-600/10 blur-[140px] animate-pulse" style={{ animationDuration: '10s' }} />
      <div className="absolute -bottom-40 left-1/3 w-[700px] h-[700px] rounded-full bg-blue-600/10 blur-[150px] animate-pulse" style={{ animationDuration: '9s' }} />

      {/* Cyber Grid pattern */}
      <div className="absolute inset-0 cyber-grid opacity-30" />

      {/* Interactive / Ambient Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Subtle scanline */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.015] to-transparent bg-[length:100%_4px] pointer-events-none" />

      {/* High-tech HUD corner markings */}
      <div className="absolute top-4 left-6 flex items-center space-x-2 text-[10px] font-mono tracking-widest text-cyan-400/40 uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping inline-block" />
        <span>SYS.ONLINE // SKILLPRO_KEYNOTE_2026</span>
      </div>
      <div className="absolute top-4 right-6 text-[10px] font-mono tracking-widest text-purple-400/40 uppercase hidden sm:block">
        <span>RES: ULTRA_HD // 100VH_SYNC</span>
      </div>
      <div className="absolute bottom-4 left-6 text-[10px] font-mono tracking-widest text-slate-500/40 uppercase hidden md:block">
        <span>SECURITY PROTOCOL: LIVE</span>
      </div>
      <div className="absolute bottom-4 right-6 text-[10px] font-mono tracking-widest text-slate-500/40 uppercase hidden md:block">
        <span>ENGAGE_STAGE: READY</span>
      </div>
    </div>
  );
}

