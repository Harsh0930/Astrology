import { useEffect, useMemo, useState } from "react";
import { Typography } from "@mui/material";
import { useReveal } from "../hooks/useReveal";

function parseValue(value) {
  const match = String(value).match(/([\d.]+)/);
  const numeric = match ? Number(match[1]) : 0;
  const prefix = match ? String(value).slice(0, match.index) : "";
  const suffix = match ? String(value).slice((match.index ?? 0) + match[1].length) : String(value);
  const decimals = match && match[1].includes(".") ? match[1].split(".")[1].length : 0;
  return { numeric, prefix, suffix, decimals };
}

export function AnimatedCounter({ value, className = "" }) {
  const { ref, visible } = useReveal();
  const { numeric, prefix, suffix, decimals } = useMemo(() => parseValue(value), [value]);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!visible) {
      return undefined;
    }

    let frameId = 0;
    const start = performance.now();
    const duration = 1200;

    const tick = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setDisplay(numeric * eased);
      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    frameId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frameId);
  }, [numeric, visible]);

  return (
    <Typography ref={ref} variant="h3" className={className}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </Typography>
  );
}
