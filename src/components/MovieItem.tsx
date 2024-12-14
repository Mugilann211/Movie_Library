// src/components/MovieItem.tsx
import React from 'react';
import { Movie } from '../types/movieTypes';
import './MovieItem.css';

interface Props {
    movie: Movie;
    onAddMovie?: (movie: Movie) => void;
    onRemoveMovie?: (imdbID: string) => void;
}

const MovieItem: React.FC<Props> = ({ movie, onAddMovie, onRemoveMovie }) => {
    const handleAdd = () => {
        if (onAddMovie) {
            onAddMovie(movie);
        }
    };

    const handleRemove = () => {
        if (onRemoveMovie) {
            onRemoveMovie(movie.imdbID);
        }
    };

    return (
        <div className="grid-item">
            <h3>{movie.Title}</h3>
            <img src={movie.Poster} alt={movie.Title} />
            {onAddMovie ? (
                <button onClick={handleAdd}>Add to Watch List</button>
            ) : (
                <button onClick={handleRemove}>Remove from Watch List</button>
            )}
        </div>
    );
};

export default MovieItem;
