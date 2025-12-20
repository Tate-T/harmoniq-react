import styles from './Auth.module.css';
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/footer";
import { Register } from "./RegisterForm";
import { Login } from "./LoginForm";
import { Component } from "react";
import { useState } from "react";



 const Auth = ({currentUsers, onSendData}) => {

const [users, setUsers] = useState(currentUsers)
const [pageRegistered, setPageRegistered] = useState(false)



const Modal = (text, link) =>{
    return console.log(`
    <div class={styles.modal}>
    <p>${text}</p>
    <button type=button class={styles.modal-button}>${link}</button>
    </div>
    `)
}

   const infoCollectorFromSon = (data) => {
        onSendData(data)
   }


        return (
            <>
                <Header />
                <main>
                    {pageRegistered === false ? <Login currentUsers={users} modal={Modal}/> : <Register  currentUsers={users} onSendData={infoCollectorFromSon} modals={Modal}/>}
                </main>
                <Footer />
            </>
        )
    }


// export default class Auth extends Component {
//   state = {
//     users: this.props.currentUsers
//   };

//    infoCollectorFromSon = (data) => {
//         this.props.onSendData(data)
//    }

//     render() {
//         console.log(this.props.onSendData);
//         const isRegistred = true
//         return (
//             <>
//                 <Header />
//                 <main>
//                     {isRegistred === false ? <Login /> : <Register  currentUsers={this.state.users} onSendData={this.infoCollectorFromSon}/>}
//                 </main>
//                 <Footer />
//             </>
//         )
//     }
// }

export default Auth