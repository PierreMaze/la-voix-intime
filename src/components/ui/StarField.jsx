import { useMemo } from "react";

export const StarField = () => {
  // Génération d'étoiles aléatoires (une seule fois)
  const stars = useMemo(() => {
    const starsArray = [];
    for (let i = 0; i < 150; i++) {
      starsArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1, // Étoiles légèrement plus grosses
        opacity: Math.random() * 0.6 + 0.2, // Opacité légèrement plus visible
        twinkle: Math.random() * 3 + 2, // Scintillement plus lent
        delay: Math.random() * 5, // Délai aléatoire pour éviter la synchronisation
      });
    }
    return starsArray;
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
      {/* Fond de voie lactée - complètement statique */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at center, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
            radial-gradient(ellipse at 20% 30%, rgba(147, 51, 234, 0.15) 0%, transparent 40%),
            radial-gradient(ellipse at 80% 70%, rgba(59, 130, 246, 0.15) 0%, transparent 40%),
            linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #475569 75%, #64748b 100%)
          `,
          backgroundSize: "100% 100%, 100% 100%, 100% 100%, 100% 100%",
        }}
      />

      {/* Étoiles fixes - sans aucune animation de mouvement */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animation: `twinkle ${star.twinkle}s ease-in-out infinite alternate`,
            animationDelay: `${star.delay}s`,
            boxShadow: `0 0 ${star.size * 0.02}px rgba(255, 255, 255, ${
              star.opacity * 0.5
            })`,
          }}
        />
      ))}

      {/* Nébuleuse colorée - complètement statique */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 30% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.05) 0%, transparent 60%)
          `,
          backgroundSize: "100% 100%, 100% 100%, 100% 100%",
        }}
      />

      {/* Poussière d'étoiles */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 20px 30px, rgba(255, 255, 255, 0.1), transparent),
            radial-gradient(1px 1px at 40px 70px, rgba(255, 255, 255, 0.08), transparent),
            radial-gradient(0.5px 0.5px at 90px 40px, rgba(255, 255, 255, 0.12), transparent),
            radial-gradient(0.5px 0.5px at 130px 80px, rgba(255, 255, 255, 0.1), transparent),
            radial-gradient(1px 1px at 160px 30px, rgba(255, 255, 255, 0.08), transparent)
          `,
          backgroundRepeat: "repeat",
          backgroundSize:
            "200px 100px, 300px 150px, 250px 120px, 350px 180px, 280px 140px",
        }}
      />

      <style jsx>{`
        @keyframes twinkle {
          0% {
            opacity: 0.3;
            box-shadow: 0 0 2px rgba(255, 255, 255, 0.3);
          }
          100% {
            opacity: 1;
            box-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
          }
        }
      `}</style>
    </div>
  );
};
