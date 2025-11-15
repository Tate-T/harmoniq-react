import styles from './Auth.module.css';
import eye from '../../images/auth/eye-crossed.svg';
import { Component } from 'react';

export class Register extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    users: this.props.users
  };

  

  collectInfo = event => {
    const message = this.state.users.includes((user)=>{
        if (user.email === this.state.email){ 
           console.log("User with this email already exists");
        } else {
            console.log(user);
        }
    })
    event.preventDefault();
    this.setState(
      {
        email: event.target.elements.email.value,
        password: event.target.elements.password.value,
        username: event.target.elements.username.value,
      }
    );
        event.target.elements.email.value = '';
    event.target.elements.password.value = '';
    event.target.elements.username.value = '';
    console.log(message);
  };



  render() {
    return (
      <form className={styles.registerForm} onSubmit={this.collectInfo}>
        <h2 className={styles.name}>Register</h2>
        <p className={styles.p}>
          Join our community of mindfulness and wellbeing!
        </p>
        <ul className={styles.list}>
          <li className={styles.item}>
            <p className={styles.label}>Enter your name</p>
            <input name="username" type="username" className={styles.input} placeholder="Max" />
          </li>
          <li className={styles.item}>
            <p className={styles.label}>Enter your email address</p>
            <input
              name="email"
              type="email"
              className={styles.input}
              placeholder="email@gmail.com"
            />
          </li>
          <li className={styles.item}>
            <p className={styles.label}>Create a strong password</p>
            <input             
            name='password'
 type="password" className={styles.input} placeholder="*****" />
            <img src={eye} alt="" className={styles.eye} />
          </li>
          <li className={styles.item}>
            <p className={styles.label}>Repeat your password</p>
            <input type="password" className={styles.input} placeholder="*****" />
            <img src={eye} alt="" className={styles.eye} />
          </li>
        </ul>
        <button className={styles.btn} type="submit">
          Create account
        </button>
        <p className={styles.sugtestion}>
          Already have an account?{' '}
          <a href="" className={styles.link}>
            Log in
          </a>
        </p>
      </form>
    );
  }
}
