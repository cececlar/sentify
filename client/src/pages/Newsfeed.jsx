import React from "react";
import ArticleSearch from "../components/ArticleSearch/ArticleSearch";
import ArticleList from "../components/ArticleList/ArticleList";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "@material-ui/core";
import newsData from "../sampleData/articlesData.json";

export default function Newsfeed() {
  const [newsArticles, setNewsArticles] = useState(newsData);
  const [searchTerm, setSearchTerm] = useState("trending");

  const searchNewsByTerm = async () => {
    console.log("inside searchNewsByTerm");
    // try {
    //   const news = await axios.post("/api/news", {
    //     searchQuery: searchTerm,
    //   });
    //   console.log(news.data.value);
    //   setNewsArticles(news.data.value);
    // } catch (e) {
    //   console.log(e.message);
    // }
  };

  const handleSearch = (string) => {
    console.log("inside handleSearch");
    // setSearchTerm(string);
  };

  const verbalyzeNews = async () => {
    const newsWithSentiment = await axios.post("/api/news/verbalyzenews", {
      news: newsArticles,
    });
    setNewsArticles(newsWithSentiment.data);
  };

  useEffect(() => {
    console.log("inside useEffect");
    // verbalyzeNews();
  }, []);

  return (
    <div>
      <Container>
        <ArticleSearch handleSearch={handleSearch} />
      </Container>
      <Container>
        <h1 className="App-header">Showing results for "{searchTerm}"</h1>
        {newsArticles && <ArticleList articles={newsArticles} />}
      </Container>
    </div>
  );
}
