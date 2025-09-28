import  logo  from "../../images/logo.png";
import style from './footer.module.css';

export const Footer = () => {
    return <footer className={style.footer}>
        <img src={logo} alt="" className={style.logo}/>
        <h5 className={style.rights}>© 2025 Harmoniq. All rights reserved.</h5>
        <a href="" className={style.article}>Articles</a>
    </footer>
}