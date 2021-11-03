import axios from 'axios';

// r-api/?api=filmes

const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com/'
});


export default api;