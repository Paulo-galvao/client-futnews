import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import Navbar from "../../components/Navbar/Navbar";
import postServices from "../../services/post.services.js";
import Card from "../../components/Card/Card.jsx";
import { Link } from "react-router";

import "./Profile.css"

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
                <div className="profile-content">
                    <div className="profile-user">
                        <img src="user.png" alt="user" />
                    </div>
                    <div className="profile-items">
                        <h2>{user.name}</h2>
                        <p>{user.username}</p>
                        <p>{user.email}</p>
                            <Link to={"/addnews"}>
                                <button className="add-news">
                                        Adicionar Nova Notícia
                                </button>
                            </Link>

                    </div>
                </div>
                <section className="news-board">
                    {news.map( (data) => {
                        return ( 
                        <div >
                            <Card props={data} key={data.id} />
                                <Link to={`/updatenews/${data.id}`}>
                                    <button className="manage-news">
                                        <i className='bx bxs-edit-alt'></i>
                                    </button>
                                </Link>
                                <Link to={`/deletenews/${data.id}`}>
                                    <button className="manage-news">
                                        <i className='bx bx-trash-alt'></i>
                                    </button>
                                </Link>
                        </div>
                        )
                    })}
                    
                </section>
            </div>
        </>
    )
}