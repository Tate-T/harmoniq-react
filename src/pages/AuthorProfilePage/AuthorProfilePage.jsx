
import React from "react";
import x from "./AuthorProfilePage.module.css";
import { ArticlesList } from "./ArticlesList";

export function AuthorProfilePage({articles}) {
  return (
    <div className="container">
      <div className={x.app}>
        <div className={x.profile}>
          <img
            src="https://picsum.photos/100"
            alt="profile"
            className={x.profileImg}
          />
          <div>
            <h2 className={x.profileName}>Naomi</h2>
            <p className={x.profileInfo}>96 articles</p>
          </div>
        </div>

        <ArticlesList articles={articles} />
      </div>
    </div>
  );
}
