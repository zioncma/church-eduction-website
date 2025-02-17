import React from 'react';
import { makeStyles } from 'styles';
import Button from '@mui/material/Button';
import { Box, Container } from 'components/atomic/Container';
import { Typography } from '../components/atomic/Typography';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { TopicGroup } from './TopicGroup';

export const useStyles = makeStyles((theme) => ({
  cardRoot: {
    width: theme.spacing(35),
    height: theme.spacing(36),
    borderRadius: 15,
  },
  sectionHeading: {
    backgroundColor: 'bisque',
    paddingLeft: theme.spacing(2),
    fontSize: theme.spacing(4),
  },
}));

export default function Overview() {
  const classes = useStyles();

  return (
    <Container>
      <Typography variant={'h2'} className={classes.sectionHeading}>
        課程簡介
      </Typography>
      <TopicGroup />
      <Box display={'flex'} mt={10} justifyContent={'center'}>
        <Button
          variant='contained'
          size='large'
          endIcon={<CloudDownloadIcon />}
          href={
            'https://drive.google.com/file/d/1LN9OgC8tnLO_T5vhzyNumoEu860TSppl/view?usp=sharing'
          }
          target='_blank'
          rel='noopener'
        >
          下載課程簡介
        </Button>
      </Box>
    </Container>
  );
}
