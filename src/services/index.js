import axios from 'axios';

const api = axios.create({
  baseURL: 'https://itunes.apple.com',
});

export default api;