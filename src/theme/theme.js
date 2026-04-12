// theme.js
import { createTheme } from "@mui/material/styles";
import { typography } from "./typography";
import { overridesLight } from "./overrides";

// Light Theme Configuration
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#023b94",
      light: "#4e6d8f",
      dark: "#023a96",
      contrastText: "#ffffff",
    },

    secondary: {
      main: "#67bed9",
      light: "#b1d3f0",
      dark: "#133b75",
      contrastText: "#023b94",
    },

    background: {
      default: "#f6fdfd",
      paper: "#ffffff",
    },

    text: {
      primary: "#133b75",
      secondary: "#4e6d8f",
    },

    divider: "#c1dbf3",

    info: {
      main: "#67bed9",
    },

    success: {
      main: "#2e7d32",
    },

    warning: {
      main: "#ed6c02",
    },

    error: {
      main: "#d32f2f",
    },
  },
  typography: typography,
});

lightTheme.components = overridesLight(lightTheme);

export default lightTheme;
