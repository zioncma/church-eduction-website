//Styles
import {
  ThemeProvider,
  makeStyles,
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
      secondary: "#a1a1a1",
    },
    logo: "#DACA37"
  },
});

themeInstance.typography.h1 = {
  fontSize: "1.2rem",
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

const useStyles = makeStyles((theme) => ({}));

export default function Theme(props) {
  return <ThemeProvider theme={themeInstance}>{props.children}</ThemeProvider>;
}
