import React from "react";
import ArticleSearch from "../components/ArticleSearch/ArticleSearch";
import ArticleList from "../components/ArticleList/ArticleList";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Newsfeed() {
  const [newsArticles, setNewsArticles] = useState([]);

  const searchNewsByTerm = async () => {
    try {
      const news = await axios.post("/api/news", {
        searchQuery: "taylor swift",
      });
      console.log(news.data.value);
      setNewsArticles(news.data.value);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    searchNewsByTerm();
  }, []);

  return (
    <div>
      <ArticleSearch />
      <ArticleList articles={newsArticles} />
    </div>
  );
}
