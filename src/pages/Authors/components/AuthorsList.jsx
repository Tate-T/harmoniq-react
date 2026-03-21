import styles from '../Authors.module.css';
import { NavLink } from 'react-router-dom';
export const AuthorsList = ({ users }) => {
  return (
    <ul className={styles.authorsList}>
      {users.map(user => (
        <li key={user._id} className={styles.authorsItem}>
          <img className={styles.img} src={user.avatarUrl} alt={user.name} />
          {/* <p className={styles.name}>{user.name}</p> */}
          <NavLink to={user._id} >
             <p className={styles.name}>{user.name}</p> 
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
