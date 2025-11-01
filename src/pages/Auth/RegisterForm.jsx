import styles from './Auth.module.css'
import eye from '../../images/auth/eye-crossed.svg'
import { Component } from 'react'

export class Register extends Component {
    state = {
        username: '',
        email: '',
        password: ''
    }

    infoCollect = () => {
        this.setState((PrevSate) => {
            return 
        })
    }
    
    render() {
        return <form className={styles.registerForm}>
            <h2 className={styles.name}>Register</h2>
            <p className={styles.p}>Join our community of mindfulness and wellbeing!</p>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <p className={styles.label}>Enter your name</p>
                    <input type="text" className={styles.input} placeholder="Max"/>
                </li>
                <li className={styles.item}>
                    <p className={styles.label}>Enter your email address</p>
                    <input type="text" className={styles.input} placeholder="email@gmail.com"/>
                </li>
                <li className={styles.item}>
                    <p className={styles.label}>Create a strong password</p>
                    <input type="text" className={styles.input} placeholder="*****"/>
                    <img src={eye} alt="" className={styles.eye}/>
                </li>
                <li className={styles.item}>
                    <p className={styles.label}>Repeat your password</p>
                    <input type="text" className={styles.input} placeholder="*****"/>
                    <img src={eye} alt="" className={styles.eye}/>
                </li>
            </ul>
            <button className={styles.btn} type="submit">Create account</button>
            <p className={styles.sugtestion}>Already have an account? <a href="" className={styles.link}>Log in</a></p>
        </form>
    }
}