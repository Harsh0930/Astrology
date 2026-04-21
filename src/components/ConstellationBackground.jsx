import { useEffect, useState } from "react";

const stars = Array.from({ length: 34 }, (_, index) => ({
  id: index,
  top: `${6 + ((index * 13) % 86)}%`,
  left: `${3 + ((index * 19) % 92)}%`,
  size: `${2 + (index % 4)}px`,
  depth: 0.08 + (index % 5) * 0.035,
}));

export function ConstellationBackground() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursor, setCursor] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 26;
      const y = (event.clientY / window.innerHeight - 0.5) * 18;

      setPosition({ x, y });
      setCursor({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="constellation-shell" aria-hidden="true">
      <div
        className="constellation-layer constellation-layer-one"
        style={{ transform: `translate3d(${position.x * 0.35}px, ${position.y * 0.35}px, 0)` }}
      />
      <div
        className="constellation-layer constellation-layer-two"
        style={{ transform: `translate3d(${position.x * -0.26}px, ${position.y * -0.18}px, 0)` }}
      />
      <div
        className="cursor-nebula"
        style={{
          transform: `translate3d(${position.x * 0.16}px, ${position.y * 0.1}px, 0)`,
          left: `${cursor.x}%`,
          top: `${cursor.y}%`,
        }}
      />
      <div className="constellation-stars">
        {stars.map((star) => (
          <span
            key={star.id}
            className="constellation-star"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              transform: `translate3d(${position.x * star.depth}px, ${position.y * star.depth}px, 0)`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
