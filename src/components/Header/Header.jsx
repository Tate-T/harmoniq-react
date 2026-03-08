import logo from '../../images/logo.png';
import style from './header.module.css';
import { IoReorderThreeOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import { useState} from 'react';

export const Header = () => {
  const [mobileActive, setMobileActive] = useState(false);

  const handleOpen = () => {
    setMobileActive(prev => !prev);
  };

  return (
    <>
      <header className={style.header}>
        <div className={`container ${style.headerContainer}`}>
          <img src={logo} alt="harmoniq-logo" className={style.logo} />

          <div className={style.nav}>
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

            <IoReorderThreeOutline
              className={style.icon}
              size={30}
              onClick={handleOpen}
            />

            <button type="button" className={style.button}>
              <NavLink to="/authorisation">Join now</NavLink>
            </button>
          </div>
        </div>
      </header>

      {mobileActive && (
        <div className={style.mobileMenu}>
          <div className={`container ${style.mobileContainer}`}>
            <nav className={style.listMobile}>
              <NavLink className={style.itemMobile} to="/" end>
                Home
              </NavLink>
              <NavLink className={style.itemMobile} to="/products">
                Articles
              </NavLink>
              <NavLink className={style.itemMobile} to="/authors">
                Creators
              </NavLink>
              <NavLink className={style.itemMobile} to="/authorisation">
                Log in
              </NavLink>
            </nav>

            <button type="button" className={style.buttonMobile}>
              <NavLink to="/authorisation">Join now</NavLink>
            </button>
          </div>
        </div>
      )}
    </>
  );
};