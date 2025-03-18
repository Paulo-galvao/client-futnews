import Navbar from "../../components/Navbar/Navbar"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router"
import PostServices from "../../services/post.services.js"

const {create} = PostServices;

export default function AddNews() {
    const { register, handleSubmit,
        formState: { errors } 
    } = useForm(); 
    const navigate = useNavigate();

    return (
        <>
        <Navbar/>
        
        <form onSubmit={handleSubmit( async (data) => {
            try {
                await create(data);
                navigate("/profile");
            } catch (error) {
                console.log(error);
            }
        })}>
            <input 
                type="text"
                name="title"
                placeholder="Título da Postagem"
                {...register("title", 
                    {required: "Esse campo não pode estar vazio"})
                }
            />
            <input 
                type="text" 
                name="banner"
                placeholder="Url da imagem"
                {...register("banner", 
                    {required: "Esse campo não pode estar vazio"})
                }
            />
            <textarea 
                type="text"
                name="text"
                placeholder="Conteúdo da Postagem"
                {...register("text", 
                    {required: "Esse campo não pode estar vazio"})
                }
            />
            <button type="submit">Enviar</button>
        </form>
        </>
    )
}