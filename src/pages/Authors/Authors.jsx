import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/footer'
import { AuthorsList } from './components/AuthorsList'
import styles from './Authors.module.css'

export const Authors = () => {
    return (<>
        <Header />
        <main>
            <section className={styles.section}>
                <div className="container authors-container">
                    <h2 className="authors-title">Authors</h2>
                    <AuthorsList />
                    <button className="authors-button">Load More</button>
                </div>
            </section>
        </main>
        <Footer />
    </>)
}