import React from 'react';
import MuiTypography from '@mui/material/Typography';

/**
 * requires to import @fontsource/roboto css files
 * e.g.
 * import '@fontsource/roboto/300.css';
 * import '@fontsource/roboto/400.css';
 * import '@fontsource/roboto/500.css';
 * import '@fontsource/roboto/700.css';
 */
export function Typography(props) {
  return <MuiTypography {...props}/>
}