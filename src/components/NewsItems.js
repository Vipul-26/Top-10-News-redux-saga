import React from 'react';

const NewsItem = ({ article }) => {
  if (article) {
    return (
      <article>
        <div className="article-wrapper">
          <h3 className="text-center">
            {article.title}
          </h3>
          <img src={article.urlToImage} alt="article" />
          <p className="text-center">
            {article.description}
          </p>
          <a href={article.url} target="_blank" rel="noreferrer">
            Read more
          </a>
        </div>
      </article>
    )
  }
  return null;
};

export default NewsItem;


