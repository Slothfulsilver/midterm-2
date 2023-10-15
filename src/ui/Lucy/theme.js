import { createTheme } from "@mui/material/styles";

export const THEME = createTheme({
  typography: {
    fontFamily: "'Orelega One', serif",
    fontSize: 20,
    fontWeightLight: 200,
    fontWeightRegular: 500,
    fontWeightMedium: 800,
  },
  palette: {
    primary: {
      main: "#FC94AF",
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: "#E0C2FF",
      light: "#F5EBFF",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#47008F",
    },
  },
});
