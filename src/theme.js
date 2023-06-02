import { createTheme } from "@mui/material";

export const shades = {
  primary: "#111",
  secondary: "#fff",
  neutral: "#555",
};

export const theme = createTheme({
  palette: {
    primary: {
      main: shades.primary,
    },
    secondary: {
      main: shades.secondary,
    },
    neutral: {
      main: shades.neutral,
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontSize: 15,
    h1: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 48,
    },
    h2: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 36,
    },
    h3: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 18,
    },
    h4: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 14,
    },
  },
});
