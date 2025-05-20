import React from 'react';
import { LessonCard } from './LessonCard';
import { Grid } from '../atomic/Grid';
import { AppContextProvider } from '../../providers/AppContext';
import ExpandablePaper from './ExpandablePaper';
import { generateTitleToCoursesMap } from '../../domain/courses';
import { useLessonsByCourse } from '../../domain/courses';
import { isFilledArray } from '../../utils';
import { CircularProgress } from '@mui/material';

import { CenteredContainer } from '../atomic/CenteredContainer';

/**
 * Card List of lessons for a course
 */
function CardGridList({ id, ...optionals }) {
  // get all lessons of this course
  const { lessons, error, isLoading } = useLessonsByCourse(id);
  if (error) {
    console.error('CardGridList ~ error:', error);
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) {
    return <CenteredContainer><CircularProgress color={'secondary'} /></CenteredContainer>;
  }

  return (
    <>
      {lessons?.map((lessonData, index) => (
        <Grid item xs={12} md={6} lg={4} xl={3} key={'card-grid-' + index}>
          <LessonCard key={'card-' + index} {...lessonData} courseId={id} />
        </Grid>
      ))}
    </>
  );
}

export default function CardGrids({ cardList, ...optionals }) {
  // console.log(' CardGrids ~ cardList:', cardList);

  let titlesArray;
  let renderedCards;

  if (isFilledArray(cardList)) {
    // titleToCoursesMap = generateTitleToCoursesMap(cardList); //key: title, value: course_data
    titlesArray = cardList.map((course) => course.title); // an array of existing titles
    renderedCards = cardList.map((course, index) => (
      <Grid container item xs={12} key={'grid-panel' + index}>
        <ExpandablePaper
          label={course?.title}
          key={'expandable-' + index}
          courseDescrip={course?.description}
        >
          <CardGridList id={course?.id} />
        </ExpandablePaper>
      </Grid>
    ));
  }

  return (
    <>
      <AppContextProvider>
        {renderedCards !== undefined ? renderedCards : null}
      </AppContextProvider>
    </>
  );
}
