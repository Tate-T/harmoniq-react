import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/footer'
import fam from '../../images/fam.png'
import flower from '../../images/flower.png'
import person from '../../images/person.png'
import sec1img from '../../images/sec1img.png'


export const Home = () => {
    return <>
        <Header />
        <main>
            <section className='info'>
                <div className='info_wrapper'>
                    <h1 className='info__title'>Find your harmony in community</h1>
                    <div className='info__btns'>
                        <button className='info__btns--btn'>Go to Articles</button>
                        <button className='info__btns--btn'>Register</button>
                    </div>
                </div>
                <img className='info__img' src={sec1img} alt="Section image" />
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
            <section>
                <div>
                    <h2>Top Creators</h2>
                    <div>
                        <p>Go to all Creators</p>
                        //svg
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </>
}