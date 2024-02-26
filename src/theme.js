import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
    error: {
      light: "#ef9a9a",
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
      main: "#ffc400",
      dark: "#0000",
      contrastText: "#fafafa",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

export default theme;
