import React from "react";
import CustomCard from "./CustomCard";
import { Grid } from "@material-ui/core";

export default function CardGrids(props) {
  //   const listCards = props.cardList;
  const card1 = {
    date: "10-23-2011",
    title: "基礎靈修",
    description:
      "由 2021 年開始，每月第一個主日將舉行 Zoom Live 崇拜。未能一同參與的朋友可以當天下午觀看重播影片，請留意教會之「崇拜網頁」或我們的 YouTube 網頁。",
    bg:
      "https://static01.nyt.com/images/2019/11/05/science/28TB-SUNSET1/merlin_163473282_fe17fc6b-78b6-4cdd-b301-6f63e6ebdd7a-superJumbo.jpg",
  };

  let listCards = [];
  let i;
  for (i = 0; i < 10; i++) {
    listCards.push(card1);
  }

  return (
    <>
      {listCards.map((e) => (
        <Grid item xs={6} md={4}>
          <CustomCard {...e} />
        </Grid>
      ))}
    </>
  );
}
