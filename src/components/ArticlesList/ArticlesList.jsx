import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/footer";
import styles from './ArticlesList.module.css';
import Icon from './Icon.svg';
import { Component } from "react";
import articles from "../../harmoniq.articles.json";



const ArticleCard = ({ title, description, image, name, onFavorite, isFavorite,IconActive }) => {
  return (
    <article className={styles.ArticleList}>
      <img className={styles.ArticleImage} src={image} alt={title} />
      <h2 className={styles.ArticleName}>{name}</h2>
      <h3 className={styles.ArticleText}>{title}</h3>
      <p className={styles.ArticleDesc}>{description}</p>
      <div className={styles.ArticleBox}>
        <div className={styles.ArticleButtonList}>
      <button className={styles.ArticleButton}><h2 className={styles.ArticleButtonText}>Learn more</h2></button>
      <button className={styles.ArticleSaveButton} onClick={onFavorite}>
   <svg viewBox="0 0 26 32" width="50" height="32" className={styles.IconActive}>
    <path
      d="M12.7 0.941c2.379 0 4.562 0.228 6.292 0.491 2.191 0.333 3.908 1.834 4.397 3.932 0.59 2.532 1.169 6.385 1.07 11.559-0.11 5.709-0.943 9.829-1.746 12.516-0.217 0.727-0.72 1.101-1.289 1.197-0.594 0.1-1.328-0.098-1.925-0.691-1.086-1.081-2.329-2.248-3.476-3.151-0.572-0.45-1.142-0.852-1.671-1.145-0.499-0.277-1.083-0.528-1.653-0.528-0.56 0-1.165 0.247-1.693 0.518-0.563 0.289-1.186 0.686-1.824 1.136-1.277 0.902-2.692 2.07-3.938 3.153-0.658 0.571-1.432 0.706-2.042 0.54-0.589-0.16-1.086-0.613-1.239-1.401-0.525-2.707-1.024-6.705-1.024-12.127 0-5.409 0.557-9.224 1.112-11.68 0.46-2.035 2.12-3.485 4.255-3.814 1.746-0.27 3.967-0.505 6.392-0.505z"
      fill={isFavorite ? "red" : "none"}
      stroke={isFavorite ? "red" : "black"}
      strokeWidth="1.8824"
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeMiterlimit="4"
    />
  </svg>
</button>
      </div>
      </div>
    </article>
  );
};

export class ArticlesList extends Component {
  state = {
    visibleCount: 10,
    favoriteArticles: [],
    filter: "all"
  }

  loadMore = () => {
    this.setState(prev => ({
      visibleCount: prev.visibleCount + 10
    }));
  }

favorited = (id) => {
  this.setState((prev) => {
    const isFavorite = prev.favoriteArticles.includes(id);

    return {
      favoriteArticles: isFavorite
        ? prev.favoriteArticles.filter((item) => item !== id)
        : [...prev.favoriteArticles, id]
    };
  });
};


  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value})
  }

render() { 
  let displayedArticles = articles;

  if (this.state.filter === "favorite") {
     displayedArticles = displayedArticles.filter(article => this.state.favoriteArticles.includes(article._id.$oid)
    )
  };
 displayedArticles = displayedArticles.slice(0, this.state.visibleCount) 


  const filteredFavoritedArticles = this.state.filter === "favoriteArticles" ? articles.filter((article) => this.state.favoriteArticles.includes(article._id.$oid)) : articles;
  return (
    <>
      <Header />

      <main className={styles.ArticlePage}>
        <div className='container'>
        <header className={styles.ArticleHeader}>
          <h1 className={styles.ArticleTitle}>Articles</h1>
          <div className={styles.ArticleBoxes}>
          <h2 className={styles.ArticleAmount}>{displayedArticles.length} articles</h2>
              <select onChange={this.handleFilterChange} value={this.state.filter} className={styles.ArticleSelect}>
      <option value="all" >All</option>
      <option value="popular">Popular</option>
      <option value="favorite">Favorite</option>
      </select>
      </div>
        </header>

        <section className={styles.ArticlesGrid}>
          {displayedArticles.map((item) => (
            <ArticleCard
  key={item._id.$oid}
  title={item.title}
  description={item.description}
  image={item.img}
  name={item.name}
  isFavorite={this.state.favoriteArticles.includes(item._id.$oid)}
  onFavorite={() => this.favorited(item._id.$oid)}
/>
          ))}
        </section>
        <div className={styles.ArticlePagination}>
        <button onClick={this.loadMore} className={styles.ArticlePaginationButton}><h2 className={styles.ArticlePaginationText}>Load More</h2></button>
      </div>
      </div>
      </main>

      <Footer />
    </>
  );
}
};
