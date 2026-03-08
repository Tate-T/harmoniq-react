import logo from '../../images/logo.png';
import style from './header.module.css';
import { IoReorderThreeOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={`container ${style.headerContainer}`}>
        <img src={logo} alt="harmoniq-logo" className={style.logo} />
        <div className={style.nav}>
          {/* <ul className={style.list}>
                    <li className={style.item}><a href="/" className={style.link}>Home</a></li>
                    <li className={style.item}><a href="/" className={style.link}>Articles</a></li>
                    <li className={style.item}><a href="/" className={style.link}>Creators</a></li>
                    <li className={style.item}><a href="/" className={style.link}>Log in</a></li>
                </ul> */}
          <nav className={style.list}>
            <NavLink className={style.item} to="/" end>
              Home
            </NavLink>
            <NavLink className={style.item} to="/products">
              Articles
            </NavLink>
            <NavLink className={style.item} to="/authors">
              Creators
            </NavLink>
            <NavLink className={style.item} to="/authorisation">
              Log in
            </NavLink>
          </nav>
          <IoReorderThreeOutline className={style.icon} size={30} />
          <button type="button" className={style.button}>
            {' '}
            <NavLink to="/authorisation">Join now</NavLink>
          </button>
        </div>
      </div>
    </header>
  );
};
