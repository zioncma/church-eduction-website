import React from 'react';
import { FileList } from './File';
import { Box } from 'components/atomic/Container';
import { Typography } from 'components/atomic/Typography';
import { ErrorBoundary } from 'features/error-handling';
import { Grid2 } from 'components/atomic/Grid';
import { useTheme } from 'styles';

export function Resources({ files, ...optionals }) {
  const theme = useTheme();
  // console.debug('Resources files:', files);

  return (
    <Box sx={{ marginBottom: theme.spacing(2) }}>
      <Typography variant='h2' sx={{ fontWeight: 'bold' }}>
        檔案下載
      </Typography>
      <ErrorBoundary>
        <Grid2
          container
          spacing={3}
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <FileList files={files} />
        </Grid2>
      </ErrorBoundary>
    </Box>
  );
}
