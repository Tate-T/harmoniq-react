import React from 'react';
import x from './AuthorProfilePage.module.css';
import { ArticlesList } from './ArticlesList';
import { useState } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/footer';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';


export function AuthorProfilePage({authors, articles}) {
  const params = useParams()
  const { authorId } = useParams()
  console.log(authorId)
  const author = authors.find((author) => authorId === author._id)
  
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
            <h2 className={x.profileName}>{author.name}</h2>
            <p className={x.profileInfo}>{author.aritclesAmount} articles</p>
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
        <ArticlesList articles={articles} authorId={authorId} />
      </div>
      <Footer />
    </div>
  );
}
