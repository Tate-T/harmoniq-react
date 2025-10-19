import naomi from '../../../images/authors/naomi.png'
import emma from '../../../images/authors/emma.png'
import andrii from '../../../images/authors/andrii.png'
import max from '../../../images/authors/max.png'
import tony from '../../../images/authors/tony.png'
import tailor from '../../../images/authors/tailor.png'
import styles from '../Authors.module.css'

export const AuthorsList = () => {
    return (
         <ul className={styles.authorsList}>
            <li className={styles.authorsItem}><img className={styles.img} src={naomi} alt="Author"/><p className={styles.name}>Naomi</p></li>
            <li className={styles.authorsItem}><img className={styles.img} src={andrii} alt="Author"/><p className={styles.name}>Andrii</p></li>
            <li className={styles.authorsItem}><img className={styles.img} src={emma} alt="Author"/><p className={styles.name}>Emma</p></li>
            <li className={styles.authorsItem}><img className={styles.img} src={max} alt="Author"/><p className={styles.name}>Max</p></li>
            <li className={styles.authorsItem}><img className={styles.img} src={tony} alt="Author"/><p className={styles.name}>Tony</p></li>
            <li className={styles.authorsItem}><img className={styles.img} src={tailor} alt="Author"/><p className={styles.name}>Tailor</p></li>
            <li className={styles.authorsItem}><img className={styles.img} src={naomi} alt="Author"/><p className={styles.name}>Naomi</p></li>
            <li className={styles.authorsItem}><img className={styles.img} src={emma} alt="Author"/><p className={styles.name}>Emma</p></li>
            <li className={styles.authorsItem}><img className={styles.img} src={andrii} alt="Author"/><p className={styles.name}>Andrii</p></li>
            <li className={styles.authorsItem}><img className={styles.img} src={max} alt="Author"/><p className={styles.name}>Max</p></li>
            <li className={styles.authorsItem}><img className={styles.img} src={tony} alt="Author"/><p className={styles.name}>Tony</p></li>
            <li className={styles.authorsItem}><img className={styles.img} src={tailor} alt="Author"/><p className={styles.name}>Tailor</p></li>
            <li className={styles.authorsItem}><img className={styles.img} src={naomi} alt="Author"/><p className={styles.name}>Naomi</p></li>
            <li className={styles.authorsItem}><img className={styles.img} src={emma} alt="Author"/><p className={styles.name}>Emma</p></li>
            <li className={styles.authorsItem}><img className={styles.img} src={andrii} alt="Author"/><p className={styles.name}>Andrii</p></li>
            <li className={styles.authorsItem}><img className={styles.img} src={max} alt="Author"/><p className={styles.name}>Max</p></li>
            <li className={styles.authorsItem}><img className={styles.img} src={tailor} alt="Author"/><p className={styles.name}>Tailor</p></li>
            <li className={styles.authorsItem}><img className={styles.img} src={tony} alt="Author"/><p className={styles.name}>Tony</p></li>
            <li className={styles.authorsItem}><img className={styles.img} src={andrii} alt="Author"/><p className={styles.name}>Andrii</p></li>
            <li className={styles.authorsItem}><img className={styles.img} src={tailor} alt="Author"/><p className={styles.name}>Tailor</p></li>
        </ul>
    )
}