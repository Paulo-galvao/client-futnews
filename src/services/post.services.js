import axios from 'axios';
import Cookies from 'js-cookie';

const baseUrl = "http://localhost:3021";

function getAllNews() {
    const response = axios.get(`${baseUrl}/api/news`);
    return response;
}

function searchByTitle(title) {
    const response = axios.get(`${baseUrl}/api/news/search?title=${title}`);
    return response;
}

function getPostsByUser() {
    const response = axios.get(`${baseUrl}/api/news/byuser`, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`  
        } 
    });
    return response;
}

export default {
    getAllNews,
    searchByTitle,
    getPostsByUser
};