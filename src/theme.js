import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#C79A5C",
    },
    secondary: {
      main: "#5EA58A",
    },
    background: {
      default: "#07110F",
      paper: "rgba(15, 28, 25, 0.92)",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#B5C3BB",
    },
  },
  typography: {
    fontFamily: '"Manrope", "Segoe UI", sans-serif',
    h1: {
      fontFamily: '"Cormorant Garamond", Georgia, serif',
      fontWeight: 700,
      fontSize: "clamp(1.75rem, 4vw + 0.7rem, 3.125rem)",
      lineHeight: 1.06,
      letterSpacing: "-0.03em",
    },
    h2: {
      fontFamily: '"Cormorant Garamond", Georgia, serif',
      fontWeight: 700,
      fontSize: "clamp(1.5rem, 2.1vw + 0.8rem, 2.25rem)",
      lineHeight: 1.1,
      letterSpacing: "-0.028em",
    },
    h3: {
      fontFamily: '"Cormorant Garamond", Georgia, serif',
      fontWeight: 600,
      fontSize: "clamp(1.25rem, 1.55vw + 0.85rem, 1.875rem)",
      lineHeight: 1.14,
      letterSpacing: "-0.022em",
    },
    h4: {
      fontFamily: '"Cormorant Garamond", Georgia, serif',
      fontWeight: 600,
      fontSize: "clamp(1.125rem, 1vw + 0.85rem, 1.625rem)",
      lineHeight: 1.16,
      letterSpacing: "-0.018em",
    },
    h5: {
      fontFamily: '"Cormorant Garamond", Georgia, serif',
      fontWeight: 600,
      fontSize: "clamp(1.125rem, 0.7vw + 0.95rem, 1.5rem)",
      lineHeight: 1.2,
      letterSpacing: "-0.014em",
    },
    h6: {
      fontWeight: 700,
      fontSize: "clamp(1rem, 0.4vw + 0.95rem, 1.25rem)",
      lineHeight: 1.24,
      letterSpacing: "-0.01em",
    },
    body1: {
      fontSize: "clamp(1rem, 0.45vw + 0.95rem, 1.25rem)",
      lineHeight: 1.72,
      letterSpacing: "0.002em",
    },
    body2: {
      fontSize: "clamp(0.75rem, 0.22vw + 0.72rem, 0.875rem)",
      lineHeight: 1.55,
      letterSpacing: "0.002em",
    },
    button: {
      textTransform: "none",
      fontWeight: 700,
      fontSize: "clamp(0.875rem, 0.22vw + 0.84rem, 1rem)",
      lineHeight: 1.2,
    },
  },
  shape: {
    borderRadius: 20,
  },
});
