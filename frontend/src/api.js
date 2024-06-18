import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api', // Adressen til api serveren
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
