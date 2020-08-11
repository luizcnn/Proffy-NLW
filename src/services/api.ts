import axios from 'axios';

const api = axios.create({
    // Endereço base do backend
    baseURL: 'http://192.168.15.4:3333',
});

export default api;