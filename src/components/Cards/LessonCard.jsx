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

import defaultCard from 'styles/assets/defaultCard.jpg'; //Image by <a href="https://pixabay.com/photos/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=918459">Free-Photos</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=918459">Pixabay</a>
import { makeStyles, muiTheme } from 'styles';
import Link from 'next/link';
import { useRouter } from 'next/router';

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

/**
 * A card component displaying a lesson.
 */
export function LessonCard({ date, title = '', subtitle = '', id: lessonId, bg = defaultCard.src, ...optionals }) {
  const { courseId } = optionals;

  const classes = useStyles();
  const theme = muiTheme;
  // console.debug('CustomCard bg:', bg);
  const fullTitle = title + (subtitle ? ': ' + subtitle : '');
  // const { url } = useRouteMatch();
  const router = useRouter();
  // const { updateIsLoading } = useContext(AppContext);
  const lessonUrl = `/${courseId}/${lessonId}`

  function handleClick() {
    router.push(lessonUrl);
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
        </CardContent>
        <CardActions>
          <Button
            variant={'outlined'}
            size='small'
            color='primary'
            sx={{
              marginLeft: theme.spacing(1),
            }}
            to={lessonUrl}
            onClick={handleClick}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
