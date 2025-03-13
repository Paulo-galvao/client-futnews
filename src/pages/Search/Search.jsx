import { useParams } from "react-router"
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar"
import Card from "../../components/Card/Card.jsx";
import postServices from "../../services/post.services.js";

const {searchByTitle} = postServices;

export default function Search() {
    const {title} = useParams();
    const [posts, setPosts] = useState([]);

    async function getNewsByTitle() {
        try {            
            const response = await searchByTitle(title);
            setPosts(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect( () => {
        setPosts([])
        getNewsByTitle();
    }, [title]);

    
    return (
        <>
            <Navbar/>
            <section className="news-board">
                
                {posts.length > 0? posts.map( (data) => {return <Card props={data} key={data.id}/>}) : <span>Nada encontrado</span>}
            </section>
        </>
    )
}