import React, { useState, useEffect, useContext } from 'react';
import { NewsContext } from './NewsContext';
import { Link } from 'react-router-dom';

function NewsDetail({ match }) {
  const [newsData, setNewsData] = useContext(NewsContext);
  const [newsItem, setNewsItem] = useState({});

  useEffect(() => {
    newsData.map(item => {
      if (item.id == match.params.id) {
        setNewsItem(item);
      }
    });
  }, []);
  return (
    <div className="NewsDetail">
      <h1>{newsItem.title}</h1>
      <p>{newsItem.published_date}</p>
      <h5>{newsItem.byline}</h5>
      <h3>{newsItem.abstract}</h3>
      <div className="flex">
        <button>
          <a href={newsItem.url}>Read the full article</a>
        </button>
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
}

export default NewsDetail;
