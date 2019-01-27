import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-dev.smartgiftit.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
