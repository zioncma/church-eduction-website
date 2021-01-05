import React from "react";
import Intro from "./Intro";
import CardGrids from './CardGrids';
import MainGridContainer from "./MainGridContainer";

export default function EducationPage(props) {
  const pageTitle = "成人主日學";
  const pageDescription =
    "培養造就屬靈帶領，讓弟兄姊妹能在神的話語上進深，掌握基本的聖經解釋和查經帶領方法";
    const courses = [];

  return (
    <>
      <Intro title={pageTitle} description={pageDescription} bg={"https://cdn.pixabay.com/photo/2017/03/23/09/08/bible-2167778_960_720.jpg"} />
      <MainGridContainer>
        <CardGrids courses={courses} />
      </MainGridContainer>
    </>
  );
}
