import React from 'react'

export default function MovieCard({ movies, index }) {

 

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