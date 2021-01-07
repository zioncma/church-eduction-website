import React from "react";
import CardsPageBase from './Cards/CardsPageBase';


export default function EducationPage(props) {
  const title = "成人主日學";
  const description =
    "培養造就屬靈帶領，讓弟兄姊妹能在神的話語上進深，掌握基本的聖經解釋和查經帶領方法";
  const bg =
    "https://cdn.pixabay.com/photo/2017/03/23/09/08/bible-2167778_960_720.jpg";
  const cardList = [];

  return (
    <>
      <CardsPageBase {...{title, description, bg, cardList}}/>
    </>
  );
}
