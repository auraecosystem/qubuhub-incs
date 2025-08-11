import { useEffect, useState } from "react";

export default function Custom404() {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setGlitch((g) => !g), 350);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style jsx>{`
        .container {
          height: 100vh;
          background: #0a0a0a;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #00ffff;
          font-family: "Orbitron", sans-serif;
          font-size: 6rem;
          letter-spacing: 0.2em;
          position: relative;
          overflow: hidden;
        }
        .glitch {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: glitch-animation 1s infinite;
          color: #7f00ff;
          mix-blend-mode: screen;
          opacity: ${glitch ? 1 : 0};
        }

        @keyframes glitch-animation {
          0% {
            clip-path: inset(40% 0 45% 0);
            transform: translate(-2px, -2px);
          }
          50% {
            clip-path: inset(10% 0 60% 0);
            transform: translate(2px, 2px);
          }
          100% {
            clip-path: inset(40% 0 45% 0);
            transform: translate(-2px, -2px);
          }
        }
      `}</style>

      <div className="container" role="alert" aria-live="assertive">
        4<span className="glitch">0</span>4
      </div>
    </>
  );
}
