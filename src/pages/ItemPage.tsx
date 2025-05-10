// import {NotAvailableImg} from '../components/Video/NotAvailableImg';
import {
  Divider,
  CircularProgress,
} from '@mui/material';
import { Box, Container } from 'components/atomic/Container';
import { Grid2 } from '../components/atomic/Grid';
import Paper from '@mui/material/Paper';
import { Resources } from '../components/ItemPage/Resources/Resources';
import Title from '../components/ItemPage/Title';
import Share from '../components/ItemPage/Share';
import { Description } from '../components/ItemPage/Description';
import Video from '../components/Video/Video';
import { useRouteMatch } from 'react-router-dom';
import { makeStyles, muiTheme } from 'styles';
import styled from 'styled-components';
import { getArray, isFilledArray } from 'utils';
import { ErrorBoundary } from '../features/error-handling';
import { CenteredContainer } from '../components/atomic/CenteredContainer';
import { useItemPageData } from '../domain';


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

type LessonItem = {
  title: string;
  subtitle: string;
  description: string;
  video: string[];
  files: any[];
  [x: string]: any;
}

/**
 * 
 */
function LoadedContent({ item, shareUrl, ...optionals }: { item: LessonItem, shareUrl: string, [x: string]: any }) {
  // Hooks
  const classes = useStyles();

  const theme = muiTheme;

  // Props
  const { title, subtitle, description, video, files } = item || {};
  const fullTitle = title + (subtitle ? ': ' + subtitle : '');
  const videoArr: any[] = getArray(video);

  return (
    <Container>
      <Grid2 container sx={{ marginTop: theme.spacing(4), }}>
        <Grid2 size={{ xs: 12 }}>
          <Paper square sx={{
            padding: theme.spacing(2),
          }}>
            <Box>
              <Title text={fullTitle} />
              {shareUrl ? <Share text={fullTitle} url={shareUrl} /> : null}
              <Divider classes={{ root: classes.divider }} />
              <Description text={description} />
            </Box>
            <ErrorBoundary>
              {isFilledArray(videoArr) ?
                (videoArr.map(item => <Video link={item} />))
                : (
                  null
                )}
              {isFilledArray(files) ? (
                <>
                  <Divider sx={{
                    marginTop: theme.spacing(2),
                    marginBottom: theme.spacing(2),
                  }} />
                  <Resources files={files} />{' '}
                </>
              ) : null}
            </ErrorBoundary>
          </Paper>
        </Grid2>
      </Grid2>
    </Container>
  );
}

/**
 * Lesson page for displaying a single lesson
 */
export default function ItemPage(props) {
  const shareUrl = window.location.href;

  const { params } = useRouteMatch();
  const { id, courseId } = params;
  const { lesson, course, error, isLoading } = useItemPageData(id, courseId);

  if (error) {
    return <div>{`Error! ${error?.message} Please refresh or contact administrators`}</div>;
  }

  if (isLoading) {
    return <CenteredContainer><CircularProgress color={'secondary'} /></CenteredContainer>;
  }

  console.log(" ItemPage ~ lesson:", lesson)


  // title, subtitle, description, video, files
  const lessonItem: LessonItem = {
    ...lesson,
    description: lesson?.content || course?.description,
    video: lesson?.file_document?.filter(item => item.file_type === 'video')?.map(item => item.link),
    files: lesson?.file_document?.filter(item => item.file_type === 'document'),
  }

  return (
    <>
      <LoadedContent shareUrl={shareUrl} item={lessonItem} />
    </>
  );
}
