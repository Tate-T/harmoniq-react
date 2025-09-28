import React from "react";
import x from "./AuthorProfilePage.module.css";

const articles = [
  {
    author: "Clark",
    title: "When Anxiety Feels Like a Room With No Doors",
    description: "10 advices how meditations can help you feeling better",
    image: "https://picsum.photos/400/250?random=1",
  },
  {
    author: "Debby",
    title: "The Quiet Power of Doing Nothing",
    description:
      "In a culture obsessed with productivity, embracing rest can be an act of resistance — and...",
    image: "https://picsum.photos/400/250?random=2",
  },
  {
    author: "Max",
    title: "Mindful Mornings: 5-Minute Rituals to Start Your Day with Calm",
    description:
      "Simple, science-backed practices that can gently shift your mood and focus before the day begins.",
    image: "https://picsum.photos/400/250?random=3",
  },
  {
    author: "Debby",
    title: "The Quiet Power of Doing Nothing",
    description:
      "In a culture obsessed with productivity, embracing rest can be an act of resistance — and...",
    image: "https://picsum.photos/400/250?random=4",
  },
  {
    author: "Clark",
    title: "When Anxiety Feels Like a Room With No Doors",
    description: "10 advices how meditations can help you feeling better",
    image: "https://picsum.photos/400/250?random=5",
  },
  {
    author: "Max",
    title: "Mindful Mornings: 5-Minute Rituals to Start Your Day with Calm",
    description:
      "Simple, science-backed practices that can gently shift your mood and focus before the day begins.",
    image: "https://picsum.photos/400/250?random=6",
  },
];

export function AuthorProfilePage() {
  return (
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
      
      <div className={x.articles}>
        {articles.map((article, index) => (
          <div key={index} className={x.card}>
            <img
              src={article.image}
              alt={article.title}
              className={x.cardImg}
            />
            <p className={x.cardAuthor}>{article.author}</p>
            <h3 className={x.cardTitle}>{article.title}</h3>
            <p className={x.cardDesc}>{article.description}</p>
            <button className={x.cardBtn}>Learn more</button>
          </div>
        ))}
      </div>
    </div>
  );
}
