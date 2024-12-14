// src/components/AddMovie.tsx
import React, { useState } from 'react';
import { Movie } from '../types/movieTypes';
import { fetchMovies } from '../services/api';
import MovieItem from './MovieItem';
import { addToWatchList } from '../services/movieServices';

interface AddMovieProps {
    onAddMovie: (movie: Movie) => void;
}

const AddMovie: React.FC<AddMovieProps> = ({ onAddMovie }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [searchResults, setSearchResults] = useState<Movie[]>([]);

    const handleSearch = async () => {
        const data = await fetchMovies(searchTerm);
        setSearchResults(data.Search || []);
    };

    const handleAddMovie = (movie: Movie) => {
        addToWatchList(movie); // Add to service's watch list
        onAddMovie(movie); // Notify parent component
    };

    return (
        <div>
            <h2>Add Movie to Watch List</h2>
            <input 
                type="text" 
                value={searchTerm} 
                onChange={e => setSearchTerm(e.target.value)} 
                placeholder="Search for a movie" 
            />
            <button onClick={handleSearch}>Search</button>
            <div className="grid-container">
                {searchResults.map(movie => (
                    <MovieItem key={movie.imdbID} movie={movie} onAddMovie={handleAddMovie} />
                ))}
            </div>
        </div>
    );
};

export default AddMovie;
