
import React from "react";
import x from "./AuthorProfilePage.module.css";

export function ArticlesList({ articles }) {
  return (
    <div className={x.articles}>
      {articles.map((article, index) => (
        <div key={index} className={x.card}>
          <img src={article.image} alt={article.title} className={x.cardImg} />
          <p className={x.cardAuthor}>{article.author}</p>
          <h3 className={x.cardTitle}>{article.title}</h3>
          <p className={x.cardDesc}>{article.description}</p>
          <button className={x.cardBtn}>Learn more</button>
        </div>
      ))}
    </div>
  );
}
