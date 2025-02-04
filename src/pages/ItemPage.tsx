// import {NotAvailableImg} from '../components/Video/NotAvailableImg';
import * as PropTypes from 'prop-types';
import {
  Box,
  Grid,
  Paper,
  Divider,
  CircularProgress,
  Container,
} from '@material-ui/core';
import Resources from '../components/ItemPage/Resources/Resources';
import Title from '../components/ItemPage/Title';
import Share from '../components/ItemPage/Share';
import Description from '../components/ItemPage/Description';
import Video from '../components/Video/Video';
import { useRouteMatch } from 'react-router-dom';
// import { loadItemData } from '../lib/loadData';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { getArray, isFilledArray } from 'utils';
import { useItemData } from '../lib/hooks';

const CenteredContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  height: 100vh;
`;

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

/**
 * 
 */
function LoadedContent({ item, shareUrl, ...optionals }) {
  // Hooks
  const classes = useStyles();

  // Props
  const { title, subtitle, description, video, files } = item;
  const fullTitle = title + (subtitle ? ': ' + subtitle : '');
  const videoArr: any[] = getArray(video);

  return (
    <Container>
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <Paper square className={classes.item}>
            <Box>
              <Title text={fullTitle} />
              {shareUrl ? <Share text={fullTitle} url={shareUrl} /> : null}
              <Divider classes={{ root: classes.divider }} />
              <Description text={description} />
            </Box>
            {isFilledArray(videoArr) ?
              (videoArr.map(item => <Video link={item} />))
              : (
                null
              )}
            {isFilledArray(files)? (
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
}

export default function ItemPage(props) {
  const shareUrl = window.location.href;
  const { url, params } = useRouteMatch();
  const { id } = params; //pure item id
  const { courseItem, isLoading, error } = useItemData(url, id);

  if (error) {
    return <div>{`Error! ${error?.message} Please refresh or contact administrators`}</div>;
  }

  if (isLoading) {
    return <CenteredContainer><CircularProgress color={'secondary'} /></CenteredContainer>;
  }

  return (
    <>
      <LoadedContent shareUrl={shareUrl} item={courseItem} />
    </>
  );
}
