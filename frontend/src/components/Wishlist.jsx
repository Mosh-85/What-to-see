import React from "react";
import { fetchFavWish } from "../../sanity/services.js/userServices";
import MovieCard from "./MovieCard"
import { useState, useEffect } from "react"

export default function Wishlist({userId, user2Id}) {

    const [wishMovies, setWishMovies] = useState(null)
    const [wishMovies2, setWishMovies2] = useState(null)

    useEffect(() => { 
     const fetchData = async () => {
     const data = await fetchFavWish(userId)
     setWishMovies(data[0].wishlist);
    }
     fetchData();
    }, [userId]);


   useEffect(() => { 
    const fetchData = async () => {
    const data = await fetchFavWish(user2Id)
    setWishMovies2(data[0].wishlist);
   }
    fetchData();
   }, [user2Id]);

    return (
    <>
        <h3>Deres ønskeliste!</h3>
        <p>Dere har -- x antall -- film(er) felles i ønskelisten deres</p>
        <MovieCard Movies={wishMovies} />
        <MovieCard Movies2={wishMovies2}/>
    </>
    )
}