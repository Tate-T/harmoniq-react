import logo from '../../images/logo.png';
import style from './header.module.css';
import { IoReorderThreeOutline } from "react-icons/io5";


export const Header = () => {
    return <header className={style.header}>
        <div className={`container ${style.headerContainer}`}>
            <img src={logo} alt="harmoniq-logo" className={style.logo}/>
            <div className={style.nav}>
                <ul className={style.list}>
                    <li className={style.item}><a href="/" className={style.link}>Home</a></li>
                    <li className={style.item}><a href="/" className={style.link}>Articles</a></li>
                    <li className={style.item}><a href="/" className={style.link}>Creators</a></li>
                    <li className={style.item}><a href="/" className={style.link}>Log in</a></li>
                </ul>
                <IoReorderThreeOutline  className={style.icon} size={30}/>
                <button type="button" className={style.button}>Join now</button>
            </div>
        </div>
    </header>
}