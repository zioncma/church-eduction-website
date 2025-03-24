import CardsPageBase from '../components/Cards/CardsPageBase';
import Intro from '../components/Intro/Intro';
import PageHeaderTitle from '../components/Intro/Title';
import Description from '../components/Intro/Description';
import LinearProgress from '@mui/material/LinearProgress';
import { useCoursesData } from '../features/npoint/hooks';
import { useCourseList } from '../features/firebase';
import { ErrorBoundary } from '../features/error-handling';

const ITEM_KEY = 'courses';

/**
 * Page for CE courses
 */
export function EducationPage({ pageTitle, ...optionals }) {
  const { data: courses, isLoading, error } = useCourseList();

  if (error) {
    return <div>{`Error! ${error?.message} Please refresh or contact administrators`}</div>;
  }

  if (isLoading) {
    return <LinearProgress color={'secondary'} />;
  }

  return (
    <ErrorBoundary>
      <CardsPageBase
        itemType={ITEM_KEY}
        cardList={courses?.terms}
      >
        <Intro bg={courses?.page_banner}>
          <PageHeaderTitle text={pageTitle} />
          <Description>{courses?.page_description}</Description>
        </Intro>
      </CardsPageBase>
    </ErrorBoundary>
  );
}
