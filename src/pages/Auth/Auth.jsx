import styles from './Auth.module.css';
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/footer";
import { Register } from "./RegisterForm";
import { Login } from "./LoginForm";
import { useState } from "react";

export const Auth = ({ currentUsers, onSendData }) => {
  const [users, setUsers] = useState(currentUsers);
  const [pageRegistered, setPageRegistered] = useState(false); 

  const handleChange = () => {
    setPageRegistered(prev => !prev);
  };

  const infoCollectorFromSon = (data) => {
    onSendData(data);
  };

  return (
    <>
      <Header />
      <main>
        {pageRegistered ? (
          <Login currentUsers={users} changeRegistered={handleChange} />
        ) : (
          <Register currentUsers={users} onSendData={infoCollectorFromSon} changeRegistered={handleChange} />
        )}
      </main>
      <Footer />
    </>
  );
};



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