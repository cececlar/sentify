import React from "react";
import Article from "../Article/Article";
import "./ArticleList.scss";

export default function ArticleList({ articles }) {
  console.log(articles);
  return (
    <>
      <section className="articles">
        {articles.map((article) => {
          return (
            article.documentSentiment && (
              <Article
                key={article.id}
                title={article.title}
                description={article.description}
                body={article.body}
                url={article.url}
                date={article.datePublished}
                image={article.image.url}
                source={article.provider.name}
                sentiment={article.documentSentiment.score}
                magnitude={article.documentSentiment.magnitude}
              />
            )
          );
        })}
      </section>
    </>
  );
}
