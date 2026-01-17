import React from 'react';
import { useTheme } from 'styles';
import { Box, Container } from 'components/atomic/Container';
import { Button } from '@mui/material';
import { Typography } from '../components/atomic/Typography';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { TopicGroup } from './TopicGroup';

export function Overview() {
  const theme = useTheme();

  return (
    <Container maxWidth={false}>
      <Typography
        variant={'h2Lg'}
        sx={{
          backgroundColor: 'bisque',
          paddingLeft: theme.spacing(2),
          // fontSize: theme.spacing(4),
          // fontWeight: 'bold',
        }}
      >
        課程簡介
      </Typography>
      <TopicGroup />
      <Box mt={10} sx={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Button
          variant='contained'
          size='large'
          endIcon={<CloudDownloadIcon />}
          href={
            'https://drive.google.com/file/d/1LN9OgC8tnLO_T5vhzyNumoEu860TSppl/view?usp=sharing'
          }
          target='_blank'
          rel='noopener'
          sx={{
            backgroundColor: theme.palette.buttonBg,
            color: theme.palette.primary.main,
          }}
        >
          下載課程簡介
        </Button>
      </Box>
    </Container>
  );
}
