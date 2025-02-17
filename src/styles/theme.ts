import { createTheme as createMuiTheme, Theme } from '@mui/material/styles';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
export { makeStyles } from '@mui/styles';
export { styled } from '@mui/material/styles';

declare module '@mui/styles' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

export const createTheme = createMuiTheme;
export const muiTheme = createMuiTheme();
export const ThemeProvider = MuiThemeProvider;
