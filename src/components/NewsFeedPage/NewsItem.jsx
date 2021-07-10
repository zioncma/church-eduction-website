import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Box, Paper, Grid } from '@material-ui/core';
import moment from 'moment';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import LinkArea from './LinkArea';
import { green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import Video from '../Video/Video';
import Image from 'material-ui-image';

NewsItem.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  links: PropTypes.array,
};

function Title(props) {
  return (
    <Box mb={2}>
      <AnnouncementIcon
        style={{ color: green[300], verticalAlign: 'text-bottom' }}
      />
      <Typography variant={'h2'} display={'inline'} className={props.startText}>
        {props.text}
      </Typography>
    </Box>
  );
}

export default function NewsItem(props) {
  const { title, content, date, links, video, images } = props;
  const useStyles = makeStyles((theme) => ({
    paper: {
      background: '#fff',
      borderRadius: '2px',
      boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
      padding: theme.spacing(2),
    },
    startText: {
      paddingLeft: theme.spacing(1),
      display: 'inline',
      marginBottom: theme.spacing(2),
    },
    container: {
      marginTop: theme.spacing(1),
    },
  }));
  const classes = useStyles();

  const renderMultiLinedContent = content.split('\n').map((line, index) => {
    return (
      <Typography
        color={'primary'}
        className={title ? '' : classes.startText}
        gutterBottom
        key={'sentence-' + index}
      >
        {line}
      </Typography>
    );
  });

  return (
    <Paper className={classes.paper}>
      {title ? (
        <Title text={title} startText={classes.startText} />
      ) : (
        <AnnouncementIcon
          style={{ color: green[300], verticalAlign: 'text-bottom' }}
        />
      )}
      {video ? (
        <Box maxWidth={720} mx={'auto'}>
          <Video link={video} />
        </Box>
      ) : null}
      {renderMultiLinedContent}
      {!!images && images.length > 0
        ? images.map((imgUrl, index) => (
            <img
              src={imgUrl}
              alt={`news-${title}-${index}`}
              key={`news-${title}-${index}`}
              style={{ maxWidth: '100%', objectFit: 'contain'}}
            />
          ))
        : null}
      <Grid
        container
        justify='flex-end'
        spacing={3}
        alignItems={'center'}
        className={classes.container}
      >
        <Grid item>
          <LinkArea links={links} />
        </Grid>
        <Grid item>
          <Typography color={'secondary'}>
            {moment(date, 'MM/DD/YYYY').format('MM/DD/YYYY')}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
