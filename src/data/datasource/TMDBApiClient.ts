import axios from "axios";

const API_KEY = process.env.NEXT_APP_TMDB_API_KEY
const TMDB_BASE_URL = 'https://api.themoviedb.org/3/'

const api = axios.create({baseURL: TMDB_BASE_URL})
api.interceptors.request.use((config) => {
    config.params = {
        ...config.params,
        api_key: API_KEY
    };
    return config;
});

export default api