import { createTheme } from "@mui/material/styles";

export const THEME2 = createTheme({
  typography: {
    fontFamily: "'Delicious Handrawn', cursive",
    fontSize: 20,
    fontWeightLight: 200,
    fontWeightRegular: 500,
    fontWeightMedium: 800,
  },
  palette: {
    primary: {
      main: "#c272db",
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: "#4f3557",
      light: "#E7E7E7",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#E7E7A1",
    },
    background: {
      default: "#000000",
      paper: "#FFFFFF",
    },
  },
});
