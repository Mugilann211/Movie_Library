// src/services/api.ts
import axios from 'axios';

const API_KEY = '64c5f078'; // replace with your OMDB API key
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

export const fetchMovies = async (searchTerm: string) => {
    const response = await axios.get(`${BASE_URL}&s=${searchTerm}`);
    return response.data;
};
