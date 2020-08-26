import axios from 'axios';

const api = axios.create({
    // Endereço base do backend
    baseURL: 'http://localhost:3333',
});

export default api;