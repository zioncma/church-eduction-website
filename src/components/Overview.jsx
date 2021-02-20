import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Typography,
  Container,
  Button,
} from '@material-ui/core';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
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
      <Box mt={4}></Box>
      <Box display={'flex'} justifyContent={'center'} mt={6}>
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
          {' '}
          下載課程簡介
        </Button>
      </Box>
    </Container>
  );
}
