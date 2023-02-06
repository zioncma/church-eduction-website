import React from 'react';
import { Box } from '@material-ui/core';
// import PropTypes from 'prop-types';
// import bg from "../../assets/bg.jpg";
import defaultbg from '../../assets/defaultBg.jpg';
import { makeStyles } from '@material-ui/core/styles';

export default function Intro(props) {
  const {
    bg,
    children,
    ...optionals
  }: { bg: string, children: any, [x: string]: any } = props;

  const useStyles = makeStyles((theme) => ({
    intro: {
      maxHeight: '40vh',
      minHeight: 'calc(260px - 3vw)',
      [theme.breakpoints.down('md')]: {
        minHeight: theme.spacing(35),
      },
      overflow: 'hidden',
      backgroundImage: `url(${props.bg ? props.bg : defaultbg})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
    text: {
      backgroundColor: 'rgba(255, 255, 255, 0.85)',
      padding: theme.spacing(2),
      paddingLeft: theme.spacing(3),
      marginTop: theme.spacing(4),
      width: '85%',
      [theme.breakpoints.up('sm')]: {
        width: '65%',
      },
      [theme.breakpoints.up('md')]: {
        width: '50%',
      },
      [theme.breakpoints.up('lg')]: {
        width: '39%',
      },
    },
  }));
  const classes = useStyles();

  return (
    <header>
      <Box maxWidth={1} className={classes.intro}>
        <Box className={classes.text}>{props.children}</Box>
      </Box>
    </header>
  );
}