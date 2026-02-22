//Styles
import { ThemeProvider, themeInstance } from '../styles';

export function Theme(props) {
  return <ThemeProvider theme={themeInstance}>{props.children}</ThemeProvider>;
}
