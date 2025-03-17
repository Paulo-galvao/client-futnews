import axios from 'axios';
import Cookies from 'js-cookie';

const baseUrl = "http://localhost:3021";

function signUp(data) {
    delete data.checkPassword;
    const body = {...data, 
        avatar: "teste",
        background: "teste"
    }
    console.log(body)
    const response = axios.post(`${baseUrl}/api/user`, body);
    return response;
}

function login(data) {
    const response = axios.post(`${baseUrl}/api/auth`, data);
    return response;
}

function userLogged() {
    const response = axios.get(`${baseUrl}/api/user/find`, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`
        }
    });
    return response;

}

export default {
    signUp, login, userLogged
} 