//Styles
import {
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";

const themeInstance = createMuiTheme({
  //Colors
  palette: {
    primary: {
      light: "#353535",
      main: "#282828",
      // dark: will be calculated from palette.primary.main,
      contrastText: "#FEFEFE",
    },
    secondary: {
      main: "#8395a7",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#ffcc00",
    },
    text: {
      primary: "#373737",
      white: "#fcfcfc",
      secondary: "#808080",
    },
    logo: "#DACA37"
  },
});

themeInstance.typography.h1 = {
  fontSize: "1.9rem",
  [themeInstance.breakpoints.up("md")]: {
    fontSize: "2.4rem",
  },
  lineHeight: 1.567,
};

themeInstance.typography.h2 = {
  fontSize: "1.1rem",
  [themeInstance.breakpoints.up("md")]: {
    fontSize: "1.5rem",
  },
  lineHeight: 1.567,
};

export default function Theme(props) {
  return <ThemeProvider theme={themeInstance}>{props.children}</ThemeProvider>;
}
