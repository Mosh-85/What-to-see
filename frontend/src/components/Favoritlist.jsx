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
 

    return (
    <>
    <h3>Deres favoritter!</h3>
    <p>Dere har -- x antall -- film(er) felles i favorittlisten deres</p>
    <MovieCard Movies={favMovies} />
    <MovieCard Movies2={favMovies2}/>
    </>
    )
}