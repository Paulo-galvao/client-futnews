import Navbar from "../../components/Navbar/Navbar"
import { Link } from "react-router"
import "./Auth.css"
import { useForm } from "react-hook-form";
import userServices from "../../services/user.services.js";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";

const {login} = userServices;

export default function Auth() {
    const { register, handleSubmit, reset,
            formState: { errors } 
        } = useForm();
    const navigate = useNavigate();
    return ( 
        <>
            <Navbar/>
            <div className="auth-container">
                <form onSubmit={handleSubmit( async (data) => {
                    const response = await login(data);
                    Cookies.set("token", response.data.token, {expires: 1});
                    navigate("/");
                    
                })}>
                    <h2>Login</h2>
                    <input
                        className="input-space"
                        name="username" 
                        {...register("username", 
                            {required: "Esse campo não pode estar vazio"})
                        }
                        type="text" 
                        placeholder="Username"/>
                    <input 
                        className="input-space"
                        type="password" 
                        {...register("password", 
                            {required: "Esse campo não pode estar vazio"})
                        }
                        placeholder="Senha"/>
                    <button type="submit">Entrar</button>
                    <div className="no-account">
                        Ainda não é cadastrado?
                        <Link to={"/signup"}>Crie uma conta</Link>
                    </div>
                </form>
                {errors.title && <span className="error-title-msg">{errors.title.message}</span>}
            </div>
        </>
    )
}