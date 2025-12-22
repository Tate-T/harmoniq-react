
import React from "react";
import x from "./AuthorProfilePage.module.css";
import { ArticlesList } from "./ArticlesList";
import { useState } from 'react'

export function AuthorProfilePage({articles}, { users }) {
  const user = users[Math.floor(Math.random() * users.length)]

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
            <h2 className={x.profileName}>${user.name}</h2>
            <p className={x.profileInfo}>96 articles</p>
          </div>
        </div>

        <ArticlesList articles={articles} user={user}/>
      </div>
    </div>
  );
}
