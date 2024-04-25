import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieCard() {
    const { seriesId } = useParams();
    const [movieData, setMovieData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'e3d5f2a4f7msh99797ce6b0ba1f3p1facb3jsnddb62b4db111',
                    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
                }
            };
            
            try {
                const response = await 
                fetch(`https://moviesdatabase.p.rapidapi.com/titles${title}`, options);
                const data = await response.json();
                setMovieData(data.Search);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [seriesId]);

    return (
        <div>
            {movieData && movieData.map(movie => (
                <li key={movie.imdbID}>
                    <img src={movie.Poster} alt={movie.Title} />
                    <h3>{movie.Title}</h3>
                    <p>{movie.Year}</p>
                    {/* You can add more details here */}
                </li>
            ))}
        </div>
    );
}
