
import React, { useState, useEffect } from 'react';
import axios from 'axios';



export default function MovieCard({ movieId }) {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          url: `https://moviesdatabase.p.rapidapi.com/titles/${movieId}`,
          headers: {
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
            'X-RapidAPI-Key': 'cff237dd6dmsheeaf6ba53431905p1d9a3cjsn0b123f5b7364' 
          }
        };

        const response = await axios.request(options);
        setMovie(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch movie data.');
        setLoading(false);
      }
    };

    fetchData();
  }, [movieId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!movie) {
    return <div>No movie data found.</div>;
  }

 
  return (
    <div className="movie-card">
      <img src={movie.imageUrl} alt={movie.title} className="movie-image" />
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-year">{movie.year}</p>
        {/* Mer detaljert om filmen */}
      </div>
    </div>
  );
}

/**
 * Denne React-komponenten, MovieCard, bruker en funksjonell komponent for å vise informasjon om en film basert
 *  på en gitt movieId. Komponenten benytter useState til å opprette tilstander for movie, loading, 
 * og error. useEffect brukes for å kjøre en asynkron funksjon fetchData som henter filmdata fra et API når
 *  komponenten monteres eller movieId endres. I fetchData-funksjonen brukes Axios til å gjøre en GET-forespørsel 
 * til en spesifikk URL, og tilstandsoppdateringer håndteres for å reflektere responsen: filmdata lagres, og loading 
 * settes til false. Hvis forespørselen feiler, oppdateres error-tilstanden og loading settes til false. Render-delen av 
 * komponenten viser lastestatus, feilmeldinger, eller filmdata (bilde, tittel, år) avhengig av tilstandene
 */