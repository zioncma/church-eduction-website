import React from "react";
import Intro from "../Intro";
import CardGrids from "./CardGrids";
import MainGridContainer from "../MainGridContainer";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import ItemPage from "../ItemPage/ItemPage";
import Overview from './../Overview';

export default function CardsPageBase(props) {
  const { pageTitle, description, bg, cardList, itemType } = props;
  const terms = cardList.map((data) => data.term);
  const renderItems = terms.map((term, index) => {
    const items = term[itemType];
    return <CardGrids key={"card-grid-" + index} cardList={items} />;
  });

  const { path, url } = useRouteMatch();

  //Temporary: don't display items for growth courses
  return (
    <>
      <Switch>
        <Route path={`${path}/:id`}>
          <ItemPage />
        </Route>
        <Route path={url}>
          <Intro title={pageTitle} description={description} bg={bg} />
          <MainGridContainer>
            {itemType == "growthcourse" ? <Overview /> : renderItems} 
          </MainGridContainer>
        </Route>
      </Switch>
    </>
  );
}
