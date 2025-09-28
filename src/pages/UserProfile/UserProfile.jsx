import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/footer'

export const UserProfile = ({imageSrc, imageAlt, userName, articlesAmount, svgLink, articleTitle, articleDescription}) => {
    const savedArticles = false;
    const anyArticles = false;
    return <>
    <Header/>
        <main>
            <section>
                <h2>My Profile</h2>
                <img src={imageSrc} alt={imageAlt}/>
                <p>{userName}</p>
                <p>{articlesAmount}</p>
                <ul>
                    <li>My Articles</li>
                    <li>Saved Articles</li>
                </ul>
                <div>
                    <svg>
                        <use href={svgLink}></use>
                    </svg>
            {anyArticles === false ? (
                <h3>Nothing found.</h3>
            ) : (
                <h3>{articleTitle}</h3>
            )}

            {savedArticles === true && anyArticles === false ? (
                <p>Save your first article</p>
            ) : savedArticles === false && anyArticles === false ? (
                <p>Write your first article</p>
            ) : (
                <p>{articleDescription}</p>
            )}

            {savedArticles === true ? (
                <button type="button">Go to articles</button>
            ) : (
                <button type="button">Create an article</button>
            )}
                </div>
            </section>
        </main>
    <Footer/>
    </>
}