import React from 'react';
import CardGrids from '../Cards/CardGrids';
import MainGridContainer from '../MainGridContainer';
// import ItemPage from '../../pages/[...lesson]';
// import { Overview } from '../Overview';

/**
 * CoursesList for displaying a list of courses
 */
export function CoursesList({
  data,
  children,
  ...optionals
}) {

  return (
    <>
        <MainGridContainer>
          <CardGrids cardList={data} />
        </MainGridContainer>
    </>
  );

  // return (
  //   <>
  //     <Switch>
  //       <Route path={`${path}/:courseId/:id`}>
  //         <ItemPage />
  //       </Route>
  //       <Route path={url}>
  //         {children}
  //         <MainGridContainer>
  //           <CardGrids cardList={data} />
  //         </MainGridContainer>
  //       </Route>
  //     </Switch>
  //   </>
  // );
}
