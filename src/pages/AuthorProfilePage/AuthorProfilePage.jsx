import React from 'react';
import x from './AuthorProfilePage.module.css';
import { ArticlesList } from './ArticlesList';
import { useState } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/footer';
import { NavLink } from 'react-router-dom';
function AuthorProfilePage({ usersList, articles }) {
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
        <div>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${x.primaryList}` : `${x.unprimary}`
            }
            to="/products"
          >
            My Articles
          </NavLink>
           <NavLink
            className={({ isActive }) =>
              isActive ? `${x.primaryList}` : `${x.unprimary}`
            }
            to="/"
          >
            Saved Articles
          </NavLink>
        </div>
        <ArticlesList articles={articles} user={user} />
      </div>
      <Footer />
    </div>
  );
}

export default AuthorProfilePage;