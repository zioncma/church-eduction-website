import React from "react";
import CustomCard from "./CustomCard";
import { Grid } from "@material-ui/core";
import { AppContextProvider } from "../AppContext";

export default function CardGrids(props) {
    const listCards = props.cardList;

  return (
    <>
      <AppContextProvider>
        {listCards.map((data, index) => (
          <Grid item xs={12} md={6} lg={4} xl={3} key={"card-grid-" + index}>
            <CustomCard key={"card-" + index} {...data} />
          </Grid>
        ))}
      </AppContextProvider>
    </>
  );
}
