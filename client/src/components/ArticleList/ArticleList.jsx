import React from "react";
import Article from "../Article/Article";

export default function ArticleList({ articles }) {
  return (
    <>
      {articles.map((article) => {
        return (
          <Article
            key={article.id}
            title={article.title}
            description={article.description}
            body={article.body}
            url={article.url}
            date={article.datePublished}
            image={article.image.url}
          />
        );
      })}
    </>
  );
}
