// src/components/WatchList.tsx
import React from 'react';
import { Movie } from '../types/movieTypes';
import { updateRating } from '../services/movieServices';
import ReactStars from 'react-rating-stars-component';
import './WatchList.css';

interface WatchListProps {
    watchList: Movie[];
    onRemoveMovie: (imdbID: string) => void;
}

const WatchList: React.FC<WatchListProps> = ({ watchList, onRemoveMovie }) => {
    const handleRatingChange = (imdbID: string, newRating: number) => {
        updateRating(imdbID, newRating);
    };

    return (
        <div>
            <h2>Watch List</h2>
            {watchList.length === 0 ? (
                <p>No movies in watch list</p>
            ) : (
                <div className="grid-container">
                    {watchList.map(movie => (
                        <div key={movie.imdbID} className="grid-item">
                            <h3>{movie.Title} ({movie.Year})</h3>
                            <img src={movie.Poster} alt={movie.Title} />
                            <label>
                                Rating:
                                <ReactStars 
                                    count={5}
                                    value={movie.Rating || 0}
                                    onChange={(newRating: number) => handleRatingChange(movie.imdbID, newRating)}
                                    size={24}
                                    activeColor="#ffd700"
                                />
                            </label>
                            <button onClick={() => onRemoveMovie(movie.imdbID)}>Remove from Watch List</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default WatchList;
