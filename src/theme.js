import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#D4AF37",
      light: "#E7CB72",
      dark: "#A88514",
    },
    secondary: {
      main: "#8FB6FF",
      light: "#BCD3FF",
      dark: "#5E84D6",
    },
    background: {
      default: "#08111F",
      paper: "rgba(13, 23, 41, 0.88)",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#B5C1D7",
    },
  },
  typography: {
    fontFamily: '"Manrope", "Segoe UI", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: 700,
      fontSize: "clamp(1.9rem, 3vw + 1rem, 3.4rem)",
      lineHeight: 1.04,
      letterSpacing: "-0.026em",
    },
    h2: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: 700,
      fontSize: "clamp(1.75rem, 1.4vw + 1rem, 2.45rem)",
      lineHeight: 1.1,
      letterSpacing: "-0.022em",
    },
    h3: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: 600,
      fontSize: "clamp(1.4rem, 0.95vw + 1rem, 2rem)",
      lineHeight: 1.12,
      letterSpacing: "-0.018em",
    },
    h4: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: 600,
      fontSize: "clamp(1.25rem, 0.7vw + 0.95rem, 1.65rem)",
      lineHeight: 1.16,
      letterSpacing: "-0.014em",
    },
    h5: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: 600,
      fontSize: "clamp(1.125rem, 0.5vw + 0.95rem, 1.4rem)",
      lineHeight: 1.18,
      letterSpacing: "-0.01em",
    },
    h6: {
      fontWeight: 700,
      fontSize: "clamp(1rem, 0.3vw + 0.96rem, 1.125rem)",
      lineHeight: 1.24,
      letterSpacing: "-0.01em",
    },
    body1: {
      fontSize: "clamp(1rem, 0.35vw + 0.96rem, 1.125rem)",
      lineHeight: 1.68,
      letterSpacing: "0.0005em",
    },
    body2: {
      fontSize: "clamp(0.875rem, 0.12vw + 0.84rem, 0.95rem)",
      lineHeight: 1.52,
      letterSpacing: "0.001em",
    },
    caption: {
      fontSize: "clamp(0.75rem, 0.14vw + 0.74rem, 0.875rem)",
      lineHeight: 1.5,
      letterSpacing: "0.01em",
    },
    button: {
      textTransform: "none",
      fontWeight: 700,
      fontSize: "clamp(0.95rem, 0.14vw + 0.92rem, 1rem)",
      lineHeight: 1.2,
    },
  },
  shape: {
    borderRadius: 22,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          textRendering: "optimizeLegibility",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          minHeight: 48,
          borderRadius: 18,
          paddingInline: 18,
          fontWeight: 700,
        },
        contained: {
          background: "linear-gradient(135deg, #E7CB72 0%, #D4AF37 45%, #B88D1F 100%)",
          color: "#08111F",
          boxShadow: "0 18px 40px rgba(212, 175, 55, 0.16)",
        },
        outlined: {
          borderColor: "rgba(189, 205, 242, 0.24)",
          backgroundColor: "rgba(255, 255, 255, 0.02)",
        },
        text: {
          color: "#F6E4A5",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          fontWeight: 700,
          letterSpacing: "0.08em",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          background: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(18px)",
        },
        notchedOutline: {
          borderColor: "rgba(189, 205, 242, 0.16)",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#AAB7D0",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: "linear-gradient(180deg, rgba(9, 17, 33, 0.98), rgba(7, 12, 24, 0.98))",
          color: "#FFFFFF",
        },
      },
    },
  },
});
