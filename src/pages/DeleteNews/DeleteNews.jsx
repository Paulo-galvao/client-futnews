import { Link, useNavigate, useParams } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import postServices from "../../services/post.services.js";
import { useForm } from "react-hook-form";


const {deleteNews} = postServices;

export default function DeleteNews() {
    const {handleSubmit} = useForm(); 
    const navigate = useNavigate();
    const {id} = useParams();
    return (
        <>
        <Navbar/>
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
            <button type="submit">Sim</button>
            <button>
                <Link to={"/profile"}>Não</Link>
            </button>
        </form>
        </>
    )
}