import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/footer'
import { AuthorsList } from './components/AuthorsList'
import styles from './Authors.module.css'
import { Component } from 'react'



export default class Authors extends Component {
  state = { visibleCount: 8 };

  loadMore = () => {
    this.setState(prev => ({ visibleCount: prev.visibleCount + 8 }));
  };

  render() {
    const { users } = this.props;
    const visibleUsers = users.slice(0, this.state.visibleCount);

    return (
        <>
            <Header />
            <main>
                <section className={styles.section}>
                    <div className="container authors-container">
                        <h2 className={styles.authorsTitle}>Authors</h2>
                        <AuthorsList users={visibleUsers} />
                        {this.state.visibleCount < users.length && (
                        <button className={styles.authorsButton} onClick={this.loadMore}>Load More</button>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
  }
}