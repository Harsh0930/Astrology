import { Button } from "@mui/material";
import { useRef } from "react";

export function MagneticButton({ className = "", children, ...props }) {
  const ref = useRef(null);

  const handleMove = (event) => {
    const node = ref.current;
    if (!node) {
      return;
    }

    const rect = node.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;

    node.style.transform = `translate(${offsetX * 0.08}px, ${offsetY * 0.12}px)`;
  };

  const handleLeave = () => {
    const node = ref.current;
    if (!node) {
      return;
    }
    node.style.transform = "translate(0px, 0px)";
  };

  return (
    <Button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`magnetic-button ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
}
