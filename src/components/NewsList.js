import React, { useState, useEffect, useContext } from 'react';
import NewsItem from './NewsItem';
import { Link } from 'react-router-dom';
import { NewsContext } from './NewsContext';

function NewsList() {
  const [newsData, setNewsData] = useContext(NewsContext);

  const newsItemComponent = newsData.map(item => {
    return (
      <div>
        <NewsItem
          title={item.title}
          date={item.published_date}
          key={item.id}
          buttonText={<Link to={`/${item.id}`}>See More</Link>}
        />
      </div>
    );
  });

  return <div>{newsItemComponent}</div>;
}

export default NewsList;
