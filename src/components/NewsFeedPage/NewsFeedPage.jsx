import React from "react";
import NewsItem from "./NewsItem";
import Intro from "../Intro";
import { Box } from "@material-ui/core";
import { Container, Grid } from "@material-ui/core";
// import { useState } from "react";
import Filter from "./Filter";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  m: {
    marginTop: theme.spacing(1),
  },
}));

export default function NewsFeedPage(props) {
  const classes = useStyles();

  const pageTitle = "最新信仰";
  const pageDescription = "所有主日學相關訊息都在這裏，敬請查閱。";
  const newsList = [
    {
      title: "some title1",
      content: "some content1",
      date: "12/12/2020",
    },
    {
      title: "some title1",
      content: "some content1",
      date: "12-12-2020",
    },
    {
      title: "some title1",
      content: "some content1",
      date: "12/02/2020",
    },
  ];

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
      <Container className={classes.m}>
        <Box display="flex" justifyContent="flex-end">
          <Filter />
        </Box>
        <Grid container spacing={3} >
          {listNews}
        </Grid>
      </Container>
    </div>
  );
}
