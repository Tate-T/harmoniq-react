import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/footer";



const ArticleCard = ({ title, description, image, name }) => {
  return (
    <article>
      <img src={image} alt={title} />
      <h2>{name}</h2>
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Learn more</button>
      <button></button>
    </article>
  );
};

export const ArticlesList = () => {
  const articles = [
    {
      id: 1,
      title: "1",
      name: "Category A",
      description: "test.",
      image: "./",
    },
    {
      id: 2,
      title: "2",
      name: "Popular",
      description: "test.",
      image: "./",
    },
  ];

  return (
    <>
      <Header />
      <div>
        <h1>Articles</h1>
        </div>
      <div>
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            description={article.description}
            image={article.image}
            name={article.name}
          />
        ))}
      </div>
      <Footer/>
    </>
  );
};
