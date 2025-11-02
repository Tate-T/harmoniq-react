import styles from './Auth.module.css';
import eye from '../../images/auth/eye-crossed.svg';
import { Component } from 'react';
import UserList from './UserList';

export class Login extends Component {
  state = {
    email: '',
    password: '',
  };
  collectInfo = (event) => {
    event.preventDefault();
      this.setState({
    email: event.target.elements.email.value,
    password: event.target.elements.password.value 
  }, () => {
    console.log("Email:", this.state.email);
    console.log("Password:", this.state.password);
  });
  };


  render() {
    return (
      <form className={styles.loginForm} onSubmit={this.collectInfo}>
        <h2 className={styles.name}>Log in</h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            <p className={styles.label}>Enter your email address</p>
            <input
            name='email'
              type="email"
              className={styles.input}
              placeholder="email@gmail.com"
              key="email-input-login"
            />
          </li>
          <li className={styles.item}>
            <p className={styles.label}>Enter a password</p>
            <input
            name='password'
              type="password"
              className={styles.input}
              placeholder="*****"
              key="password-input-login"
            />
            <img src={eye} alt="" className={styles.eye} />
          </li>
        </ul>
        <button className={styles.btn} type="submit">
          Login
        </button>
        <p className={styles.sugtestion}>
          Don’t have an account?{' '}
          <a href="" className={styles.link}>
            Register
          </a>
        </p>
      </form>
    );
  }
}
