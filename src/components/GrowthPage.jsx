import React from "react";
import growthbg from "../assets/growthbg.jpg";
import CardsPageBase from "./Cards/CardsPageBase";
import {data} from "../data/growths.json";

export default function GrowthPage(props) {
  const { pageTitle } = props;
  const description =
    "透過聖經經⽂，個⼈的經歷和分享討論，⼀起的練習，來認識和發展與神更親密的關係，和弟兄姊妹⼀起成長和彼此相愛，活出我們的信仰，在世⼈⾯前作鹽作光。";
  const bg = growthbg;
  const cardList = data;
  const itemKey = "growthcourse";

  return (
    <>
      <CardsPageBase itemType={itemKey} {...{ pageTitle, description, bg, cardList }} />
    </>
  );
}
