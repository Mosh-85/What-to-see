import React from 'react'
import { useState, useEffect } from 'react';

export default function MovieCard({ movies, index }) {

    const [imdbImage, setImdbImage] = useState();


    const search = movies?.imdbid;

    const fetchImdbImage = async () => {

        const url = `https://moviesdatabase.p.rapidapi.com/titles/${search}`;
        const apiClient = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'fc7dd7c2a8msh7cb81de38856fa6p156d39jsnda84878f5c7f',
                'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com'
            }
        }
        try {
            const response = await fetch(url,apiClient);
            const data = await response.json();
            setImdbImage(
                {
                title: data.results.titleText.text,
                image: data.results.primaryImage.url,
                release: data.results.releaseYear.year
            })
        } catch (error) { console
            .error(error);
        }

    }

    useEffect(() => {
        fetchImdbImage(movies.imdbId);
    }, [movies.imdbId])




  return (
    <>
      <ul>
        <li key={index}>
        <img src={imdbImage?.image} alt={movies?.title + " " + "bilde"} />
        <a href={`https://www.imdb.com/title/${movies?.imdbid}`}> {imdbImage?.title} ({imdbImage?.release})</a> 
        </li>
      </ul>
    </>
  )
}