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

export default function NewsFeedPage(props) {
  const { pageTitle } = props;
  const pageDescription =
    "歡迎來到宣道會錫安堂基教部的網頁。在這裏你可以得到有關主日學的最新消息，下載和重温過去的主日學。如對錫安堂的基督教教育有任何意見，歡迎通過ce@zioncma.ca聯絡我們。";

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
      <Intro title={pageTitle} description={pageDescription} />
      <MainGridContainer>
        <Box display="flex" justifyContent="flex-end" width={"100%"}>
          <Filter />
        </Box>
        {/* <Grid container spacing={3}> */}
        {listNews}
        {/* </Grid> */}
      </MainGridContainer>
    </div>
  );
}
