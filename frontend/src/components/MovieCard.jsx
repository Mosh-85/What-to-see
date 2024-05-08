import React from 'react'
import apiClient from '../imdbapi/apiClient';
import { useEffect, useState } from 'react';


export default function MovieCard({ movies, index }) {

    const [imdbImage, setImdImage] = useState();

    const fetchImdImage = async (movieId) => {

        const url = `https://moviesdatabase.p.rapidapi.com/titles/${movies.imdbId}`;
        try {
            const response = await fetch(url,apiClient);
            const result = await response.json();
            setImdImage(
                {
                title: result.results.titleText.text,
                image: result.results.primaryImage.url
            })
        } catch (error) { console
            .error(error);
        }

    }

    useEffect(() => {
        fetchImdImage(movies.imdbId);
    }, [movies.imdbId])

    console.log(imdbImage);

  return (
    <>
      <ul>
        <li key={index}>
        <img src={movies.imdbid} alt={movies.title + " " + "bilde"} />
        <a href={`https://www.imdb.com/title/${movies.imdbid}`} target="_blank"> {movies.title}</a> 
        </li>
      </ul>
    </>
  )
}