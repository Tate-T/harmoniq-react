export const Login = () => {
    return <form>
            <h2>Login</h2>
            <ul className="auth-list">
                <li className="auth-item">
                    <p className="auth-label">Enter your email address</p>
                    <input type="text" className="auth-input" placeholder="email@gmail.com"/>
                </li>
                <li className="auth-item">
                    <p className="auth-label">Create a strong password</p>
                    <input type="text" className="auth-input" placeholder="*****"/>
                </li>
            </ul>
            <button className="auth-btn" type="submit">Login</button>
            <p className="auth-sugestion">Don't have an account? <a href="" className="auth-log-link">auth</a></p>
        </form>
}