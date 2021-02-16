import React from 'react';
import growthbg from '../assets/growthbg.jpg';
import CardsPageBase from './Cards/CardsPageBase';
import { data } from '../data/growths.json';
import Intro from './Intro';
import Title from './Intro/Title';
import Description from './Intro/Description';
import { Link } from '@material-ui/core';

export default function GrowthPage(props) {
  const { pageTitle } = props;
  const description =
    '如果您對這一系列的新課程有興趣或問題, 請向基教部ce@zioncma.ca 查詢 ';
  const bg = growthbg;
  const cardList = data;
  const itemKey = 'growthcourse';
  const contactEmail = 'ce@zioncma.ca';

  return (
    <>
      <CardsPageBase
        itemType={itemKey}
        {...{ pageTitle, description, bg, cardList }}
      >
        <Intro bg={bg}>
          <Title text={pageTitle} />
          <Description>
            如果您對這一系列的新課程有興趣或問題, 請向基教部{contactEmail}{' '}
            <Link href={contactEmail} style={{ color: 'blue' }}>
              查詢
            </Link>
          </Description>
        </Intro>
      </CardsPageBase>
    </>
  );
}
