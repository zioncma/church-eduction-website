export const palette = {
  primary: '#4059ad',
  secondary: '#6b9ac4',
  tertiary: '#97d8c4',
  fourth: '#8181A5',
  fifth: '#2481cc',
  background: '#eff2f1',
  complement: '#f4b942',
  danger: '#d32f2f',
  alert: '#ffa000',
  success: '#388e3c',
  white: '#fff',
  grayscale: [
    '#212121',
    '#414141',
    '#616161',
    '#9e9e9e',
    '#bdbdbd',
    '#e0e0e0',
    '#eeeeee',
    '#ffffff',
  ],
  primaryText: '#212121',
  secondaryText: '#6C757D',
};

export const font = {
  heading: "'Montserrat', helvetica, arial, sans-serif",
  subheading: 'Cabin, Lora, Georgia, times, serif',
  normal: "'Hind Madurai', helvetica, arial, sans-serif",
  pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
  quote: 'Georgia, serif',
};

export const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};
