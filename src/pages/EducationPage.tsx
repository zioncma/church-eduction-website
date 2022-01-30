import CardsPageBase from '../components/Cards/CardsPageBase';
import Intro from '../components/Intro/Intro';
import Title from '../components/Intro/Title';
import Description from '../components/Intro/Description';
import { LinearProgress } from '@material-ui/core';
import {useCoursesData} from '../lib/hooks';

const itemKey = 'courses';

export default function EducationPage({ pageTitle, ...optionals }) {
  const {courses, isLoading, error} = useCoursesData();
  
  if (error) {
    return <div>{`Error! ${error?.message} Please refresh or contact administrators`}</div>;
  }

  if (isLoading) {
    return <LinearProgress color={'secondary'} />;
  }

  return (
    <>
        <CardsPageBase
          itemType={itemKey}
          {...{ pageTitle, cardList: courses.terms }}
        >
          <Intro bg={courses.page_banner}>
            <Title text={pageTitle} />
            <Description>{courses.page_description}</Description>
          </Intro>
        </CardsPageBase>
    </>
  );
}
