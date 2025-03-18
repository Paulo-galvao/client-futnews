import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import Navbar from "../../components/Navbar/Navbar";
import postServices from "../../services/post.services.js";
import Card from "../../components/Card/Card.jsx";
import { Link } from "react-router";


const {getPostsByUser} = postServices;

export default function Profile() {
    const { user } = useContext(UserContext);
    const [news, setNews] = useState([]);
    
    async function getUserPosts() {
        const response = await getPostsByUser();
        setNews(response.data)
        
    }

    useEffect( () => {
        getUserPosts();
    }, [])

    return (
        <>
            <Navbar/>
            <div className="profile-container">
                <h1>{user.name}</h1>
                <p>{user.username}</p>
                <p>{user.email}</p>
                <button>
                <Link to={"/addnews"}>
                    Adicionar
                </Link>
                </button>
                <section className="news-board">
                    {news.map( (data) => {
                        return (
                        <>
                            <Card props={data} key={data.id} />
                            <button>
                                <Link to={`/updatenews/${data.id}`}>Atualizar</Link>
                                <Link to={`/deletenews/${data.id}`}>Excluir</Link>
                            </button>
                        </>
                        )
                    })}
                    
                </section>
            </div>
        </>
    )
}