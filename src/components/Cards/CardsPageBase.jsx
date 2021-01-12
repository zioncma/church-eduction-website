import React from "react";
import Intro from "../Intro";
import CardGrids from "./CardGrids";
import MainGridContainer from "../MainGridContainer";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import ItemPage from "../ItemPage/ItemPage";
import { AppContextProvider } from "../AppContext";

export default function CardsPageBase(props) {
  const { pageTitle, description, bg, cardList, itemType } = props;
  const terms = cardList.map( (data) => data.term);

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
          <Intro title={pageTitle} description={description} bg={bg} />
          <MainGridContainer>
            {terms.map( (term) => {
              const items = term[itemType];
              return (<CardGrids cardList={items} />);
            })}
          </MainGridContainer>
        </Route>
      </Switch>
    </>
  );
}
