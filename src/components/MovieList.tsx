// src/components/MovieList.tsx
import React, { useState } from 'react';
import { fetchMovies } from '../services/api';
import MovieItem from './MovieItem';
import { Movie } from '../types/movieTypes';
import './MovieList.css';

const MovieList: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleSearch = async () => {
        const data = await fetchMovies(searchTerm);
        setMovies(data.Search || []);
    };

    return (
        <div>
            <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
            <div className="grid-container">
                {movies.map(movie => (
                    <MovieItem key={movie.imdbID} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default MovieList;
