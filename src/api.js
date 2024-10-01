import axios from 'axios';

const API_KEY = 'af12017dfb2fba11faccea7b311e47c6';
const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export default api;
