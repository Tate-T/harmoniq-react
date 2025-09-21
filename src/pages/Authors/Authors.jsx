import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/footer'
import { AuthorsList } from './components/AuthorsList'

export const Authors = () => {
    return (<>
        <Header />
        <main>
            <section className="authors">
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