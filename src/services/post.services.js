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

function getById(id) {
    const response = axios.get(`${baseUrl}/api/news/${id}`, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`  
        } 
    });
    return response;
}

function create(data) {
    const response = axios.post(`${baseUrl}/api/news`,data, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`  
        } 
    });
    return response;
}

function update(data, id) {
    const response = axios.patch(`${baseUrl}/api/news/${id}`,data, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`  
        } 
    })
    return response;
}

function deleteNews(id) {
    const response = axios.delete(`${baseUrl}/api/news/${id}`, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`  
        } 
    })
    return response;
}

function getTop() {
    const response = axios.get(`${baseUrl}/api/news/top`);
    return response;
}

export default {
    getAllNews,
    searchByTitle,
    getPostsByUser,
    create,
    update,
    getById,
    deleteNews,
    getTop
};