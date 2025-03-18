import { Link, useNavigate } from "react-router"
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserContext.jsx";
import Cookies from "js-cookie";
import userServices from "../../services/user.services.js";

const {userLogged} = userServices;

import "./Navbar.css"

export default function Navbar() {
    const { register, handleSubmit, reset, 
        formState: { errors } 
    } = useForm();
    const navigate = useNavigate();

    // const [user, setUser] = useState(undefined);
    const {user, setUser} = useContext(UserContext)

    async function getUserLogged() {
        try {
            const response = await userLogged();
            setUser(response.data)
            
        } catch (error) {
            console.log(error);
        }
    }

    function signout() {
        Cookies.remove("token");
        setUser(undefined);
        navigate("/");
    }

    useEffect( () => {
        if(Cookies.get("token")) {
            getUserLogged();
            
        }
    }, [])

    return <>
        <nav>
                
            <div className="navbar-logo">
                <Link to={"/"}>
                    <span>FutNews</span>
                    <img src="/home/bola-logo.png" alt="bolinha" />
                </Link>
            </div>
            <div className="options">
                <div className="navbar-login">
                    {user? (
                        <>
                            <Link to={"/profile"}>
                                <p>{user.username}</p>
                            </Link>
                            <button onClick={signout} className="login">Logout</button>
                        </>
                    ) : (
                    <Link to={"/auth"}>
                        <button className="login">Login
                            <i className='bx bx-log-in'></i>
                        </button>
                    </Link>
                    )}
                 </div>
                <div className="navbar-search">

                    <form onSubmit={handleSubmit((data) => {
                        navigate(`/search/${data.title}`);
                        reset()
                    })}>
                        <input 
                            {...register("title",
                               { required: "campo de busca não pode estar vazio"}
                            )}
                            type="text" 
                            placeholder="Procure por um título" 
                        />
                        <button type="submit">
                            <i className='bx bx-search-alt'></i>
                        </button>
                        
                    </form>
                    {errors.title && <span className="error-title-msg">{errors.title.message}</span>}
                </div>
            </div>
            
        </nav>
    </>
}