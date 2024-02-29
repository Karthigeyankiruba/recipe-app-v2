import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      // main: "#3f50b5",
      main: "#135946",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#9e9e9e",
      main: "#D2D2D2",
      dark: "#616161",
      contrastText: "#000",
    },
    error: {
      light: "#FF6666",
      main: "#e53935",
      dark: "#d50000",
      contrastText: "#ffebee",
    },
    grey: {
      light: "#90a4ae",
      main: "#455a64",
      dark: "#000",
      contrastText: "#eceff1",
    },
    warning: {
      light: "#ffe57f",
      main: "#FFB800",
      dark: "#0000",
      contrastText: "#fafafa",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

export default theme;
