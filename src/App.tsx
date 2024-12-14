// src/App.tsx
import React, { useState, useEffect } from 'react';
import WatchList from './components/WatchList';
import AddMovie from './components/AddMovie';
import { Movie } from './types/movieTypes';
import { getWatchList } from './services/movieServices';
import './App.css';

const App: React.FC = () => {
    const [watchList, setWatchList] = useState<Movie[]>([]);

    useEffect(() => {
        setWatchList(getWatchList()); // Initialize watch list from service
    }, []);

    const handleAddMovie = (movie: Movie) => {
        setWatchList([...watchList, movie]);
    };

    const handleRemoveMovie = (imdbID: string) => {
        setWatchList(watchList.filter(movie => movie.imdbID !== imdbID));
    };

    return (
        <div className="app-container">
            <h1>Movie Library</h1>
            <div className="section">
                <AddMovie onAddMovie={handleAddMovie} />
            </div>
            <div className="section">
                <WatchList watchList={watchList} onRemoveMovie={handleRemoveMovie} />
            </div>
        </div>
    );
};

export default App;
