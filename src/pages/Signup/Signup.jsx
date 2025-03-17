import { useForm } from "react-hook-form";
import Navbar from "../../components/Navbar/Navbar";
import userServices from "../../services/user.services.js"
import Cookies from "js-cookie";
import { useNavigate } from "react-router";

const {signUp} = userServices;

export default function Signup() {
    const { register, handleSubmit, reset,
                formState: { errors } 
            } = useForm();
    const navigate = useNavigate()
    return (
        <>
            <Navbar/>
            <div className="auth-container">
                <form onSubmit={handleSubmit(async (data) => {
                    try {
                        const response = await signUp(data);
                        Cookies.set("token", response.data.token, {expires: 1});
                        navigate("/");
                        console.log(response)
                    } catch (error) {
                        console.log(error);
                    }
                })}>
                    <input 
                        name="name" 
                        {...register("name", 
                            {required: "Esse campo não pode estar vazio"})
                        }
                        type="text" 
                        placeholder="Nome"/>
                    <input 
                        name="username" 
                        {...register("username", 
                            {required: "Esse campo não pode estar vazio"})
                        }
                        type="text" 
                        placeholder="Nome de usuário"/>
                    <input 
                        name="email" 
                        {...register("email", 
                            {required: "Esse campo não pode estar vazio"})
                        }
                        type="text" 
                        placeholder="Email"/>
                    <input 
                        name="password"
                        type="password" 
                        {...register("password", 
                            {required: "Esse campo não pode estar vazio"})
                        }
                        placeholder="Senha"/>
                    <input 
                        name="checkPassword"
                        type="password" 
                        {...register("checkPassword", 
                            {required: "Esse campo não pode estar vazio"})
                        }
                        placeholder="Confirmar senha"/>
                    <button type="submit">Entrar</button>
                </form>
                
                {errors.title && <span className="error-title-msg">{errors.title.message}</span>}
            </div>
        </>
    )
}