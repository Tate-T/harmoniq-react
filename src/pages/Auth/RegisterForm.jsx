export const Register = () => {
    return <form>
            <h2>Register</h2>
            <p>Join our community of mindfulness and wellbeing!</p>
            <ul className="auth-list">
                <li className="register-item">
                    <p className="register-label">Enter your name</p>
                    <input type="text" className="register-input" placeholder="Max"/>
                </li>
                <li className="register-item">
                    <p className="register-label">Enter your email address</p>
                    <input type="text" className="register-input" placeholder="email@gmail.com"/>
                </li>
                <li className="register-item">
                    <p className="register-label">Create a strong password</p>
                    <input type="text" className="register-input" placeholder="*****"/>
                </li>
                <li className="register-item">
                    <p className="register-label">Repeat your password</p>
                    <input type="text" className="register-input" placeholder="*****"/>
                </li>
            </ul>
            <button className="register-btn" type="submit">Create account</button>
            <p className="register-sugestion">Already have an account? <a href="" className="register-log-link">Log in</a></p>
        </form>
}