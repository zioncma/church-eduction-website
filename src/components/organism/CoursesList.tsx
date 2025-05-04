import React from 'react';
import CardGrids from '../Cards/CardGrids';
import MainGridContainer from '../MainGridContainer';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import ItemPage from '../../pages/ItemPage';
import { Overview } from '../Overview';

/**
 * CoursesList for displaying a list of courses
 */
export function CoursesList({
  data,
  children,
  ...optionals
}) {
  const { path, url } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route path={`${path}/:courseId/:id`}>
          <ItemPage />
        </Route>
        <Route path={url}>
          {children}
          <MainGridContainer>
            <CardGrids cardList={data} />
          </MainGridContainer>
        </Route>
      </Switch>
    </>
  );
}
