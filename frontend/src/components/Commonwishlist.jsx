import React from "react";
import { fetchFavWish } from "../../sanity/services.js/userServices";
import MovieCard from "./MovieCard"
import { useState, useEffect } from "react"

export default function Commonwishlist({userId, user2Id}) {

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



   const listCommonWishMovies = wishMovies?.filter(movie1 =>
    wishMovies2?.some(movie2 => movie2.title === movie1.title)
  ).sort((a, b) => a.title.localeCompare(b.title))
  .map((movies, index) => {
    return (
      <MovieCard movies={movies} index={index} key={index} />
    );
  });


   return (
    <article>
        {listCommonWishMovies && (
    <>
      
        <h3>Deres ønskeliste!</h3>
        <p>Dere har {listCommonWishMovies.length} film(er) felles i ønskelisten deres</p>
        <ul>
        {listCommonWishMovies}

        </ul>
        
    


        
    </>
)}
    </article>
    )
}



