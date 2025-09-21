import logo from '../../images/logo.png';

export const Header = () => {
    return <>
    <header>
        <img src={logo} alt="harmoniq-logo" />
        <div>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Articles</a></li>
                <li><a href="">Creators</a></li>
                <li><a href="">Log in</a></li>
            </ul>
            <button type="button">Join now</button>
        </div>
    </header>
    </>
}