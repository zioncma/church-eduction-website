import React, { useContext } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from '@mui/material';
import { Typography } from 'components/atomic/Typography';
import { Box } from 'components/atomic/Container';
import moment from 'moment';
import { Link, useRouteMatch } from 'react-router-dom';
import AppContext from '../../providers/AppContext';

import defaultCard from '../../assets/defaultCard.jpg'; //Image by <a href="https://pixabay.com/photos/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=918459">Free-Photos</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=918459">Pixabay</a>
import { makeStyles, muiTheme } from 'styles';

const useStyles = makeStyles((theme) => ({
  main: {
    flexGrow: 3,
  },
  date: {
    position: 'absolute',
    bottom: theme.spacing(1),
    right: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  imageContainer: {
    position: 'relative',
  },
  descrip: {
    opacity: 0.8,
  },
  button: {
    marginLeft: theme.spacing(1),
  },
}));

// CustomCard.propTypes = {
//   title: PropTypes.string.isRequired,
//   itemId: PropTypes.string.isRequired,
//   subtitle: PropTypes.string,
//   date: PropTypes.string,
//   description: PropTypes.string,
//   bg: PropTypes.string,
// };

export default function CustomCard(props) {
  const classes = useStyles();
  const theme = muiTheme;
  const { date, title = '', subtitle = '', itemId, description, bg = defaultCard.src } = props;
  // console.debug('CustomCard bg:', bg);
  const fullTitle = title + (subtitle ? ': ' + subtitle : '');
  const { url } = useRouteMatch();
  const { updateIsLoading } = useContext(AppContext);

  function handleClick() {
    updateIsLoading(true);
  }

  return (
    <>
      <Card
        sx={{
          minHeight: '100%',
          display: 'flex',
          flexDirection: 'column',
          // gridTemplateRows: "auto 1fr auto"
        }}
      >
        <Box
          sx={{
            position: 'relative',
          }}
        >
          {date ? (
            <Typography
              component='span'
              sx={{
                position: 'absolute',
                bottom: theme.spacing(1),
                right: theme.spacing(2),
                color: theme.palette.text.secondary,
              }}
            >
              {moment(date).format('DD/MM/YYYY')}
            </Typography>
          ) : null}
          <CardMedia
            image={bg}
            cover={true}
            title={fullTitle}
            sx={{
              height: theme.spacing(20),
            }}
          />
        </Box>
        <CardContent
          sx={{
            flexGrow: 3,
          }}
        >
          <Typography
            gutterBottom
            variant='h5'
            component='h2'
            className={classes.title}
          >
            {fullTitle}
          </Typography>
          {/* <Typography
            variant="body2"
            color="textPrimary"
            component="p"
            className={classes.descrip}
          >
            {description}
          </Typography> */}
        </CardContent>
        <CardActions>
          <Button
            variant={'outlined'}
            size='small'
            color='primary'
            sx={{
              marginLeft: theme.spacing(1),
            }}
            component={Link}
            to={`${url}/${itemId}`}
            onClick={handleClick}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
