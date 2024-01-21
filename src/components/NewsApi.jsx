import React, { useEffect, useState } from "react";
import Badge from "react-bootstrap/esm/Badge";
import Container from "react-bootstrap/esm/Container";
import { NewsBoard } from "./NewsBoard";

export const NewsApi = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let URL = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=0b23edc758ce4f80a32342cfc49472a0`;
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, [category]);

  return (
    <div>
      <Container className="text-center mt-4 fs-5">
        <span className="fs-5 fw-bold ">Latest</span>
        <Badge bg="danger p-2" className="fs-5">
          News
        </Badge>
      </Container>
      {articles.map((news, index) => {
        return (
          <NewsBoard
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </div>
  );
};
