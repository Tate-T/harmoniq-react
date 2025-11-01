import styles from './Auth.module.css'
import eye from '../../images/auth/eye-crossed.svg'
import { Component } from 'react'
import UserList from './UserList'

export class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    collectInfo = () => {
        this.setState((PrevSate) => {
            return 
        })
    }

    render() {
        return <form className={styles.loginForm}>
            <h2 className={styles.name}>Log in</h2>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <p className={styles.label}>Enter your email address</p>
                    <input type="text" className={styles.input} placeholder="email@gmail.com"/>
                </li>
                <li className={styles.item}>
                    <p className={styles.label}>Enter a password</p>
                    <input type="text" className={styles.input} placeholder="*****"/>
                    <img src={eye} alt="" className={styles.eye}/>
                </li>
            </ul>
            <button className={styles.btn} type="submit">Login</button>
            <p className={styles.sugtestion}>Don’t have an account? <a href="" className={styles.link}>Register</a></p>
        </form>
    }

}