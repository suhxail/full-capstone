import axios from "axios";
import getToken from "../utils/authUtils";
import userToken from '../utils/authUtils'

const baseURL = 'https://capstone-project-be-ira2.onrender.com/api';

// authInstance is for setting the default header
const authInstance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    }
});

const Token = localStorage.getItem('loggedInUser')
const protectedInstance = axios.create({
    baseURL: baseURL,
    timeout: 5000,  
    headers:{
        'Authorization' : Token                
    }  
});


// protectedInstance.interceptors.request.use(config => {
//     const Token = getToken(userToken)
//     console.log("tokeninpi", Token)
//     if (Token) {
//         config.headers["authorization"] = `${Token}`;
//         console.log("Token", Token)
//     }
//     return config;

    
        
//     if(token) {
//         const config = {
//             headers : { authorization: `${token}`}
//         }
//     }
//     return config

// }, error => {
//     return Promise.reject(error)
// });



export default {
    authInstance,
    protectedInstance
}