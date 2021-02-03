import React from 'react';
import Intro from '../Intro';
import CardGrids from './CardGrids';
import MainGridContainer from '../MainGridContainer';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import ItemPage from '../ItemPage/ItemPage';
import Overview from './../Overview';
import Title from '../Intro/Title';
import Description from '../Intro/Description';

export default function CardsPageBase(props) {
  const { pageTitle, description, bg, cardList, itemType } = props;

  const { path, url } = useRouteMatch();

  //Temporary: when itemType === "growthcourse", don't display items for growth courses
  return (
    <>
      <Switch>
        <Route path={`${path}/:id`}>
          <ItemPage />
        </Route>
        <Route path={url}>
          <Intro bg={bg}>
            <Title text={pageTitle} />
            <Description>{description}</Description>
          </Intro>
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
