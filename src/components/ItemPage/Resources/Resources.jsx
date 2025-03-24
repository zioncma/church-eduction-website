import React from 'react';
import File from './File';
import { Box } from 'components/atomic/Container';
import { Typography } from 'components/atomic/Typography';
import { ErrorBoundary } from 'features/error-handling';
import { Grid2 } from 'components/atomic/Grid';
import { muiTheme } from 'styles';

export default function Resources(props) {
  const { files } = props;
  const theme = muiTheme;
  // console.debug('Resources files:', files);
  const listFiles = files
    ? files.map((file, index) => (
        <Grid2 key={'file-grid-' + index}>
          <File {...file} />
        </Grid2>
      ))
    : '';

  return (
    <Box sx={{ marginBottom: theme.spacing(2) }}>
      <Typography variant='h2' sx={{fontWeight: 'bold'}}>檔案下載</Typography>
      <ErrorBoundary>
        <Grid2 container spacing={3} sx={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {listFiles}
        </Grid2>
      </ErrorBoundary>
    </Box>
  );
}
