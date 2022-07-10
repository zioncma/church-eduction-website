import 'styled-components';

interface IColorsPalette {
  primary: string;
  secondary: string;
  tertiary: string;
  fourth?: string;
  fifth?: string;
  danger: string;
  success: string;
  warn?: string;
  alert?: string;
  primaryText?: string;
  secondaryText?: string;
  [x: string]: any;
}

type IFontSizes = {
  mobileS?: string;
  mobileM?: string;
  mobileL?: string;
  tablet?: string;
  laptop?: string;
  laptopL?: string;
  desktop?: string;
};

type IFont = {
  heading: string;
  subheading: string;
  normal: string;
  pre: string;
  quote: string;
};

type IDevice = {
  mobileS: string;
  mobileM: string;
  mobileL: string;
  tablet: string;
  laptop: string;
  laptopL: string;
  desktop: string;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: IColorsPalette;
    font: IFont;
    size: IFontSizes;
    device?: IDevice;
  }
}
