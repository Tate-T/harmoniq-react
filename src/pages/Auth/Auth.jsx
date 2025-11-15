import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/footer";
import { Register } from "./RegisterForm";
import { Login } from "./LoginForm";
import { Component } from "react";


export default class Auth extends Component {
  state = {
    users: this.props.users
  };
    render() {
        const isRegistred = true
        return (
            <>
                <Header />
                <main>
                    {isRegistred === false ? <Login /> : <Register  users={this.state.users}/>}
                </main>
                <Footer />
            </>
        )
    }
}
