import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/footer'
import fam from '../../images/fam.png'
import flower from '../../images/flower.png'
import person from '../../images/person.png'
import sec1img from '../../images/sec1img.png';
import ArticleCard from '../../components/ArticlesList/ArticlesList';
import { AuthorProfilePage } from '../AuthorProfilePage/AuthorProfilePage'
import { AuthorsList } from '../Authors/components/AuthorsList'
import { ArticlesList } from '../AuthorProfilePage/ArticlesList'
import articles from '../../harmoniq.articles.json'

export const Home = ({ users }) => {
    return <>
        <Header />
        <main>
            <section>
                <div>
                    <h1>Find your harmony in community</h1>
                    <div>
                        <button>Go to Articles</button>
                        <button>Register</button>
                    </div>
                </div>
                <img src={sec1img} alt="Section image" />
            </section>
            <section>
                <div>
                    <div>
                        <h2>About us</h2>
                        <p>Harmoniq is a mindful publishing platform dedicated to mental health and well-being. We bring together writers, thinkers, and readers who believe that open, thoughtful stories can heal, inspire, and connect. Whether you're here to share your journey or learn from others — this is your space to  slow down, reflect, and grow.</p>
                    </div>
                    <img src={flower} alt="Flower" />
                </div>
                <div>
                    <img src={fam} alt="Family" />
                    <img src={person} alt="Person" />
                </div>
            </section>
            <section>
                <div>
                    <h2>Popular Articles</h2>
                    <div>
                        <p>Go to all Articles</p>
                        //svg
                    </div>
                </div>
            </section>
            <section className={styles.about}>
                <div className="container">
                    <div className={styles.about__div}>
                        <div className={styles.about__firstWrapper}>
                            <div className={styles.about__info}>
                                <h2 className={styles['about__info--title']}>About us</h2>
                                <p className={styles['about__info--descr']}>Harmoniq is a mindful publishing platform dedicated to mental health and well-being. We bring together writers, thinkers, and readers who believe that open, thoughtful stories can heal, inspire, and connect. Whether you're here to share your journey or learn from others — this is your space to  slow down, reflect, and grow.</p>
                            </div>
                            <img className={styles.about__flower} src={flower} alt="Flower" />
                        </div>
                        <div className={styles.about__secondWrapper}>
                            <img className={styles.about__family} src={fam} alt="Family" />
                            <img className={styles.about__person} src={person} alt="Person" />
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.popular}>
                <div className="container">
                    <div className={styles.popular__wrapper}>
                        {/* <div className={styles.main_wrapper}> */}
                        <h2 className={styles.popular__title}>Popular Articles</h2>
                        <div className={styles.popular__link}>
                            <p className={styles['popular__link--text']}><a className={styles.popular__a} href='#' target='_blank' rel="noreferrer">Go to all Articles</a></p>
                            <a className={styles.popular__svg} href='#' target='_blank' rel="noreferrer"> <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.875 19.5293L19.1195 5.2793M19.1195 5.2793H11.448M19.1195 5.2793L19.1196 12.9509" stroke="#374F42" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></a>
                        </div>
                    </div>

                    {/* </div> */}
                    <div className={styles.popular__authorsList}>
                        <ArticlesList articles={articles} />
                    </div>
                </div>
            </section>
            <section className={styles.top}>
                <div className="container">
                    <div className={styles.top__wrapper}>
                        <h2 className={styles.top__title}>Top Creators</h2>
                        <div className={styles.top__link}>
                            <p className={styles['top__link--text']}><a className={styles.top__a} href='#' target='_blank' rel="noreferrer">Go to all Creators</a></p>
                            <a className={styles.top__svg} href='#' target='_blank' rel="noreferrer"> <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.875 19.5293L19.1195 5.2793M19.1195 5.2793H11.448M19.1195 5.2793L19.1196 12.9509" stroke="#374F42" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></a>
                        </div>
                    </div>
                    <div className={styles.top__authorsList}>
                        <AuthorsList users={users} />
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </>
}