import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/footer";
import { Register } from "./RegisterForm";
import { Login } from "./LoginForm";


export const Auth = () => {
    const isRegistred = false;
    return <>
    <Header/>
    <main>
    {isRegistred === true ? <Login/> : <Register/>}
    </main>
    <Footer/>
    </>

}