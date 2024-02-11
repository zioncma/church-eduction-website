import React from 'react';
import CardGrids from './CardGrids';
import MainGridContainer from '../MainGridContainer';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import ItemPage from '../../pages/ItemPage';
import Overview from './../Overview';

/**
 * Cards Page content
 */
export default function CardsPageBase({cardList, itemType, children, ...optionals}) {
  const { path, url } = useRouteMatch();

  //Temporary: when itemType === "growthcourse", don't display items for growth courses
  return (
    <>
      <Switch>
        <Route path={`${path}/:id`}>
          <ItemPage />
        </Route>
        <Route path={url}>
          {children}
          <MainGridContainer>
            {itemType === 'growthcourse' ? (
              <Overview />
            ) : (
              <CardGrids cardList={cardList} itemType={itemType} />
            )}
          </MainGridContainer>
        </Route>
      </Switch>
    </>
  );
}
