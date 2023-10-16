import { createTheme } from "@mui/material/styles";

export const THEME = createTheme({
  typography: {
    fontFamily: "'Orelega One', serif",
    fontSize: '1.8rem',
    '@media (max-width:600px)': {
      fontSize: '1.2rem',
    },
    fontWeightLight: 200,
    fontWeightRegular: 500,
    fontWeightMedium: 800,
  },
  palette: {
    primary: {
      main: "#E0115F",
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: "#b54e5e",
      light: "#FFC0CB ",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#FFD9DF ",
    },
    background: {
      default: "#000000",
      paper: "#FFFFFF",
    },
  },
});
