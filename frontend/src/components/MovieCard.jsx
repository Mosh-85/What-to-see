import React from 'react'
import { useEffect, useState } from 'react'

export default function MovieCard({ movies, index }) {
  const search = movies.imdbid 

 

  return (
    <>
      <ul>
        <li key={index}>
        <img src={movies.imdbid} alt={movies.title + " " + "bilde"} />
        <a href={`https://www.imdb.com/title/${movies.imdbid}`}> {movies.title}</a> 
        </li>
      </ul>
    </>
  )
}