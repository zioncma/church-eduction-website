import React from "react";
import growthbg from "../assets/growthbg.jpg";
import CardsPageBase from './Cards/CardsPageBase';

export default function GrowthPage(props) {
  // const { title, description, bg, cardList } = props;
  const {pageTitle} = props;
  const description =
    "分享和體驗聖言，借著彼此的聯系，相互扶持，鼓勵，在主內一起成長。";
  const cardList = [];
  const bg = growthbg;

  return (
    <>
      <CardsPageBase {...{pageTitle, description, bg, cardList}}/>
    </>
  );
}
