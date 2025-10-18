import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/footer";
import { Register } from "./RegisterForm";
import { Login } from "./LoginForm";


export const Auth = () => {
    const isRegistred = true;
    return <>
    <Header/>
    <main>
    {isRegistred === false ? <Login/> : <Register/>}
    </main>
    <Footer/>
    </>

}