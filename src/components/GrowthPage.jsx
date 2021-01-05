import React from "react";
import Intro from "./Intro";
import CardGrids from './CardGrids';
import MainGridContainer from "./MainGridContainer";
import growthbg from "../assets/growthbg.jpg"

export default function GrowthPage(props) {
  const pageTitle = "信仰成長路";
  const pageDescription =
    "分享和體驗聖言，借著彼此的聯系，相互扶持，鼓勵，在主內一起成長。";
  const items = [];

  return (
    <>
      <Intro title={pageTitle} description={pageDescription} bg={growthbg} />
      <MainGridContainer>
        <CardGrids />
      </MainGridContainer>
    </>
  );
}
