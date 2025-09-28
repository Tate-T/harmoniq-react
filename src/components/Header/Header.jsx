import logo from '../../images/logo.png';
import style from './header.module.css';
export const Header = () => {
    return <header className={style.header}>
        <img src={logo} alt="harmoniq-logo" className={style.logo}/>
        <div className={style.navbar}>
            <ul className={style.list}>
                <li className={style.item}><a href="" className={style.link}>Home</a></li>
                <li className={style.item}><a href="" className={style.link}>Articles</a></li>
                <li className={style.item}><a href="" className={style.link}>Creators</a></li>
                <li className={style.item}><a href="" className={style.link}>Log in</a></li>
            </ul>
            <button type="button" className={style.button}>Join now</button>
        </div>
    </header>
}