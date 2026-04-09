import React, { useEffect, useRef } from 'react';

const ErrorPage = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animId;
        let particles = [];

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        class Particle {
            constructor() { this.reset(); }
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 1.5 + 0.3;
                this.speed = Math.random() * 0.4 + 0.1;
                this.opacity = Math.random() * 0.5 + 0.1;
                this.drift = (Math.random() - 0.5) * 0.3;
            }
            update() {
                this.y -= this.speed;
                this.x += this.drift;
                if (this.y < -5) this.reset(), this.y = canvas.height + 5;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 80, 60, ${this.opacity})`;
                ctx.fill();
            }
        }

        for (let i = 0; i < 80; i++) particles.push(new Particle());

        const loop = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => { p.update(); p.draw(); });
            animId = requestAnimationFrame(loop);
        };
        loop();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .ep-root {
          min-height: 100vh;
          background: #0a0804;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'DM Sans', sans-serif;
          overflow: hidden;
          position: relative;
        }

        .ep-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .ep-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,60,40,0.12) 0%, transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          animation: ep-pulse 4s ease-in-out infinite;
        }

        @keyframes ep-pulse {
          0%, 100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.08); }
        }

        .ep-card {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 0 24px;
          max-width: 560px;
          animation: ep-fadein 0.8s cubic-bezier(0.16,1,0.3,1) both;
        }

        @keyframes ep-fadein {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .ep-code-wrap {
          position: relative;
          display: inline-block;
          margin-bottom: 8px;
        }

        .ep-code {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(130px, 22vw, 200px);
          line-height: 1;
          color: #ff3c28;
          letter-spacing: -4px;
          position: relative;
          display: block;
          animation: ep-glitch 6s ease-in-out infinite;
          text-shadow:
            0 0 40px rgba(255,60,40,0.5),
            0 0 80px rgba(255,60,40,0.2);
        }

        @keyframes ep-glitch {
          0%, 88%, 92%, 100% {
            clip-path: none;
            transform: translate(0);
          }
          89% {
            clip-path: polygon(0 20%, 100% 20%, 100% 40%, 0 40%);
            transform: translate(-4px, 2px);
            color: #ff8040;
          }
          90% {
            clip-path: polygon(0 60%, 100% 60%, 100% 80%, 0 80%);
            transform: translate(4px, -2px);
            color: #ff3c28;
          }
          91% {
            clip-path: none;
            transform: translate(0);
          }
        }

        .ep-divider {
          width: 48px;
          height: 2px;
          background: #ff3c28;
          margin: 0 auto 28px;
          opacity: 0.7;
          animation: ep-fadein 0.8s 0.2s both;
        }

        .ep-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(22px, 4vw, 32px);
          color: #f0e8e0;
          letter-spacing: 3px;
          margin-bottom: 16px;
          animation: ep-fadein 0.8s 0.3s both;
        }

        .ep-desc {
          font-size: 15px;
          font-weight: 300;
          color: rgba(240,232,224,0.45);
          line-height: 1.7;
          margin-bottom: 40px;
          animation: ep-fadein 0.8s 0.4s both;
        }

        .ep-actions {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
          animation: ep-fadein 0.8s 0.5s both;
        }

        .ep-btn-primary {
          padding: 12px 32px;
          background: #ff3c28;
          color: #0a0804;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
        }

        .ep-btn-primary:hover {
          background: #ff5540;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(255,60,40,0.35);
        }

        .ep-btn-secondary {
          padding: 12px 32px;
          background: transparent;
          color: rgba(240,232,224,0.55);
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          border: 1px solid rgba(240,232,224,0.15);
          cursor: pointer;
          transition: color 0.2s, border-color 0.2s, transform 0.15s;
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
        }

        .ep-btn-secondary:hover {
          color: rgba(240,232,224,0.9);
          border-color: rgba(240,232,224,0.4);
          transform: translateY(-2px);
        }

        .ep-code-id {
          margin-top: 48px;
          font-size: 11px;
          letter-spacing: 2px;
          color: rgba(240,232,224,0.18);
          text-transform: uppercase;
          animation: ep-fadein 0.8s 0.6s both;
        }
      `}</style>

            <div className="ep-root">
                <canvas ref={canvasRef} className="ep-canvas" />
                <div className="ep-glow" />

                <div className="ep-card">
                    <div className="ep-code-wrap">
                        <span className="ep-code">404</span>
                    </div>

                    <div className="ep-divider" />

                    <h1 className="ep-title">Page Not Found</h1>

                    <p className="ep-desc">
                        The page you were looking for has vanished into the void.<br />
                        It may have been moved, deleted, or perhaps never existed.
                    </p>

                    <div className="ep-actions">
                        <button className="ep-btn-primary" onClick={() => window.history.back()}>
                            Go Back
                        </button>
                        <button className="ep-btn-secondary" onClick={() => window.location.href = '/'}>
                            Home
                        </button>
                    </div>

                    <p className="ep-code-id">Error · REF#A4F2-0040</p>
                </div>
            </div>
        </>
    );
};

export default ErrorPage;