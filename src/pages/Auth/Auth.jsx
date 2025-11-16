import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/footer";
import { Register } from "./RegisterForm";
import { Login } from "./LoginForm";
import { Component } from "react";


export default class Auth extends Component {
  state = {
    users: this.props.users
  };

   infoCollectorFromSon = (data) => {
        this.props.onSendData(data)
   }

    render() {
        console.log(this.props.onSendData);
        const isRegistred = true
        return (
            <>
                <Header />
                <main>
                    {isRegistred === false ? <Login /> : <Register  users={this.state.users} onSendData={this.infoCollectorFromSon}/>}
                </main>
                <Footer />
            </>
        )
    }
}
