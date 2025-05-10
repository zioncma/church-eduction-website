import React from 'react';
import { Box } from '../../components/atomic/Container';
import defaultbg from 'styles/assets/defaultBg.jpg';
import { makeStyles, muiTheme } from '../../styles';

export default function Intro(props) {
  const {
    bg,
    children,
    ...optionals
  }: { bg: string; children: any; [x: string]: any } = props;
  const theme = muiTheme;

  const useStyles = makeStyles((theme) => ({
    intro: {
      maxHeight: '40vh',
      minHeight: 'calc(260px - 3vw)',
      [theme.breakpoints.down('md')]: {
        minHeight: theme.spacing(35),
      },
      overflow: 'hidden',
      backgroundImage: `url(${props.bg ? props.bg : defaultbg.src})`,
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
      <Box
        className={classes.intro}
        sx={{
          maxWidth: 1,
          maxHeight: '40vh',
          minHeight: 'calc(260px - 3vw)',
          [theme.breakpoints.down('md')]: {
            minHeight: theme.spacing(35),
          },
          overflow: 'hidden',
          backgroundImage: `url(${props.bg ? props.bg : defaultbg.src})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Box
          className={classes.text}
          sx={{
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
          }}
        >
          {props.children}
        </Box>
      </Box>
    </header>
  );
}
