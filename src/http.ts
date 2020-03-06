import axios from 'axios';

const http = axios.create({
    baseURL: 'localhost',
    timeout: 1000,
});

export default http;
