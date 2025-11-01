import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/footer';
import './UserProfile.css';
import naomi from '../../images/authors/naomi.png';

export const UserProfile = () => {
  return (
    <>
      <Header />
      <main className="profile">
        <h1 className="profile__title">My Profile</h1>
        <section className="profile__header">
          <img src={naomi} alt="User avatar" className="profile__avatar" />
          <div className="profile__info">
            <h2 className="profile__name">Naomi</h2>
            <p className="profile__stats">96 articles</p>
          </div>
        </section>

        <nav className="profile__tabs">
          <button className="profile__tab profile__tab--active">
            My Articles
          </button>
          <button className="profile__tab">Saved Articles</button>
        </nav>

        <section className="profile__articles">
          {Array.from({ length: 12 }).map((_, i) => (
            <article key={i} className="article-card">
              <img
                src={``}
                alt="Article"
                className="article-card__image"
              />
              <div className="article-card__content">
                <p className="article-card__author">Clark</p>
                <h3 className="article-card__title">
                  When Anxiety Feels Like a Room With No Doors
                </h3>
                <p className="article-card__text">
                  10 advices how meditations can help you feeling better
                </p>
                <button className="article-card__button">
                  Learn more
                  <svg className="article-card__icon" width="16" height="16">
                    <use href="#icon-arrow" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </section>

        <div className="profile__load-more">
          <button className="profile__load-button">Load More</button>
        </div>
      </main>
      <Footer />
    </>
  );
};
