import React from 'react'
import  { apiClient } from '../services/apiClient'
import { useEffect, useState } from 'react'
import { getMovieData, getMoviesData } from '../services/apiServices'


export default function MovieCard({ movie }) {

const getmovie = async (imdbID) => {
    const url = `https://moviesdatabase.p.rapidapi.com/titles/${imdbID}`
    return await fetch(url, apiClient)
    .then(response => response.json())
    .catch(error => console.error(error))
    
}
const getMoviesData = async (moviesList) => {
    const moviesData = []
    for (const movie of moviesList) {
        const movieData = await getMovieData(movie.imdbid); 
        moviesData.push(movieData.results)
    }
    return moviesData
    
    

}

