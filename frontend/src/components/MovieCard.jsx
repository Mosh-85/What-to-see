import React from 'react';
import { useEffect, useState } from 'react'

export default function MovieCard() {

    const [movie, setMovie] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const search = "tt0086250"
  
    useEffect(() => {
      const fetchData = async () => {
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'fc7dd7c2a8msh7cb81de38856fa6p156d39jsnda84878f5c7f',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
          }
        };
  
        try {
          const response = await fetch(`https://moviesdatabase.p.rapidapi.com/titles/${search}`, options);
          const data = await response.json()
  
          if (data && data.results) {
            setMovie({
              title: data.results.titleText.text, 
              image: data.results.primaryImage.url
            })
          } else {
            setMovie(null);
          }
        } catch (error) {
          console.error('Error fetching data:', error)
          setMovie(null)
        }
  
        setIsLoading(false)
      };
  
      fetchData()
    }, []);
  
    if (isLoading) {
      return <p>Loading...</p>
    }
  
    if (!movie) {
      return <p>No movie found</p>
    }
  
    return (
      <div>
        <h1>{movie.title}</h1>
        <img src={movie.image} alt={movie.title} />
      </div>
    )
  }
  