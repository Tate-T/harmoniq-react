import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/footer';
import './UserProfile.css';
import naomi from '../../images/authors/naomi.png';

import img1 from '../../images/UserProfile/userprofileimg1.png';
import img2 from '../../images/UserProfile/userprofileimg2.png';
import img3 from '../../images/UserProfile/userprofileimg3.png';
import img4 from '../../images/UserProfile/userprofileimg4.png';
import img5 from '../../images/UserProfile/userprofileimg5.png';
import img6 from '../../images/UserProfile/userprofileimg6.png';
import img7 from '../../images/UserProfile/userprofileimg7.png';
import img8 from '../../images/UserProfile/userprofileimg8.png';
import img9 from '../../images/UserProfile/userprofileimg9.png';
import img10 from '../../images/UserProfile/userprofileimg10.png';
import img11 from '../../images/UserProfile/userprofileimg11.png';
import img12 from '../../images/UserProfile/userprofileimg12.png';

const articles = [
  {
    id: 1,
    author: 'Clark',
    title: 'When Anxiety Feels Like a Room With No Doors',
    text: '10 advices how meditations can help you feeling better',
    image: img1,
  },
  {
    id: 2,
    author: 'Debby',
    title: 'The Quiet Power of Doing Nothing',
    text: 'In a culture obsessed with productivity, embracing rest can be an act of resistance — and',
    image: img2,
  },
  {
    id: 3,
    author: 'Max',
    title: 'Mindful Mornings: 5-Minute Rituals to Start Your Day',
    text: 'Simple, science-backed practices that can gently shift your mood and focus before the day begins.',
    image: img3,
  },
  {
    id: 4,
    author: 'Debby',
    title: 'The Quiet Power of Doing Nothing',
    text: 'In a culture obsessed with productivity, embracing rest can be an act of resistance — and',
    image: img4,
  },
  {
    id: 5,
    author: 'Clark',
    title: 'When Anxiety Feels Like a Room With No Doors',
    text: '10 advices how meditations can help you feeling better',
    image: img5,
  },
  {
    id: 6,
    author: 'Max',
    title: 'Mindful Mornings: 5-Minute Rituals to Start Your Day',
    text: 'Simple, science-backed practices that can gently shift your mood and focus before the day begins.',
    image: img6,
  },
  {
    id: 7,
    author: 'Clark',
    title: 'When Anxiety Feels Like a Room With No Doors',
    text: '10 advices how meditations can help you feeling better',
    image: img7,
  },
  {
    id: 8,
    author: 'Max',
    title: 'Mindful Mornings: 5-Minute Rituals to Start Your Day',
    text: 'In a culture obsessed with productivity, embracing rest can be an act of resistance — and',
    image: img8,
  },
  {
    id: 9,
    author: 'Debby',
    title: 'The Quiet Power of Doing Nothing',
    text: 'Simple, science-backed practices that can gently shift your mood and focus before the day begins.',
    image: img9,
  },
  {
    id: 10,
    author: 'Debby',
    title: 'The Quiet Power of Doing Nothing',
    text: '10 advices how meditations can help you feeling better',
    image: img10,
  },
  {
    id: 11,
    author: 'Clark',
    title: 'When Anxiety Feels Like a Room With No Doors',
    text: 'In a culture obsessed with productivity, embracing rest can be an act of resistance — and',
    image: img11,
  },
  {
    id: 12,
    author: 'Max',
    title: 'Mindful Mornings: 5-Minute Rituals to Start Your Day',
    text: 'Simple, science-backed practices that can gently shift your mood and focus before the day begins.',
    image: img12,
  },
];

export const UserProfile = () => {
  return (
    <>
      <Header />
      <main className="container profile">
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
          {articles.map(({ id, author, title, text, image }) => (
            <article key={id} className="article-card">
              <img src={image} alt={title} className="article-card__image" />
              <div className="article-card__content">
                <p className="article-card__author">{author}</p>
                <h3 className="article-card__title">{title}</h3>
                <p className="article-card__text">{text}</p>

                <div className="article-card__buttons">
                  <button className="article-card__button">
                    Learn more
                    <svg className="article-card__icon" width="16" height="16">
                      <use href="#icon-arrow" />
                    </svg>
                  </button>

                  <button className="article-card__small-button">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.33654 14.75H0.5L0.5 10.906L8.44712 2.94353M4.33654 14.75L14.75 14.75M4.33654 14.75L12.2837 6.7875M8.44712 2.94353L10.0913 1.29611C11.1508 0.234629 12.8685 0.23463 13.9279 1.29611C14.9873 2.3576 14.9873 4.0786 13.9279 5.14008L12.2837 6.7875M8.44712 2.94353L12.2837 6.7875"
                        stroke="#374F42"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
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
