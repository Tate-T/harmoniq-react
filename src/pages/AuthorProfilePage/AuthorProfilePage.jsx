import React from 'react';
import x from './AuthorProfilePage.module.css';
import { ArticlesList } from './ArticlesList';
import { useState } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/footer';
export function AuthorProfilePage({ usersList, articles }) {
  console.log(usersList);

  const user = usersList.map(user => console.log(user));
  return (
    <div className="container">
      <Header />
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

        <ArticlesList articles={articles} user={user} />
      </div>
      <Footer />
    </div>
  );
}
