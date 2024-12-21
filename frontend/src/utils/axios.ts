import axios from 'axios';

const api = axios.create({
  baseURL: '/api', // Relative path ensures compatibility with both environments
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
