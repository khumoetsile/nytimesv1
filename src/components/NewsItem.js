import React from 'react';

function NewsItem(props) {
  return (
    <div className="NewsItem">
      <h3>{props.title}</h3>
      <div className="flex">
        <p>{props.date}</p>
        <button>{props.buttonText}</button>
      </div>
    </div>
  );
}

export default NewsItem;
