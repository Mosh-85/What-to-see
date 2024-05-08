import React from "react";
import { fetchFavWish } from "../../sanity/services.js/userServices";
import MovieCard from "./MovieCard"
import { useState, useEffect } from "react"

export default function Wishlist({userId}) {

    const [wishMovies, setWishMovies] = useState(null)

    useEffect(() => { 
     const fetchData = async () => {
     const data = await fetchFavWish(userId)
     setWishMovies(data[0].wishlist);
    }
     fetchData();
    }, [userId]);

    const listWishMovies = wishMovies?.map((movies, index) => {
        return (
         <MovieCard movies={movies} index={index} key={index}/>
        )
      }) 


    return (
    <>
        <h3>Deres ønskeliste!</h3>
        <p>Dere har -- x antall -- film(er) felles i ønskelisten deres</p>
        
            <li>
                {listWishMovies}
            </li>
        
    </>
    )
}