import ky from 'ky';

const api = ky.create({
    prefixUrl: 'https://api.example.com',
    timeout: 10000,
    headers: {},
});

export default api;