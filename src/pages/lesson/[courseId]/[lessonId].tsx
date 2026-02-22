// import {NotAvailableImg} from '../components/Video/NotAvailableImg';
import {
  Divider,
  CircularProgress,
} from '@mui/material';
import { Box, Container } from 'components/atomic/Container';
import { Grid2 } from 'components/atomic/Grid';
import Paper from '@mui/material/Paper';
import { Resources } from 'components/ItemPage/Resources/Resources';
import Title from 'components/ItemPage/Title';
import Share from 'components/ItemPage/Share';
import { Description } from 'components/ItemPage/Description';
import Video from 'components/Video/Video';
import { useTheme } from 'styles';
import { getArray, isFilledArray } from 'utils';
import { ErrorBoundary } from 'features/error-handling';
import { CenteredContainer } from 'components/atomic/CenteredContainer';
import { useItemPageData } from '../../../domain';
import { useEffect, useState } from 'react';
import { usePathname, useParams } from 'next/navigation';

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
  const theme = useTheme();

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
              <Divider sx={{
                marginTop: theme.spacing(2),
                marginBottom: theme.spacing(2),
              }} />
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
export function ItemPage() {
  const { lessonId: idParam, courseId: courseIdParam } = useParams() || { id: "0", courseId: "0" };

  // Ensure id and courseId are strings, not arrays
  const id = Array.isArray(idParam) ? idParam[0] : idParam;
  const courseId = Array.isArray(courseIdParam) ? courseIdParam[0] : courseIdParam;

  // For any window-dependent variables, initialize with null or a fallback value
  const [shareUrl, setShareUrl] = useState("")
  useEffect(() => {
    // This code only runs in the browser, never on the server
    setShareUrl(window.location.href)
  }, [])


  // const lessonQuery = router.query.lesson;
  const { lesson, course, files: fetchedFiles, error, isLoading } = useItemPageData(id, courseId);

  if (error) {
    return <div>{`Error! ${error?.message} Please refresh or contact administrators`}</div>;
  }

  if (isLoading) {
    return <CenteredContainer><CircularProgress color={'secondary'} /></CenteredContainer>;
  }



  // title, subtitle, description, video, files
  const lessonItem: LessonItem = {
    ...lesson,
    description: lesson?.content || course?.description,
    video: fetchedFiles?.filter(item => item.file_type === 'video')?.map(item => item.link) || [],
    files: fetchedFiles?.filter(item => item.file_type === 'document') || [],
    subtitle: lesson?.title,
    title: course?.title,
  }

  return (
    <LoadedContent shareUrl={shareUrl} item={lessonItem} />
  );
}

export default ItemPage;