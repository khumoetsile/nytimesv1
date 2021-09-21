import React, { useState, useEffect, useContext } from 'react';
import { NewsContext } from './NewsContext';
import { BrowserRouter,Link,useHistory } from 'react-router-dom';

function NewsDetail({ match }) {
  const [newsData, setNewsData] = useContext(NewsContext);
  const [newsItem, setNewsItem] = useState({});
  const history = useHistory();

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
        <BrowserRouter>
          <button onClick={()=> history.goBack()} >Back</button>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default NewsDetail;
