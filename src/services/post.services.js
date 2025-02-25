import axios from 'axios';

const baseUrl = "https://api-fut-news.onrender.com";

// async function getAllNews() {
//     try {
//         const response = await axios.get(`${baseUrl}/api/news`);
//         return response;
        
//     } catch (error) {
//         console.log(error);
//     }
// }

async function getAllNews() {
    try {
        const response = await axios.get(`${baseUrl}/api/news`);
        return response;
        
    } catch (error) {
        
    }
}

export default getAllNews;