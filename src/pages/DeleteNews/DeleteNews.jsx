import { Link, useNavigate, useParams } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import postServices from "../../services/post.services.js";
import { useForm } from "react-hook-form";

import "./DeleteNews.css"

const {deleteNews} = postServices;

export default function DeleteNews() {
    const {handleSubmit} = useForm(); 
    const navigate = useNavigate();
    const {id} = useParams();
    return (
        <>
        <Navbar/>
            <section className="delete-container">
                <form onSubmit={handleSubmit(async () => {
                    try {
                        await deleteNews(id);
                        navigate("/profile");
                        
                    } catch (error) {
                        console.log(error);
                    }
                        

                })   
                    
                }>
                    <p>Tem certeza que deseja excluir essa postagem?</p>
                    <div className="delete-btn-area">
                        <button className="delete-btn" type="submit">Sim</button>
                        <Link className="delete-btn delete-link" to={"/profile"}>Não</Link>
                    </div>
                    
                </form>
            </section>
        </>
    )
}