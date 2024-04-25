import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

export default function MovieCard() {
    const [movieData, setMovieData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://moviesdatabase.p.rapidapi.com/titles/search/title/%7Btitle%7D?exact=true&titleType=movie';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'e3d5f2a4f7msh99797ce6b0ba1f3p1facb3jsnddb62b4db111',
                    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json(); 
                setMovieData(result);
            } catch (error) {
                console.error('Fetching error:', error);
                setError(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="movie-card">
            <div className="movie-card__image">
                <img src={movieData && movieData.posterUrl ? movieData.posterUrl : 'https://via.placeholder.com/300'} alt="movie poster" />
            </div>
            <div className="movie-card__content">
                <h2 className="movie-card__title">{movieData ? movieData.title : 'Loading...'}</h2>
                <p className="movie-card__description">{movieData ? movieData.description : 'Description will appear here...'}</p>
                <Link to="/movie/1">View Details</Link>
            </div>
        </div>
    );
}
