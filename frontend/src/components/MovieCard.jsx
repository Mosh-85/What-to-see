import React from 'react';
import { useEffect, useState } from 'react'

export default function MovieCard() {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchMovies = async () => {
        try {
          const data = await fetchFromAPI('https://moviesdatabase.p.rapidapi.com/titles/${search}');
          setMovies(data.docs);
          setIsLoading(false);
        } catch (err) {
          setError(err);
          setIsLoading(false);
        }
      };
    
      fetchMovies();
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    return (
      <div>
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    );
}


  
    