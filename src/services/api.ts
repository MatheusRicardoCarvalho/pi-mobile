import axios from "axios"

export const api = axios.create({
    //baseURL: 'https://projeto-integrador-cxys.onrender.com'
    //baseURL: 'http://localhost:3333'
    baseURL: 'http://10.105.5.177:3333'
})