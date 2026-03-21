import { NavLink } from 'react-router-dom';
import React from "react";
import x from "./AuthorProfilePage.module.css";

export function ArticlesList({ articles, authorId}) {
  // const authorsArticles = articles.filter((article) => article.)
  return (
    <div className={x.articles}>
      {articles.map((article, index) => (
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
