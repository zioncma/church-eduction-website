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
      // light: will be calculated from palette.primary.main,
      main: "#2C2C2C",
      // dark: will be calculated from palette.primary.main,
      contrastText: "#FEFEFE",
    },
    secondary: {
      light: "#DCEAEB",
      main: "#88BBBC",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#ffcc00",
    },
    text: {
      primary: "#373737",
      secondary: "#7E7E7E",
    },
  },
});

themeInstance.typography.h1 = {
  fontSize: "1.2rem",
  [themeInstance.breakpoints.up("md")]: {
    fontSize: "2.4rem",
  },
  lineHeight: 1.567,
};

const useStyles = makeStyles((theme) => ({}));

export default function Theme(props) {
  return <ThemeProvider theme={themeInstance}>{props.children}</ThemeProvider>;
}
