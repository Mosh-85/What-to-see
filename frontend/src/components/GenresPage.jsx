import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
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
      <main className="genres-one">
        <article>
        {listMoviesByGenre && (
          <>
            <h2>Sjanger: {upperslug} ({listMoviesByGenre.length} filmer)</h2>
            <ul>
              {listMoviesByGenre}
            </ul>
          </>
        )}
        </article>
      </main>
    );
}