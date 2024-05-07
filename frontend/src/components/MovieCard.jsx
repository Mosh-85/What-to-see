import React from 'react'

export default function MovieCard({Movies, Movies2}) {

    const favorite = Movies?.map((movies, index) => {
      return (
        <li key={index}>
          <h2>{movies.title}</h2>
        </li>
      )
    }) 

    const favorite2 = Movies2?.map((movies, index) => {
      return (
        <li key={index}>
          <h2>{movies.title}</h2>
        </li>
      )
    }) 
    
    return (
      <div>
        <ul> {favorite} </ul>
        <ul> {favorite2} </ul>
      </div>
    )
  }
  