import React from "react";
import { fetchFavMovies } from "../../sanity/services.js/userServices";
import MovieCard from "./MovieCard"
import { useState, useEffect } from "react"

export default function Favoritlist({userId, user2Id}) {

    const [favMovies, setFavMovies] = useState(null)
    const [favMovies2, setFavMovies2] = useState(null)

    useEffect(() => { 
        const fetchData = async () => {
        const data = await fetchFavMovies(userId)
        setFavMovies(data[0].favorittemovies);
       }
        fetchData();
       }, [userId]);


       useEffect(() => { 
        const fetchData = async () => {
        const data = await fetchFavMovies(user2Id)
        setFavMovies2(data[0].favorittemovies);
       }
        fetchData();
       }, [user2Id]);
 
       const listCommonFavMovies = favMovies?.filter(movie1 =>
        favMovies2?.some(movie2 => movie2.title === movie1.title)
      ).map((movies, index) => {
        return (
          <MovieCard movies={movies} index={index} key={index} />
        );
      });
    
    
       return (
        <section>
            {listCommonFavMovies && (
        <>
          
            <h3>Go Safe!</h3>
            <p>Dere har {listCommonFavMovies.length} film(er) felles i favorittlisten deres</p>
            
                <li>
                    {listCommonFavMovies}
                </li>
    
    
            
        </>
    )}
        </section>
        )

}