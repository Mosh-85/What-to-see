/* import React from 'react'

export default function MovieCard({ Movies, Movies2 }) {

  const getCommonMovies = () => {
    return Movies.filter(movie1 => Movies2.some(movie2 => movie2.title === movie1.title))
  }


  const commonMovies = getCommonMovies();
  console.log(commonMovies) 
 

  return (
    <>
    <h1>MovieCard</h1>
    <ul>
        {commonMovies.map((movie, index) => (
          <li key={index}>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          </li>
        ))}
      </ul>
    </>
  )
} */