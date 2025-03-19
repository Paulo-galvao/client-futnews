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
        <section className="auth-container">

            <form onSubmit={handleSubmit( async (data) => {
                try {
                    await create(data);
                    navigate("/profile");
                } catch (error) {
                    console.log(error);
                }
            })}>
                <h2>Adicionar Nova Notícia</h2>
                <input 
                className="input-space"
                    type="text"
                    name="title"
                    placeholder="Título da Postagem"
                    {...register("title", 
                        {required: "Esse campo não pode estar vazio"})
                    }
                />
                <input 
                className="input-space"

                    type="text" 
                    name="banner"
                    placeholder="Url da imagem"
                    {...register("banner", 
                        {required: "Esse campo não pode estar vazio"})
                    }
                />
                <textarea
                    className="textarea-space" 
                    type="text"
                    name="text"
                    placeholder="Conteúdo da Postagem"
                    {...register("text", 
                        {required: "Esse campo não pode estar vazio"})
                    }
                />
                <div className="button-area">
                    <button type="submit">Enviar</button>
                    <button onClick={
                        () => {navigate(-1)}
                    }>Voltar</button>
                </div>
            </form>
        </section>
        </>
    )
}