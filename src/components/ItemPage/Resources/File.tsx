import React from 'react';
import { Typography } from 'components/atomic/Typography';
import { Box } from 'components/atomic/Container';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import DescriptionIcon from '@mui/icons-material/Description';
import { blue } from '@mui/material/colors';
import { Button } from '@mui/material';
import { useTheme } from 'styles';
import { isFilledArray } from 'utils';
import { Grid2 } from '../../atomic/Grid';

export function File({ title = '', doc = '', ...optionals }) {
  const theme = useTheme();

  return (
    <Box
      width={130}
      sx={{
        lineHeight: '1rem',
        '& > *': {
          display: 'inline-block',
          verticalAlign: 'middle',
          lineHeight: '1rem',
        },
      }}
    >
      <DescriptionIcon style={{ color: blue[500] }} fontSize='small' />
      <Typography component='span'>{title}</Typography>
      <Button
        variant='contained'
        href={doc}
        size='small'
        endIcon={<CloudDownloadIcon />}
        // TODO: fix this type error
        //@ts-ignore
        sx={{
          backgroundColor: theme.palette.buttonBg,
          color: theme.palette.primary.main,
        }}
      >
        Download
      </Button>
    </Box>
  );
}

export function FileList({ files, ...optionals }) {
  if (!isFilledArray(files)) {
    return null;
  }

  return (
    <>
      {files.map((file, index) => (
        <Grid2 key={'file-grid-' + index}>
          <File title={file.title} doc={file.link} />
        </Grid2>
      ))}
    </>
  );
}
