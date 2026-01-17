import { createTheme as createMuiTheme, Theme, useTheme as useMuiTheme, ThemeProvider as MuiThemeProvider} from '@mui/material/styles';
export { makeStyles } from '@mui/styles';
export { styled } from '@mui/material/styles';

declare module '@mui/styles' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

declare module '@mui/material/styles' {
  interface Palette {
    logo: Palette['primary'];
    buttonBg: Palette['primary'];
  }

  interface PaletteOptions {
    logo?: string;
    buttonBg?: string;
  }

  interface TypographyVariants {
    h2Lg: React.CSSProperties;
  }

  // allow configuration using `createTheme()`
  interface TypographyVariantsOptions {
    h2Lg?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h2Lg: true;
  }
}

export const createTheme = createMuiTheme;
export const ThemeProvider = MuiThemeProvider;

const palette = {
  primary: {
    light: '#353535',
    main: '#282828',
    // dark: will be calculated from palette.primary.main,
    contrastText: '#FEFEFE',
  },
  secondary: {
    main: '#8395a7',
    // dark: will be calculated from palette.secondary.main,
    contrastText: '#ffcc00',
  },
  text: {
    primary: '#373737',
    secondary: '#fcfcfc',
    // secondary: "#808080",
  },
  logo: '#DACA37',
  buttonBg: '#e0e0e0',
};

export const themeInstance = createMuiTheme({
  //Colors
  palette,
  typography: {
    h2Lg: {
      fontSize: '2rem',
      fontWeight: 'bold',
      lineHeight: 1.567,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          // Map the new variant to render a <h2> by default
          h2Lg: 'h2',
        },
      },
    },
  },
});

// typography
themeInstance.typography.h1 = {
  fontSize: '1.9rem',
  [themeInstance.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
  lineHeight: 1.567,
  fontWeight: 'bold',
};

themeInstance.typography.h2 = {
  fontSize: '1.1rem',
  [themeInstance.breakpoints.up('md')]: {
    fontSize: '1.5rem',
  },
  lineHeight: 1.567,
};

export const useTheme = useMuiTheme;