import { NavLink } from 'react-router-dom';
import React from "react";
import x from "./AuthorProfilePage.module.css";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export function ArticlesList() {
  const { authorId } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, [authorId]);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(
        'https://69481e8d1ee66d04a44ebf1c.mockapi.io/articles/articles'
      );

      setArticles(response.data);
    } catch (error) {
      console.error('API ERROR:', error.response || error.message);
    }
  };

  const filteredArticles = articles.filter(
    (article) => article.ownerId.$oid === authorId
  );

  return (
    <div className={x.articles}>
      {filteredArticles.map((article, index) => (
        <div key={index} className={x.card}>
          <img src={article.img} alt={article.title} className={x.cardImg} />
          <p className={x.cardAuthor}>{article.author}</p>
          <h3 className={x.cardTitle}>{article.title}</h3>
          <p className={x.cardDesc}>{article.description}</p>
          <NavLink to="/articles" end className={x.cardBtn}>
            Home
          </NavLink>
        </div>
      ))}
    </div>
  );
}