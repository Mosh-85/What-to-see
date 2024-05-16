import { useEffect, useState } from "react";
import MovieCard from "./MovieCard"
import { fetchFavMovies, fetchFavWish } from "../../sanity/services.js/userServices";

export default function Mixmatch({userId, user2Id, userName, user2Name}) {



    const [favMovies, setFavMovies] = useState(null)
    const [favMovies2, setFavMovies2] = useState(null)
    const [wishMovies, setWishMovies] = useState(null)
    const [wishMovies2, setWishMovies2] = useState(null)

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



      const listMixMatch = wishMovies?.filter(movie1 =>
        favMovies2?.some(movie2 => movie2.title === movie1.title)
      ).sort((a, b) => a.title.localeCompare(b.title))
      .map((movies, index) => {
        return (
          <MovieCard movies={movies} index={index} key={index} />
        );
      });

      const listMixMatchrev = wishMovies2?.filter(movie1 =>
        favMovies?.some(movie2 => movie2.title === movie1.title)
      ).sort((a, b) => a.title.localeCompare(b.title))
      .map((movies, index) => {
        return (
          <MovieCard movies={movies} index={index} key={index} />
        );
      });
   
    return (
    <div>
      <article>
        <h3> Favorittene til {user2Name} og ønske filmene til {userName}: </h3>
        <ul className="article-card">{listMixMatch }</ul>
      </article>
      <article>
        <h3>Favorittene til {userName} og og ønske filmene til {user2Name}: </h3>
        <ul className="article-card">{listMixMatchrev }</ul> 
      </article>  
    </div>
    )
}