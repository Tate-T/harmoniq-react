import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/footer'
import { AuthorsList } from './components/AuthorsList'
import styles from './Authors.module.css'
import { useState } from 'react';



export const Authors = ({users}) => {
  const [count, setCount] = useState(8)


  const loadMore = () => {
    setCount(count + 8)
  };

  const visibleUsers = users.slice(0, count);

  return (
        <>
            <Header />
            <main>
                <section className={styles.section}>
                    <div className="container authors-container">
                        <h2 className={styles.authorsTitle}>Authors</h2>
                        <AuthorsList users={visibleUsers} />
                        {count < users.length && (
                        <button className={styles.authorsButton} onClick={loadMore}>Load More</button>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}