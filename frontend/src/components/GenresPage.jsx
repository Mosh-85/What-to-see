import { useEffect, useState } from "react";
import { Link, useParams} from "react-router-dom";
import { fetchMoviesBySlug } from "../../sanity/services.js/genreServices";
import MovieCard from "./MovieCard";

export default function GenresPage() {

    const { slug } = useParams();
    const upperslug = slug.charAt(0).toUpperCase() + slug.slice(1);
    const [moviesByGenre, setMoviesByGenre] = useState(null);
  
    const getMoviesBySlug = async () => {
      const data = await fetchMoviesBySlug(upperslug);
      setMoviesByGenre(data);
    };
  
    useEffect(() => {
      getMoviesBySlug(slug);
    }, [slug]);


      const listMoviesByGenre = moviesByGenre?.map((movies, index) => {
        return (
         <MovieCard movies={movies} index={index} />
        )
      }) 


    return (
      <section>
        {listMoviesByGenre && (
          <>
            <h3>Sjanger: {upperslug} ({listMoviesByGenre.length} filmer) </h3>
            <ul> {listMoviesByGenre} </ul>
            
          </>
        )}
      </section>
    );
}