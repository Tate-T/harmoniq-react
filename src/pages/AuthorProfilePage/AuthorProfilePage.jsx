import React from 'react';
import x from './AuthorProfilePage.module.css';
import { ArticlesList } from './ArticlesList';
import { useState } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/footer';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';


function AuthorProfilePage({ authors, fetchUsers }) {
  const { authorId } = useParams()
  console.log(authorId)
  if (authors.length === 0) {
      fetchUsers()
  }
  const author = authors?.find((author) => authorId === author._id)
  console.log(authors)
  console.log(author)
  return (
    <div className="container">
      <Header />
      <div className={x.app}>
        <div className={x.profile}>
          <img
            src={author.avatarUrl}
            alt="profile"
            className={x.profileImg}
          />
          <div>
            <h2 className={x.profileName}>{author.name}</h2>
            <p className={x.profileInfo}>{author.articlesAmount} articles</p>
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
        <ArticlesList />
      </div>
      <Footer />
    </div>
  );
}

export default AuthorProfilePage;