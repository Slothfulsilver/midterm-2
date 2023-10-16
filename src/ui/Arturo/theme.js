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
      main: "#E490FF",
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: "#E7E7C1",
      light: "#E7E7E7",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#E7E7A1",
    },
  },
});
