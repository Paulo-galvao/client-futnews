import Navbar from "../../components/Navbar/Navbar"
import Card from "../../components/Card/Card"
import getAllNews from "../../services/post.services.js"
import { useState, useEffect } from "react"

import "./Home.css"

export default function Home() {
    const [news, setNews] = useState([]);
    
    // buscar os dados da API
    async function fetchNews() {
        try {
            const response = await getAllNews();
            setNews(response.data.results);
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(function() {        
        fetchNews()
    }, [])
    
    
    return <>
        <Navbar/>
        <section className="news-board">
            {news.map( (data) => {
                return <Card props={data} key={data.id} />
            })}
        </section>
    </>
} 