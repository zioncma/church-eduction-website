import React, { useRef, useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import {
  Box,
  Grid,
  Paper,
  Divider,
  CircularProgress,
  Container,
} from '@material-ui/core';
import Resources from '../components/ItemPage/Resources';
import Title from '../components/ItemPage/Title';
import Share from '../components/ItemPage/Share';
import Description from '../components/ItemPage/Description';
import Video from '../components/Video/Video';
import videoHolder from '../assets/video-placeholder640.jpg';
import { useRouteMatch } from 'react-router-dom';
import { loadItemData } from '../lib/loadData';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
  },
  item: {
    padding: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

ItemPage.propTypes = {
  title: PropTypes.string,
  // id: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  video: PropTypes.string,
  files: PropTypes.array,
};

const LoadedContent = (props) => {
  const classes = useStyles();
  const { item } = props;
  const { title, subtitle, description, video, files } = item;
  const fullTitle = title + (subtitle ? ': ' + subtitle : '');

  return (
    <Container>
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <Paper square className={classes.item}>
            <Box>
              <Title text={fullTitle} />
              <Share text={fullTitle} url={props.shareUrl} />
              <Divider classes={{ root: classes.divider }} />
              <Description text={description} />
            </Box>
            {video ? (
              <Video link={video} title={fullTitle} />
            ) : (
              <img
                src={videoHolder}
                style={{ maxHeight: '600px', height: '600px' }}
                alt={'No Video Available'}
              />
            )}
            {files && files.length ? (
              <>
                <Divider classes={{ root: classes.divider }} />
                <Resources files={files} />{' '}
              </>
            ) : null}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default function ItemPage(props) {
  const shareUrl = window.location.href;
  const { url, params } = useRouteMatch();
  const { id } = params; //pure item id

  const [isLoading, setIsLoading] = useState(true);
  const itemRef = useRef('');

  useEffect(() => {
    loadItemData(url, id).then((item) => {
      //close isLoading
      itemRef.current = item;
      setIsLoading(false);
    });
  });

  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <LoadedContent shareUrl={shareUrl} item={itemRef.current} />
      )}
    </>
  );
}
