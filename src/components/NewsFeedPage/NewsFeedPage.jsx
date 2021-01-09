import React from "react";
import NewsItem from "./NewsItem";
import Intro from "../Intro";
import { Container, Grid, Box } from "@material-ui/core";
// import { useState } from "react";
import Filter from "./Filter";
import MainGridContainer from "../MainGridContainer";
import { news } from "../../data/news";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  m: {
    marginTop: theme.spacing(1),
  },
}));

//TODO:
// Margin bottom
// Date issue

export default function NewsFeedPage(props) {
  const classes = useStyles();
  const { title } = props;

  const pageDescription = "所有主日學相關訊息都在這裏，敬請查閱。";

  const newsList = news;

  // Filter the news feed by terms
  // const [state, setstate] = useState("current");

  const listNews = newsList.map((news, i) => (
    <Grid key={"news-grid-" + i} item xs={12}>
      <NewsItem key={"news-" + i} {...news} />
    </Grid>
  ));

  return (
    <div>
      <Intro title={title} description={pageDescription} />
      <Box display="flex" justifyContent="flex-end">
        <Filter />
      </Box>
      <MainGridContainer>
        {/* <Grid container spacing={3}> */}
        {listNews}
        {/* </Grid> */}
      </MainGridContainer>
    </div>
  );
}
