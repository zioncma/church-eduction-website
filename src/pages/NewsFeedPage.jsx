import React, { useState, useRef, useEffect } from 'react';
import NewsItem from '../components/NewsFeedPage/NewsItem';
import Intro from '../components/Intro/Intro';
import { Grid, Box, Link, Typography, LinearProgress } from '@material-ui/core';
import Filter from '../components/NewsFeedPage/Filter';
import MainGridContainer from '../components/MainGridContainer';
import Title from '../components/Intro/Title';
import Description from '../components/Intro/Description';
import { readNews } from '../lib/loadData';

function getTermSet(newsList) {
  // get a set of existing terms in the data, e.g. [2010, 2011, 2012]
  const set = new Set();
  if (newsList?.news === undefined) {
    return set;
  }
  newsList?.forEach( (group) => { group.news.forEach( (news) => set.add(news.term))});
  return set;
}

function getGroupNames(newsList) {
  if (newsList.groups === undefined) {
    return [];
  }
  return newsList.map((group) => group.name);
}

function renderNews(items) {
  return (
    <>
      {items.map((news, i) => (
        <Grid key={'news-grid-' + i} item xs={12}>
          <NewsItem key={'news-' + i} {...news} />
        </Grid>
      ))}
    </>
  );
}

function filterByTerm(newsList, term) {
  // get the news list for a specific term, return all news list if term is false
  let result = newsList;

  if (newsList.length === 0) {
    return newsList;
  }

  if (term) {
    result = result.filter((item) => item.term === term);
  } else {
    // push all groups into one array
    const reducer = (accumulator, current) => accumulator.concat(current.news);
    return newsList.reduce(reducer, []);
  }
  return result;
}

const contactEmail = 'ce@zioncma.ca';

export default function NewsFeedPage(props) {
  const { pageTitle } = props;
  const [term, setTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const newsList = useRef([]); // convert data format to the news list which is ready to populate

  useEffect(() => {
    const fetchData = async () => {
      newsList.current = await readNews();
      setIsLoading(false);
    };

    fetchData().catch((err) => console.error(err));
  }, []);

  return (
    <>
      {isLoading ? (
        <LinearProgress color={'secondary'} />
      ) : (
        <>
          <Intro>
            <Title text={pageTitle} />
            <Description>
              歡迎來到宣道會錫安堂基教部的網頁。在這裏你可以得到有關主日學的最新消息，下載和重温過去的主日學。如對錫安堂的基督教教育有任何意見，歡迎通過
              {contactEmail}{' '}
              <Link href={`mailto:${contactEmail}`} style={{ color: 'blue' }}>
                聯絡我們
              </Link>
              。
            </Description>
          </Intro>
          <MainGridContainer>
            <Box display='flex' justifyContent='flex-end' width={'100%'}>
              <Filter
                itemSet={getTermSet(newsList.current)}
                updateTerm={(value) => setTerm(value)}
                currentTerm={term}
              />
            </Box>
            {newsList.current.length > 0 ? (
              <Typography variant={'h2'}>
                {getGroupNames(newsList.current)}
              </Typography>
            ) : null}
            {renderNews(filterByTerm(newsList.current, term))}
          </MainGridContainer>
        </>
      )}
    </>
  );
}
