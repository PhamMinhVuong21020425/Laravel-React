import axios from 'axios';

const request = axios.create({
    baseURL: 'http://localhost:8000/',
    withCredentials: false, // Không cho phép gửi cookie
    headers: {
        'Content-Type': 'multipart/form-data',
    },
});

export default request;
