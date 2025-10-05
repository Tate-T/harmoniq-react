import  logo  from "../../images/logo.png";
import style from './footer.module.css';

export const Footer = () => {
    return <footer className={style.footer}>
        <img src={logo} alt="" className={style.logo}/>
        <h5 className={style.rights}>© 2025 Harmoniq. All rights reserved.</h5>
        <div className={style.links}>
        <a href="" className={style.article}>Articles</a>
        <a href="" className={style.article}>Accounts</a>
        </div>
    </footer>
}