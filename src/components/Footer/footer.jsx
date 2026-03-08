import  logo  from "../../images/logo.png";
import style from './footer.module.css';
import { NavLink } from 'react-router-dom';


export const Footer = () => {
    return <footer className={style.footer}>
        <img src={logo} alt="" className={style.logo}/>
        <h5 className={style.rights}>© 2025 Harmoniq. All rights reserved.</h5>
        <div className={style.links}>
            <NavLink className={style.article} to="/products" end>
              Articles
            </NavLink>
            <NavLink className={style.article} to="/authors">
              Accounts
            </NavLink>
        {/* <a href="" className={style.article}>Articles</a>
        <a href="" className={style.article}>Accounts</a> */}
        </div>
    </footer>
}