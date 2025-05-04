import Intro from '../components/Intro/Intro';
import PageHeaderTitle from '../components/Intro/Title';
import Description from '../components/Intro/Description';
import LinearProgress from '@mui/material/LinearProgress';
import { useEducationPageData } from './hooks';
import { ErrorBoundary } from '../features/error-handling';
import { CoursesList } from '../components/organism/CoursesList';

/**
 * Page for CE courses
 */
export function EducationPage({ pageTitle, ...optionals }) {
  const { courses, error, isLoading, terms, } = useEducationPageData();

  if (error) {
    return <div>{`Error! ${error?.message} Please refresh or contact administrators`}</div>;
  }

  if (isLoading) {
    return <LinearProgress color={'secondary'} />;
  }

  return (
    <ErrorBoundary>
      <CoursesList
        data={courses}
      >
        <Intro bg={"https://cdn.pixabay.com/photo/2017/03/23/09/08/bible-2167778_960_720.jpg"} >
          <PageHeaderTitle text={pageTitle} />
          <Description>培養造就屬靈帶領，讓弟兄姊妹能在神的話語上進深，掌握基本的聖經解釋和查經帶領方法。</Description>
        </Intro>
      </CoursesList>
    </ErrorBoundary>
  );
}
