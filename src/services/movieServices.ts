// src/services/movieService.ts
import { Movie } from '../types/movieTypes';

let watchList: Movie[] = [];

export const addToWatchList = (movie: Movie) => {
    watchList.push(movie);
};

export const updateRating = (imdbID: string, rating: number) => {
    const movie = watchList.find(movie => movie.imdbID === imdbID);
    if (movie) {
        movie.Rating = rating;
    }
};

export const removeFromWatchList = (imdbID: string) => {
    const index = watchList.findIndex(movie => movie.imdbID === imdbID);
    if (index !== -1) {
        watchList.splice(index, 1);
    }
};

export const getWatchList = () => {
    return watchList;
};
