// src/components/UpdateRating.tsx
import React, { useState, useEffect } from 'react';
import { Movie } from '../types/movieTypes';
import { getWatchList, updateRating } from '../services/movieServices';
import ReactStars from 'react-rating-stars-component';

const UpdateRating: React.FC = () => {
    const [watchList, setWatchList] = useState<Movie[]>([]);
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
    const [rating, setRating] = useState<number>(0);

    useEffect(() => {
        setWatchList(getWatchList());
    }, []);

    const handleMovieSelect = (movie: Movie) => {
        setSelectedMovie(movie);
        setRating(movie.Rating || 0);
    };

    const handleRatingChange = (newRating: number) => {
        setRating(newRating);
    };

    const handleUpdateRating = () => {
        if (selectedMovie) {
            updateRating(selectedMovie.imdbID, rating);
            setWatchList(getWatchList());
            setSelectedMovie(null);
            setRating(0);
        }
    };

    return (
        <div>
            <h2>Update Movie Rating</h2>
            <div>
                {watchList.length === 0 ? (
                    <p>No movies in watch list</p>
                ) : (
                    <ul>
                        {watchList.map(movie => (
                            <li key={movie.imdbID} onClick={() => handleMovieSelect(movie)}>
                                <h3>{movie.Title} ({movie.Year})</h3>
                                <img src={movie.Poster} alt={movie.Title} />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            {selectedMovie && (
                <div>
                    <h3>Selected Movie: {selectedMovie.Title} ({selectedMovie.Year})</h3>
                    <label>
                        Rating:
                        <ReactStars 
                            count={10}
                            value={rating}
                            onChange={handleRatingChange}
                            size={24}
                            activeColor="#ffd700"
                        />
                    </label>
                    <button onClick={handleUpdateRating}>Update Rating</button>
                </div>
            )}
        </div>
    );
};

export default UpdateRating;
