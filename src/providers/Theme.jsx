//Styles
import { ThemeProvider, themeInstance } from '../styles';

export default function Theme(props) {
  return <ThemeProvider theme={themeInstance}>{props.children}</ThemeProvider>;
}
