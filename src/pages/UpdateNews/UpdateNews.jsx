import Navbar from "../../components/Navbar/Navbar.jsx";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router"
import { useEffect } from "react";
import PostServices from "../../services/post.services.js"

const {update, getById} = PostServices

export default function UpdateNews() {
    const {id} = useParams();

    const { register, handleSubmit, setValue,
        formState: { errors } 
    } = useForm();
    const navigate = useNavigate();

    async function getNewsById(id) {
        try {
            const {data} = await getById(id);
            setValue("title", data.title);
            setValue("text", data.text);
            setValue("banner", data.banner);
            
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect( () => {
        getNewsById(id);
    }, []);

    return (
        <>
            <Navbar/>
            <form onSubmit={handleSubmit( async (data) => {
                try {
                    await update(data, id);
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
            <button type="submit">Atualizar</button>
        </form>
        </>
    )
}