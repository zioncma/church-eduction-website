import React from "react";
import NewsItem from './NewsItem';

export default function NewsFeedPage(props) {
  const listNews = props.newsList.map((newsContent) => (
    <NewsItem content={newsContent} />
  ));

  return (
    <div>
      <Intro />
      <NewsFrame>{listNews}</NewsFrame>
    </div>
  );
}
