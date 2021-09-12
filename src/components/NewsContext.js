import React, { useState, createContext, useEffect } from 'react';

export const NewsContext = createContext()

export function NewsProvider(props) {
  const [newsData, setNewsData] = useState([0]);

  useEffect(() => {
    fetch(
      'https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=cLTuw2ZygfOcHB6LfKN5FZYfToFnj1eb'
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        setNewsData(data.results);
      });
  }, []);

  return (
    <NewsContext.Provider value={[newsData, setNewsData]}>
      {props.children}
    </NewsContext.Provider>
  );
}
