import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";

export default function GenresPage() {

    const { slug } = useParams();
    const [genre, setGenre] = useState(null);
  
    const getMoviesBySlug = async (slug) => {
      const data = await fetchGenreBySlug(slug);
      setGenre(data[0]);
    };
  
    useEffect(() => {
      getMoviesBySlug(slug);
    }, [slug]);

    return (
        <section>
            <h1>{slug}</h1>
        </section>


    );
}