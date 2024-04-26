import { useEffect, useState } from "react";
import { fetchAllMovies } from "../../sanity/services.js/moviesServices";
import { fetchUserMovies } from "../../sanity/services.js/userServices";

export default function Postpage() {

    const [movies, setMovies] = useState([]);
    const [userMovies, setUserMovies] = useState([]);



    const getAllMovies = async () => {
        const data = await fetchAllMovies();
        setMovies(data);
      };

    const getUserMovies = async () => {
        const data = await fetchUserMovies();
        setUserMovies(data);
        };

        useEffect(() => {
        getAllMovies();
        getUserMovies();
        }
        , []);


        console.log(userMovies)


    return (
        <section>
        <h1>Postpage</h1>
        <p>Det er {movies.length} filmer i Sanity</p>
        <ul>
            {userMovies.map((movie, i) => (
            <li key={i}>
                <h2>{movie.title}</h2>
                <p>IMDB: {movie.imdbid}</p>
            </li>
            ))} 
        </ul>

        </section>
    )   
    }