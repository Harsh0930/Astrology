import { Box } from "@mui/material";
import { useReveal } from "../hooks/useReveal";

export function Reveal({ children, className = "", delay = 0, component = "section", ...props }) {
  const { ref, visible } = useReveal();

  return (
    <Box
      ref={ref}
      component={component}
      className={`reveal-block ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </Box>
  );
}
