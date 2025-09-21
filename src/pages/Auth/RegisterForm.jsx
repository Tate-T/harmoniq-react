export const Register = () => {
    return <form>
            <h2>Register</h2>
            <p>Join our community of mindfulness and wellbeing!</p>
            <ul className="auth-list">
                <li className="auth-item">
                    <p className="auth-label">Enter your name</p>
                    <input type="text" className="auth-input" placeholder="Max"/>
                </li>
                <li className="auth-item">
                    <p className="auth-label">Enter your email address</p>
                    <input type="text" className="auth-input" placeholder="email@gmail.com"/>
                </li>
                <li className="auth-item">
                    <p className="auth-label">Create a strong password</p>
                    <input type="text" className="auth-input" placeholder="*****"/>
                </li>
                <li className="auth-item">
                    <p className="auth-label">Repeat your password</p>
                    <input type="text" className="auth-input" placeholder="*****"/>
                </li>
            </ul>
            <button className="auth-btn" type="submit">Create account</button>
            <p className="auth-sugestion">Already have an account? <a href="" className="auth-log-link">Log in</a></p>
        </form>
}