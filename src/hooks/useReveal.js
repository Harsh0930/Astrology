import { useEffect, useRef, useState } from "react";

export function useReveal(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.18,
        ...options,
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return { ref, visible };
}
