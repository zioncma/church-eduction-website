import React from "react";
import Intro from "../Intro";
import CardGrids from "./CardGrids";
import MainGridContainer from "../MainGridContainer";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import ItemPage from "../ItemPage/ItemPage";
import { AppContextProvider } from "../AppContext";

export default function CardsPageBase(props) {
  const { title, description, bg, cardList } = props;
  const { path, url } = useRouteMatch();
  // const { id } = useParams();

  return (
    <>
      <Switch>
        <Route path={`${path}/:id`}>
          <AppContextProvider>
            <ItemPage />
          </AppContextProvider>
        </Route>
        <Route path={url}>
          <Intro title={title} description={description} bg={bg} />
          <MainGridContainer>
            <CardGrids cardList={cardList} />
          </MainGridContainer>
        </Route>
      </Switch>
    </>
  );
}
