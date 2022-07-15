import AppBar from '@material-ui/core/AppBar';
import { Typography, Toolbar, Box, Hidden } from '@material-ui/core';
import logo from '../../../assets/logo.png';
import SimpleMenu from '../../SimpleMenu';

import { makeStyles } from '@material-ui/core/styles';
const navTitleFont = "'Exo', sans-serif";

export default function Nav(props) {
  const useStyles = makeStyles((theme) => ({
    navTitlePadding: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(6),
    },
    navTitleFont: {
      fontFamily: navTitleFont,
      fontSize: theme.spacing(3),
    },
    image: {
      maxWidth: '100%',
    },
    linkWhiteNoDecor: {
      textDecoration: 'none',
      color: theme.palette.text.white,
    },
    singleLineContainer: {
      whiteSpace: 'nowrap',
      overflowX: 'auto',
      '& > *': {
        display: 'inline-block',
        color: theme.palette.text.white,
      },
      '&:visited': {
        textDecoration: 'none',
        color: theme.palette.text.white,
      },
    },
    logoColor: {
      color: theme.palette.logo,
    },
  }));
  const classes = useStyles();

  return (
    <nav>
      <AppBar position='static'>
        <Toolbar disableGutters>
          <a href='http://www.zioncma.ca/c' className={classes.linkWhiteNoDecor}>
            <Box className={classes.singleLineContainer} minWidth={295}>
              <Box maxWidth={38} mx={1} display={'inline-block'}>
                <img
                  className={classes.image}
                  src={logo}
                  alt='宣道會錫安堂LOGO'
                />
              </Box>
              <Typography className={`${classes.navTitleFont}`} noWrap>
                宣道會錫安堂
              </Typography>

              <Typography
                noWrap
                className={`${classes.navTitleFont} ${classes.logoColor}`}
              >
                -
              </Typography>
              <Typography noWrap>基教部</Typography>
            </Box>
          </a>

          <Box style={{ flex: 1 }} />
          <Hidden xsDown>{props.children}</Hidden>
          <Hidden smUp>
            <SimpleMenu routes={props.routes} pageTitles={props.pageTitles} />
          </Hidden>
        </Toolbar>
      </AppBar>
    </nav>
  );
}
