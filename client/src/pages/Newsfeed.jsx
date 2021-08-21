import React from "react";
import ArticleSearch from "../components/ArticleSearch/ArticleSearch";
import ArticleList from "../components/ArticleList/ArticleList";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "@material-ui/core";
import newsData from "../sampleData/articlesData.json";

export default function Newsfeed() {
  const [newsArticles, setNewsArticles] = useState(newsData);
  const [searchTerm, setSearchTerm] = useState("");

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

  useEffect(() => {
    console.log("inside useEffect");
    // if (searchTerm) {
    //   searchNewsByTerm();
    // }
  }, [searchTerm]);

  return (
    <div>
      <Container>
        <ArticleSearch handleSearch={handleSearch} />
      </Container>
      <Container>
        <ArticleList articles={newsArticles} />
      </Container>
    </div>
  );
}
