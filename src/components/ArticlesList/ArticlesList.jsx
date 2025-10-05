import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/footer";
import styles from './ArticlesList.module.css';
import Icon from './Icon.svg';



const ArticleCard = ({ title, description, image, name }) => {
  return (
    <article className={styles.ArticleList}>
      <img className={styles.ArticleImage} src={image} alt={title} />
      <h2 className={styles.ArticleName}>{name}</h2>
      <h3 className={styles.ArticleText}>{title}</h3>
      <p className={styles.ArticleDesc}>{description}</p>
      <div className={styles.ArticleBox}>
        <div className={styles.ArticleButtonList}>
      <button className={styles.ArticleButton}><h2 className={styles.ArticleButtonText}>Learn more</h2></button>
      <button className={styles.ArticleSaveButton}><img className={styles.ArticleSave} src={Icon} alt="save" /></button>
      </div>
      </div>
    </article>
  );
};

export const ArticlesList = () => {
  const articles = [
    {
      id: 1,
      title: "Title",
      name: "Carpathians",
      description: "mountains.",
      image: "https://media.walldeco.ua/wp-content/uploads/20241105031221/w02074p-900x600.jpg",
    },
     {
      id: 1,
      title: "Title",
      name: "Carpathians",
      description: "mountains.",
      image: "https://media.walldeco.ua/wp-content/uploads/20241105031221/w02074p-900x600.jpg",
    },
     {
      id: 1,
      title: "Title",
      name: "Carpathians",
      description: "mountains.",
      image: "https://media.walldeco.ua/wp-content/uploads/20241105031221/w02074p-900x600.jpg",
    },
     {
      id: 1,
      title: "Title",
      name: "Carpathians",
      description: "mountains.",
      image: "https://media.walldeco.ua/wp-content/uploads/20241105031221/w02074p-900x600.jpg",
    }
  ];

  return (
    <>
      <Header />

      <main className={styles.ArticlePage}>
        <div className='container'>
        <header className={styles.ArticleHeader}>
          <h1 className={styles.ArticleTitle}>Articles</h1>
          <div className={styles.ArticleBoxes}>
          <h2 className={styles.ArticleAmount}>96 articles</h2>
              <select className={styles.ArticleSelect}>
      <option value="all">All</option>
      <option value="popular">Popular</option>
      </select>
      </div>
        </header>

        <section className={styles.ArticlesGrid}>
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              description={article.description}
              image={article.image}
              name={article.name}
            />
          ))}
        </section>
        <div className={styles.ArticlePagination}>
        <button className={styles.ArticlePaginationButton}><h2 className={styles.ArticlePaginationText}>Load More</h2></button>
      </div>
      </div>
      </main>

      <Footer />
    </>
  );
};

export default ArticlesList;
