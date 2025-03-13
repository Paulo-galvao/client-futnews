import Navbar from "../../components/Navbar/Navbar"
import { Link } from "react-router"
import "./Auth.css"

export default function Auth() {
    return (
        <>
            <Navbar/>
            <div className="auth-container">
                <form>
                    <input type="text" placeholder="Username"/>
                    <input type="password" placeholder="Senha"/>
                    <button type="submit">Entrar</button>
                </form>
                <div className="no-account">
                    Ainda não é cadastrado?
                    <Link to={"/signup"}>Crie uma conta</Link>
                </div>
            </div>
        </>
    )
}