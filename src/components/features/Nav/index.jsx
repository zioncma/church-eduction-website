import { AppBar, Toolbar } from '../../../components/atomic/AppBar';
import { Box } from '../../../components/atomic/Container';
import { Typography } from '../../../components/atomic/Typography';
import logo from '../../../assets/logo.png';
import {SimpleMenu} from '../../SimpleMenu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { muiTheme } from 'styles';

const navTitleFont = "'Exo', sans-serif";

export default function Nav(props) {
  const theme = muiTheme;
  const xsDown = useMediaQuery((theme) => theme.breakpoints.down('xs'));
  const smUp = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  return (
    <nav>
      <AppBar position='static'>
        <Toolbar disableGutters>
          <a
            href='http://www.zioncma.ca/c'
            className={`no-underline`}
          >
            <Box
              minWidth={295}
              sx={{
                whiteSpace: 'nowrap',
                overflowX: 'auto',
                '& > *': {
                  display: 'inline-block',
                  color: theme.palette.text.secondary,
                },
                '&:visited': {
                  textDecoration: 'none',
                  color: theme.palette.text.secondary,
                },
              }}
            >
              <Box maxWidth={38} mx={1} display={'inline-block'}>
                <img
                  src={logo.src}
                  alt='宣道會錫安堂LOGO'
                  className="max-w-full"
                />
              </Box>
              <Typography
                noWrap
                sx={{
                  fontFamily: navTitleFont,
                  fontSize: theme.spacing(3),
                }}
              >
                宣道會錫安堂
              </Typography>

              <Typography
                noWrap
                sx={{
                  fontFamily: navTitleFont,
                  fontSize: theme.spacing(3),
                  color: theme.palette.logo,
                }}
              >
                -
              </Typography>
              <Typography noWrap>基教部</Typography>
            </Box>
          </a>

          <Box style={{ flex: 1 }} />
          {xsDown ? null : props.children }
          {smUp ? null : (
            <SimpleMenu routes={props.routes} pageTitles={props.pageTitles} />
          )}
        </Toolbar>
      </AppBar>
    </nav>
  );
}
