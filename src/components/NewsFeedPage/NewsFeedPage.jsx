import React, { useState } from 'react';
import NewsItem from './NewsItem';
import Intro from '../Intro';
import { Grid, Box, Typography, Link } from '@material-ui/core';
// import { useState } from "react";
import Filter from './Filter';
import MainGridContainer from '../MainGridContainer';
import { news } from '../../data/news';
import Title from '../Intro/Title';
import Description from '../Intro/Description';

function getTermSet(newsList) {
  const set = new Set();
  for (const item of newsList) {
    set.add(item.term);
  }
  return set;
}

function filterByTerm(newsList, term) {
  let result = newsList;
  if (term) {
    result = result.filter((item) => item.term == term);
  }
  return result;
}

const newsList = news;
const termSet = getTermSet(newsList);

export default function NewsFeedPage(props) {
  const { pageTitle } = props;
  const contactEmail = 'mailto:ce@zioncma.ca';

  // Filter the news feed by terms

  const [term, setTerm] = useState('');

  const renderedNews = filterByTerm(newsList, term).map((news, i) => (
    <Grid key={'news-grid-' + i} item xs={12}>
      <NewsItem key={'news-' + i} {...news} />
    </Grid>
  ));

  return (
    <>
      <Intro
        title={pageTitle}
        emailLink={contactEmail}
      >
        <Title text={pageTitle} />
        <Description>
          歡迎來到宣道會錫安堂基教部的網頁。在這裏你可以得到有關主日學的最新消息，下載和重温過去的主日學。如對錫安堂的基督教教育有任何意見，歡迎通過
          ce@zioncma.ca <Link href={contactEmail} style={{color: "blue"}}>聯絡我們</Link>。
        </Description>
      </Intro>
      <MainGridContainer>
        <Box display='flex' justifyContent='flex-end' width={'100%'}>
          <Filter
            itemSet={termSet}
            updateTerm={(value) => setTerm(value)}
            currentTerm={term}
          />
        </Box>
        {renderedNews}
      </MainGridContainer>
    </>
  );
}
