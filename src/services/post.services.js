import axios from 'axios';

const baseUrl = "http://localhost:3021";

function getAllNews() {
    const response = axios.get(`${baseUrl}/api/news`);
    return response;
}

function searchByTitle(title) {
    const response = axios.get(`${baseUrl}/api/news/search?title=${title}`);
    return response;
}

export default {
    getAllNews,
    searchByTitle
};